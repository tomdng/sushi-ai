import React from 'react'
import styled, { AnyStyledComponent } from 'styled-components'

import { ButtonSmall } from '../components/button_small'
import Layout from '../components/layout'
import SEO from '../components/seo'

const StyledOldMenuWrapper: AnyStyledComponent = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    max-width: 90vw;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  p {
    max-width: 90vw;
    margin-bottom: 2rem;
    text-align: center;
  }
`

const OldMenuPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="404: Not found"
        meta={[{ name: 'robots', content: 'noindex' }]}
      />
      <StyledOldMenuWrapper>
        <h1>Looks like your on our old menu page.</h1>
        <p>Click the button below to get to the new menu!</p>
        <ButtonSmall fontSize="8px" text="Menu" link="/menu-select" />
      </StyledOldMenuWrapper>
    </Layout>
  )
}

export default OldMenuPage
