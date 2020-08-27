import React, { Component } from 'react';
import InputField from './components/inputField'

import NavBar from './components/navbar/navbar'
import './App.css'
class App extends Component {
  
  state = {

    value : '',
    todos : []
  }


componentDidMount(){

    this.setState({todos : JSON.parse(localStorage.getItem('todos'))})

}

  handleChange =(e)=>{
  
    this.setState({value : e.target.value,})
    
  }
  onSubmit= (e) =>{
    e.preventDefault()
    
    const value = this.state.value;
    const todos = this.state.todos;

    
    if(localStorage.getItem('todos') === null){
      let todos = []
      todos.push(value);
      localStorage.setItem('todos', JSON.stringify(todos))
  }else{   
      todos.push(value)
      localStorage.setItem('todos' , JSON.stringify(todos))
      
  }
    this.setState({
    todos : JSON.parse(localStorage.getItem('todos')),
    value: '',
});


  
  }
  handleDelete=(index)=>{
    var list = JSON.parse(localStorage.getItem('todos'))
    list.splice(index, 1)
    this.setState({ todos : list})
    localStorage.setItem('todos',JSON.stringify(list))
  }
 
  render() {
    const options = {
      timeZone:"Africa/Accra",
      hour12 : true,
      hour:  "2-digit",
      minute: "2-digit",
     second: "2-digit"
   };

new Date().toLocaleTimeString("en-US",options);
    
    const {todos, value} = this.state 
    const {handleChange, onSubmit, handleDelete} = this
    
    return ( 
      
      <div>
          <NavBar />
        
        <main className=" container mt-5">
          <InputField handlevalue={handleChange} onClick={onSubmit}myVal ={ value } required/>
          
          <div className="row"> 
                { todos === null || todos.length === 0 ?
              <div>
                 <h1 className="mt-4">You currently do not have any Task available</h1>
                 <h2 className="mt-4">Add a Task Now!!!</h2>
              </div> :
                  todos.map((todo, index) =>
                    <div className="todo col-md-3 m-4 " key={index}>
                         <p>{todo}</p>
                         <p>Date Created: { new Date().toLocaleDateString("en-US",options)}</p>
                         
                        <button className=" btn-todo-delete" onClick={()=>handleDelete(index) }>Delete</button>
                    </div>
                )}
               
            
          </div>
      </main>
    </div>
     );
  }
}
 
export default App;
