import Immutable from "immutable"
import React, { Component } from 'react'

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
  attack_speed : {
    color: "orange"
  },
  movement_speed : {
    color: "orange"
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
  magic_resistance : {
    color : "brown",
  },
  silence : {
    color : "red",
  },
  silenced : {
    color : "red",
  },
  shield : {
    color : "green"
  },
  shields : {
    color : "green"
  },
  block : {
    color : "green"
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
  stasis : {
    color : "red",
  },
  untargetable : {
    color : "red",
  },
  stun : {
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

export function highlight(text){
  const highlightsForRegex = highlights.keySeq().reduce((previous, current) => {
    return previous+"\\b"+"|"+"\\b"+current;
  });

  console.log(highlightsForRegex);

  const highlightsRegExp = new RegExp("("+highlightsForRegex.replace(/_/g, "\\s")+")", "i")
  const description = text.split(highlightsRegExp).map((current, index) => {
    if(index % 2 === 1){
      return <span key={index} style={highlights.get(current.replace(/\s/,"_").toLowerCase())}>{current.toLowerCase()}</span>
    }

    return current;
  });

  return description;
}
