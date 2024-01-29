/**
 * Main game class that contains three js scene and camera
 */

class Game {

    // constructor
    constructor(THREE, OrbitControls) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
        this.renderer = new THREE.WebGLRenderer();
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.camera.position.z = 10;
        this.controls.update();
        this.animate();
    }

    // animate
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    // add
    add(object) {
        this.scene.add(object);
    }

    // remove
    remove(object) {
        this.scene.remove(object);
    }

    // get
    get() {
        return this.scene;
    }

    // getCamera
    getCamera() {
        return this.camera;
    }

    // getRenderer
    getRenderer() {
        return this.renderer;
    }

    // getControls
    getControls() {
        return this.controls;
    }

    // render
    render() {
        this.renderer.render(this.scene, this.camera);
    }

    // update
    update() {
        this.controls.update();
    }

    // resize
    resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

}

// export
export default Game;