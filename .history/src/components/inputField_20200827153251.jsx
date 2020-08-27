import React, { Component } from 'react';

class InputField extends Component {
    
    render() { 
        const {onClick, handlevalue} = this.props
        return ( 
            <div>
                <form >
                <input type="text"  className="form-control p-4" placeholder="Enter a task" value = { myVal} onChange={handlevalue} required />
                <button type="submit" className="btn btn-primary mt-2" onClick={onClick}>Add Todo</button>  
            </form>
            </div>           
         );
    }
}
 
export default InputField;
