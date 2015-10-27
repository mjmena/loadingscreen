import React, {
  Component
} from 'react';

import Spell from './Spell.jsx';

export default class Champion extends Component {
  render() {
    const champion = this.props.champion;
    const picture = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + champion.name + "_0.jpg";
    return (
      <div>
        <img src={picture}></img>
        <h1>{champion.name}</h1>
        <div><span style={{fontWeight:'bold'}}>Passive</span> :{champion.passive.description}</div>
        <Spell spell={champion.spells[0]}></Spell>
        <Spell spell={champion.spells[1]}></Spell>
        <Spell spell={champion.spells[2]}></Spell>
        <Spell spell={champion.spells[3]}></Spell>
      </div>
    );
  }
}
