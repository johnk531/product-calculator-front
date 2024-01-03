import styled from "styled-components";

export const Form = styled.div`
    width: 100%;

    div + div, button {
        margin-top: 15px;
    }

    input {
        width: 100%;
        max-width: 500px;
        margin-top: 5px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 12pt;
    }

    label {
        color: #555;
        font-size: 12pt;
    }
`;