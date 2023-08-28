import styled from "styled-components";

import Header from "./partials/Header";
import Banner from "./components/Banner";
import ShoeCard from "./components/Card"
import Footer from "./partials/Footer"

const JordanTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0 100px 0;
`

const App = () => {
  return (
    <>
      <Header />
      <Banner />

      <JordanTemplate>
        <ShoeCard />
      </JordanTemplate>

      <Footer />
    </>
  );
}

export default App;
