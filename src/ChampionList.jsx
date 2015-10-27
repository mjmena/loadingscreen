import React, {Component} from 'react';
import Champion from './Champion.jsx';

export default class ChampionList extends Component {
  render() {
    return (
      <div>
        {this.props.champions.map((champion, i) =>
          <Champion key={i + 1} champion={champion} />
        )}
      </div>
    );
  }
}
