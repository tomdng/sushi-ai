import React from 'react'
import styled from 'styled-components'

import { HomeBanner } from '../components/banner_home'
import { PageBlock } from '../components/page_block'
import Layout from '../components/layout'
import SEO from '../components/seo'
import img from '../assets/images/front_banner.jpg'

const HomePage = styled.main`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IndexPage = (): JSX.Element => {
  const generalInfo = [
    'We are a small restaurant in Manchester that serves delicious food ranging from a large variety of Sushi to other Japanese dishes like Udon.',
  ]

  const locationInfo = [
    '471 Lafayette Ctr',
    'Manchester, MO 63011',
    '(636) 527 - 9990',
  ]

  const hoursInfo = [
    'Mon - Thur | 11:00 - 9:30',
    'Fri - Sat | 11:00 - 10:30',
    'Sunday | 11:30 - 9:30',
  ]

  return (
    <Layout>
      <SEO title="Home" />
      <HomePage>
        <HomeBanner
          image={img}
          text="Delicious Japanese cuisine in Manchester"
        />
        <InfoSection>
          <PageBlock
            title="Welcome"
            info={generalInfo}
            imgSource="sushi_red.jpg"
            imgAltText="Picture of sushi"
            right
            otherColor={false}
          />
          <PageBlock
            title="Where we are"
            info={locationInfo}
            imgSource="entrance.jpg"
            imgAltText="Sushi Ai entrance"
            right={false}
            otherColor
          />
          <PageBlock
            title="When we're open"
            info={hoursInfo}
            imgSource="vase.jpg"
            imgAltText="Picture of vase"
            right
            otherColor={false}
          />
        </InfoSection>
      </HomePage>
    </Layout>
  )
}

export default IndexPage
