import React from "react";
import styled from "styled-components";

import Footer from "./Footer/Index";

function App() {
  return (
    <Wrapper>
      <Content />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

export default App;
