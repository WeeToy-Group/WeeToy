import styled from "styled-components"

export const CardMyProductStyle = styled.li`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 0.5rem;
    box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    background-color: #FFF;

    & > div:nth-child(1){
        display: flex;
        align-items: center;
        gap: 1rem;

        & > div:nth-child(1){
        width: 4.625rem;
        height: 4.625rem;
        background-color: #d8d8d8;

            img{
                max-width: 100%;
                max-height: 100%;
            }
        }

        & > div:nth-child(2){
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            span{
                font-size: 1rem;
                font-weight: 400;
                color: #000;
            }
        }
    }

    & > div:nth-child(2){
        display: flex;
        align-items: center;
        gap: 0.75rem;

        img{
            width: 1.25rem;
            height: 1.25rem;
            cursor: pointer;
        }
    }

    @media (min-width: 620px) {
        border-radius: 0.75rem;

        & > div:nth-child(1){
            gap: 4rem;

            & > div:nth-child(2){
                display: flex;
                flex-direction: row;
                gap: 10rem;
            }

        }
    }
`