<template>
    <div class="content-wrapper">
        <div class="col-lg-6 mt-5 todo-input">
            <div class="input-group">
                <input type="text" class="form-control" v-model="title" />
                <button class="btn btn-small btn-success" @click="addTodo(title)">Add new todo</button>
            </div>
        </div>
        <div class="col-lg-6 mt-5">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(todo, index) in todoList" :key="index">
                        <td scope="col">{{ todo }}</td>
                        <td scope="col">
                            <button class="btn btn-small btn-danger" @click="deleteToto(todo)">X</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>{{ getAllTodos }}{{ todoList }}</p>
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
                // addTodo: "addnewTodo",
                deleteToto: "deleteToto",
            }),

            addTodo() {
                this.$store.dispatch("addnewTodo", this.title).then(res => {
                    console.log("res:", res);
                    this.title = "";
                });
            },
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
