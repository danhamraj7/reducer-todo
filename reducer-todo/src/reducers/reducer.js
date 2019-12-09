import shortid from "shortid";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,

        todos: [
          ...state.todos,

          {
            id: shortid(),

            item: action.payload.item,

            completed: false
          }
        ]
      };
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
