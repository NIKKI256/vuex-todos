export default{
    actions:{
        async fetchTodos(ctx){
            var res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
            var todos = await res.json()

            ctx.commit('updateTodos',todos)
        }
    },
    mutations:{
        updateTodos(state,todos){
            state.todos = todos
        },
        addTodo(state,newTodo){
            state.todos.unshift(newTodo)
        },
        delEllem(state,index){
            state.todos.splice(index,1)
        }
    },
    state:{
        todos:[]
    },
    getters:{
        allTodos(state){
            return state.todos.filter(t => {return t.id && t.title})
        },
        completedTodos(state){
            return state.todos.filter(t => {return t.id && t.title && t.completed})
        },
        notCompletedTodos(state){
            return state.todos.filter(t => {return t.id && t.title && t.completed == false})
        },
        universalTodos: (state,getters) => value =>{
            if(value == 1){
                return getters.allTodos
            }
            else if (value == 2){
                return getters.completedTodos
            }
            else if (value == 3){
                return getters.notCompletedTodos
            }
        },
        universalCount: (state,getters) => value =>{
            if(value == 1){
                return getters.allTodos.length
            }
            else if (value == 2){
                return getters.completedTodos.length
            }
            else if (value == 3){
                return getters.notCompletedTodos.length
            }
        },
    }
}