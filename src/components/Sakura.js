import React, { Component } from 'react';
import '../styles/css/sakura.css';
import rocks from '../assets/rocks.png';
import bg from '../assets/bg.png';
import { Parallax } from 'react-parallax';

import NavBar from './NavBar';
import HeadBox from './HeadBox';

export default class LeafSceneComponent extends Component {
  // future sakura leaves code
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
    };

    this.viewportRef = React.createRef();
    this.worldRef = React.createRef();
    this.leaves = [];
    this.timer = 0;
    this.options = {
      numLeaves: 20,
      wind: {
        magnitude: 1.2,
        maxSpeed: 12,
        duration: 300,
        start: 0,
        speed: 0,
      },
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);

    for (let i = 0; i < this.options.numLeaves; i++) {
      const leaf = {
        el: document.createElement('div'),
        x: 0,
        y: 0,
        z: 0,
        rotation: {
          axis: 'X',
          value: 0,
          speed: 0,
          x: 0,
        },
        xSpeedVariation: 0,
        ySpeed: 0,
        path: {
          type: 1,
          start: 0,
        },
        image: 1,
      };
      this._resetLeaf(leaf);
      this.leaves.push(leaf);
      this.worldRef.current.appendChild(leaf.el);
    }

    this.worldRef.current.classList.add('leaf-scene');

    this.renderScene();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const { offsetWidth, offsetHeight } = this.viewportRef.current;
    this.setState({ width: offsetWidth, height: offsetHeight });
  };

  _resetLeaf = (leaf) => {
    leaf.x = this.state.width * 2 - Math.random() * this.state.width * 1.75;
    leaf.y = -10;
    leaf.z = Math.random() * 200;
    if (leaf.x > this.state.width) {
      leaf.x = this.state.width + 10;
      leaf.y = (Math.random() * this.state.height) / 2;
    }
    if (this.timer === 0) {
      leaf.y = Math.random() * this.state.height;
    }

    leaf.rotation.speed = Math.random() * 10;
    const randomAxis = Math.random();
    if (randomAxis > 0.5) {
      leaf.rotation.axis = 'X';
    } else if (randomAxis > 0.25) {
      leaf.rotation.axis = 'Y';
      leaf.rotation.x = Math.random() * 180 + 90;
    } else {
      leaf.rotation.axis = 'Z';
      leaf.rotation.x = Math.random() * 360 - 180;
      leaf.rotation.speed = Math.random() * 3;
    }

    leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
    leaf.ySpeed = Math.random() + 1.5;

    return leaf;
  };

  _updateLeaf = (leaf) => {
    const leafWindSpeed = this.options.wind.speed(
      this.timer - this.options.wind.start,
      leaf.y
    );

    const xSpeed = leafWindSpeed + leaf.xSpeedVariation;
    leaf.x -= xSpeed;
    leaf.y += leaf.ySpeed;
    leaf.rotation.value += leaf.rotation.speed;

    let t =
      'translateX( ' +
      leaf.x +
      'px ) translateY( ' +
      leaf.y +
      'px ) translateZ( ' +
      leaf.z +
      'px )  rotate' +
      leaf.rotation.axis +
      '( ' +
      leaf.rotation.value +
      'deg )';
    if (leaf.rotation.axis !== 'X') {
      t += ' rotateX(' + leaf.rotation.x + 'deg)';
    }
    leaf.el.style.webkitTransform = t;
    leaf.el.style.MozTransform = t;
    leaf.el.style.oTransform = t;
    leaf.el.style.transform = t;

    if (leaf.x < -10 || leaf.y > this.state.height + 10) {
      this._resetLeaf(leaf);
    }
  };

  _updateWind = () => {
    if (
      this.timer === 0 ||
      this.timer > this.options.wind.start + this.options.wind.duration
    ) {
      this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
      this.options.wind.duration =
        this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
      this.options.wind.start = this.timer;

      const screenHeight = this.state.height;

      this.options.wind.speed = (t, y) => {
        const a =
          ((this.options.wind.magnitude / 2) * (screenHeight - (2 * y) / 3)) /
          screenHeight;
        return (
          a *
            Math.sin(
              ((2 * Math.PI) / this.options.wind.duration) * t +
                (3 * Math.PI) / 2
            ) +
          a
        );
      };
    }
  };

  renderScene = () => {
    this._updateWind();
    for (let i = 0; i < this.leaves.length; i++) {
      this._updateLeaf(this.leaves[i]);
    }

    this.timer++;

    requestAnimationFrame(this.renderScene);
  };
  render() {
    return (
      <Parallax strength={200} bgImage={bg}>
        <div ref={this.viewportRef} className='relative falling-leaves'>
          <div ref={this.worldRef} style={{ perspective: '400px' }}></div>
          {/* <img className='bg' data-sleed='0.1' src={bg} alt='' /> */}
          <NavBar main={true} />
          <HeadBox />
          <img className='rocks' src={rocks} alt='' />
        </div>
      </Parallax>
    );
  }
}
