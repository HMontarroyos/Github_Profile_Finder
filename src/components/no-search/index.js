import React from "react";
import * as S from "./styled";
import Animation from "../animation";

const NoSearch = ({ description }) => {
    return (
        <S.Wrapper>
            <Animation empty />
            <h1>{description}</h1>
        </S.Wrapper>
    );
};

export default NoSearch;
