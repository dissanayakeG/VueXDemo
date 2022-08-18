import vue from 'vue';
import vueX from 'vuex'

vue.use(vueX)

export default new vueX.Store({
    state: {
        title: '',
        todos: [],
    },

    getters: {
        allTodos(state) {
            return state.todos
        }
    },

    actions: {
        addnewTodo({ commit }, todoItem) {
            return new Promise((resolve) => {
                commit('ADD_TODO', todoItem)
                resolve()
            })
        },

        deleteToto({ commit }, todoItem) {
            commit('DELETE_TODO', todoItem)
        }
    },

    mutations: {
        ADD_TODO(state, todoItem) {
            return state.todos.push(todoItem);
        },

        DELETE_TODO(state, todoItem) {
            let index = state.todos.indexOf(todoItem)
            // console.log(1,index, state.todos.indexOf(todoItem));
            state.todos.splice(index);
        }
    }
})