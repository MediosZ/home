import styled from 'styled-components'
import React, {useState, useEffect} from 'react'
import Clock from '../components/Clock'
import Title from '../components/Title'
import RefCard from '../components/RefCard'
import RefData from '../components/refs.json'

interface IProp{
  className?: string
}

const _Mobile:React.FC<IProp> = ({className}) => {

  const [degree, setDegree] = useState(0)
  const [radius, setRadius] = useState(0)
  const [initial, setInitial] = useState(true)

  useEffect(() => {
    if(initial){
      let deg = 0
      setInitial(false)
      setRadius(Math.min(window.innerWidth, window.innerHeight) * 0.8)
      setInterval(()=>{
        deg = (deg+10)%360
        setDegree(deg)
      }, 1000)
    }
  }, [setRadius, degree, initial])


  return(
    <div className={className}>
      <div className="left">
        <Title radius={radius}>The Clock</Title>
        <Title radius={radius}>Is Ticking</Title>
        <Clock radius={radius} degree={degree}/>
      </div>
      <div className="right">
        {RefData.map((data, i) => <RefCard data={data} key={i}/>)}
      </div>
      <div className="footer">
        <a href="http://www.beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer">晋ICP备17009000</a>
        </div>
    </div>
  )
}

const Mobile = styled(_Mobile)`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  .footer{
    height: 40px;
    width: 100vw;
    margin: 0;
    position: static;
    bottom: 0;
    font-size: 12px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    a{
      text-decoration: none;
      color: #ddd;
      transition: .3s ease-in-out;
      margin-bottom: 6px;
      :hover{
        color: #333;
      }
    }
  }
  .left{
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: column;
    height: auto;
    width: 100vw;
    align-items: center;
  }

  .right{
    display: flex;
    height: auto;
    width: 100vw;
    align-items: center;
    flex-direction: column;
  }
`


export default Mobile
