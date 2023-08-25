import styled from "styled-components";

const HeaderPage = styled.header`
  width: 100%;
  height: 100px;
`

const HeaderTitle = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  letter-spacing: 1px;
  background-color: #000;
  color: #FFF;
`

const HeaderStore = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
`

const Header = () => {
  return (
    <HeaderPage>
      <HeaderTitle>
        Ganhe R$ 10,00 de desconto no frete
      </HeaderTitle>
      <HeaderStore>
        JordanShoes
      </HeaderStore>
    </HeaderPage>
  );
}

export default Header;