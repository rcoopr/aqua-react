import React from "react";
import S from "./ThemeSwitch.styled";

const ThemeSwitch = () => {
  return (
    <S.ThemeSwitch>
      <S.HiddenInput type="checkbox" id="dn" />
      <S.Label htmlFor="dn">
        <S.Icon />
      </S.Label>
    </S.ThemeSwitch>
  );
};

export default ThemeSwitch;
