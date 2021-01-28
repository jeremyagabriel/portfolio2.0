/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import React, { Component } from 'react';
import Square from './Square';
import Messages from './Messages';
import Grass from '../../assets/images/grass.jpg';
import DogSmall from '../../assets/images/dog-s.jpg';
import DogSmallFound from '../../assets/images/dog-s-found.jpg';
import DogSmallGray from '../../assets/images/dog-s-gray.jpg';
import DogMed from '../../assets/images/dog-m.jpg';
import DogMedFound from '../../assets/images/dog-m-found.jpg';
import DogMedGray from '../../assets/images/dog-m-gray.jpg';
import DogLarge from '../../assets/images/dog-l.jpg';
import DogLargeFound from '../../assets/images/dog-l-found.jpg';
import DogLargeGray from '../../assets/images/dog-l-gray.jpg';
import Treat from '../../assets/images/treat.jpg';
import '../game/Battleship.css';

class Battleship extends Component{
  constructor(props) {
    super(props)
      this.state = {
        grid: Array(100).fill().map((v,i)=>i),
        squares: [],
        shipIndexes: [],
        outterIndsOnly: [],
        torpIndexes: [],
        torpCounter: 50,
        hitCounter: 18,
        hit: false,
        sunk: false,
        miss: false,
        done: false,
        twoV: [],
        twoVCounter: 2,
        twoVSunk: false,
        twoH: [],
        twoHCounter: 2,
        twoHSunk: false,
        threeV: [],
        threeVCounter: 3,
        threeVSunk: false,
        threeH: [],
        threeHCounter: 3,
        threeHSunk: false,
        fourV: [],
        fourVCounter: 4,
        fourVSunk: false,
        fourH: [],
        fourHCounter: 4,
        fourHSunk: false,
      }
      this.scrollToContact = React.createRef()
  }


