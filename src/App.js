import React from 'react';
import styled from 'styled-components'

import Section from './components/Section'
import Header from './components/Header'

import Authenticate from './demo/Authenticate'
import ClaimNFT from './demo/ClaimNFT'
import ReturnNFT from './demo/ReturnNFT'

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
        <ClaimNFT />
        <ReturnNFT />
      </Section>
    </Wrapper>
  );
}

export default App;
