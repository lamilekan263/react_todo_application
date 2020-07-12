import React, { Component } from 'react';

import '../todos/todo.css'
class Todos extends Component{
    render(){
        const {deleteTodo, todos} = this.props;

        return(
        <div >
            <div >
                {todos.map((todo, index) =>
                    <div  key={index}>
                         <p>{todo}</p>
                        <button className=" btn-todo-delete" onClick={ deleteTodo }>Delete</button>
                    </div>
                )}
            </div>   
            
        </div>
        
        )
    }
}


export default Todos;


