import styled from 'styled-components'
import {isMobile} from 'react-device-detect'


interface TitleProp{
  radius: number
}

const Title = styled.p<TitleProp>`
    position: ${isMobile ? 'static' : 'absolute'};
    ${props=> !isMobile && `top: calc(50% - ${props.radius / 2}px - 100px)`};
    height: 60px;
    min-width: 325px;
    margin: 0;
    font-style: normal;
    font-weight: normal;
    font-size: ${isMobile ? 48 : 48}px;
    line-height: 60px;
    text-align: center;
    color: #333333;
`
export default Title
