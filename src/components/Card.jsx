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
  gap: 25px 15px;
`

const JordanContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  transition: all .4s;
  
  :hover {
    opacity: .6;
  }
`

const Blur = styled.div`
  position: absolute;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all .3s;
  background-color: #000;

  ${JordanContent}:hover & {
    opacity: .6;
  }
`

const JordanImg = styled.img`
  padding: 14px;
  object-fit: cover;
  box-shadow: 0 0 6px #dbdbdb;
  background-color: #EBE9EA;
`

const JordanText = styled.h1`
  position: absolute;
  z-index: 7;
  bottom: 0;
  opacity: 0;
  text-align: center;
  font-size: 22px;
  letter-spacing: 1px;
  transition: all .4s;
  color: #FFF;

  ${JordanContent}:hover & {
    bottom: 40%;
    opacity: 1;
  }
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
        <JordanContent>
          <JordanImg src={Jordan1} />
          <JordanText>
            Mid Dutch Green
          </JordanText>
          <Blur />
        </JordanContent>
        <JordanContent>
          <JordanImg src={Jordan2} />
          <JordanText>
            Tropical Twist
          </JordanText>
          <Blur />
        </JordanContent>
        <JordanContent>
          <JordanImg src={Jordan3} />
          <JordanText>
            Retro Hight Court
          </JordanText>
          <Blur />
        </JordanContent>
        <JordanContent>
          <JordanImg src={Jordan4} />
          <JordanText>
            Mid Light Smoke
          </JordanText>
          <Blur />
        </JordanContent>
        <JordanContent>
          <JordanImg src={Jordan5} />
          <JordanText>
            Mid Black Noble
          </JordanText>
          <Blur />
        </JordanContent>
        <JordanContent>
          <JordanImg src={Jordan6} />
          <JordanText>
            Mid Bright Citrus
          </JordanText>
          <Blur />
        </JordanContent>
        <JordanContent>
          <JordanImg src={Jordan7} />
          <JordanText>
            Mid Grey Camo
          </JordanText>
          <Blur />
        </JordanContent>
        <JordanContent>
          <JordanImg src={Jordan8} />
          <JordanText>
            Mid Carbon Fiber
          </JordanText>
          <Blur />
        </JordanContent>
      </JordanCard>
    </Content>
  );
}

export default Card;