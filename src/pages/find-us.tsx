import React from 'react'
import styled, { AnyStyledComponent } from 'styled-components'

import { Banner } from '../components/banner'
import Layout from '../components/layout'
import { Map } from '../components/map'
import SEO from '../components/seo'
import bannerImage from '../assets/images/find_us_banner.jpg'

const FindUs: AnyStyledComponent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const Content: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 80px 0 80px 0;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0 40px 0;
  }
`

const TextInfo: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    text-align: right;
  }

  @media (max-width: 700px) {
    h1 {
      text-align: center;
    }
  }
`

const Text = styled.h1`
  font-size: 24px;
  font-weight: normal;
  margin: 0 50px 0 0;

  @media (max-width: 700px) {
    margin: 0;
    text-align: center;
  }
`

const TextGroup = styled.div`
  @media (max-width: 700px) {
    margin: 20px 0;
    text-align: center;
  }
`

const Disclaimer = styled.h1`
  font-size: 24px;
  font-weight: normal;
  margin: 0 0 40px 0;
  text-align: center;

  @media (max-width: 700px) {
    text-align: center;
  }
`
const FindUsPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Find Us" />
      <FindUs>
        <Banner
          text="Find Us"
          image={bannerImage}
          height="500px"
          position="center top"
        />
        <Content>
          <TextInfo>
            <TextGroup>
              <Text>471 Lafayette Ctr</Text>
              <Text>Manchester, MO 63011</Text>
            </TextGroup>
            <TextGroup>
              <Text>Mon - Thur | 11:00 - 9:30</Text>
              <Text>Fri - Sat | 11:00 - 10:00</Text>
              <Text>Sunday | 11:30 - 9:30</Text>
            </TextGroup>
            <Text>(636) 527-9990</Text>
            <TextGroup>
              <Text>Questions and Concerns</Text>
              <Text>contact@sushiai.com</Text>
            </TextGroup>
          </TextInfo>
          <Map />
        </Content>
        <Disclaimer>
          Millitary and public service members get a discount!
        </Disclaimer>
      </FindUs>
    </Layout>
  )
}

export default FindUsPage
