<template>
<div>
  <Form class="col-md-12"/>
<div class="row">
  <div class="col-sm-12 col-md-12 col-lg-3 m-5" v-for="i in task" :key="i">
    <div class="form-group form-check">
  <button type="button" class="btn btn-success" v-if="i.completed==false" v-on:click="i.completed=true">Make as done</button> 
  <button type="button" class="btn btn-danger" v-else v-on:click="i.completed=false">Do again</button> 
  </div>
    <div class="card text-center " >
    <div class="card-header">
      Task:{{i.id+1}}
    </div>
    <div class="card-body">
      <h5 class="card-title">{{i.name}}</h5>
      <a href="/Edit" class="btn btn-primary mr-3">Edit</a>
      <button  class="btn btn-danger ml-3" v-on:click="delete(i.id)">Delete</button>
    </div>
    <div class="card-footer text-muted">
      {{i.date}}
    </div>
   </div>
  </div>
</div>
</div>
</template>

<script>
// @ is an alias to /src

import Todo from "../todo";
import Form from  "../components/Form";
const todo= new Todo();
export default {
  name: "Home",
  data(){
    return{
      task:[]
    };
  },
  components:{
    Form
  },
  methods:{
    delete(id){
      todo.Delete(id).then(()=>{
        this.task=this.task.slice(id,-1)
      }).catch(err=>console.error(err))
    }
  },
  created(){
    todo.getAll().then(res=>{
      this.task=res.data;
      console.log(this.task)
      
    }).catch(err=>console.error(err));
  }
};
</script>
