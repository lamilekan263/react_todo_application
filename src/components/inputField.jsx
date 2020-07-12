import React, { Component } from 'react';

class InputField extends Component {
    
    render() { 
        const {onClick, handlevalue} = this.props
        return ( 
            <div>
                
                <input type="text"  className="form-control p-4" placeholder="Enter a task" onChange={handlevalue} />
                <button type="submit" className="btn btn-primary mt-2" onClick={onClick}>Add Todo</button>  
            </div>           
         );
    }
}
 
export default InputField;
