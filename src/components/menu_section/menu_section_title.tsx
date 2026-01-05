import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled, { AnyStyledComponent } from 'styled-components'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

interface StylePriceProps {
  price: string
}

const SectionTitleWrapper: AnyStyledComponent = styled.div<StylePriceProps>`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 0;
  justify-content: ${(props): string =>
    props.price === 'None' ? 'center' : 'space-between'};
  width: 100%;

  h1 {
    font-size: 48px;
    font-weight: normal;
    margin: 0;
  }

  p {
    font-size: 16px;
    margin: 0;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 36px;
    }

    p {
      max-width: 80vw;
    }
  }
`

const TitleWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 16px;
`

const TitleDescWrapper: AnyStyledComponent = styled.div<StylePriceProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props): string =>
    props.price === 'None' ? 'center' : 'flex-start'};

  @media (max-width: 700px) {
    width: 80vw;
    align-items: flex-start;
    text-align: left;
  }
`

interface TitleProps {
  title: string
  desc?: string
  extraPrice?: string
  isSectionOpen: boolean
  onClickHandler: () => void
}

const SectionTitle: React.FC<TitleProps> = ({
  title,
  desc,
  extraPrice,
  isSectionOpen,
  onClickHandler,
}) => {
  return (
    <SectionTitleWrapper id={title} onClick={onClickHandler}>
      <TitleDescWrapper>
        <TitleWrapper>
          <h1>{title}</h1>
          {isSectionOpen ? (
            <FontAwesomeIcon icon={faCaretDown} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faCaretUp} size="2x" />
          )}
        </TitleWrapper>
        {desc ? <p>{desc}</p> : null}
      </TitleDescWrapper>
      {extraPrice ? <h1>{extraPrice}</h1> : null}
    </SectionTitleWrapper>
  )
}

export { SectionTitle }
