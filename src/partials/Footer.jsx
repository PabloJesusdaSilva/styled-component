import styled from "styled-components";

const FooterContent = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #000;
`

const FooterText = styled.p`
  letter-spacing: 1px;
  color: #FFF;
`

const Footer = () => {
  return (
    <FooterContent>
      <FooterText>
        Todos os direitos reservados.
      </FooterText>
    </FooterContent>
  );
}

export default Footer;