import React from 'react'
import styled, { AnyStyledComponent } from 'styled-components'

import { Navbar } from '../navbar'
import { Footer } from '../footer'
import './normalize.css'
import './layout.css'

const StyledPage: AnyStyledComponent = styled.div`
  background-color: #2c271d;
  color: #fff;
  margin: 0;
  min-height: 100vh;
  overflow: hidden;
`

const StyledMain: AnyStyledComponent = styled.main``

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <StyledPage>
        <Navbar />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </StyledPage>
    </>
  )
}

export default Layout
