import React, {Component} from 'react';
import './Home.scss';
import firebase from '../Firebase/Firebase';
import Beer from '../Beer/Beer'
import LandingPage from "../Landing/Landing";

class HomePage extends Component{
    state = {
        name: '',
        brewery: '',
        style: '',
        foamRate: 1,
        clarityRate: 1,
        fullnessRate: 1,
        aroma: '',
        taste: '',
        flaws: '',
        overallRate: 1,
        beerData: []
    };
    handleChange =(e)=> {
      this.setState({[e.target.name]: e.target.value})
    };
    handleSubmit =(e)=> {
        e.preventDefault();
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
        this.setState({name: '', brewery: '', foamRate: 1, clarityRate: 1, fullnessRate: 1,
            aroma: '', taste: '', flaws: '', overallRate: 1})
    };
    componentDidMount() {
        const beerRef = firebase.database().ref('beerData');
        beerRef.on('value', beerArr => {
            let currentBeerData = beerArr.val();
            let newBeerData = [];
            //console.log(currentBeerData);
            for (let beer in currentBeerData) {
                //console.log(beer);
                //console.log(beer);
                newBeerData.push({
                    id: beer,
                    name: currentBeerData[beer].name,
                    brewery: currentBeerData[beer].brewery,
                    style: currentBeerData[beer].style,
                    foamRate: currentBeerData[beer].foamRate,
                    clarityRate: currentBeerData[beer].clarityRate,
                    fullnessRate: currentBeerData[beer].fullnessRate,
                    aroma: currentBeerData[beer].style,
                    taste: currentBeerData[beer].taste,
                    flaws: currentBeerData[beer].flaws,
                    overallRate: currentBeerData[beer].overallRate
                });
            }
            this.setState({beerData: newBeerData})
        });
    }
    removeBeer =(id)=> {
        const beerRef = firebase.database().ref(`/beerData/${id}`);
        beerRef.remove();
    };
    render(){
        const {beerData} =this.state;
        console.log(beerData);
        return (
            <div className='mainContainer'>
                <form className='inputForm' onSubmit={this.handleSubmit}>
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
                           placeholder='brewery'
                           value={this.state.style}
                           onChange={this.handleChange}/>
                    <div className='inputContainer' >
                        <h3>Foam</h3>
                        <div className='foamRating'>
                            <input type="radio" id="foamStar5" name="foamRate" value="5" onChange={this.handleChange}/>
                            <label htmlFor="foamStar5" title="text">5</label>
                            <input type="radio" id="foamStar4" name="foamRate" value="4" onChange={this.handleChange}/>
                            <label htmlFor="foamStar4" title="text">4</label>
                            <input type="radio" id="foamStar3" name="foamRate" value="3" onChange={this.handleChange}/>
                            <label htmlFor="foamStar3" title="text">3</label>
                            <input type="radio" id="foamStar2" name="foamRate" value="2" onChange={this.handleChange}/>
                            <label htmlFor="foamStar2" title="text">2</label>
                            <input type="radio" id="foamStar1" name="foamRate" value="1" onChange={this.handleChange}/>
                            <label htmlFor="foamStar1" title="text">1</label>
                        </div>
                    </div>
                    <div className='inputContainer' >
                        <h3>Clarity</h3>
                        <div className='clarityRating'>
                            <input type="radio" id="clarityStar5" name="clarityRate" value="5" onChange={this.handleChange}/>
                            <label htmlFor="clarityStar5" title="text">5</label>
                            <input type="radio" id="clarityStar4" name="clarityRate" value="4" onChange={this.handleChange}/>
                            <label htmlFor="clarityStar4" title="text">4</label>
                            <input type="radio" id="clarityStar3" name="clarityRate" value="3" onChange={this.handleChange}/>
                            <label htmlFor="clarityStar3" title="text">3</label>
                            <input type="radio" id="clarityStar2" name="clarityRate" value="2" onChange={this.handleChange}/>
                            <label htmlFor="clarityStar2" title="text">2</label>
                            <input type="radio" id="clarityStar1" name="clarityRate" value="1" onChange={this.handleChange}/>
                            <label htmlFor="clarityStar1" title="text">1</label>
                        </div>
                    </div>
                    <div className='inputContainer' >
                        <h3>Fullness</h3>
                        <div className='fullnessRating'>
                            <input type="radio" id="fullnessStar5" name="fullnessRate" value="5" onChange={this.handleChange}/>
                            <label htmlFor="fullnessStar5" title="text">5</label>
                            <input type="radio" id="fullnessStar4" name="fullnessRate" value="4" onChange={this.handleChange}/>
                            <label htmlFor="fullnessStar4" title="text">4</label>
                            <input type="radio" id="fullnessStar3" name="fullnessRate" value="3" onChange={this.handleChange}/>
                            <label htmlFor="fullnessStar3" title="text">3</label>
                            <input type="radio" id="fullnessStar2" name="fullnessRate" value="2" onChange={this.handleChange}/>
                            <label htmlFor="fullnessStar2" title="text">2</label>
                            <input type="radio" id="fullnessStar1" name="fullnessRate" value="1" onChange={this.handleChange}/>
                            <label htmlFor="fullnessStar1" title="text">1</label>
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
                    <div className='inputContainer--Score' >
                        <h3>Overall score</h3>
                        <div className='overallRating'>
                            <input type="radio" id="overallStar5" name="overallRate" value="5" onChange={this.handleChange}/>
                            <label htmlFor="overallStar5" title="text">5</label>
                            <input type="radio" id="overallStar4" name="overallRate" value="4" onChange={this.handleChange}/>
                            <label htmlFor="overallStar4" title="text">4</label>
                            <input type="radio" id="overallStar3" name="overallRate" value="3" onChange={this.handleChange}/>
                            <label htmlFor="overallStar3" title="text">3</label>
                            <input type="radio" id="overallStar2" name="overallRate" value="2" onChange={this.handleChange}/>
                            <label htmlFor="overallStar2" title="text">2</label>
                            <input type="radio" id="overallStar1" name="overallRate" value="1" onChange={this.handleChange}/>
                            <label htmlFor="overallStar1" title="text">1</label>
                        </div>
                    </div>
                    <input type="submit" value='Add' className='inputForm--btn'/>
                </form>
                <ul className='beerList'>
                    {beerData.map((beer,i) => <Beer key={i} beerList={beer} remove={this.removeBeer}/>)}
                </ul>
                <LandingPage arr={beerData}/>
            </div>
        )
    }
}

export default HomePage;