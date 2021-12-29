import React from 'react'
import styled, { AnyStyledComponent } from 'styled-components'

const StyledNoticeBar: AnyStyledComponent = styled.div`
  width: 100vw;
  padding: 1rem 2rem;
  background: #393e41;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 20px;
    text-align: center;
    margin: 1rem 0.5rem;
  }
`

const Notice = (): JSX.Element => (
  <StyledNoticeBar>
    <h1>HOLIDAY HOURS: We will be open for Christmas and New Years during regular hours!</h1>
  </StyledNoticeBar>
)

export { Notice }