  componentDidMount() {
    window.scrollTo(0, 0);
    // console.log("mainHeader? for Battleship:",this.props.mainHeader);
    let squares = Array(100).fill().map(value=>Grass);
    let { grid, shipIndexes, outterIndsOnly, twoH, twoV, threeH, threeV, fourH, fourV } = this.state;
    shipIndexes = [];
    outterIndsOnly = [];
    // console.log("shipIndexes at start of Mount:", shipIndexes);
    // console.log("outterIndsOnly at start of Mount:", outterIndsOnly);
    let noNoInds = [];
    let [twoHMount, twoVMount, threeHMount, threeVMount, fourHMount, fourVMount] = [1, 1, 1, 1, 1, 1];

    while (twoHMount > 0) {
      let random2H = Math.floor(Math.random() * 100)
      twoH = [...grid].splice(random2H, 2)
      if (!noNoInds.includes(twoH[0]) && !noNoInds.includes(twoH[1]) && twoH.length === 2 && Math.floor(twoH[0]/10) === Math.floor(twoH[1]/10)) {
        twoH.map(index=>shipIndexes.push(index))
        twoH.map(index=>noNoInds.push(index))

        if (twoH[0]<10) {
          if (twoH[0] % 10 === 0) {
            noNoInds.push(twoH[0]+10,twoH[1]+10,twoH[1]+1)
            outterIndsOnly.push(twoH[0]+10,twoH[1]+10,twoH[1]+1)
          } else if (twoH[1] % 10 === 9) {
            noNoInds.push(twoH[0]-1,twoH[0]+10,twoH[1]+10)
            outterIndsOnly.push(twoH[0]-1,twoH[0]+10,twoH[1]+10)
          } else {
            noNoInds.push(twoH[0]-1,twoH[0]+10,twoH[1]+10,twoH[1]+1)
            outterIndsOnly.push(twoH[0]-1,twoH[0]+10,twoH[1]+10,twoH[1]+1)
          }
        } else if (twoH[0]>=90) {
          if (twoH[0] % 10 === 0) {
            noNoInds.push(twoH[0]-10,twoH[1]-10,twoH[1]+1)
            outterIndsOnly.push(twoH[0]-10,twoH[1]-10,twoH[1]+1)
          } else if (twoH[1] % 10 === 9) {
            noNoInds.push(twoH[0]-1,twoH[0]-10,twoH[1]-10)
            outterIndsOnly.push(twoH[0]-1,twoH[0]-10,twoH[1]-10)
          } else {
            noNoInds.push(twoH[0]-1,twoH[0]-10,twoH[1]-10,twoH[1]+1)
            outterIndsOnly.push(twoH[0]-1,twoH[0]-10,twoH[1]-10,twoH[1]+1)
          }
        } else if (twoH[0] % 10 === 0) {
          noNoInds.push(twoH[0]-10,twoH[1]-10,twoH[0]+10,twoH[1]+10,twoH[1]+1)
          outterIndsOnly.push(twoH[0]-10,twoH[1]-10,twoH[0]+10,twoH[1]+10,twoH[1]+1)
        } else if (twoH[1] % 10 === 9) {
          noNoInds.push(twoH[0]-1,twoH[0]-10,twoH[1]-10,twoH[0]+10,twoH[1]+10)
          outterIndsOnly.push(twoH[0]-1,twoH[0]-10,twoH[1]-10,twoH[0]+10,twoH[1]+10)
        } else {
          noNoInds.push(twoH[0]-1,twoH[0]-10,twoH[1]-10,twoH[0]+10,twoH[1]+10, twoH[1]+1)
          outterIndsOnly.push(twoH[0]-1,twoH[0]-10,twoH[1]-10,twoH[0]+10,twoH[1]+10, twoH[1]+1)
        }
        twoHMount--
      }
    }

    while (twoVMount > 0) {
      let random2V = Math.floor(Math.random() * 100)
      twoV = [random2V, random2V+10]
      if (twoV[0] % 10 === twoV[1] % 10 && twoV[1] < 99 && !noNoInds.includes(twoV[0]) && !noNoInds.includes(twoV[1]) && twoV.length === 2) {
        twoV.map(index=>shipIndexes.push(index))
        twoV.map(index=>noNoInds.push(index))
        if (twoV[0] % 10 === 0) {
          if (twoV[0]<10) {
            noNoInds.push(twoV[0]+1,twoV[1]+1,twoV[1]+10)
            outterIndsOnly.push(twoV[0]+1,twoV[1]+1,twoV[1]+10)
          } else if (twoV[1]>=90) {
            noNoInds.push(twoV[0]-10,twoV[0]+1,twoV[1]+1)
            outterIndsOnly.push(twoV[0]-10,twoV[0]+1,twoV[1]+1)
          } else {
            noNoInds.push(twoV[0]-10,twoV[0]+1,twoV[1]+1,twoV[1]+10)
            outterIndsOnly.push(twoV[0]-10,twoV[0]+1,twoV[1]+1,twoV[1]+10)
          }
        } else if (twoV[0] % 10 === 9) {
          if (twoV[0]<10) {
            noNoInds.push(twoV[0]-1,twoV[1]-1,twoV[1]+10)
            outterIndsOnly.push(twoV[0]-1,twoV[1]-1,twoV[1]+10)
          } else if (twoV[1]>=90) {
            noNoInds.push(twoV[0]-10,twoV[0]-1,twoV[1]-1)
            outterIndsOnly.push(twoV[0]-10,twoV[0]-1,twoV[1]-1)
          } else {
            noNoInds.push(twoV[0]-10,twoV[0]-1,twoV[1]-1,twoV[1]+10)
            outterIndsOnly.push(twoV[0]-10,twoV[0]-1,twoV[1]-1,twoV[1]+10)
          }
        } else if (twoV[0]<10) {
          noNoInds.push(twoV[0]-1,twoV[0]+1,twoV[1]-1,twoV[1]+1,twoV[1]+10)
          outterIndsOnly.push(twoV[0]-1,twoV[0]+1,twoV[1]-1,twoV[1]+1,twoV[1]+10)
        } else if (twoV[1]>=90) {
          noNoInds.push(twoV[0]-10,twoV[0]-1,twoV[0]+1,twoV[1]-1,twoV[1]+1)
          outterIndsOnly.push(twoV[0]-10,twoV[0]-1,twoV[0]+1,twoV[1]-1,twoV[1]+1)
        } else {
          noNoInds.push(twoV[0]-10,twoV[0]-1,twoV[0]+1,twoV[1]-1,twoV[1]+1,twoV[1]+10)
          outterIndsOnly.push(twoV[0]-10,twoV[0]-1,twoV[0]+1,twoV[1]-1,twoV[1]+1,twoV[1]+10)
        }
        twoVMount--
      }
    }

    while (threeHMount > 0) {
      let random3H = Math.floor(Math.random() * 100)
      threeH = [...grid].splice(random3H, 3)
      if (threeH.length===3 && Math.floor(threeH[0]/10) === Math.floor(threeH[2]/10) && !noNoInds.includes(threeH[0]) && !noNoInds.includes(threeH[1]) && !noNoInds.includes(threeH[2])) {
        threeH.map(index=>shipIndexes.push(index))
        threeH.map(index=>noNoInds.push(index))
        if (threeH[0]<10) {
          if (threeH[0] % 10 === 0) {
            noNoInds.push(threeH[0]+10,threeH[1]+10,threeH[2]+10,threeH[2]+1)
            outterIndsOnly.push(threeH[0]+10,threeH[1]+10,threeH[2]+10,threeH[2]+1)
          } else if (threeH[3] % 10 === 9) {
            noNoInds.push(threeH[0]-1,threeH[0]+10,threeH[1]+10,threeH[2]+10)
            outterIndsOnly.push(threeH[0]-1,threeH[0]+10,threeH[1]+10,threeH[2]+10)
          } else {
            noNoInds.push(threeH[0]-1,threeH[0]+10,threeH[1]+10,threeH[2]+10,threeH[2]+1)
            outterIndsOnly.push(threeH[0]-1,threeH[0]+10,threeH[1]+10,threeH[2]+10,threeH[2]+1)
          }
        } else if (threeH[0]>=90) {
          if (threeH[0] % 10 === 0) {
            noNoInds.push(threeH[0]-10,threeH[1]-10,threeH[2]-10,threeH[2]+1)
            outterIndsOnly.push(threeH[0]-10,threeH[1]-10,threeH[2]-10,threeH[2]+1)
          } else if (threeH[3] % 10 === 9) {
            noNoInds.push(threeH[0]-1,threeH[0]-10,threeH[1]-10,threeH[2]-10)
            outterIndsOnly.push(threeH[0]-1,threeH[0]-10,threeH[1]-10,threeH[2]-10)
          } else {
            noNoInds.push(threeH[0]-1,threeH[0]-10,threeH[1]-10,threeH[2]-10,threeH[2]+1)
            outterIndsOnly.push(threeH[0]-1,threeH[0]-10,threeH[1]-10,threeH[2]-10,threeH[2]+1)
          }
        } else if (threeH[0] % 10 === 0) {
          noNoInds.push(threeH[0]-10,threeH[1]-10,threeH[2]-10,threeH[0]+10,threeH[1]+10,threeH[2]+10,threeH[2]+1)
          outterIndsOnly.push(threeH[0]-10,threeH[1]-10,threeH[2]-10,threeH[0]+10,threeH[1]+10,threeH[2]+10,threeH[2]+1)
        } else if (threeH[3] % 10 === 9) {
          noNoInds.push(threeH[0]-1,threeH[0]-10,threeH[1]-10,threeH[2]-10,threeH[0]+10,threeH[1]+10,threeH[2]+10)
          outterIndsOnly.push(threeH[0]-1,threeH[0]-10,threeH[1]-10,threeH[2]-10,threeH[0]+10,threeH[1]+10,threeH[2]+10)
        } else {
          noNoInds.push(threeH[0]-1,threeH[0]-10,threeH[1]-10,threeH[2]-10,threeH[0]+10,threeH[1]+10,threeH[2]+10,threeH[2]+1)
          outterIndsOnly.push(threeH[0]-1,threeH[0]-10,threeH[1]-10,threeH[2]-10,threeH[0]+10,threeH[1]+10,threeH[2]+10,threeH[2]+1)
        }
        threeHMount--
      }
    }

    while (threeVMount > 0) {
      let random3V = Math.floor(Math.random() * 100)
      threeV = [random3V, random3V+10, random3V+20]
      if (threeV[0] % 10 === threeV[2] % 10 && threeV[2]<99 && threeV.length === 3 && !noNoInds.includes(threeV[0]) && !noNoInds.includes(threeV[1]) && !noNoInds.includes(threeV[2])) {
        threeV.map(index=>shipIndexes.push(index))
        threeV.map(index=>noNoInds.push(index))
        if (threeV[0] % 10 === 0) {
          if (threeV[0]<10) {
            noNoInds.push(threeV[0]+1,threeV[1]+1,threeV[2]+1,threeV[2]+10)
            outterIndsOnly.push(threeV[0]+1,threeV[1]+1,threeV[2]+1,threeV[2]+10)
          } else if (threeV[2]>=90) {
            noNoInds.push(threeV[0]-10,threeV[0]+1,threeV[1]+1,threeV[2]+1)
            outterIndsOnly.push(threeV[0]-10,threeV[0]+1,threeV[1]+1,threeV[2]+1)
          } else {
            noNoInds.push(threeV[0]-10,threeV[0]+1,threeV[1]+1,threeV[2]+1,threeV[2]+10)
            outterIndsOnly.push(threeV[0]-10,threeV[0]+1,threeV[1]+1,threeV[2]+1,threeV[2]+10)
          }
        } else if (threeV[0] % 10 === 9) {
          if (threeV[0]<10) {
            noNoInds.push(threeV[0]-1,threeV[1]-1,threeV[2]-1,threeV[2]+10)
            outterIndsOnly.push(threeV[0]-1,threeV[1]-1,threeV[2]-1,threeV[2]+10)
          } else if (threeV[2]>=90) {
            noNoInds.push(threeV[0]-10,threeV[0]-1,threeV[1]-1,threeV[2]-1)
            outterIndsOnly.push(threeV[0]-10,threeV[0]-1,threeV[1]-1,threeV[2]-1)
          } else {
            noNoInds.push(threeV[0]-10,threeV[0]-1,threeV[1]-1,threeV[2]-1,threeV[2]+10)
            outterIndsOnly.push(threeV[0]-10,threeV[0]-1,threeV[1]-1,threeV[2]-1,threeV[2]+10)
          }
        } else if (threeV[0]<10) {
          noNoInds.push(threeV[0]-1,threeV[0]+1,threeV[1]-1,threeV[1]+1,threeV[2]-1,threeV[2]+1,threeV[2]+10)
          outterIndsOnly.push(threeV[0]-1,threeV[0]+1,threeV[1]-1,threeV[1]+1,threeV[2]-1,threeV[2]+1,threeV[2]+10)
        } else if (threeV[2]>=90) {
          noNoInds.push(threeV[0]-10,threeV[0]-1,threeV[0]+1,threeV[1]-1,threeV[1]+1,threeV[2]-1,threeV[2]+1)
          outterIndsOnly.push(threeV[0]-10,threeV[0]-1,threeV[0]+1,threeV[1]-1,threeV[1]+1,threeV[2]-1,threeV[2]+1)
        } else {
          noNoInds.push(threeV[0]-10,threeV[0]-1,threeV[0]+1,threeV[1]-1,threeV[1]+1,threeV[2]-1,threeV[2]+1,threeV[2]+10)
          outterIndsOnly.push(threeV[0]-10,threeV[0]-1,threeV[0]+1,threeV[1]-1,threeV[1]+1,threeV[2]-1,threeV[2]+1,threeV[2]+10)
        }
        threeVMount--
      }
    }

    while (fourHMount > 0) {
      let random4H = Math.floor(Math.random() * 100)
      fourH = [...grid].splice(random4H, 4)
      if (fourH.length===4 && Math.floor(fourH[0]/10) === Math.floor(fourH[3]/10) && !noNoInds.includes(fourH[0]) && !noNoInds.includes(fourH[1]) && !noNoInds.includes(fourH[2]) && !noNoInds.includes(fourH[3])) {
        fourH.map(index=>shipIndexes.push(index))
        fourH.map(index=>noNoInds.push(index))
        if (fourH[0]<10) {
          if (fourH[0] % 10 === 0) {
            noNoInds.push(fourH[0]+10,fourH[1]+10,fourH[2]+10,fourH[3]+10,fourH[3]+1)
            outterIndsOnly.push(fourH[0]+10,fourH[1]+10,fourH[2]+10,fourH[3]+10,fourH[3]+1)
          } else if (fourH[3] % 10 === 9) {
            noNoInds.push(fourH[0]-1,fourH[0]+10,fourH[1]+10,fourH[2]+10,fourH[3]+10)
            outterIndsOnly.push(fourH[0]-1,fourH[0]+10,fourH[1]+10,fourH[2]+10,fourH[3]+10)
          } else {
            noNoInds.push(fourH[0]-1,fourH[0]+10,fourH[1]+10,fourH[2]+10,fourH[3]+10,fourH[3]+1)
            outterIndsOnly.push(fourH[0]-1,fourH[0]+10,fourH[1]+10,fourH[2]+10,fourH[3]+10,fourH[3]+1)
          }
        } else if (fourH[0]>=90) {
          if (fourH[0] % 10 === 0) {
            noNoInds.push(fourH[0]-10,fourH[1]-10,fourH[2]-10,fourH[3]-10,fourH[3]+1)
            outterIndsOnly.push(fourH[0]-10,fourH[1]-10,fourH[2]-10,fourH[3]-10,fourH[3]+1)
          } else if (fourH[3] % 10 === 9) {
            noNoInds.push(fourH[0]-1,fourH[0]-10,fourH[1]-10,fourH[2]-10,fourH[3]-10)
            outterIndsOnly.push(fourH[0]-1,fourH[0]-10,fourH[1]-10,fourH[2]-10,fourH[3]-10)
          } else {
            noNoInds.push(fourH[0]-1,fourH[0]-10,fourH[1]-10,fourH[2]-10,fourH[3]-10,fourH[3]+1)
            outterIndsOnly.push(fourH[0]-1,fourH[0]-10,fourH[1]-10,fourH[2]-10,fourH[3]-10,fourH[3]+1)
          }
        } else if (fourH[0] % 10 === 0) {
          noNoInds.push(fourH[0]-10,fourH[1]-10,fourH[2]-10,fourH[3]-10,fourH[0]+10,fourH[1]+10,fourH[2]+10,fourH[3]+10,fourH[3]+1)
          outterIndsOnly.push(fourH[0]-10,fourH[1]-10,fourH[2]-10,fourH[3]-10,fourH[0]+10,fourH[1]+10,fourH[2]+10,fourH[3]+10,fourH[3]+1)
        } else if (fourH[3] % 10 === 9) {
          noNoInds.push(fourH[0]-1,fourH[0]-10,fourH[1]-10,fourH[2]-10,fourH[3]-10,fourH[0]+10,fourH[1]+10,fourH[2]+10,fourH[3]+10)
          outterIndsOnly.push(fourH[0]-1,fourH[0]-10,fourH[1]-10,fourH[2]-10,fourH[3]-10,fourH[0]+10,fourH[1]+10,fourH[2]+10,fourH[3]+10)
        } else {
          noNoInds.push(fourH[0]-1,fourH[0]-10,fourH[1]-10,fourH[2]-10,fourH[3]-10,fourH[0]+10,fourH[1]+10,fourH[2]+10,fourH[3]+10,fourH[3]+1)
          outterIndsOnly.push(fourH[0]-1,fourH[0]-10,fourH[1]-10,fourH[2]-10,fourH[3]-10,fourH[0]+10,fourH[1]+10,fourH[2]+10,fourH[3]+10,fourH[3]+1)
        }
        fourHMount--
      }
    }

    while (fourVMount > 0) {
      let random4V = Math.floor(Math.random() * 100)
      fourV = [random4V, random4V+10, random4V+20, random4V+30]
      if (fourV[0] % 10 === fourV[3] % 10 && fourV[3]<99 && !noNoInds.includes(fourV[0]) && !noNoInds.includes(fourV[1]) && !noNoInds.includes(fourV[2]) && !noNoInds.includes(fourV[3])) {
        fourV.map(index=>shipIndexes.push(index))
        fourV.map(index=>noNoInds.push(index))
        if (fourV[0] % 10 === 0) {
          if (fourV[0]<10) {
            noNoInds.push(fourV[0]+1,fourV[1]+1,fourV[2]+1,fourV[3]+1,fourV[3]+10)
            outterIndsOnly.push(fourV[0]+1,fourV[1]+1,fourV[2]+1,fourV[3]+1,fourV[3]+10)
          } else if (fourV[3]>=90) {
            noNoInds.push(fourV[0]-10,fourV[0]+1,fourV[1]+1,fourV[2]+1,fourV[3]+1)
            outterIndsOnly.push(fourV[0]-10,fourV[0]+1,fourV[1]+1,fourV[2]+1,fourV[3]+1)
          } else {
            noNoInds.push(fourV[0]-10,fourV[0]+1,fourV[1]+1,fourV[2]+1,fourV[3]+1,fourV[3]+10)
            outterIndsOnly.push(fourV[0]-10,fourV[0]+1,fourV[1]+1,fourV[2]+1,fourV[3]+1,fourV[3]+10)
          }
        } else if (fourV[0] % 10 === 9) {
          if (fourV[0]<10) {
            noNoInds.push(fourV[0]-1,fourV[1]-1,fourV[2]-1,fourV[3]-1,fourV[3]+10)
            outterIndsOnly.push(fourV[0]-1,fourV[1]-1,fourV[2]-1,fourV[3]-1,fourV[3]+10)
          } else if (fourV[3]>=90) {
            noNoInds.push(fourV[0]-10,fourV[0]-1,fourV[1]-1,fourV[2]-1,fourV[3]-1)
            outterIndsOnly.push(fourV[0]-10,fourV[0]-1,fourV[1]-1,fourV[2]-1,fourV[3]-1)
          } else {
            noNoInds.push(fourV[0]-10,fourV[0]-1,fourV[1]-1,fourV[2]-1,fourV[3]-1,fourV[3]+10)
            outterIndsOnly.push(fourV[0]-10,fourV[0]-1,fourV[1]-1,fourV[2]-1,fourV[3]-1,fourV[3]+10)
          }
        } else if (fourV[0]<10) {
          noNoInds.push(fourV[0]-1,fourV[0]+1,fourV[1]-1,fourV[1]+1,fourV[2]-1,fourV[2]+1,fourV[3]-1,fourV[3]+1,fourV[3]+10)
          outterIndsOnly.push(fourV[0]-1,fourV[0]+1,fourV[1]-1,fourV[1]+1,fourV[2]-1,fourV[2]+1,fourV[3]-1,fourV[3]+1,fourV[3]+10)
        } else if (fourV[3]>=90) {
          noNoInds.push(fourV[0]-10,fourV[0]-1,fourV[0]+1,fourV[1]-1,fourV[1]+1,fourV[2]-1,fourV[2]+1,fourV[3]-1,fourV[3]+1)
          outterIndsOnly.push(fourV[0]-10,fourV[0]-1,fourV[0]+1,fourV[1]-1,fourV[1]+1,fourV[2]-1,fourV[2]+1,fourV[3]-1,fourV[3]+1)
        } else {
          noNoInds.push(fourV[0]-10,fourV[0]-1,fourV[0]+1,fourV[1]-1,fourV[1]+1,fourV[2]-1,fourV[2]+1,fourV[3]-1,fourV[3]+1,fourV[3]+10)
          outterIndsOnly.push(fourV[0]-10,fourV[0]-1,fourV[0]+1,fourV[1]-1,fourV[1]+1,fourV[2]-1,fourV[2]+1,fourV[3]-1,fourV[3]+1,fourV[3]+10)
        }
        fourVMount--
      }
    }
    this.setState({ grid, twoH, twoV, threeH, threeV, fourH, fourV, shipIndexes, outterIndsOnly, squares})
    console.log("shipIndexes:",shipIndexes)
    console.log("outterIndsOnly:",outterIndsOnly)
    console.log(outterIndsOnly.some(i=>this.state.shipIndexes.includes(i)))
  }

