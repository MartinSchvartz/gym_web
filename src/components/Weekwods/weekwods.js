import React from 'react';
import './Styles.css';
import ReactDOM from 'react-dom';

class myInput extends React.Component {
    constructor(props){
        super(props);
        this.state={data: new Date()};
    }
    render(){
        return(
            <div>
             <h2>Hello world it is {this.state.date.toLocaleString()}</h2>
            </div>

        );
    }
}
function wods(){
    return (
        <div>
            <h1>Aca estan los wods de la semana</h1>
            <myInput/>
        </div>
    )
}

export default wods;