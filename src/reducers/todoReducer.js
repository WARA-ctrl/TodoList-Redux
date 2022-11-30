const initData = {
  list: [],
};
const todoReducer = (state = initData, action) => {
  switch (action.type) {
    case "ADDTODO":
      const { id, data } = action.payload;

      if (data) {
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: id,
              data: data,
            },
          ],
        };
      }
      break;

    case "DELETETODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};

export default todoReducer;
