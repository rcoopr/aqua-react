import React from "react";
import "./App.css";
import Header from "../header/Header";
import { ReactComponent as AirIcon } from "../../assets/air.svg";
import { ReactComponent as WaterIcon } from "../../assets/water.svg";
import { ReactComponent as TrashIcon } from "../../assets/trash.svg";

const TOOLS = ["air", "water", "trash"];

const Board = () => {
  return <div>Board here.</div>;
};

const BoardControls = ({ tools }) => {
  let collection = [];
  tools.forEach(tool => {
    collection.push(<Picker name={tool} key={tool} size="32" />);
  });

  return collection;
};

// TODO: unnecessary enum, possibly useful when defining event handlers?
const Picker = ({ name, size }) => {
  return (
    <li className={name}>
      {
        {
          air: <AirIcon width={size} height={size} />,
          water: <WaterIcon width={size} height={size} />,
          trash: <TrashIcon width={size} height={size} />
        }[name]
      }
    </li>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <section className="board">
        <Board />
        <BoardControls tools={TOOLS} />
      </section>
    </div>
  );
};

export default App;
