import React from 'react';
import styled from 'styled-components'

import Section from './components/Section'
import Header from './components/Header'

import Authenticate from './demo/Authenticate'
import SendTransaction from './demo/SendTransaction'

const Wrapper = styled.div`
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <Wrapper>
      <Section>
        <Header>NFT 領取範例</Header>
        <Authenticate />
        <SendTransaction />
      </Section>
    </Wrapper>
  );
}

export default App;
