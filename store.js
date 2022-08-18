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
            console.log(1, commit, todoItem);
            commit('ADD_TODO', todoItem)
            this.title = ''

        }
    },

    mutations: {
        ADD_TODO(state, todoItem) {
            state.todos.push(todoItem);
        }
    }
})