import React from 'react'
import styled, { AnyStyledComponent } from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Styled404Wrapper: AnyStyledComponent = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  p {
    max-width: 90vw;
    text-align: center;
  }
`

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <SEO title="404: Not found" />
    <Styled404Wrapper>
      <h1>404 Page not found</h1>
      <p>
        Looks like this page doesn&apos;t exist. Feel free to check out the rest
        of the website!
      </p>
    </Styled404Wrapper>
  </Layout>
)

export default NotFoundPage
