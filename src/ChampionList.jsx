import React, {Component} from 'react';
import Champion from './Champion.jsx';

export default class ChampionList extends Component {
  render() {
    const championComponents = this.props.champions.map((champion, i) => <Champion key={i + 1} champion={champion} />)
    const style = {
      backgroundColor : "#888887"
    }
    return (
      <div style={style}>
        {championComponents}
      </div>
    );
  }
}
