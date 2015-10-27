var fetch = require('node-fetch');
var Immutable = require('immutable');

const api_key = '041829d4-3c9e-477e-8888-193f309432be';

fetch('https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=' + api_key)
  .then(function(res) {
    return res.json();
  }).then(function(json) {
    const champions = Immutable.Map(json.data);
    champions.forEach(champion => {
      fetch('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' + champion.id + '?champData=allytips,enemytips,info,partype,passive,spells,stats&api_key=' + api_key)
      .then(function (res) {
        return res.json();
      }).then(function(json){

      });
    });
  });
