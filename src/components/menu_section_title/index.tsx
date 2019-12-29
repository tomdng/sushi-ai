import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

interface TitleProps {
  title: string;
  desc: string;
  price: string;
}

const SectionTitle: React.FC<TitleProps> = props => {
  const { title, desc, price } = props;

  const SectionTitleWrapper: AnyStyledComponent = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 0 0 0;
    justify-content: ${price === "None" ? "center" : "space-between"};
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
  `;

  const TitleDescWrapper: AnyStyledComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${price === "None" ? "center" : "flex-start"};

    @media (max-width: 700px) {
      width: 80vw;
      align-items: flex-start;
      text-align: left;
    }
  `;

  const SectionPrice: AnyStyledComponent = styled.h1`
    display: ${price === "None" ? "none" : "inherit"};
  `;

  return (
    <SectionTitleWrapper>
      <TitleDescWrapper>
        <h1>{title}</h1>
        <p>{desc}</p>
      </TitleDescWrapper>
      <SectionPrice>{price}</SectionPrice>
    </SectionTitleWrapper>
  );
};

export { SectionTitle };
