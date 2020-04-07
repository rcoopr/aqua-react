const { w, a } = { w: "WATER", a: "EMPTY" };

const data = {
  content: {
    1: {
      difficulty: "easy",
      labels: {
        top: [-1, 2, -1],
        left: [2, -1, 1]
      },
      regions: [
        ["a", "a", "b"],
        ["c", "c", "d"],
        ["e", "c", "d"]
      ],
      completed: [
        [w, w, a],
        [a, a, a],
        [a, w, a]
      ]
    },
    2: {
      difficulty: "easy",
      labels: {
        top: [4, 5, -1, 3, 2, -1],
        left: [-1, -1, -1, 4, 5, 3]
      },
      regions: [
        ["a", "a", "a", "b", "c", "c"],
        ["d", "a", "b", "b", "b", "c"],
        ["d", "d", "d", "b", "c", "c"],
        ["e", "d", "b", "b", "c", "c"],
        ["e", "e", "e", "b", "b", "c"],
        ["f", "f", "f", "b", "b", "b"]
      ],
      completed: [
        [w, w, w, a, a, a],
        [a, w, a, a, a, a],
        [w, w, w, a, a, a],
        [w, w, w, w, a, a],
        [w, w, w, w, w, a],
        [a, a, a, w, w, w]
      ]
    },
    3: {
      difficulty: "easy",
      labels: {
        top: [4, 4, 3, -1, -1, 3],
        left: [4, 1, 4, 4, 4, 1]
      },
      regions: [
        ["a", "a", "b", "c", "c", "d"],
        ["b", "b", "b", "e", "d", "d"],
        ["b", "e", "e", "e", "d", "d"],
        ["b", "e", "e", "f", "f", "d"],
        ["b", "b", "e", "f", "f", "d"],
        ["f", "f", "f", "f", "f", "d"]
      ],
      completed: [
        [w, w, a, w, w, a],
        [a, a, a, w, a, a],
        [w, w, w, w, a, a],
        [w, w, w, a, a, w],
        [w, w, w, a, a, w],
        [a, a, a, a, a, w]
      ]
    },
    4: {
      difficulty: "easy",
      size: "8x8",
      labels: {
        top: [3, 6, 5, 7, 1, 3, 3, 6],
        left: [3, 4, 5, 4, 4, 5, 6, 3]
      },
      regions: [
        ["a", "a", "b", "b", "b", "c", "d", "d"],
        ["a", "e", "e", "e", "c", "c", "c", "d"],
        ["a", "e", "f", "e", "g", "c", "d", "d"],
        ["a", "e", "e", "e", "h", "h", "h", "i"],
        ["a", "e", "e", "j", "h", "k", "k", "i"],
        ["l", "e", "m", "n", "h", "k", "i", "i"],
        ["l", "e", "m", "n", "h", "k", "k", "k"],
        ["o", "o", "p", "p", "h", "h", "h", "k"]
      ],
      completed: [
        [a, a, w, w, w, a, a, a],
        [a, w, w, w, a, a, a, w],
        [a, w, a, w, a, w, w, w],
        [w, w, w, w, a, a, a, a],
        [w, w, w, a, a, a, a, w],
        [a, w, a, w, a, w, w, w],
        [w, w, a, w, a, w, w, w],
        [a, a, w, w, a, a, a, w]
      ]
    },
    5: {
      difficulty: "hard",
      labels: {
        top: [6, 3, -1, 4, 3, 4, 3, 4],
        left: [-1, 4, 4, -1, 5, -1, 4, -1]
      },
      regions: [
        ["a", "b", "b", "b", "b", "c", "c", "d"],
        ["a", "e", "e", "e", "b", "d", "d", "d"],
        ["f", "f", "f", "e", "g", "g", "g", "h"],
        ["f", "e", "e", "e", "g", "i", "g", "h"],
        ["j", "e", "k", "k", "g", "i", "g", "h"],
        ["j", "e", "e", "e", "g", "i", "g", "l"],
        ["m", "n", "n", "o", "g", "g", "g", "l"],
        ["m", "m", "o", "o", "o", "p", "p", "p"]
      ],
      completed: [
        [w, a, a, a, a, a, a, a],
        [w, a, a, a, a, w, w, w],
        [w, w, w, a, a, a, a, w],
        [w, a, a, a, a, a, a, w],
        [w, a, w, w, a, w, a, w],
        [w, w, w, w, w, w, w, a],
        [a, a, a, w, w, w, w, a],
        [a, a, w, w, w, a, a, a]
      ]
    },
    6: {
      difficulty: "hard",
      size: "8x8",
      labels: {
        top: [2, 4, -1, 2, 4, -1, 2, 4],
        left: [2, 4, -1, 2, 4, -1, 2, 4]
      },
      regions: [
        ["a", "b", "c", "c", "d", "d", "e", "e"],
        ["a", "f", "f", "f", "g", "g", "g", "e"],
        ["a", "a", "a", "f", "h", "g", "h", "i"],
        ["j", "f", "f", "f", "h", "g", "h", "i"],
        ["j", "f", "k", "k", "h", "h", "h", "i"],
        ["l", "f", "f", "f", "m", "m", "h", "i"],
        ["l", "n", "o", "o", "m", "p", "h", "q"],
        ["n", "n", "n", "r", "s", "q", "q", "q"]
      ],
      completed: [
        [a, a, a, a, w, w, a, a],
        [a, a, a, a, w, w, w, w],
        [w, w, w, a, a, w, a, a],
        [a, a, a, a, a, w, a, w],
        [a, w, w, w, a, a, a, w],
        [a, w, w, w, a, a, a, w],
        [a, a, a, a, w, a, w, a],
        [w, w, w, a, w, a, a, a]
      ]
    }
  },
  meta: ""
};

export const boards = data.content;
export const meta = data.meta;
