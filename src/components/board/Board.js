import React from "react";
import "./Board.css";

// TODO: set <td> width rather than table width (issues at small size)
// TODO: set font-size smaller with smaller screen, and width to 85vmin on table

function Board({ boardData }) {
  return (
    <table className="grid">
      <colgroup>
        <col className="column-label"></col>
      </colgroup>
      <thead>
        <tr>
          {boardData.labels.column.map((cell, colIdx) => (
            <th key={`0-${colIdx}`}>{cell ? cell : ""}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {boardData.board.map((row, rowIdx) => {
          return (
            <tr key={`row-${rowIdx}`}>
              <td>
                {Number.isInteger(boardData.labels.row[rowIdx])
                  ? boardData.labels.row[rowIdx]
                  : "\xa0"}
              </td>
              {row.map((cell, colIdx) => (
                // \xa0 is non-breaking space. This preserves row-height when no label is given for a row
                <td key={`${rowIdx}-${colIdx}`}>
                  {Number.isInteger(cell) ? cell : "\xa0"}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Board;
