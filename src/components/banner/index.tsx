import React from 'react'
import styled, { AnyStyledComponent } from 'styled-components'

interface BannerStyleProps {
  image: string
  height: string
  position: string
}

const BannerBox: AnyStyledComponent = styled.div<BannerStyleProps>`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props): string => props.image});
  background-size: cover;
  background-position: ${(props): string => props.position};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props): string => props.height};
  width: 100%;
`

const BannerText: AnyStyledComponent = styled.h1`
  margin-top: 128px;
  font-size: 48px;
  font-weight: normal;
  max-width: 612px;
  text-align: center;

  @media (max-width: 700px) {
    margin-top: 250px;
    font-size: 36px;
    width: 250px;
  }
`

type BannerProps = {
  image: string
  text: string
  height: string
  position: string
}

const Banner: React.FC<BannerProps> = (props): JSX.Element => {
  const { image, text, height, position } = props

  return (
    <BannerBox image={image} height={height} position={position}>
      <BannerText>{text}</BannerText>
    </BannerBox>
  )
}

export { Banner }
