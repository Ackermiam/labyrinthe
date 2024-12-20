import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Object3D,
  DirectionalLight,
} from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { choseLevel } from "./settings/level.ts"
import Environment from "./models/environment.ts";
import Character from "./models/character.ts";

export class Engine {
  scene: Scene;
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  meshs: any[];
  ref: HTMLElement;
  pixelRatio: number;
  animationFrameId: number | null = null;
  mousePos: {
    x: number;
    y: number;
  };
  character: Character;
  environment: Environment;
  layer: any;

  constructor(ref: HTMLElement) {
    const { width, height } = ref.getBoundingClientRect();
    this.meshs = [];
    this.mousePos = { x: 0, y: 0 };
    this.ref = ref;
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(45, width / height);
    this.camera.position.set(0, 7, 8);
    this.camera.lookAt(0, -1.8, 4.5);
    this.layer = choseLevel();

    this.pixelRatio =
      width < 900
        ? Math.min(window.devicePixelRatio, 1.5)
        : window.devicePixelRatio;

    this.renderer = new WebGLRenderer({
      antialias: true,
      powerPreference: "low-power",
    });

    this.environment = new Environment(this);
    this.character = new Character(this);

    this.renderer.setClearColor(0, 0);
    this.renderer.setPixelRatio(this.pixelRatio);
    const resizeCanvas = window.devicePixelRatio > 1;
    this.renderer.setSize(width, height, resizeCanvas);
    //const controls = new OrbitControls( this.camera, this.renderer.domElement );
    //controls.update();

    const directionalLight = new DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1).normalize();
    //this.scene.add(directionalLight);

    ref.appendChild(this.renderer.domElement);
    this.meshs.push(this.environment, this.character);

    this.addChildren();
    this.setView();
    this.registerEventListeners();
    this.renderer.render(this.scene, this.camera);
    this.tick();
  }

  tick() {
    this.renderer.render(this.scene, this.camera);

    this.tickChildren();
    this.animationFrameId = requestAnimationFrame(() => {
      this.tick();
    });
  }

  startAnimation() {
    if (this.animationFrameId === null) {
      this.tick();
    }
  }

  stopAnimation() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  addChildren() {
    for (let i = 0; i < this.meshs.length; i++) {
      this.scene.add(this.meshs[i].mesh);
    }
  }

  tickChildren() {
    for (let i = 0; i < this.meshs.length; i++) {
      this.meshs[i].tick(this);
    }
  }

  setView() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  registerEventListeners() {
    window.onresize = () => {
      this.setView();
    };
    window.addEventListener("mousemove", (e) => {
      this.mousePos = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener("finishLevel", () => {
      this.stopAnimation();
    })
  }
}
