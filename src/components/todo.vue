<template>
  <div>
      <div class="col-lg-6">
          <input type="text" v-model="title">
          <button @click="addTodo(title)">Add new todo</button>
      </div>
      <div class="col-lg-6">
          <p>{{getAllTodos}}{{alltodos}}</p>
          <table>
              <thead>
                <tr>
                    <th>Title</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="(todo, index) in alltodos" :key="index">
                      <td>{{todo}}</td>
                  </tr>
              </tbody>
          </table>
      </div>
      
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';

export default {
    data(){
        return{
            title:'',
        }
    },
    computed:{
        ...mapGetters({
            getAllTodos:'allTodos' //getAllTodos= in this, allTodos= from store
        }),
        // getAllTodos(){
        //     return this.$store.getters.allTodos;
        // },
        ...mapState({
            alltodos: 'todos'
        })
    },
    methods: {
        // ...mapActions({
        //     addTodo: 'addnewTodo',
        // })
        addTodo(){
            this.$store.dispatch('addnewTodo', this.title);
            this.title= ''
        }
    }
}
</script>

<style>

</style>