  handleClick = (index) => {
    let { squares, shipIndexes, torpIndexes, torpCounter, hitCounter, hit, sunk, miss, done, twoV, twoVCounter, twoVSunk, twoH, twoHCounter, twoHSunk, threeV, threeVCounter, threeVSunk, threeH, threeHCounter, threeHSunk, fourV, fourVCounter, fourVSunk, fourH, fourHCounter, fourHSunk } = this.state
    // If the index is that of a ship, the index has not been clicked yet, AND the game is not done
    if (twoV.includes(index) && !torpIndexes.includes(index)) twoVCounter--
    else if (twoH.includes(index) && !torpIndexes.includes(index)) twoHCounter--
    else if (threeV.includes(index) && !torpIndexes.includes(index)) threeVCounter--
    else if (threeH.includes(index) && !torpIndexes.includes(index)) threeHCounter--
    else if (fourV.includes(index) && !torpIndexes.includes(index)) fourVCounter--
    else if (fourH.includes(index) && !torpIndexes.includes(index)) fourHCounter--

    if (shipIndexes.includes(index) && !torpIndexes.includes(index) && !done) {
      if (twoH.includes(index) || twoV.includes(index)) squares[index] = DogSmall
      else if (threeH.includes(index) || threeV.includes(index)) squares[index] = DogMed
      else if (fourH.includes(index) || fourV.includes(index)) squares[index] = DogLarge
      torpIndexes.push(index)
      hitCounter--
      torpCounter--
      hitCounter > 0 ? hit = true : hit = false
      sunk = false
      miss = false
    }
    // If the index has not been clicked yet and the game is not done
    else if (!torpIndexes.includes(index) && !done) {
      squares[index] = Treat
      torpIndexes.push(index)
      torpCounter--
      hit = false
      sunk = false
      miss = true
    }
    // Set state
    this.setState({ squares, shipIndexes, torpIndexes, torpCounter, hitCounter, hit, miss, twoV, twoVCounter, twoH, twoHCounter, threeV, threeVCounter, threeH, threeHCounter, fourV, fourVCounter, fourH, fourHCounter })
    // Change done state to true if win or lose
    if (twoVCounter===0 && !twoVSunk) {
      sunk = true
      twoVSunk = true
      twoV.map(index => squares[index] = DogSmallFound)
    } else if (twoHCounter===0 & !twoHSunk) {
      sunk = true
      twoHSunk = true
      twoH.map(index => squares[index] = DogSmallFound)
    } else if (threeVCounter===0 && !threeVSunk) {
      sunk = true
      threeVSunk = true
      threeV.map(index => squares[index] = DogMedFound)
    } else if (threeHCounter===0 && !threeHSunk) {
      sunk = true
      threeHSunk = true
      threeH.map(index => squares[index] = DogMedFound)
    } else if (fourVCounter===0 && !fourVSunk) {
      sunk = true
      fourVSunk = true
      fourV.map(index => squares[index] = DogLargeFound)
    } else if (fourHCounter===0 && !fourHSunk) {
      sunk = true
      fourHSunk = true
      fourH.map(index => squares[index] = DogLargeFound)
    }
    if (hitCounter === 0) {
      done = true
    }
    else if (torpCounter === 0 && hitCounter !== 0) {
      done = true
      twoH.map(index => squares[index] = DogSmallGray)
      twoV.map(index => squares[index] = DogSmallGray)
      threeH.map(index => squares[index] = DogMedGray)
      threeV.map(index => squares[index] = DogMedGray)
      fourH.map(index => squares[index] = DogLargeGray)
      fourV.map(index => squares[index] = DogLargeGray)
    }
    this.setState({sunk, done, twoVSunk, twoHSunk, threeVSunk, threeHSunk, fourVSunk, fourHSunk})
  }

