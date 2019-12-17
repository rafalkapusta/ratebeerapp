import React, {Component} from 'react';
import firebase, {auth} from '../Firebase/Firebase';
import './SearchBeer.scss';

class LandingPage extends Component{
    state = {
      search: '',
      beerData: [],
      filteredData: [],
      user: this.props.userInfo,
      error: false
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
                beer.style.toLowerCase() === query){
                result.push(beer)
            }
        });
        this.setState({filteredData: result, search: ''});
        console.log(this.state.filteredData.length);
        if(result.length === 0) {
            this.setState({error: true});
        } else {
            this.setState({error: false});
        }
    };
    render() {
        let info;
        const {filteredData} = this.state;
        if(this.state.error) {
            info = <h1>No data in database</h1>
        } else {
            info = null;
        }
        //const {error} = this.state;
        //console.log(filteredData);
        //console.log(this.state.user);
        const {user} = this.state;
        if(!user) {
            return (<h1 className='SearchBeer_warn'>You must be logged in to search beers</h1>)
        }
        else {
            return (
                <>
                {info}
                <div className='SearchBeer_mainContainer'>
                    <form action="" className='SearchBeer_searchForm'>
                        <input className='SearchBeer_inputForm' type="text" name='search' value={this.state.search} onChange={this.handleChange}/>
                        <input className='SearchBeer_inputButton' type="submit" value='Search' onClick={this.handleSearch}/>
                    </form>
                    <div className='SearchBeer_basicInfo'>
                        {filteredData.map(beer => {
                            return (
                            <div className='SearchBeer_beerContainer' key={beer.id}>
                                <h2 className='SearchBeer_beerName'>{beer.name}</h2>
                                <p>Aroma: {beer.aroma}</p>
                                <p>Taste: {beer.taste}</p>
                                <p>Flaws: {beer.flaws}</p>
                                <h4 className='SearchBeer_foamRating'>Foam:
                                    <input type="radio" id={beer.id +'1'} name="" value={beer.foamRate}
                                           checked={beer.foamRate>0? true:false}/>
                                    <label htmlFor={beer.id +'1'} title="text"></label>
                                    <input type="radio" id={beer.id +'2'} name="" value={beer.foamRate}
                                           checked={beer.foamRate>1? true:false}/>
                                    <label htmlFor={beer.id +'2'} title="text"></label>
                                    <input type="radio" id={beer.id +'3'} name="" value={beer.foamRate}
                                           checked={beer.foamRate>2? true:false}/>
                                    <label htmlFor={beer.id +'3'} title="text"></label>
                                    <input type="radio" id={beer.id +'4'} name="" value={beer.foamRate}
                                           checked={beer.foamRate>3? true:false}/>
                                    <label htmlFor={beer.id +'4'} title="text"></label>
                                    <input type="radio" id={beer.id +'5'} name="" value={beer.foamRate}
                                           checked={beer.foamRate>4? true:false}/>
                                    <label htmlFor={beer.id +'5'} title="text"></label>
                                </h4>
                                <h4 className='SearchBeer_clarityRating'>Clarity:
                                    <input type="radio" id={beer.id +'6'} name="" value={beer.clarityRate}
                                           checked={beer.clarityRate>0? true:false}/>
                                    <label htmlFor={beer.id +'6'} title="text"></label>
                                    <input type="radio" id={beer.id +'7'} name="" value={beer.clarityRate}
                                           checked={beer.clarityRate>1? true:false}/>
                                    <label htmlFor={beer.id +'7'} title="text"></label>
                                    <input type="radio" id={beer.id +'8'} name="" value={beer.clarityRate}
                                           checked={beer.clarityRate>2? true:false}/>
                                    <label htmlFor={beer.id +'8'} title="text"></label>
                                    <input type="radio" id={beer.id +'9'} name="" value={beer.clarityRate}
                                           checked={beer.clarityRate>3? true:false}/>
                                    <label htmlFor={beer.id +'9'} title="text"></label>
                                    <input type="radio" id={beer.id +'10'} name="" value={beer.clarityRate}
                                           checked={beer.clarityRate>4? true:false}/>
                                    <label htmlFor={beer.id +'10'} title="text"></label>
                                </h4>
                                <h4 className='SearchBeer_fullnessRating'>Fullness:
                                    <input type="radio" id={beer.id +'11'} name="" value={beer.fullnessRate}
                                           checked={beer.fullnessRate>0? true:false}/>
                                    <label htmlFor={beer.id +'11'} title="text"></label>
                                    <input type="radio" id={beer.id +'12'} name="" value={beer.fullnessRate}
                                           checked={beer.fullnessRate>1? true:false}/>
                                    <label htmlFor={beer.id +'12'} title="text"></label>
                                    <input type="radio" id={beer.id +'13'} name="" value={beer.fullnessRate}
                                           checked={beer.fullnessRate>2? true:false}/>
                                    <label htmlFor={beer.id +'13'} title="text"></label>
                                    <input type="radio" id={beer.id +'14'} name="" value={beer.fullnessRate}
                                           checked={beer.fullnessRate>3? true:false}/>
                                    <label htmlFor={beer.id +'14'} title="text"></label>
                                    <input type="radio" id={beer.id +'15'} name="" value={beer.fullnessRate}
                                           checked={beer.fullnessRate>4? true:false}/>
                                    <label htmlFor={beer.id +'15'} title="text"></label>
                                </h4>
                                <h2 className='SearchBeer_overallRating'>Overall:
                                    <input type="radio" id={beer.id +'16'} name="" value={beer.overallRate}
                                           checked={beer.overallRate>0? true:false}/>
                                    <label htmlFor={beer.id +'16'} title="text"></label>
                                    <input type="radio" id={beer.id +'17'} name="" value={beer.overallRate}
                                           checked={beer.overallRate>1? true:false}/>
                                    <label htmlFor={beer.id +'17'} title="text"></label>
                                    <input type="radio" id={beer.id +'18'} name="" value={beer.overallRate}
                                           checked={beer.overallRate>2? true:false}/>
                                    <label htmlFor={beer.id +'18'} title="text"></label>
                                    <input type="radio" id={beer.id +'19'} name="" value={beer.overallRate}
                                           checked={beer.overallRate>3? true:false}/>
                                    <label htmlFor={beer.id +'19'} title="text"></label>
                                    <input type="radio" id={beer.id +'20'} name="" value={beer.overallRate}
                                           checked={beer.overallRate>4? true:false}/>
                                    <label htmlFor={beer.id +'20'} title="text"></label>
                                </h2>
                            </div>
                            )}
                        )}
                    </div>
                </div>
                </>
        )
        }
    }

}

export default LandingPage;