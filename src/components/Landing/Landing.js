import React, {Component} from 'react';
import firebase from '../Firebase/Firebase';
import './Landing.scss';

class LandingPage extends Component{
    state = {
      search: '',
      beerData: [],
      filteredData: []
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
    handleChange =(e)=> {
        this.setState({search: e.target.value})
    };
    handleSearch =(e)=> {
        e.preventDefault();
        let query = this.state.search.toLowerCase().trim();
        //console.log(query);
        let result = [];
        //console.log(this.state.beerData);
        //this.state.beerData.map(beer => console.log(beer.name.toLowerCase()));
        this.state.beerData.forEach(beer => {
            //console.log(query)
            if(beer.name.toLowerCase() === query || beer.brewery.toLowerCase() === query ||
                beer.style.toLowerCase() === query || beer.overallRate.toLowerCase() === query){
                result.push(beer)
            }
        });
        //console.log(result)
        this.setState({filteredData: result});
    };
    render() {
        const {filteredData} = this.state;
        return (
            <div className='mainContainer'>
                <form action="" className='searchForm'>
                    <input className='inputForm' type="text" name='search' value={this.state.search} onChange={this.handleChange}/>
                    <input className='inputButton' type="submit" value='Search' onClick={this.handleSearch}/>
                </form>
                <ul className='beerList'>
                    {filteredData.map(beer => {
                        return (
                        <li key={beer.id}>
                            <h1 className='beerListName'>Name: {beer.name}</h1>
                            <h2>Style: {beer.style}</h2>
                            <h2>Brewery: {beer.brewery}</h2>
                            <div className='retrieveFoamRating'>
                                <h3>Foam :</h3>
                                <input type="radio" id={beer.id + '1'} value={beer.foamRate} checked={beer.foamRate===5&& true}/>
                                <label htmlFor={beer.id + '1'} title="text">5</label>
                                <input type="radio" id={beer.id + '2'} value={beer.foamRate} checked={beer.foamRate>=4&& true}/>
                                <label htmlFor={beer.id + '2'} title="text">4</label>
                                <input type="radio" id={beer.id + '3'} value={beer.foamRate} checked={beer.foamRate>=3&& true}/>
                                <label htmlFor={beer.id + '3'} title="text">3</label>
                                <input type="radio" id={beer.id + '4'} value={beer.foamRate} checked={beer.foamRate>=2&& true}/>
                                <label htmlFor={beer.id + '4'} title="text">2</label>
                                <input type="radio" id={beer.id + '5'} value={beer.foamRate} checked={beer.foamRate>=1&& true}/>
                                <label htmlFor={beer.id + '5'} title="text">1</label>
                            </div>
                        </li>)}
                    )}
                </ul>
            </div>
        )
    }

}

export default LandingPage;