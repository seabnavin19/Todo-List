<template>
<div>
    
    <form class="m-5" @submit.prevent="onsubmit">
  <div class="form-row align-items-center">
      <div class="col-2">
      <label class="sr-only" for="inlineFormInput" >Id</label>
      <input class="form-control" type="number" placeholder="Id" v-model="id">
    </div>
    <div class="col-6">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input class="form-control" type="text" placeholder="Enter A task" v-model="name">
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-success m-3">submit</button>
    </div>
  </div>
</form>  
</div>
</template>
<script>
import Todo from "../todo";
const todo=new Todo();
export default {
    name:"Edit",
    data(){
        return{
            id:0,
            name: "",
            completed:false,
            date:""
        };
    },
    methods:{
        onsubmit(){
            const task={
                id:this.id,
                name:this.name,
                completed:this.completed,
                date:this.date
            };
            todo.update(task).then(res=>{
                console.log(res.data)
                this.getNow()
                
            }).catch(err=>console.error(err))
        },
        getNow: function() {
                    const today = new Date();
                    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    const dateTime = date +' '+ time;
                    this.date = dateTime;
                }
    }
    
}
</script>