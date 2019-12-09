import shortid from "shortid";

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const initialState = {
  todos: [
    {
      id: shortid(),
      item: "Learn about reducers",
      completed: false
    },

    {
      id: shortid(),
      item: "Learn about redux",
      completed: false
    },

    {
      id: shortid(),
      item: "Learn about actions",
      completed: false
    }
  ]
};

export { initialState, reducer };
