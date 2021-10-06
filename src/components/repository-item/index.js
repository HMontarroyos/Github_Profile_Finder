import React from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const RepositoryItem = ({
    name,
    linkToRepo,
    description,
    visibility,
    language,
}) => {
    return (
        <S.Wrapper>
            <S.WrapperHeader>
                <S.WrapperTitle
                    href={linkToRepo}
                    target="_blank"
                    rel="noreferrer"
                >
                    {name}
                </S.WrapperTitle>
                <S.WrapperVisibility>{visibility}</S.WrapperVisibility>
            </S.WrapperHeader>
            <S.WrapperDescription>{description}</S.WrapperDescription>
            <S.WrapperLanguage>{language}</S.WrapperLanguage>
        </S.Wrapper>
    );
};

export default RepositoryItem;
