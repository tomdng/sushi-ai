import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { AnyStyledComponent } from 'styled-components'

import { MenuItem } from './menu_item'
import { SectionTitle } from './menu_section_title'

const Divider: AnyStyledComponent = styled.hr`
  margin: 10px 0 20px 0;
  width: 100%;

  @media (max-width: 700px) {
    max-width: 80vw;
    margin: 0.5rem 0 1rem 0;
  }
`

const ItemGroupWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const MenuSectionWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem 0;
  width: 60%;

  @media (max-width: 1400px) {
    width: 80vw;
  }
`

const BackToTop: AnyStyledComponent = styled.a`
  color: #ffffff;
  font-size: 18px;
  text-decoration: underline;
  margin-top: 1rem;

  @media (max-width: 700px) {
    margin-top: 0.5rem;
  }
`

interface DishType {
  name: string
  category: string
  description?: string
  price?: string
}

interface MenuSectionProps {
  sectionTitle: string
  sectionDesc?: string
  menuType: string
}

const MenuSection: React.FC<MenuSectionProps> = ({
  sectionTitle,
  sectionDesc,
  menuType,
}) => {
  const dishQuery = useStaticQuery(
    graphql`query allDishesQuery {
  regularData: allMenuXlsxDishes(sort: {order: ASC}) {
    nodes {
      name
      description
      price
      category
    }
  }
  lunchData: allMenuXlsxLunchAll(sort: {order: ASC}) {
    nodes {
      name
      description
      category
    }
  }
  dinnerData: allMenuXlsxDinnerAll(sort: {order: ASC}) {
    nodes {
      name
      description
      category
    }
  }
}`
  )

  // Default to dishes from the regular menu unless the menutype is a
  // lunch or dinner menu
  let selectedDishes = dishQuery.regularData

  if (menuType.toLowerCase().includes('lunch')) {
    selectedDishes = dishQuery.lunchData
  } else if (menuType.toLowerCase().includes('dinner')) {
    selectedDishes = dishQuery.dinnerData
  }

  // filter results to the proper category
  const dishes = selectedDishes.nodes.filter(
    (dish: DishType) => dish.category === sectionTitle
  )

  return (
    <MenuSectionWrapper>
      <SectionTitle title={sectionTitle} desc={sectionDesc} />
      <Divider />
      <ItemGroupWrapper>
        {dishes.map((dish: DishType) => {
          return (
            <div key={dish.name}>
              <MenuItem
                name={dish.name}
                price={dish.price}
                desc={dish.description}
              />
            </div>
          )
        })}
      </ItemGroupWrapper>
      <BackToTop href={`#${menuType}`}>Back to top</BackToTop>
    </MenuSectionWrapper>
  )
}

export { MenuSection }
