import styled from "styled-components";

import Jordan1 from "../img/air-jordan-1.png"
import Jordan2 from "../img/air-jordan-2.png"
import Jordan3 from "../img/air-jordan-3.png"
import Jordan4 from "../img/air-jordan-4.png"
import Jordan5 from "../img/air-jordan-5.png"
import Jordan6 from "../img/air-jordan-6.png"
import Jordan7 from "../img/air-jordan-7.png"
import Jordan8 from "../img/air-jordan-8.png"

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  margin-top: 0;
  text-align: center;
  font-size: 32px;
`

const Description = styled.p`
  margin: 14px 0 70px 0;
  text-align: center;
  font-size: 20px;
  color: #474747;
`

const JordanCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 10px;
`

const JordanImg = styled.img`
  width: 100%;
  height: 100%;
  padding: 10px;
  object-fit: cover;
  box-shadow: 0 0 6px #dbdbdb;
  background-color: #EBE9EA;
`

const Card = () => {
  return (
    <Content>
      <Title>
        Destaques
      </Title>
      <Description>
        Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. 
      </Description>

      <JordanCard>
        <JordanImg src={Jordan1} />
        <JordanImg src={Jordan2} />
        <JordanImg src={Jordan3} />
        <JordanImg src={Jordan4} />
        <JordanImg src={Jordan5} />
        <JordanImg src={Jordan6} />
        <JordanImg src={Jordan7} />
        <JordanImg src={Jordan8} />
      </JordanCard>
    </Content>
  );
}

export default Card;