<template>
  <div id="app">
    <h1>Todo app with VUEX</h1>
    <hr>
    <AddTodo/>
    <hr>
    <h1>{{universalCount(filter)}}</h1>
    <select v-model="filter">
      <option value="1">All</option>
      <option value="2">Completed</option>
      <option value="3">Not completed</option>
    </select>
    <div class="outTodo" v-for="(todo,i) in universalTodos(filter)" :key="todo.id">
      <span :class="{compl : todo.completed}">
        <b>{{i + 1}}</b> {{todo.title}}
      </span>
      <input type="checkbox" @change="todo.completed = !todo.completed">
      <button class="del" @click="delEllem(i)">&times;</button>
    </div>
    <h1 v-if="universalCount(filter) == 0">No todos!</h1>
  </div>
</template>

<script>
import AddTodo from '@/components/AddTodo'
import {mapGetters , mapActions , mapMutations} from 'vuex'

export default {
  name: 'App',
  data(){
    return{
    filter:1,
    }
  },
  components:{AddTodo},
  computed:{
    ...mapGetters(['universalCount','universalTodos'])
  },
  methods:{
    ...mapActions(['fetchTodos']),
    ...mapMutations(['delEllem'])
  },
  mounted(){
    this.fetchTodos()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  margin-top: 2%;
  width: 40%;
}

.outTodo{
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  font-size: 1.2em;
  border:solid 1px #ccc;
  border-radius: 5px;
}

.compl{
  text-decoration: line-through;
}

.del{
  outline: none;
  font-size: 0.7em;
  border-radius: 5px;
}
</style>
