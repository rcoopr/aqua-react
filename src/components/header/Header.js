import React from "react";
import Ocitcon, { MarkGithub } from "@primer/octicons-react";
import ThemeSwitch from "../theme-switch/ThemeSwitch";
import Timer from "../timer/Timer";
import S from "./Header.styled";

const Header = () => {
  return (
    <S.Nav>
      <S.AppTitle>Aquarium</S.AppTitle>
      <S.AppInfo>
        <Timer hidden={false} />
        {/* <ControlsPrompt>Controls</ControlsPrompt> */}
        <S.GithubLink>
          <a href="https://github.com/Froskk">
            <Ocitcon icon={MarkGithub} verticalAlign="middle" size="medium" />
          </a>
        </S.GithubLink>
        <ThemeSwitch />
      </S.AppInfo>
    </S.Nav>
  );
};

export default Header;
