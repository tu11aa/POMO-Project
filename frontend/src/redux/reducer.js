const initState = {
  filter: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Task 1", completed: false, priority: "High" },
    { id: 2, name: "Task 2", completed: false, priority: "Medium" },
    { id: 3, name: "Task 3", completed: false, priority: "Low" },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default rootReducer;
