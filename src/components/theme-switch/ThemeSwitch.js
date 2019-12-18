import React from "react";
import S from "./ThemeSwitch.styled";

const ThemeSwitch = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <S.ThemeSwitch>
      <S.HiddenInput
        type="checkbox"
        id="dn"
        onClick={() => {
          setIsDarkMode(!isDarkMode);
          localStorage.setItem("isDarkMode", !isDarkMode);
        }}
      />
      <S.Label htmlFor="dn">
        <S.Icon />
      </S.Label>
    </S.ThemeSwitch>
  );
};

export default ThemeSwitch;
