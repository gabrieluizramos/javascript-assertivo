import styled, { css } from 'styled-components';


const CAROUSEL_ITEM_WIDTH = 300;
const ITEMS_PER_VIEW = 4;
const SPACE_BETWEEN_CARDS = 15;
export const SCROLL_VALUE = CAROUSEL_ITEM_WIDTH * ITEMS_PER_VIEW + SPACE_BETWEEN_CARDS * ITEMS_PER_VIEW;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    width: calc(1200px + (${theme.spacing.default} * 3));
    max-width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    position: relative;

    & > button {
      position: absolute;
      z-index: 1;
      animation: clickableNavigation 2s infinite;

      &:first-child {
        left: -50px;
      }

      &:last-child {
        right: -50px;
      }

      @media (max-width: 1200px) {
        display: none;
      }
    }

    @keyframes clickableNavigation {
      0%, 100% {
        opacity: 0.70;
        transform: translateY(-5px);
      }
      50% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  `}
`;

export const Carousel = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    padding: ${theme.spacing.double} 0;
    overflow-x: scroll;
    scroll-behavior: smooth;
  `}
`;

export const Item = styled.li`
  ${({ theme }) => css`
    margin-right: ${theme.spacing.default};
  `}
`;
