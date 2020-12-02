<template>
    <form @submit.prevent="submit">
        <input type="text" placeholder="title" v-model="title">
        <button type="submit">Add todo</button>
    </form>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    data(){
        return{
            title:''
        }
    },
    methods:{
        ...mapMutations(['addTodo']),
        submit(){
            this.addTodo({
                id:Date.now(),
                title:this.title,
                completed:false
            })

            this.title = ''
        }
    }
}
</script>

<style scoped>

    form{
        display: flex;
        justify-content: space-around;
    }

    input{
        width: 60%;
    }

</style>