import React from 'react'
import styled from 'styled-components'

interface IProp{
  className? :string
  radius: number
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const _Button: React.FC<IProp> = ({className, onClick}) => {
  return (
    <div onClick={onClick} className={className}>
      <div className="inner-circle"></div>
      <div className="outer-circle"></div>
    </div>
  )
}

const Button = styled(_Button)`

display: flex;
--radius: 60px;
position: absolute;
top: calc(50% + ${props=>props.radius / 2}px + 30px);
left: auto;
width: 60px;
min-width: 60px;
height: 60px;
min-height: 60px;
transition: .3s ease-in-out;
z-index: 5;
:hover{
  transform: scale(1.2);
}

.inner-circle{
  position: absolute;
  top: calc(60px * 0.25);
  left: calc(60px * 0.25);
  width: calc(60px * 0.5);
  min-width: calc(60px * 0.5);
  height: calc(60px * 0.5);
  min-height: calc(60px * 0.5);
  border: solid thin #333;
  border-radius: calc(60px * 0.25);
}

.outer-circle{
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  min-width: 60px;
  height: 60px;
  min-height: 60px;
  border: solid thin #333;
  border-radius: calc(60px * 0.5);
}
`
export default Button;
