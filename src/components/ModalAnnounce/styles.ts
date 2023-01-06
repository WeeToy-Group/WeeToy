import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  .announceTitle {
    font-family: "Seymour One", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;

    color: #000000;
  }

  .subTitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;

    color: #000000;
  }

  .nameMark {
    display: flex;
    gap: 44px;
    justify-content: space-around;
    margin-top: 30px;
  }

  select {
    width: 230px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    background-color: #fff;
    border-radius: 0.5rem;
    border: none;
    padding: 0.75rem 0.75rem;
    height: 48px;
    margin-bottom: 37px;
  }
  label {
    font-size: 1rem;
    font-weight: 500;
    color: #000;
    font-family: "Inter", sans-serif;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  .colDiv {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .categoryPrice {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .divColl {
    display: flex;
    gap: 44px;
    justify-content: space-around;
  }

  textarea {
    width: 475px;
    height: 170px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    background-color: #fff;
    border-radius: 0.5rem;
    border: none;
    padding: 0.75rem 0.75rem;
    resize: none;
  }

  button {
    background: #f4f4f4;
    border: 3px solid #fc4a1a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    height: 80px;
    width: 1045px;

    font-family: "Seymour One", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;

    color: #fc4a1a;
  }

  .nameCategoryPriceDiv {
    display: flex;
    flex-direction: column;
    gap: 27px;
  }
`;