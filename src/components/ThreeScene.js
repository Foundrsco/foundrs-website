import React, { Component } from 'react';
import * as THREE from 'three';
class ThreeScene extends Component {
  static defaultProps = {
    wireframe: false,
    color: 0x282828,
    backgroundColor: 0x080808
  }
  componentDidMount() {
    const {color, wireframe, backgroundColor} = this.props
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    //ADD SCENE
    this.scene = new THREE.Scene()
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      35,
      width / height,
      300,
      10000
    )

    let material 
    if(wireframe) {
      material = new THREE.MeshBasicMaterial({
        color: color,
        wireframe: true
      })
    } else {
      material = new THREE.MeshLambertMaterial({ 
        color: color, 
        emissive: 0x000000, 
        reflectivity: 1 
      })
    }

    this.ambientLight = new THREE.AmbientLight( 0xffffff, 0.2)
    this.scene.add( this.ambientLight )

    this.light = new THREE.PointLight( 0xffffff, 1)
    this.scene.add( this.light )

    this.secondLight = new THREE.PointLight( 0xffffff, 2)
    this.scene.add( this.secondLight )
    this.camera.position.z = 4
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor(backgroundColor)
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)
    //ADD CUBE
    
    this.tetras = []
    for(let i = 0; i < 100; i++) {
      let geometry = new THREE.TetrahedronGeometry( (( Math.random() * 0.5) + 0.5) * 60 )
      let tetra = new THREE.Mesh(geometry, material)
      tetra.position.z = -1000 + Math.random()*400
      tetra.position.x = (Math.random() - 0.5) * width
      tetra.position.y = (Math.random() - 0.5) * height
      tetra.rotation.x = Math.random() * 0.5
      tetra.rotation.x = Math.random() * 0.5
      tetra.rotation.y = Math.random() * 0.5
      tetra.rotation.z = Math.random() * 0.5
      tetra.xVel = (Math.random() - 0.5) * 0.02
      tetra.yVel = (Math.random() - 0.5) * 0.02
      tetra.zVel = (Math.random() - 0.5) * 0.02
      this.scene.add(tetra)
      this.tetras.push(tetra)
    }
    
    this.start()
  }
  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
  stop = () => {
    cancelAnimationFrame(this.frameId)
  }
  animate = () => {
    for(let i = 0; i < 100; i++) {
      this.tetras[i].rotation.x += this.tetras[i].xVel
      this.tetras[i].rotation.y += this.tetras[i].yVel
      this.tetras[i].rotation.z += this.tetras[i].zVel
    }
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }
  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }
  render(){
    return(
      <div
        style={{ width: '100%', height: '100vh' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}
export default ThreeScene