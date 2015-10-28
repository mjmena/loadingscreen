import React, { Component } from 'react';

export default class Spell extends Component {
  constructor() {
    super();
    this.state = {
      wantsSpellDescription : false
    };
  }

  onMouseOverSpell(){
      this.setState({wantsSpellDescription : true})
  }

  onMouseOutSpell(){
      this.setState({wantsSpellDescription : false})
  }

  render() {
    
    const spell = this.props.spell;

    var cooldowns = spell.cooldown.reduce(function (previous, current) {
      return previous +" / "+current;
    });

    var costs = spell.cost.reduce(function (previous, current) {
      return previous +" / "+current;
    });

    return (
      <div style={{clear:'both'}} onMouseOver={this.onMouseOverSpell.bind(this)} onMouseOut={this.onMouseOutSpell.bind(this)}>
        <div style={{clear:'both', fontWeight:'bold'}} > {this.props.keybinding + ": " + spell.name}</div>
        <div style={{clear:'both'}}>Cooldown: {cooldowns}</div>
        <div style={{clear:'both'}}>Cost: {costs}</div>
        {this.state.wantsSpellDescription ? <div style={{clear:'both'}}>{spell.description}</div> : <div></div>}
      </div>
    );
  }
}
