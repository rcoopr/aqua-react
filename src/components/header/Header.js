import React from "react";
import Ocitcon, { MarkGithub } from "@primer/octicons-react";
import {
  Nav,
  Timer,
  // ControlsPrompt,
  GithubLink,
  ThemeSwitch,
  AppInfo,
  AppTitle
} from "./HeaderStyle";

const Header = ({ title }) => {
  return (
    <Nav>
      <AppTitle>Aquarium</AppTitle>
      <AppInfo>
        <Timer>00:00</Timer>
        {/* <ControlsPrompt>Controls</ControlsPrompt> */}
        <GithubLink>
          <a href="https://github.com/Froskk">
            <Ocitcon icon={MarkGithub} verticalAlign="middle" size="medium" />
          </a>
        </GithubLink>
        <ThemeSwitch>Switch</ThemeSwitch>
      </AppInfo>
    </Nav>
  );
};

export default Header;
