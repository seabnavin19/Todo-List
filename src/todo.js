import axios from "axios";
const apibaseurl="http://localhost:3000/todos"
export default class Todo{
    getAll(){
        return axios.get(`${apibaseurl}`)
    }
    add(task){
        return axios.post(`${apibaseurl}`,task)
    }
    update(task){
        if(task.id){
            return axios.put(`${apibaseurl}/${task.id}`,task)
        }
    }
    Delete(id) {
        return axios.delete('http://localhost:3000/todos/'+id);
      }
}