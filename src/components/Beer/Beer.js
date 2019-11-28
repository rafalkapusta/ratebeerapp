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
                <h2 className='Beer_name'>{this.props.beerList.name}</h2>
                <button className='Beer_remove-btn' onClick={this.handleRemove}>Remove</button>
            </li>
        )
    }
}

export default Beer;