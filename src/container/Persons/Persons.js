import React,{ Component } from 'react';

import AddPerson from './components/AddPerson/AddPerson';
import Person from './components/Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Nguyễn Văn A",
            age: Math.floor((Math.random() * 40) + 1)
        };
    };

    ChangePerson = () => {
        this.setState = {
            name: "Nguyễn Văn A",
            age: Math.floor((Math.random() * 40) + 1)
        }
    }
    
    render () {
        return (
            <div>
                <AddPerson AddPerson={this.ChangePerson} />
                <Person Person />
            </div>
            
        );
    };
}

export default Persons;