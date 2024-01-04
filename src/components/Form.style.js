import styled from "styled-components";

export const Form = styled.div`
    width: 100%;

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

    label {
        color: #555;
        font-size: 12pt;
        display: flex;
        flex-direction: column;
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