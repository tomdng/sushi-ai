import React from 'react'
import styled, { AnyStyledComponent } from 'styled-components'

const NoticeText: AnyStyledComponent = styled.div`
  width: 60%;
  text-align: left;
  margin-top: 2rem;

  @media (max-width: 1000px) {
    width: 80vw;

    h2 {
      font-size: 20px;
    }
  }
`

interface MenuNoticeProps {
  lunch?: boolean
  dinner?: boolean
}

const MenuNotice: React.FC<MenuNoticeProps> = ({ lunch, dinner }) => {
  return (
    <NoticeText>
      <h2>Menu last updated: April 5th, 2022</h2>
      <p>
        We need some time to update prices on the website. Please let us know if
        we forget to update an item!
      </p>
      {lunch ? (
        <>
          <h2>
            The to-go option for all-you-can-eat lunch includes 2 rolls, 2 pcs
            sushi, and 1 appetizer.
          </h2>
          <h2>
            Lunch all you can eat is $15.99 for standard and with premium items
            at additional cost.
          </h2>
        </>
      ) : null}
      {dinner ? (
        <>
          <h2>
            The to-go option for all-you-can-eat lunch includes 3 rolls, 4 pcs
            sushi, and 1 appetizer.
          </h2>
          <h2>
            Dinner all you can eat is $23.99 for standard and is an additional
            +$4.98 for premium (additional) items.
          </h2>
        </>
      ) : null}
    </NoticeText>
  )
}

export { MenuNotice }
