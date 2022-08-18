<template>
    <div class="content-wrapper">
        <div class="col-lg-6 mt-5">
            <input type="text" v-model="title" />
            <button @click="addTodo(title)">Add new todo</button>
        </div>
        <div class="col-lg-6 mt-5">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(todo, index) in todoList" :key="index">
                        <td>{{ todo }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>{{ getAllTodos }}{{ alltodos }}</p>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from "vuex";

    export default {
        data() {
            return {
                title: "",
            };
        },
        computed: {
            ...mapGetters({
                getAllTodos: "allTodos", //getAllTodos= in this, allTodos= from store
            }),
            // getAllTodos(){
            //     return this.$store.getters.allTodos;
            // },
            ...mapState({
                todoList: "todos",
            }),
        },
        methods: {
            ...mapActions({
                addTodo: "addnewTodo",
            }),
            // addTodo(){
            //     this.$store.dispatch('addnewTodo', this.title);
            //     this.title= ''
            // }
        },
    };
</script>

<style>
    .content-wrapper {
        margin: 20px;
        border-radius: 15px;
        background-color: rgb(255, 255, 255);
        padding: 20px;
        overflow: scroll;
        min-height: 100%;
        width: 100%;
    }
</style>
