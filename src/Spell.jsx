import React, { Component } from 'react';
import Immutable from 'immutable'
import {highlight} from './highlight.js'

export default class Spell extends Component {
  render() {
    const spell = this.props.spell;

    var cooldowns = spell.cooldown.reduce(function (previous, current) {
      return previous +" / "+current;
    });

    var costs = spell.cost.reduce(function (previous, current) {
      return previous +" / "+current;
    });

    const description = highlight(spell.sanitizedTooltip)

    const spellStyle = {
      paddingTop:20,

    }

    const titleStyle = {
      fontWeight:"bold",
    }


    return (
      <div style={spellStyle}>
        <div style={titleStyle}> {this.props.keybinding + ": " + spell.name}</div>
        <div>Cooldown: {cooldowns}</div>
        <div>Cost: {costs}</div>
        <div>{description}</div>
      </div>
    );
  }
}
