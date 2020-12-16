console.log('Hola mundo');

const initialState = [{
    id: 1,
    todo: 'Comprar un PS4',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    switch (action?.type) {
        case 'ADD':
            return [...state, action.payload];
        default:
            return state;
    }
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar KH3',
    done: false
};

const addTodoAction = {
    type: 'ADD', // standar
    payload: newTodo // standar para argumentos
};

todos = todoReducer(todos, addTodoAction);




console.log(todos);