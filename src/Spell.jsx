import React, { Component } from 'react';
import Immutable from 'immutable'

export default class Spell extends Component {
  render() {
    const spell = this.props.spell;

    var cooldowns = spell.cooldown.reduce(function (previous, current) {
      return previous +" / "+current;
    });

    var costs = spell.cost.reduce(function (previous, current) {
      return previous +" / "+current;
    });

    const highlights = Immutable.Map({
      magic_damage : {
          color : "purple",
      },
      physical_damage : {
        color : "orange",
      },
      true_damage : {
        color : "blue",
      },
      heal : {
        color : "green",
      },
      heals : {
        color : "green",
      },
      healing : {
        color : "green",
      },
      regenerates : {
        color : "green",
      },
      restore : {
        color : "green",
      },
      armor : {
        color : "yellow",
      },
      magic_resist : {
        color : "brown",
      },
      slow : {
        color : "red",
      },
      slows : {
        color : "red",
      },
      slowed : {
        color : "red",
      },
      slowing : {
        color : "red",
      },
      stun : {
        color : "red",
      },
      stuns : {
        color : "red",
      },
      stunned : {
        color : "red",
      },
      stunning : {
        color : "red",
      },
      fear : {
        color : "red",
      },
      terrify : {
        color : "red",
      },
      knocking_up : {
        color : "red",
      },
      blinding : {
        color : "red",
      },

    })

    const highlightsForRegex = highlights.keySeq().reduce((previous, current) => {
      return previous+"\\b"+"|"+"\\b"+current;
    });

    const highlightsRegExp = new RegExp("("+highlightsForRegex.replace(/_/g, "\\s")+")", "i")
    let description = spell.sanitizedTooltip.split(highlightsRegExp).map((current, index) => {
      if(index % 2 === 1){
        return <span key={index} style={highlights.get(current.replace(/\s/,"_").toLowerCase())}>{current.toLowerCase()}</span>
      }

      return current;
    });


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
