import styled from 'styled-components'
import React, {useState, useEffect} from 'react'
import Clock from '../components/Clock'
import Title from '../components/Title'
import RefCard from '../components/RefCard'
import RefData from '../components/refs.json'

interface IProp{
  className? :string
}


const _Desktop: React.FC<IProp> = ({className}) => {

  const [degree, setDegree] = useState(0)
  const [radius, setRadius] = useState(0)
  const [initial, setInitial] = useState(true)

  useEffect(() => {
    if(initial){
      let deg = 0
      setInitial(false)
      setRadius(Math.min(window.innerWidth, window.innerHeight) * 0.3)
      setInterval(()=>{
        deg = (deg+10)%360
        setDegree(deg)
      }, 1000)
    }
  }, [setRadius, degree, initial])


  return(
    <div className={className}>
      <header></header>
      <div className="left">
        <Title radius={radius}>The Clock is Ticking</Title>
        <Clock radius={radius} degree={degree}/>
        <div className="footer">
        <a href="http://www.beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer">晋ICP备17009000</a>
        </div>
      </div>
      <div className="right">
        {RefData.map((data, i) => <RefCard data={data} key={i}/>)}
      </div>
    </div>
  )
}

const Desktop = styled(_Desktop)`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: flex-end;
  header{
    height: 40px;
    width: 40vw;
    background-color: #f5f5f5;
    position: fixed;
    top: 0;
    right: 0;
  }
  .footer{
    height: 40px;
    width: 60vw;
    margin: 0;
    position: absolute;
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
    flex: 3;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }

  .right{
    flex: 2;
    display: flex;
    height: calc(100vh - 40px);
    align-items: flex-start;
    flex-direction: column;
    overflow: auto;
  }
`

export default Desktop
