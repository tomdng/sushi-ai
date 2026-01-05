import React, { useState } from 'react'
import styled, { AnyStyledComponent } from 'styled-components'

import { CategoryType } from '../../shared-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

const TableWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 40px;
  width: 60%;

  @media (max-width: 1400px) {
    width: 80vw;
  }
`

const TitleWithExpandIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 16px;
`

const Title: AnyStyledComponent = styled.h1`
  font-size: 48px;
  font-weight: normal;
  margin-bottom: 8px;
`

const Desc: AnyStyledComponent = styled.p`
  font-size: 18px;
  font-weight: normal;
  margin: 0;
`

const Divider: AnyStyledComponent = styled.hr`
  width: 100%;

  @media (max-width: 700px) {
    width: 80vw;
  }
`

const SectionListWrapper: AnyStyledComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const SectionItem: AnyStyledComponent = styled.a`
  width: 22rem;
  margin: 1rem 1rem;
  padding: 1rem;
  color: #ffffff;
  background-color: #f36523;
  border-radius: 5px;
  font-size: 24px;
  font-weight: normal;
  text-decoration: none;

  @media (max-width: 1000px) {
    width: 15rem;
    margin: 0.75rem 0;
  }

  @media (max-width: 700px) {
    width: 70vw;
  }
`

interface TableProps {
  name: string
  categories: CategoryType[]
}

const MenuTableOfContents: React.FC<TableProps> = (props): JSX.Element => {
  const { name, categories } = props
  const [isContentsOpen, setIsContentsOpen] = useState(true)

  const sectionList = categories.map(category => {
    return (
      <SectionItem href={`#${category.name}`} key={category.name}>
        {category.name}
      </SectionItem>
    )
  })

  return (
    <TableWrapper id={name}>
      <div onClick={() => setIsContentsOpen(isContentOpen => !isContentOpen)}>
        <TitleWithExpandIcon>
          <Title>Contents</Title>
          {isContentsOpen ? (
            <FontAwesomeIcon icon={faCaretDown} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faCaretUp} size="2x" />
          )}
        </TitleWithExpandIcon>
        <Desc>Click to navigate to other sections</Desc>
      </div>
      <Divider />
      {isContentsOpen && <SectionListWrapper>{sectionList}</SectionListWrapper>}
    </TableWrapper>
  )
}

export { MenuTableOfContents }
