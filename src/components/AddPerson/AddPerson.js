import React, {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state={
        name:'',
        age:''
    }

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value});
    }

    ageChangedHandler = (event) => {
        this.setState({age: event.target.value});
    }

    render(){
        return(
        <div className="AddPerson">
            <input type="text" onChange={(event) => this.nameChangedHandler(event)} value={this.state.name} placeholder="Name" />
            <input type="number" onChange={(event) => this.ageChangedHandler(event)} value={this.state.age} placeholder="Age" /> 
            <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
        </div>);
    }
}

export default AddPerson;