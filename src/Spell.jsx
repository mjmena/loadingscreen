import React, { Component } from 'react';

export default class Spell extends Component {
  render() {
    const spell = this.props.spell;

    var cooldowns = spell.cooldown.reduce(function (previous, current) {
      return previous +" / "+current;
    });

    var costs = spell.cost.reduce(function (previous, current) {
      return previous +" / "+current;
    });

    return (
      <div style={{clear:'both'}}>
        <div style={{clear:'both', fontWeight:'bold'}}>{spell.name}</div>
        <div style={{clear:'both'}}>Cooldown: {cooldowns}</div>
        <div style={{clear:'both'}}>Cost: {costs}</div>
        <div style={{clear:'both'}}>{spell.description}</div>
      </div>
    );
  }
}
