import styled from "styled-components";

import bannerImage from "../img/banner.jpeg";

const BannerContent = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`
const BanneImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
`

const BannerBlack = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0.6;
  background-color: #000;
`

const BannerTitle = styled.h1`
  position: absolute;
  z-index: 6;
  top: 80px;
  left: 80px;
  font-size: 2.6rem;
  letter-spacing: 1px;
  color: #FFF;
`

const BannerDescription = styled.p`
  position: absolute;
  z-index: 6;
  top: 150px;
  left: 80px;
  width: 600px;
  font-size: 1.2rem;
  letter-spacing: 2px;
  line-height: 32px;
  color: #F9F9F9;
`

const Banner = () => {
  return (
    <BannerContent>
      <BanneImg src={bannerImage} />
      <BannerBlack />
      <BannerTitle>
        A melhor loja de Jordan
      </BannerTitle>
      <BannerDescription>
        O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.
      </BannerDescription>
    </BannerContent>
  );
}

export default Banner;