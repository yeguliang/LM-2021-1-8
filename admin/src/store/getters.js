//数据过滤
export default {
	doneTodos: state => {
        return state.todos.filter(todo => todo.done)
      }
}