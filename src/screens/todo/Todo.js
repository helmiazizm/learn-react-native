import { useDispatch, useSelector } from "react-redux"
import { showError, showLoading } from "../../stores/app/AppAction";
import { addTodo } from "../../stores/todo/ToDoAction";
import { MandatoryError } from "../../utils/AppError";

export const Todo = (service) => {
    const dispatch = useDispatch();
    const {addTodoService} = service();
    const todos = useSelector(state => state.ToDoReducer.todo);
    const todoType = useSelector(state => state.ToDoReducer.type);

    const onSubmitTodo = async(todoName) => {
        try {
            dispatch(showLoading(true));
            if(!todoName) {
                throw new MandatoryError('Todo Name is required')
            }
            let todo = {
                title: todoName,
                complete: false
            }

            let todoId = await addTodoService(todo);
            console.log("TODO ID", todoId);
            dispatch(addTodo(
                {...todo, todoIndex: todoId.id}
            ))
        } catch (error) {
            dispatch(showError(error.message));
        } finally {
            dispatch(showLoading(false));
        }
    }

    const getVisibleTodos = () => {
        switch (todoType) {
            case 'All':
                return todos
            case 'Complete':
                return todos.filter((t) => t.complete)
            case 'Active':
                return todos.filter((t) => !t.complete)
        }
    }

    const onDismissError = () => dispatch(showError(''))

    return {
        onSubmitTodo,
        onDismissError,
        getVisibleTodos
    }
}