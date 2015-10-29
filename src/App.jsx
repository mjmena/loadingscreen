import React, {
  Component
} from 'react';
import ChampionList from './ChampionList.jsx';

const champion_ids = [412, 266, 23, 79, 69, 78, 13, 14, 1, 43, 111, 99, 103, 2, 112, 34, 86, 27, 127, 57, 25, 28, 105, 238, 74, 68, 82, 37, 55, 96, 22, 117, 30, 12, 122, 67, 110, 77, 126, 89, 134, 80, 121, 92, 42, 268, 51, 76, 3, 85, 45, 432, 150, 104, 90, 254, 10, 39, 64, 60, 106, 20, 4, 24, 102, 429, 36, 223, 63, 131, 113, 8, 154, 421, 133, 84, 18, 120, 15, 236, 107, 19, 72, 54, 157, 101, 17, 75, 58, 119, 35, 50, 115, 91, 40, 245, 61, 9, 114, 31, 33, 7, 26, 16, 56, 222, 83, 6, 203, 21, 62, 53, 98, 201, 5, 29, 11, 44, 32, 41, 48, 38, 161, 143, 267, 59, 81];
const api_key = '041829d4-3c9e-477e-8888-193f309432be';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      summoner: '',
      champions: []
    };
  }

  handleSummonerChange(event) {
    this.setState({
      summoner: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({champions:[]})
    let random_ids = [];
    while(random_ids.length < 5){
      var randomnumber = Math.ceil(Math.random()*champion_ids.length);
      random_ids[random_ids.length] = randomnumber;
    }

    const random_champions = random_ids.map(id => {
      fetch('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' + champion_ids[id] + '?champData=allytips,enemytips,info,partype,passive,spells,stats&api_key=' + api_key)
      .then(res => {
        return res.json();
      })
      .then(data => {
        let champions = this.state.champions
        champions[champions.length] = data;
        this.setState({champions: champions});
      })
  })
}
  render() {


    return (
      <div>
        <h1>loadingscreen.info</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handleSummonerChange.bind(this)} placeholder='Summoner Name' type="text" value={this.state.summoner}/>
          <input type="submit" value="Submit" />
        </form>
         <ChampionList champions={this.state.champions}></ChampionList>
      </div>
    );
  }
}
