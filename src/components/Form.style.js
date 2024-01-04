import styled from "styled-components";

export const Form = styled.div`
    width: 100%;

    form {

        div {
            width: 100%;
            max-width: 500px;
        }

        div + div, button {
            margin-top: 15px;
        }

        input {
            font-size: 12pt;
            margin-top: 5px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        input:focus-visible{ outline: 1px solid #31afb4; }

        label {
            color: #555;
            font-size: 12pt;
            display: flex;
            flex-direction: column;
        }

    }

    &>div {
        margin-top: 20px;
        display: flex;
        justify-content: center;

        div {
            width: 100%;
            max-width: 500px;
            display: flex;
            justify-content: space-between;

            a {
                color: #31afb4;
                font-weight: 500;
                text-decoration: none;
            }
        }
    }

    @media (min-width: 550px) {
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;