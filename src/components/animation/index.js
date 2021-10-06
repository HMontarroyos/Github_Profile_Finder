import React from "react";
import Lottie from "react-lottie";
import * as S from "./styled";

import animationOctocat from "../../assets/github-logo-octocat-animated.json";
import animationEmpty from "../../assets/empty.json";

export default ({ octocat, empty }) => {
    const animationData = octocat
        ? animationOctocat
        : empty
        ? animationEmpty
        : null;

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
    };

    return (
        <S.WrapperAnimation>
            <Lottie options={defaultOptions} />
        </S.WrapperAnimation>
    );
};
