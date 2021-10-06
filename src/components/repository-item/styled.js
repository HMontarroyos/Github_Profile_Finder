import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin: 16px 16px;
    width: 350px;
    height: 120px;
    align-content: center;
`;

export const WrapperHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const WrapperTitle = styled.a`
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0;
    color: #3182ce;
`;

export const WrapperVisibility = styled.p`
    font-size: 8px;
    border: 1px solid #ccc;
    color: #4f4f4f;
    width: 40px;
    height: 20px;
    text-align: center;
    border-radius: 50px;
    padding: 5px;
`;

export const WrapperDescription = styled.p`
    margin-top: 12px;
    font-size: 12px;
`;

export const WrapperLanguage = styled.p`
    margin-top: 5px;
    font-size: 8px;
`;
