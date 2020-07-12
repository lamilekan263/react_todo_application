import React, { Component } from 'react';
import InputField from './components/inputField'

import NavBar from './components/navbar/navbar'
import './App.css'
class App extends Component {
  
  state = {

    value : '',
    todos : JSON.parse(localStorage.getItem('todos'))
  }


// componentDidMount(){
//   const todos = this.state.todos
//   if(todos.length === 0){
//     this.setState({todos : []})
//   }else{
//     this.setState({todos : JSON.parse(localStorage.getItem('todos'))})
//   }
  
// }

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
      // todos = JSON.parse(localStorage.getItem('todos'))
      todos.push(value)
      localStorage.setItem('todos' , JSON.stringify(todos))
      
  }
  this.setState({
      myTodos : JSON.parse(localStorage.getItem('todos')),
      value: '',
      e : ''
  })
  
  }
  handleDelete=(index)=>{
    
    // const todos = this.state.todos;
    var list = JSON.parse(localStorage.getItem('todos'))
    list.splice(index, 1)
    this.setState({ todos : list})
    localStorage.setItem('todos',JSON.stringify(list))

  }
 
  render() {
    
    const {todos} = this.state 
    const {handleChange, onSubmit, handleDelete} = this
    
    return ( 
      
      <div>
          <NavBar />
        
        <main className=" container mt-5">
          <InputField handlevalue={handleChange} onClick={onSubmit}/>
          
          <div className="row"> 
                { todos === null || todos.length === 0 ?
              <div>
                 <h1 className="mt-4">You currently do not have any Task available</h1>
                 <h2 className="mt-4">Add a Task Now!!!</h2>
              </div> :
                
                  todos.map((todo, index) =>
                    <div className="todo col-md-3 m-4 " key={index}>
                         <p>{todo}</p>
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
