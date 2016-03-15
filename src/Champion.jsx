import React, {
  Component
} from 'react';
import {highlight} from './highlight.js'

import Spell from './Spell.jsx';

export default class Champion extends Component {
  render() {
    const champion = this.props.champion;
    const style = {
      backgroundColor : "#EEE",
      width : 200,
      float: "left",
      fontSize: 14,
      padding: 10,
    }

    return (
      <div style={style}>

        <h1>{champion.name}</h1>
        <div><span style={{fontWeight:'bold'}}>Passive:</span> {highlight(champion.passive.description)}</div>
        <Spell keybinding="Q" spell={champion.spells[0]}></Spell>
        <Spell keybinding="W" spell={champion.spells[1]}></Spell>
        <Spell keybinding="E" spell={champion.spells[2]}></Spell>
        <Spell keybinding="R" spell={champion.spells[3]}></Spell>
      </div>
    );
  }
}
