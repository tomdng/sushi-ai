import React from 'react'
import { graphql } from 'gatsby'
import styled, { AnyStyledComponent } from 'styled-components'

import { Banner } from '../components/banner'
import { MenuNotice } from '../components/menu_notice'
import { MenuSection } from '../components/menu_section'
import { MenuTableOfContents } from '../components/menu_table_contents'

import { CategoryType } from '../shared-types'
import Layout from '../components/layout'
import menuBanner from '../assets/images/menu_banner.jpg'
import SEO from '../components/seo'

const RegularMenuWrapper: AnyStyledComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Disclaimer: AnyStyledComponent = styled.h1`
  width: 60%;
  font-size: 18px;
  margin-bottom: 3rem;

  @media (max-width: 1000px) {
    width: 80vw;
  }
`

interface MenuQueryTypes {
  data: {
    lunchCategories: {
      nodes: CategoryType[]
    }
  }
}

const LunchMenuPage: React.FC<MenuQueryTypes> = ({ data }): JSX.Element => {
  const categories = data.lunchCategories.nodes

  return (
    <Layout>
      <SEO title="Sushi Ai Lunch All You Can Eat" />
      <RegularMenuWrapper>
        <Banner
          image={menuBanner}
          text="Lunch All You Can Eat"
          height="350px"
          position="center"
        />
        <MenuNotice lunch />
        <MenuTableOfContents
          name="Lunch All You Can Eat"
          categories={categories}
        />
        {categories.map((category: CategoryType) => (
          <MenuSection
            sectionTitle={category.name}
            sectionDesc={category.description}
            menuType="Lunch All You Can Eat"
            key={category.name}
          />
        ))}
        <Disclaimer>
          Consumer advisory: Consuming raw or undercooked meats, poultry,
          seafood shellfish, or eggs may increase your risk of foodborne
          illness, especially if you have a medical condition.
        </Disclaimer>
      </RegularMenuWrapper>
    </Layout>
  )
}

export const lunchMenuQuery = graphql`
  query lunchMenuQuery {
    lunchCategories: allMenuXlsxCategories(
      filter: { menu: { eq: "lunch" } }
      sort: { order: ASC, fields: order }
    ) {
      nodes {
        description
        name
      }
    }
  }
`

export default LunchMenuPage
