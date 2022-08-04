// 액션
const CREATE = "CREATE";
const REMOVE = "REMOVE";
const TOGGLE = "TOGGLE";

const initialState = {
  list: [
    {
      id: 1,
      title: "예시 제목",
      body: "예시 내용입니다.",
      isDone: false,
    },
    { id: 2, 
      title: "예시 제목", 
      body: "예시 내용입니다.", 
      isDone: true },
  ],
};

// 액션 생성기
export function createTodo(id, title, body) {
  return {
    type: CREATE,
    payload: {
      id,
      title,
      body,
      isDone: false,
    },
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE,
    payload: { id },
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE,
    payload: { id },
  };
}

// 리듀서
export default function reducer(state = initialState, {type, payload}) {
  switch (type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
            id: payload.id,
            title: payload.title,
            body: payload.body,
            isDone: false,
        }),
      };
      case REMOVE:
        return {
            ...state,
            list: state.list.filter((todo) => todo.id !== payload.id),
        };
        case TOGGLE:
            return{
                ...state,
                list: state.list.map((todo)=>
                ({...todo,
               isDone: todo.id === payload.id  ? !todo.isDone : todo.isDone}))};

    default:
      return state;
  }
}