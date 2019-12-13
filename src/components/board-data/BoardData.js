const boards = {
  content: [
    {
      id: 1,
      difficulty: "hard",
      labels: {
        row: [4, 4, -1, 5, -1, 4, -1, -1],
        column: [6, 3, -1, 4, 3, 4, 3, 4]
      },
      board: [
        ["a", "b", "b", "b", "b", "c", "c", "d"],
        ["a", "e", "e", "e", "b", "d", "d", "d"],
        ["f", "f", "f", "e", "g", "g", "g", "h"],
        ["f", "e", "e", "e", "g", "i", "g", "h"],
        ["j", "e", "k", "k", "g", "i", "g", "h"],
        ["j", "e", "e", "e", "g", "i", "g", "l"],
        ["m", "n", "n", "o", "g", "g", "g", "l"],
        ["m", "m", "o", "o", "o", "p", "p", "p"]
      ]
    },
    {
      id: 2,
      difficulty: "easy",
      size: "8x8",
      labels: {
        row: [3, 4, 5, 4, 4, 5, 6, 3],
        column: [3, 6, 5, 7, 1, 3, 3, 6]
      },
      board: [
        ["a", "a", "b", "b", "b", "c", "d", "d"],
        ["a", "e", "e", "e", "c", "c", "c", "d"],
        ["a", "e", "f", "e", "g", "c", "d", "d"],
        ["a", "e", "e", "e", "h", "h", "h", "i"],
        ["a", "e", "e", "j", "h", "k", "k", "i"],
        ["l", "e", "m", "n", "h", "k", "i", "i"],
        ["l", "e", "m", "n", "h", "k", "k", "k"],
        ["o", "o", "p", "p", "h", "h", "h", "k"]
      ]
    }
  ],
  meta: ""
};

export default boards;
