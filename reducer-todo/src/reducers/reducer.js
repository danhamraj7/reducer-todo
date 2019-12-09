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

    case "TOGGLE_COMPLETED":
      return {
        ...state,

        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          }

          return todo;
        })
      };

    case "FILTER_COMPLETED":
      return {
        ...state,

        todos: [...state.todos].filter(todo => !todo.completed)
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
      item: "Learn about context",
      completed: false
    }
  ]
};

export { initialState, reducer };
