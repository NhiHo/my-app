import React,{ Component} from 'react';

const Person = () => {
    return(
        <div>
            <h3>{this.state.name}</h3>
            <p>{this.state.age}</p>
        </div>
    );
};


export default Person;