import React from 'react';
import Desktop from './Layout/Desktop'
import Mobile from './Layout/Mobile'
import styled from 'styled-components'
import {isMobile} from 'react-device-detect'

interface IProp {
  className? :string
}

const _App: React.FC<IProp> = ({className}) => {
  return (
    <div className={className}>
      {isMobile ? <Mobile /> : <Desktop/>}
    </div>
  );
}

const App = styled(_App)`
`

export default App;
