import React from "react";
import Ocitcon, { MarkGithub } from "@primer/octicons-react";
import ThemeSwitch from "../theme-switch/ThemeSwitch";
import S from "./Header.styled";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <S.Nav>
      <S.AppTitle>Aquarium</S.AppTitle>
      <S.AppInfo>
        <S.Timer>00:00</S.Timer>
        {/* <ControlsPrompt>Controls</ControlsPrompt> */}
        <S.GithubLink>
          <a href="https://github.com/Froskk">
            <Ocitcon icon={MarkGithub} verticalAlign="middle" size="medium" />
          </a>
        </S.GithubLink>
        <ThemeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </S.AppInfo>
    </S.Nav>
  );
};

export default Header;
