import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 15px 10px;
  background-color: var(--color-grey-0);

  .divHeader {
    margin: 0 auto;
    gap: 40px;
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .divLinksCart {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .linksHeader {
    display: flex;
    align-items: center;
    gap: 60px;
    position: relative;
  }

  & .input-search {
    width: 30%;
    position: relative;
    display: flex;
    align-items: center;
    z-index: 5;
    & > button {
      position: relative;
      background-color: transparent;
      z-index: 10;
    }
    & > input {
      height: 40px;
      padding: 5px;
      border-radius: 8px;
      border: none;
      color: #000;
      outline: none;
      position: absolute;
      left: -185px;

      @media (max-width: 710px) {
        bottom: -40px;
        left: -100px;
      }
    }

    & > .hide-input {
      display: none;
      transition: 1s;
    }
    & > .show-input {
      display: block;
      transition: 1s;
    }
  }

  .lupa img {
    width: 30px;
    height: 26px;
    object-fit: contain;
  }

  input::placeholder {
    padding: 5px;
    font-size: var(--size-2);
  }

  .linksHeaderMobile {
    display: none;
  }

  .optionsUser {
    position: absolute;
    top: 30px;
    right: -35px;
    z-index: 1;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--color-grey-0);
    height: 80px;
    padding: 10px;
    border-radius: 12px;
    visibility: visible;
    box-shadow: 0 6px 18px -6px;
  }

  .divUser {
    cursor: pointer;
  }

  .divUser:hover .optionsUser {
    display: flex;
  }

  .cart {
    width: 50px;
  }

  .menu {
    width: 30px;
  }

  button {
    border: transparent;
    background-color: var(--color-grey-0);
  }

  .buttonMenu {
    display: none;
  }

  span {
    font-size: 18px;
    cursor: pointer;
  }

  span:hover {
    color: var(--color-primary);
  }

  .linkUser {
    font-size: 18px;
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .linkUser:hover {
    color: var(--color-primary);
  }

  .logout:hover {
    color: var(--color-secundary);
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(18, 18, 20, 0.5);
    width: 100%;
    height: 100%;
  }

  .modal-content {
    background: white;
    width: 634px;
    position: absolute;
    top: 90px;
    left: 25%;
    border-radius: 4px;
    padding: 14px;
  }

  @media (max-width: 620px) {
    .buttonMenu {
      display: block;
    }

    .linksHeader {
      display: none;
    }

    .linksHeaderMobile {
      width: 100%;
      padding-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }

    .optionsUser {
      right: 0;
      top: 40px;
    }

    & .input-search {
      width: fit-content;

      & > input {
        width: 200px;
        padding-left: 35px;
        left: 0;
        bottom: -2px;

        @media (max-width: 520px) {
          bottom: -40px;
        }
      }
    }
  }
`;
