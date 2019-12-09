import React from "react";
import {
  Nav,
  Timer,
  ControlsPrompt,
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
        <ControlsPrompt>Controls</ControlsPrompt>
        <GithubLink href="https://github.com/Froskk">Github</GithubLink>
        <ThemeSwitch>Switch</ThemeSwitch>
      </AppInfo>
    </Nav>
  );
};

export default Header;
