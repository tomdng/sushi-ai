import React from 'react'
import { Link } from 'gatsby'
import styled, { AnyStyledComponent } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { ButtonSmall } from '../button_small'

const MobileNavWrapper: AnyStyledComponent = styled.div`
  position: fixed;
  left: 0;
  top: 2rem;
  display: flex;
  justify-content: center;
  width: 100vw;
  position: fixed;
`

const MobileNav: AnyStyledComponent = styled.nav`
  box-shadow: 0 2px 20px #242424;
  border-radius: 10px;
  background-color: #2c271d;
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 90vw;
`

const MobileNavHeader: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100px;

  a {
    font-size: 36px;
    font-weight: normal;
  }
`

const CloseIcon: AnyStyledComponent = styled.div`
  height: 35px;
`

const MobileNavContent: AnyStyledComponent = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: calc(100% - 100px);

  a {
    font-size: 24px;
  }
`

const PageLink: AnyStyledComponent = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 30px;

  &:hover {
    color: #e6e6e6;
  }
`

interface NavScreenProps {
  open: boolean
  closeFunction: () => void
}

const MobileNavScreen: React.FC<NavScreenProps> = (props): JSX.Element => {
  const { open, closeFunction } = props

  return (
    <MobileNavWrapper>
      {open ? (
        <MobileNav>
          <MobileNavHeader>
            <PageLink to="/">Sushi Ai</PageLink>
            <CloseIcon>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={(): void => closeFunction()}
                size="2x"
              />
            </CloseIcon>
          </MobileNavHeader>
          <MobileNavContent>
            <PageLink to="/menu-select" onClick={(): void => closeFunction()}>
              MENU
            </PageLink>
            <PageLink to="/find-us" onClick={(): void => closeFunction()}>
              FIND US
            </PageLink>
            <PageLink to="/about" onClick={(): void => closeFunction()}>
              ABOUT
            </PageLink>
            <ButtonSmall
              text="ORDER ONLINE"
              fontSize="34"
              link="http://sushiai.restaurant888.com"
            />
          </MobileNavContent>
        </MobileNav>
      ) : null}
    </MobileNavWrapper>
  )
}

export { MobileNavScreen }
