import React, {Component} from 'react';
import './Beer.scss'

class Beer extends Component {
    handleRemove =(e)=> {
        //console.log(this.props.beerList.id)
        this.props.remove(this.props.beerList.id)
    };
    render() {
        return (
            <li>
                <h1>{this.props.beerList.name}</h1>
                <button onClick={this.handleRemove}>Remove</button>
            </li>
        )
    }
}

export default Beer;