import {
  BoxGeometry,
  ShaderMaterial,
  Mesh,
  Box3,
  Vector3,
  PointLight,
} from "three";
import type { Engine } from "../engine";
import { layers } from "../data/layers/layers.ts"

export default class Character {
  mesh: Mesh;
  vecteur_mouvement: { x: number; y: number; z: number };
  speed: number;
  engine: Engine;
  boundingBox: Box3;
  light: PointLight;
  collideGround: boolean;

  constructor(engine: Engine) {
    this.collideGround = true;
    this.speed = 0.06;
    this.mesh = new Mesh();
    this.engine = engine;
    this.createCharacter();
    this.getEventMove();
    this.vecteur_mouvement = { x: 0, y: 0, z: 0 };
    this.boundingBox = new Box3();
    this.light = new PointLight(0xff00d4, 0.3, 4);
    this.mesh.add(this.light);

    this.tick();
  }

  tick() {
    if(this.collideGround) {
      this.moveCharacter();
      this.updateCameraPosition();
      this.updateBoundingBox();
      this.checkGroundCollision();
    } else {
      this.finishLevel();
    }
  }

  createCharacter() {
    const {x, z} = layers[this.engine.layer].characterPlacement;
    const box = new BoxGeometry(0.4, 0.4, 0.4);
    const material = new ShaderMaterial({
      transparent: true,
      uniforms: {
        emissiveColor: { value: new Vector3(9, 4, 1) },
        uInstanceCount: { value: 40 },
      },
      vertexShader: `
      void main() {
        vec4 mPosition = modelMatrix * vec4( position, 1.0);
        #ifdef USE_INSTANCING
        mPosition = modelMatrix * instanceMatrix * vec4(position, 1.0);
        #endif
        gl_Position = projectionMatrix * viewMatrix * mPosition;
        }
        `,
      fragmentShader: `
        uniform vec3 emissiveColor;

        void main() {
          gl_FragColor = vec4(emissiveColor, 1.);
          }
          `,
    });

    const mesh = new Mesh(box, material);
    mesh.userData.typeOfBlock = "character";
    this.mesh.add(mesh);
    this.mesh.position.set(x -11.5, -0.3, z -11.5);
  }

  getEventMove() {
    window.addEventListener("keydown", (event) => {
      const key = event.key.toLowerCase();

      if (key == "z") this.vecteur_mouvement.z = -1;
      if (key == "s") this.vecteur_mouvement.z = 1;
      if (key == "d") this.vecteur_mouvement.x = 1;
      if (key == "q") this.vecteur_mouvement.x = -1;
    });
    window.addEventListener("keyup", (event) => {
      const key = event.key.toLowerCase();

      if (key === "z" || key === "s") this.vecteur_mouvement.z = 0;
      if (key === "q" || key === "d") this.vecteur_mouvement.x = 0;
    });
  }

  moveCharacter() {
    const anticipatedPosition = this.mesh.position.clone();

    if (this.vecteur_mouvement.z !== 0) {
      anticipatedPosition.z += this.vecteur_mouvement.z * this.speed;
      if (!this.checkObstacleCollision(anticipatedPosition)) {
        this.mesh.position.z = anticipatedPosition.z;
      } else {
        this.correctPosition(anticipatedPosition, "z");
      }
    }

    if (this.vecteur_mouvement.x !== 0) {
      anticipatedPosition.x += this.vecteur_mouvement.x * this.speed;
      if (!this.checkObstacleCollision(anticipatedPosition)) {
        this.mesh.position.x = anticipatedPosition.x;
      } else {
        this.correctPosition(anticipatedPosition, "x");
      }
    }
  }

  checkObstacleCollision(position: Vector3): boolean {
    const characterBox = this.boundingBox.clone();
    characterBox.translate(position.clone().sub(this.mesh.position)); // Simule le déplacement

    for (const obstacleBox of this.engine.environment.boundingBoxes) {
      if (characterBox.intersectsBox(obstacleBox)) {
        return true;
      }
    }
    return false;
  }

  checkGroundCollision() {
    const characterBox = this.boundingBox;

    if (characterBox.intersectsBox(this.engine.environment.groundBoundingBox)) {
      this.collideGround = true;
    } else {
      this.collideGround = false;
    }
  }

  correctPosition(position: Vector3, axis: "x" | "z") {
    const characterBox = this.boundingBox.clone();
    characterBox.translate(position.clone().sub(this.mesh.position)); // Simule le déplacement

    for (const obstacleBox of this.engine.environment.boundingBoxes) {
      if (characterBox.intersectsBox(obstacleBox)) {
        if (axis === "z") {
          if (this.vecteur_mouvement.z > 0) {
            //avançant (z+)
            position.z =
              obstacleBox.min.z - characterBox.max.z + this.mesh.position.z;
          } else if (this.vecteur_mouvement.z < 0) {
            //reculant (z-)
            position.z =
              obstacleBox.max.z - characterBox.min.z + this.mesh.position.z;
          }
        } else if (axis === "x") {
          if (this.vecteur_mouvement.x > 0) {
            //droite (x+)
            position.x =
              obstacleBox.min.x - characterBox.max.x + this.mesh.position.x + 0.003;
          } else if (this.vecteur_mouvement.x < 0) {
            //gauche (x-)
            position.x =
              obstacleBox.max.x - characterBox.min.x + this.mesh.position.x - 0.003;
          }
        }
      }
    }

    if (axis === "z") {
      this.mesh.position.z = position.z;
    } else if (axis === "x") {
      this.mesh.position.x = position.x;
    }
  }

  updateCameraPosition() {
    this.engine.camera.position.x +=
      (this.mesh.position.x - this.engine.camera.position.x) * 0.04;
    this.engine.camera.position.z +=
      (this.mesh.position.z - this.engine.camera.position.z + 3) * 0.04;
  }

  updateBoundingBox() {
    this.boundingBox.setFromObject(this.mesh);
  }

  sendCompleteEndGameData() {
    return {
      setDeltaTime: '',
      setAllDeltaTimeGames: '',
      setAllPoints: '',
      setPersonalBest: '',
      setChosenCharacter: '',
      setBestFindedWay: '',
      chosenPseudo: '',
    }
  }

  finishLevel() {
    const event = new CustomEvent('finishLevel', {detail: 'finishLevel'}
    )

    window.dispatchEvent(event);
  }
}
