<template>
  <form class="m-5" v-on:submit.prevent="onsubmit">
  <div class="form-row align-items-center">
    <div class="col-6">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input class="form-control" type="text" placeholder="Enter A task" v-model="name">
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary" >Submit</button>
    </div>
  </div>
</form>  
</template>
<script>
import Todo from "../todo";
const todo=new Todo();
export default {
    name:"Form",
    data(){
        return{
            name: "",
            completed:false 
        };
    },
    methods:{
        onsubmit(){
            const task={
                name:this.name,
                completed:this.completed
            };
            todo.add(task).then(res=>{
                console.log(res.data)
                this.name=""
            }).catch(err=>console.error(err))
        }
    }
}
</script>