  // Reset all state values back to original values, then call componentDidMount
  reset = () => {
    this.setState({
      grid: Array(100).fill().map((v,i)=>i),
      squares: [],
      shipIndexes: [],
      outterIndsOnly: [],
      torpIndexes: [],
      torpCounter: 50,
      hitCounter: 18,
      hit: false,
      sunk: false,
      miss: false,
      done: false,
      twoV: [],
      twoVCounter: 2,
      twoVSunk: false,
      twoH: [],
      twoHCounter: 2,
      twoHSunk: false,
      threeV: [],
      threeVCounter: 3,
      threeVSunk: false,
      threeH: [],
      threeHCounter: 3,
      threeHSunk: false,
      fourV: [],
      fourVCounter: 4,
      fourVSunk: false,
      fourH: [],
      fourHCounter: 4,
      fourHSunk: false,
    })
    console.log("shipIndexes before Mount:", this.state.shipIndexes)
    console.log("torpIndexes before Mount:", this.state.torpIndexes)
    console.log("hitCounter before Mount:", this.state.hitCounter)
    this.componentDidMount()
  }


  render(){
    let squares = this.state.squares.map((value, index) => {
      return(
        <Square
          value = { value }
          index = { index }
          key = { index }
          squares = { this.state.squares }
          handleClick = { this.handleClick }
        />
      )
    })
    return(
      <>
        <Box id="body">
          <Text
            variant='text.h2'
            sx={{ color: 'white' }}
          >
            Doggoship
          </Text>
          {/* <Box id="subTitleContainer">
            <p id="subTitle">Can you find all the dog families hiding in the grass?<br/> Use the treats to get their attention!</p>
            <label id="subTitleLabel">Hint: They're in lines of two's, three's and four's</label>
          </Box> */}
          <Box id="message">
            <Messages
              hitCounter = { this.state.hitCounter}
              torpCounter = { this.state.torpCounter }
              hit = { this.state.hit}
              miss = { this.state.miss }
              sunk = { this.state.sunk }
            />
          </Box>
          <Box id="board">
            { squares }
          </Box>
          {/*Footer Area*/}
          <Box id="battleshipFooter">
            <p id="stats">Treats Left: <span className={this.state.torpCounter < 11 ? "warningFont" : "regularFont"}>
            { this.state.torpCounter }
            </span><br/>
            Doggos Left To Find: <span id="hitCounter">{ this.state.hitCounter }</span></p>
            {/* <Link id="reset" onClick = { this.reset }><span>Restart</span></Link> */}
          </Box>
        </Box>
      </>
    )
  }
}
export default Battleship;