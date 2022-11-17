import React from 'react'
import styled from 'styled-components'
import {isMobile} from 'react-device-detect'

interface IProp{
  className? :string
  degree: number
  radius: number

}

const _Clock: React.FC<IProp> = ({className, degree}) => {
  return (
    <div className={className}>
      <div className="base"></div>
      <div className="overlay"></div>
      <div className="arrow"></div>
    </div>
  )
}

const Clock = styled(_Clock)`
filter: blur(0.5px) drop-shadow(4px 4px 4px rgba(0,0,0,0.3));
position: relative;
--radius: ${props => props.radius}px;
min-width: ${props => props.radius}px;
width: ${props => props.radius}px;
height: ${props => props.radius}px;
margin: 0;
padding: 0;
z-index: 10;
${isMobile && "position: absolute; z-index: -1; top: 30%; opacity: 0.8;"}
.base{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: calc(${props => props.radius}px / 2);
  z-index: 10;
}

.overlay{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: calc(${props => props.radius}px / 2);
  background-color: white;
  z-index: 12;
}

.arrow{
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(${props => props.radius}px * 0.4);
  height: 0;
  border: solid black 1px;
  z-index: 13;
  transform: rotate(-90deg) rotate(${props => props.degree}deg);
  transform-origin: 0% 0%;
}

`

export default Clock
