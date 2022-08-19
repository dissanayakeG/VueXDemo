<template>
    <div class="wrapper">
        <div class="content">
            <Todo />
        </div>
    </div>
</template>

<script>
    import Todo from "./components/todo";

    export default {
        name: "App",
        components: {
            Todo,
        },
    };
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        height: auto;
        align-items: center;
    }

    .content {
        display: flex;
        flex-direction: row;
        min-height: 100vh;
        width: 60%;
        background-color: rgb(223, 217, 218);
    }
</style>
