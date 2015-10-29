import React, {
  Component
} from 'react';

import Spell from './Spell.jsx';

export default class Champion extends Component {
  render() {
    const champion = this.props.champion;
    const picture = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + champion.key + "_0.jpg";
    const style = {
      backgroundColor : "#EEEEEE",
      width : 297,
      float: "left",
      fontSize: 14,
      padding: 10,
    }

    return (
      <div style={style}>

        <h1>{champion.name}</h1>
        <div><span style={{fontWeight:'bold'}}>Passive</span> :{champion.passive.description.replace(/<(?:.|\n)*?>/gm, '')}</div>
        <Spell keybinding="Q" spell={champion.spells[0]}></Spell>
        <Spell keybinding="W" spell={champion.spells[1]}></Spell>
        <Spell keybinding="E" spell={champion.spells[2]}></Spell>
        <Spell keybinding="R" spell={champion.spells[3]}></Spell>
      </div>
    );
  }
}
