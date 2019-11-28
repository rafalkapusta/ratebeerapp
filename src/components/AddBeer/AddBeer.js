import React, {Component} from 'react';
import firebase, {auth} from '../Firebase/Firebase';
//import firebase, { auth, provider } from '../Firebase/Firebase';
import './AddBeer.scss';
import Beer from '../Beer/Beer'

class HomePage extends Component{
    state = {
        name: '',
        brewery: '',
        style: '',
        foamRate: 0,
        clarityRate: 0,
        fullnessRate: 0,
        aroma: '',
        taste: '',
        flaws: '',
        overallRate: 0,
        beerData: [],
        user: this.props.userInfo
    };
    handleChange =(e)=> {
      this.setState({[e.target.name]: e.target.value})
    };
    handleSubmit =(e)=> {
        //e.preventDefault();
        const beerRef = firebase.database().ref('beerData');
        const beer = {
            name: this.state.name,
            brewery: this.state.brewery,
            style: this.state.style,
            foamRate: this.state.foamRate,
            clarityRate: this.state.clarityRate,
            fullnessRate: this.state.fullnessRate,
            aroma: this.state.aroma,
            taste: this.state.taste,
            flaws: this.state.flaws,
            overallRate: this.state.overallRate
        };
        beerRef.push(beer);
        this.setState({name: '', brewery: '', style: '', foamRate: 0, clarityRate: 0, fullnessRate: 0,
            aroma: '', taste: '', flaws: '', overallRate: 0})
    };
    componentDidMount() {
        const beerRef = firebase.database().ref('beerData');
        beerRef.on('value', beerArr => {
            let currentBeerData = beerArr.val();
            let newBeerData = [];
            for (let beer in currentBeerData) {
                newBeerData.push({
                    id: beer,
                    name: currentBeerData[beer].name,
                    brewery: currentBeerData[beer].brewery,
                    style: currentBeerData[beer].style,
                    foamRate: currentBeerData[beer].foamRate,
                    clarityRate: currentBeerData[beer].clarityRate,
                    fullnessRate: currentBeerData[beer].fullnessRate,
                    aroma: currentBeerData[beer].aroma,
                    taste: currentBeerData[beer].taste,
                    flaws: currentBeerData[beer].flaws,
                    overallRate: currentBeerData[beer].overallRate
                });
            }
            this.setState({beerData: newBeerData})
        });
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({user: user});
            }
        });
    }
    removeBeer =(id)=> {
        const beerRef = firebase.database().ref(`/beerData/${id}`);
        beerRef.remove();
    };
    render(){
        const {beerData} = this.state;
        const {user} = this.state;
        if(!user) {
            return (<h1 className='AddBeer_warn'>You must be logged in to add beers</h1>)
        }
        else {
            return (
                <div className='AddBeer_mainContainer'>
                    <form className='AddBeer_inputForm' onSubmit={this.handleSubmit}>
                        <h1>Rate Beer</h1>
                        <input type="text"
                               name='name'
                               placeholder='name'
                               value={this.state.name}
                               onChange={this.handleChange}/>
                        <input type="text"
                               name='brewery'
                               placeholder='brewery'
                               value={this.state.brewery}
                               onChange={this.handleChange}/>
                        <input type="text"
                               name='style'
                               placeholder='style'
                               value={this.state.style}
                               onChange={this.handleChange}/>
                        <div className='AddBeer_inputContainer' >
                            <h3>Foam</h3>
                            <div className='AddBeer_foamRating'>
                                <input type="radio" id="foamStar5" name="foamRate" value="5" onChange={this.handleChange}/>
                                <label htmlFor="foamStar5" title="text"></label>
                                <input type="radio" id="foamStar4" name="foamRate" value="4" onChange={this.handleChange}/>
                                <label htmlFor="foamStar4" title="text"></label>
                                <input type="radio" id="foamStar3" name="foamRate" value="3" onChange={this.handleChange}/>
                                <label htmlFor="foamStar3" title="text"></label>
                                <input type="radio" id="foamStar2" name="foamRate" value="2" onChange={this.handleChange}/>
                                <label htmlFor="foamStar2" title="text"></label>
                                <input type="radio" id="foamStar1" name="foamRate" value="1" onChange={this.handleChange}/>
                                <label htmlFor="foamStar1" title="text"></label>
                            </div>
                        </div>
                        <div className='AddBeer_inputContainer' >
                            <h3>Clarity</h3>
                            <div className='AddBeer_clarityRating'>
                                <input type="radio" id="clarityStar5" name="clarityRate" value="5" onChange={this.handleChange}/>
                                <label htmlFor="clarityStar5" title="text"></label>
                                <input type="radio" id="clarityStar4" name="clarityRate" value="4" onChange={this.handleChange}/>
                                <label htmlFor="clarityStar4" title="text"></label>
                                <input type="radio" id="clarityStar3" name="clarityRate" value="3" onChange={this.handleChange}/>
                                <label htmlFor="clarityStar3" title="text"></label>
                                <input type="radio" id="clarityStar2" name="clarityRate" value="2" onChange={this.handleChange}/>
                                <label htmlFor="clarityStar2" title="text"></label>
                                <input type="radio" id="clarityStar1" name="clarityRate" value="1" onChange={this.handleChange}/>
                                <label htmlFor="clarityStar1" title="text"></label>
                            </div>
                        </div>
                        <div className='AddBeer_inputContainer' >
                            <h3>Fullness</h3>
                            <div className='AddBeer_fullnessRating'>
                                <input type="radio" id="fullnessStar5" name="fullnessRate" value="5" onChange={this.handleChange}/>
                                <label htmlFor="fullnessStar5" title="text"></label>
                                <input type="radio" id="fullnessStar4" name="fullnessRate" value="4" onChange={this.handleChange}/>
                                <label htmlFor="fullnessStar4" title="text"></label>
                                <input type="radio" id="fullnessStar3" name="fullnessRate" value="3" onChange={this.handleChange}/>
                                <label htmlFor="fullnessStar3" title="text"></label>
                                <input type="radio" id="fullnessStar2" name="fullnessRate" value="2" onChange={this.handleChange}/>
                                <label htmlFor="fullnessStar2" title="text"></label>
                                <input type="radio" id="fullnessStar1" name="fullnessRate" value="1" onChange={this.handleChange}/>
                                <label htmlFor="fullnessStar1" title="text"></label>
                            </div>
                        </div>
                        <textarea name="aroma" id="" cols="30" rows="5" placeholder='aroma'
                                  value={this.state.aroma}
                                  onChange={this.handleChange}></textarea>
                        <textarea name="taste" id="" cols="30" rows="5" placeholder='taste'
                                  value={this.state.taste}
                                  onChange={this.handleChange}></textarea>
                        <textarea name="flaws" id="" cols="30" rows="5" placeholder='flaws'
                                  value={this.state.flaws}
                                  onChange={this.handleChange}></textarea>
                        <div className='AddBeer_inputContainer--Score' >
                            <h3>Overall score</h3>
                            <div className='AddBeer_overallRating'>
                                <input type="radio" id="overallStar5" name="overallRate" value="5" onChange={this.handleChange}/>
                                <label htmlFor="overallStar5" title="text"></label>
                                <input type="radio" id="overallStar4" name="overallRate" value="4" onChange={this.handleChange}/>
                                <label htmlFor="overallStar4" title="text"></label>
                                <input type="radio" id="overallStar3" name="overallRate" value="3" onChange={this.handleChange}/>
                                <label htmlFor="overallStar3" title="text"></label>
                                <input type="radio" id="overallStar2" name="overallRate" value="2" onChange={this.handleChange}/>
                                <label htmlFor="overallStar2" title="text"></label>
                                <input type="radio" id="overallStar1" name="overallRate" value="1" onChange={this.handleChange}/>
                                <label htmlFor="overallStar1" title="text"></label>
                            </div>
                        </div>
                        <input type="submit" value='Add' className='AddBeer_inputForm--btn'/>
                    </form>
                    {/*<ul className='AddBeer_beerList'>
                        {beerData.map((beer,i) => <Beer key={i} beerList={beer} remove={this.removeBeer}/>)}
                    </ul>*/}
                </div>
            )
        }
    }
}

export default HomePage;