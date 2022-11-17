import React from 'react'
import styled from 'styled-components'
import {isMobile} from 'react-device-detect'

interface RefCardData{
  title: string
  description: string
  url: string | null
}

interface IProp{
  className? :string
  data: RefCardData
}

const _RefCard: React.FC<IProp> = ({className, data}) => {


  const goto = (event: React.MouseEvent<HTMLDivElement>) => {
    if(data.url){
      window.open(data.url, '_blank');
    }
    else{
      console.log("open about page")
    }

  }

  return (
    <div className={className} onClick={goto}>
      <div className="placeholder"/>
      <p className="title">{data.title}</p>
      <p className="description">{data.description}</p>

    </div>
  )
}

interface RefCardColorProp{
  color?: string
}

const RefCard = styled(_RefCard)<RefCardColorProp>`
position: relative;
width: ${isMobile ? '80vw' : '30vw'};
min-height: 100px;
background-color: ${isMobile ? '#ffffff' : '#F5F5F5' } ;
margin: 20px 0 20px 0;
${isMobile && "border: solid thin #ddd; opacity: 0.8;"}

border-radius: 16px;
transition: .3s ease-in-out;
cursor: pointer;

:hover{
  background-color: #FFFFFF;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.title{
  margin: 8px;
  font-size: 24px;
  color: ${isMobile ? '#000' : '#333'};
}

.description{
  margin: 8px;
  font-size: 16px;
  color: ${isMobile ? '#333' : '#666'};
}
.placeholder{
  position: absolute;
  top:0;
  left:0;
  width: ${isMobile ? '80vw' : '30vw'};
  min-height: 100px;
  object-fit: fill;
  border-radius: 16px;
  background-color: ${props => props.color ? props.color: '#f4f4f4'};
  -webkit-mask-image: linear-gradient(20deg, rgba(255,255,255,0) 80%, rgba(0,0,0,1) 20%);
  mask-image: linear-gradient(20deg, rgba(255,255,255,0) 80%, rgba(0,0,0,1) 20%);
  opacity: 0;
  transition: .5s ease-in-out;
  :hover{
    opacity: 1;
  }
}

`

export default RefCard
