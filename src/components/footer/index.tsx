import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.footer`
  background-color: #393e41;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0;
`

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  @media (max-width: 700px) {
    max-width: 250px;
    text-align: center;
    margin: 10px 0;
  }
`

const BigText = styled.h1`
  font-size: 36px;
  font-weight: normal;
  margin: 0 0 0 0;

  @media (max-width: 700px) {
    font-size: 32px;
  }
`

const SmallText = styled.h1`
  font-size: 18px;
  font-weight: normal;
  margin: 0;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`

const CopyRight = styled.p`
  font-size: 16px;
  margin: 0 0 10px 0;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterSection>
      <TextSection>
        <TextBlock>
          <BigText>Come in</BigText>
          <SmallText>471 Lafayette Ctr, Manchester, MO 63011</SmallText>
        </TextBlock>
        <TextBlock>
          <BigText>Call</BigText>
          <SmallText>(636) 527-9990</SmallText>
        </TextBlock>
        <TextBlock>
          <BigText>Questions</BigText>
          <SmallText>sushiaimanchester@gmail.com</SmallText>
        </TextBlock>
      </TextSection>
      <CopyRight>Copyright Sushi Ai LLC. All rights reserved.</CopyRight>
    </FooterSection>
  )
}

export { Footer }
