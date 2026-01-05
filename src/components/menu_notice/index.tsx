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
      <p>
        <i>Last updated: Jan 4, 2026</i>
      </p>
      {lunch ? (
        <>
          <h2>
            Lunch all you can eat is $15.99 for standard (or with premium items
            at additional cost).
          </h2>
          <h3>
            The lunch menu is only available Monday through Saturday 11:00 to
            3:00 PM!
          </h3>
          <h3>
            The to-go option for all-you-can-eat lunch includes 2 rolls, 2 pcs
            sushi, and 1 appetizer.
          </h3>
        </>
      ) : null}
      {dinner ? (
        <>
          <h2>
            The to-go option for all-you-can-eat lunch includes 3 rolls, 4 pcs
            sushi, and 1 appetizer.
          </h2>
          <h2>
            Dinner all you can eat is $24.98 for standard and is an additional
            +$4.98 for premium (additional) items.
          </h2>
        </>
      ) : null}
    </NoticeText>
  )
}

export { MenuNotice }
