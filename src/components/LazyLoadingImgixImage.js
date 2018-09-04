import React from 'react'
import ReactDOM from 'react-dom'
import isMatch from 'lodash.ismatch'
import ImgixClient from 'imgix-core-js'

export default class LazyLoadingImgixImage extends React.Component {

  state = {
    images: {},
    imageDisplay: 'low',
    filename: null,
    hasViewed: false,
    fullyLoaded: false
  }

  static defaultProps = {
    paused: false
  }

  constructor(props) {
    super(props)
    this.container = React.createRef()
    this.state = this.setupImageSizes(props)
  }

  setupClientAndFilename(imageUrl) {
    let imgixClient
    let filename
    imgixClient = new ImgixClient({
      host: `${this.props.imgixSubdomain}.imgix.net`
    })

    filename = imageUrl
    return {filename, imgixClient}
  }

  setupImageSizes(props) {
    const {imgixOptions, path, width, height} = props
    const {hasViewed} = this.state
    if((width === this.state.width)) {
      return
    }
    const {imgixClient, filename} = this.setupClientAndFilename(path)
    let imgixOptionsLow = Object.assign({}, imgixOptions)
    imgixOptionsLow['w'] = 32
    imgixOptionsLow['h'] = Math.round(32*(imgixOptions.w/imgixOptions.h))

    let imgixOptionsHigh = Object.assign({}, imgixOptions)
    imgixOptionsHigh['dpr'] = (typeof(window) === 'undefined') ? 1 : window.devicePixelRatio

    return({
      images: {
        low: imgixClient.buildURL(filename, imgixOptionsLow),
        med: imgixClient.buildURL(filename, imgixOptions),
        high: imgixClient.buildURL(filename, imgixOptionsHigh)
      },
      imageDisplay: 'low',
      hasViewed: hasViewed,
      filename: filename,
      width: width,
      fullyLoaded: false
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.setupImageSizes(nextProps))
  }

  initObserver = () => {
    this.node = ReactDOM.findDOMNode(this);
    
    if (!this.node) {
        return;
    }

    if (!('IntersectionObserver' in window)) {
        this.setState({
            hasViewed: true,
        });

        return;
    }

    const callback = (entries) => {
      entries.forEach(entry => {
        const hasViewed = this.state.hasViewed || entry.isIntersecting;
          if(!this.state.hasViewed) {
              this.setState({
                  hasViewed,
              })
          }
      })
    }
    const options = {
      threshold: 0,
    }
    
    this.observer = new IntersectionObserver(callback, options);
    this.observer.observe(this.node);
  }

  componentDidMount () {
    this.initObserver()
  }

  componentWillUnmount() {
    if(this.observer) {
      this.observer.unobserve(this.node);
      this.observer = null;
    }
  }

  handleMediumImageLoaded = () => {
    this.setState({imageDisplay: 'med'})
  }

  handleMediumImageErrored = () => {

  }

  handleHighImageLoaded = () => {
    this.setState({imageDisplay: 'high'})
    setTimeout(this.handleFullyLoaded, 200)
  }

  handleHighImageErrored = () => {

  }

  handleFullyLoaded = () => {
    console.log("set fully loaded")
    this.setState({fullyLoaded: true})
  }

  render () {
    const {images, imageDisplay, fullyLoaded } = this.state
    const {width, height, alt, backgroundColor, renderImageServerSide} = this.props
    const bg = backgroundColor ? backgroundColor : '#eee'
    const heightStyle = this.container.current ? `${this.container.current.clientWidth*(height/width)}px` : `auto`
    const styles = {width: `100%` }

    return(
      <div ref={this.container} className="lli-container" style={{backgroundColor: bg, height: heightStyle}}>
        {(renderImageServerSide || this.state.hasViewed) && 
          <div className={`${fullyLoaded ? '' : 'absolute pin'} lli-image lli-image-${imageDisplay}`} style={styles}>
            {(imageDisplay === 'high') && <img 
              className={`${fullyLoaded ? '' : 'absolute pin z-20'} w-full h-full`} 
              src={images.high} 
              width={width} height={height} alt={alt} />
            }
            { !fullyLoaded && ((imageDisplay === 'med') || (imageDisplay === 'high')) && <img 
              className={`${fullyLoaded ? '' : 'absolute pin z-10'} w-full h-full`} 
              src={images.med} 
              width={width} height={height} alt={alt} />
            }
            { !fullyLoaded && <img 
                className={`${fullyLoaded ? '' : 'absolute pin z-1'} w-full h-full`} 
                src={images.low} 
                width={width} height={height} alt={alt} />
            }
          </div>
        }
        {this.state.hasViewed && !this.props.paused &&
          <div style={{display: 'none'}}>
            <img
              src={this.state.images.med}
              onLoad={this.handleMediumImageLoaded}
              onError={this.handleMediumImageErrored}              
            />
            {(imageDisplay === 'med') && 
              <img
                src={this.state.images.high}
                onLoad={this.handleHighImageLoaded}
                onError={this.handleHighImageErrored}              
              />
            }
          </div>
        }

        <style jsx>{`
          .w-full {
            width: 100%;
          }

          .h-full {
            height: 100%;
          }

          .absolute {
            position: absolute;
          }
          
          .lli-image {
            transition: all 0.3s ease-in-out;      
            transform: scale(1);
          }

          .lli-container {
            overflow: hidden;
            position: relative;
            z-index: 1;
          }

          .lli-image-low {
            opacity: 0.7;
            filter: blur(8px);
            transform: scale(1.02);
          }

          .lli-image-med {
            opacity: 1;
            filter: blur(0px);
            transform: scale(1);
          }

          .lli-image-high {
            opacity: 1;
            filter: blur(0px);
            transform: scale(1);
          }

          .container {
          }
        `}</style>
      </div>
    )
  }
}