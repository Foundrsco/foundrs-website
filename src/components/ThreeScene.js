import React, { Component } from 'react'
import * as THREE from 'three'
import posed from 'react-pose'

const Fading = posed.div({
  hidden: {
    transition: { duration: 500 },
    opacity: 0,
    scale: 1,
    ease: 'circOut'
  },
  visible: {
    transition: { duration: 500 },
    opacity: 1,
    scale: 1,
    ease: 'circIn'
  }
})


class ThreeScene extends Component {
  static defaultProps = {
    wireframe: false,
    color: 0x282828,
    backgroundColor: 0x080808,
    opacity: 1
  }
  state = {
    pose: 'hidden'
  }
  componentDidMount() {
    const {color, wireframe, backgroundColor, opacity} = this.props
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    const baseScale = this.mount.clientWidth * (60.0 / 1600.0)
    this.mountWidth = width
    this.mountHeight = height
    this.scene = new THREE.Scene()
    
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
        wireframe: true,
        opacity: opacity,
        transparent: (opacity !== 1)
      })
    } else {
      material = new THREE.MeshLambertMaterial({ 
        color: color, 
        emissive: 0x000000, 
        reflectivity: 1,
        opacity: opacity,
        transparent: (opacity !== 1)
      })
    }

    this.ambientLight = new THREE.AmbientLight( 0xffffff, 0.2)
    this.scene.add( this.ambientLight )

    this.light = new THREE.PointLight( 0xffffff, 1)
    this.scene.add( this.light )

    this.secondLight = new THREE.PointLight( 0xffffff, 2)
    this.secondLight.position.x = 1000
    this.scene.add( this.secondLight )

    this.thirdLight = new THREE.PointLight( 0xffffff, 2)
    this.thirdLight.position.x = -1000
    this.scene.add( this.thirdLight )

    this.camera.position.z = 4
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor(backgroundColor)
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)
    
    this.tetras = []
    for(let i = 0; i < 100; i++) {
      let geometry = new THREE.TetrahedronGeometry( (( Math.random() * 0.5) + 0.5) * baseScale )
      let tetra = new THREE.Mesh(geometry, material)
      tetra.position.z = -1000 + Math.random()*400
      tetra.position.x = (Math.random() - 0.5) * (500 + (width / 2))
      tetra.position.y = (Math.random() - 0.5) * (500 + (height / 2))
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
      this.setState({pose: 'visible'})
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
    if(this.props.position && this.props.position.y) {
      this.camera.position.z = 4 + (this.props.position.y / this.mountHeight)
    }
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }
  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }
  render(){
    const {pose} = this.state
    return(
      <Fading pose={pose} style={{ width: '100%', height: '100%', lineHeight:'0px' }}>
        <div
          style={{ width: '100%', height: '100%', lineHeight:'0px' }}
          ref={(mount) => { this.mount = mount }}
        />
      </Fading>
    )
  }
}
export default ThreeScene