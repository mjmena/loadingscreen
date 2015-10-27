import React, {
  Component
} from 'react';
 // import $ from 'jquery';
 import ChampionList from './ChampionList.jsx';

const champion_ids = [412, 266, 23, 79, 69, 78, 13, 14, 1, 43, 111, 99, 103, 2, 112, 34, 86, 27, 127, 57, 25, 28, 105, 238, 74, 68, 82, 37, 55, 96, 22, 117, 30, 12, 122, 67, 110, 77, 126, 89, 134, 80, 121, 92, 42, 268, 51, 76, 3, 85, 45, 432, 150, 104, 90, 254, 10, 39, 64, 60, 106, 20, 4, 24, 102, 429, 36, 223, 63, 131, 113, 8, 154, 421, 133, 84, 18, 120, 15, 236, 107, 19, 72, 54, 157, 101, 17, 75, 58, 119, 35, 50, 115, 91, 40, 245, 61, 9, 114, 31, 33, 7, 26, 16, 56, 222, 83, 6, 203, 21, 62, 53, 98, 201, 5, 29, 11, 44, 32, 41, 48, 38, 161, 143, 267, 59, 81];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      summoner: '',
      ids: [];
    };
  }

  handleChange(event) {
    this.setState({
      summoner: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    // this.state.ids.map
    return (
      <div>
        <h1>loadingscreen.info</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handleChange.bind(this)} placeholder='Summoner Name' type="text" value={this.state.summoner}/>
          <input type="submit" />
        </form>
        {this.state.id ? <ChampionList champions={champions}></ChampionList> : ""}
      </div>
    );
  }
}

var champions = [
  {
    "id": 48,
    "key": "Trundle",
    "name": "Trundle",
    "title": "the Troll King",
    "image": {
      "full": "Trundle.png",
      "sprite": "champion3.png",
      "group": "champion",
      "x": 432,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "allytips": [
      "Trundle excels at fighting within his Frozen Domain. Try to draw enemies onto it.", "Use Subjugate to soften a powerful enemy tank or to create a target for your team to focus fire.", "Chomp is good for lowering the physical damage of enemies; try to focus it on enemy physical damage dealers."
    ],
    "enemytips": [
      "Trundle is very powerful at location-based combat. Try to draw him off of his Frozen Domain.", "Make sure to get out of his Pillar of Ice as quickly as possible, as it significantly slows you down."
    ],
    "partype": "Mana",
    "stats": {
      "armor": 27.536,
      "armorperlevel": 2.7,
      "attackdamage": 60.04,
      "attackdamageperlevel": 3.0,
      "attackrange": 125.0,
      "attackspeedoffset": -0.0672,
      "attackspeedperlevel": 2.9,
      "crit": 0.0,
      "critperlevel": 0.0,
      "hp": 616.28,
      "hpperlevel": 96.0,
      "hpregen": 9.425,
      "hpregenperlevel": 0.85,
      "movespeed": 350.0,
      "mp": 281.6,
      "mpperlevel": 45.0,
      "mpregen": 7.505,
      "mpregenperlevel": 0.6,
      "spellblock": 32.1,
      "spellblockperlevel": 1.25
    },
    "spells": [
      {
        "name": "Chomp",
        "description": "Trundle bites his opponent, dealing damage, briefly slowing and sapping some of their Attack Damage.",
        "sanitizedDescription": "Trundle bites his opponent, dealing damage, briefly slowing and sapping some of their Attack Damage.",
        "tooltip": "Trundle lunges at his opponent with his next basic attack, dealing {{ e1 }} <span class=\"colorFF8C00\">(+{{ f1 }})</span> physical damage and briefly slowing his target.<br><br>This attack increases Trundle's Attack Damage by {{ e2 }} for 8 seconds, with his opponent losing half of this amount.",
        "sanitizedTooltip": "Trundle lunges at his opponent with his next basic attack, dealing {{ e1 }} (+{{ f1 }}) physical damage and briefly slowing his target. This attack increases Trundle's Attack Damage by {{ e2 }} for 8 seconds, with his opponent losing half of this amount.",
        "leveltip": {
          "label": [
            "Damage", "Attack Damage", "Attack Damage Scaling"
          ],
          "effect": [
            "{{ e1 }} -> {{ e1NL }}", "{{ e2 }} -> {{ e2NL }}", "{{ e3 }}% -> {{ e3NL }}%"
          ]
        },
        "image": {
          "full": "TrundleTrollSmash.png",
          "sprite": "spell11.png",
          "group": "spell",
          "x": 240,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "resource": "{{ cost }} Mana",
        "maxrank": 5,
        "cost": [
          30, 30, 30, 30, 30
        ],
        "costType": "Mana",
        "costBurn": "30",
        "cooldown": [
          4.0, 4.0, 4.0, 4.0, 4.0
        ],
        "cooldownBurn": "4",
        "effect": [
          null, [
            20.0, 40.0, 60.0, 80.0, 100.0
          ], [
            20.0, 25.0, 30.0, 35.0, 40.0
          ], [
            100.0, 105.0, 110.0, 115.0, 120.0
          ]
        ],
        "effectBurn": [
          "", "20/40/60/80/100", "20/25/30/35/40", "100/105/110/115/120"
        ],
        "vars": [
          {
            "key": "f1",
            "link": "attackdamage",
            "coeff": [
              0.8, 0.9, 1.0, 1.1, 1.2
            ]
          }
        ],
        "range": "self",
        "rangeBurn": "self",
        "key": "TrundleTrollSmash"
      }, {
        "name": "Frozen Domain",
        "description": "Trundle turns target location into his domain, gaining Attack Speed, Movement Speed, and increased healing from all sources while on it.",
        "sanitizedDescription": "Trundle turns target location into his domain, gaining Attack Speed, Movement Speed, and increased healing from all sources while on it.",
        "tooltip": "Trundle coats target location with ice for {{ e4 }} seconds, gaining {{ e1 }}% Movement Speed, {{ e2 }}% Attack Speed and {{ e3 }}% increased healing and regeneration from all sources.",
        "sanitizedTooltip": "Trundle coats target location with ice for {{ e4 }} seconds, gaining {{ e1 }}% Movement Speed, {{ e2 }}% Attack Speed and {{ e3 }}% increased healing and regeneration from all sources.",
        "leveltip": {
          "label": [
            "Movement Speed", "Attack Speed"
          ],
          "effect": [
            "{{ e1 }}% -> {{ e1NL }}%", "{{ e2 }}% -> {{ e2NL }}%"
          ]
        },
        "image": {
          "full": "trundledesecrate.png",
          "sprite": "spell11.png",
          "group": "spell",
          "x": 288,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "resource": "{{ cost }} Mana",
        "maxrank": 5,
        "cost": [
          60, 60, 60, 60, 60
        ],
        "costType": "Mana",
        "costBurn": "60",
        "cooldown": [
          15.0, 15.0, 15.0, 15.0, 15.0
        ],
        "cooldownBurn": "15",
        "effect": [
          null, [
            20.0, 25.0, 30.0, 35.0, 40.0
          ], [
            20.0, 35.0, 50.0, 65.0, 80.0
          ], [
            20.0, 20.0, 20.0, 20.0, 20.0
          ], [
            8.0, 8.0, 8.0, 8.0, 8.0
          ]
        ],
        "effectBurn": [
          "", "20/25/30/35/40", "20/35/50/65/80", "20", "8"
        ],
        "range": [
          750, 750, 750, 750, 750
        ],
        "rangeBurn": "750",
        "key": "trundledesecrate"
      }, {
        "name": "Pillar of Ice",
        "description": "Trundle creates an ice pillar at target location, becoming impassable terrain and slowing all nearby enemy units.",
        "sanitizedDescription": "Trundle creates an ice pillar at target location, becoming impassable terrain and slowing all nearby enemy units.",
        "tooltip": "Trundle creates an icy pillar at target location for {{ e1 }} seconds, becoming impassable terrain and slowing all nearby enemy units by {{ e2 }}%.",
        "sanitizedTooltip": "Trundle creates an icy pillar at target location for {{ e1 }} seconds, becoming impassable terrain and slowing all nearby enemy units by {{ e2 }}%.",
        "leveltip": {
          "label": [
            "Cooldown", "Slow"
          ],
          "effect": [
            "{{ cooldown }} -> {{ cooldownnNL }}", "{{ e2 }}% -> {{ e2NL }}%"
          ]
        },
        "image": {
          "full": "TrundleCircle.png",
          "sprite": "spell11.png",
          "group": "spell",
          "x": 336,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "resource": "{{ cost }} Mana",
        "maxrank": 5,
        "cost": [
          60, 60, 60, 60, 60
        ],
        "costType": "Mana",
        "costBurn": "60",
        "cooldown": [
          23.0, 20.0, 17.0, 14.0, 11.0
        ],
        "cooldownBurn": "23/20/17/14/11",
        "effect": [
          null, [
            6.0, 6.0, 6.0, 6.0, 6.0
          ], [
            30.0, 35.0, 40.0, 45.0, 50.0
          ]
        ],
        "effectBurn": [
          "", "6", "30/35/40/45/50"
        ],
        "range": [
          1000, 1000, 1000, 1000, 1000
        ],
        "rangeBurn": "1000",
        "key": "TrundleCircle"
      }, {
        "name": "Subjugate",
        "description": "Trundle immediately steals a percent of his target's Health, Armor and Magic Resistance. Over the next 4 seconds the amount of Health, Armor, and Magic Resistance stolen is doubled.",
        "sanitizedDescription": "Trundle immediately steals a percent of his target's Health, Armor and Magic Resistance. Over the next 4 seconds the amount of Health, Armor, and Magic Resistance stolen is doubled.",
        "tooltip": "Trundle drains {{ e1 }} <span class=\"color99FF99\">(+{{ a1 }})</span>% of an enemy champion's maximum Health as Magic Damage and {{ e2 }}% of their Armor and Magic Resist, half immediately and half over {{ e3 }} seconds. The Armor and Magic Resist is returned {{ e3 }} seconds after the drain ends.",
        "sanitizedTooltip": "Trundle drains {{ e1 }} (+{{ a1 }})% of an enemy champion's maximum Health as Magic Damage and {{ e2 }}% of their Armor and Magic Resist, half immediately and half over {{ e3 }} seconds. The Armor and Magic Resist is returned {{ e3 }} seconds after the drain ends.",
        "leveltip": {
          "label": [
            "Health Drain", "Cooldown"
          ],
          "effect": [
            "{{ e1 }}% -> {{ e1NL }}%", "{{ cooldown }} -> {{ cooldownnNL }}"
          ]
        },
        "image": {
          "full": "TrundlePain.png",
          "sprite": "spell11.png",
          "group": "spell",
          "x": 384,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "resource": "{{ cost }} Mana",
        "maxrank": 3,
        "cost": [
          75, 75, 75
        ],
        "costType": "Mana",
        "costBurn": "75",
        "cooldown": [
          80.0, 70.0, 60.0
        ],
        "cooldownBurn": "80/70/60",
        "effect": [
          null, [
            20.0, 27.5, 35.0
          ], [
            40.0, 40.0, 40.0
          ], [
            4.0, 4.0, 4.0
          ], [
            4.0, 4.0, 4.0
          ], [
            4.0, 4.0, 4.0
          ]
        ],
        "effectBurn": [
          "", "20/27.5/35", "40", "4", "4", "4"
        ],
        "vars": [
          {
            "key": "a1",
            "link": "spelldamage",
            "coeff": [0.02]
          }
        ],
        "range": [
          650, 650, 650
        ],
        "rangeBurn": "650",
        "key": "TrundlePain"
      }
    ],
    "passive": {
      "name": "King's Tribute",
      "description": "When an enemy unit dies near Trundle, he heals for a percent of its maximum Health.",
      "sanitizedDescription": "When an enemy unit dies near Trundle, he heals for a percent of its maximum Health.",
      "image": {
        "full": "Trundle_Passive.png",
        "sprite": "passive3.png",
        "group": "passive",
        "x": 432,
        "y": 0,
        "w": 48,
        "h": 48
      }
    }
  },
  {
    "id": 81,
    "key": "Ezreal",
    "name": "Ezreal",
    "title": "the Prodigal Explorer",
    "image": {
      "full": "Ezreal.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 96,
      "y": 96,
      "w": 48,
      "h": 48
    },
    "allytips": [
      "Use Arcane Shift to help line up your other skill shots.", "You can play Ezreal either as a Attack Damage carry or Ability Power carry depending on how you build him.", "You can line up Trueshot Barrage to hit multiple minion waves or even Monsters."
    ],
    "enemytips": [
      "Ezreal is a very fragile champion so take the fight to him.", "Ezreal is completely skill shot based, so make sure to keep minions in between you.", "Mystic Shot applies on-hit effects including the Crest of Cinders."
    ],
    "partype": "Mana",
    "stats": {
      "armor": 21.88,
      "armorperlevel": 3.5,
      "attackdamage": 50.24,
      "attackdamageperlevel": 3.0,
      "attackrange": 550.0,
      "attackspeedoffset": 0.0,
      "attackspeedperlevel": 2.8,
      "crit": 0.0,
      "critperlevel": 0.0,
      "hp": 484.4,
      "hpperlevel": 80.0,
      "hpregen": 6.42,
      "hpregenperlevel": 0.55,
      "movespeed": 325.0,
      "mp": 310.6,
      "mpperlevel": 45.0,
      "mpregen": 8.09,
      "mpregenperlevel": 0.65,
      "spellblock": 30.0,
      "spellblockperlevel": 0.0
    },
    "spells": [
      {
        "name": "Mystic Shot",
        "description": "Ezreal fires a damaging bolt of energy which reduces all of his cooldowns by 1 second if it strikes an enemy unit.",
        "sanitizedDescription": "Ezreal fires a damaging bolt of energy which reduces all of his cooldowns by 1 second if it strikes an enemy unit.",
        "tooltip": "Ezreal fires a bolt of energy, dealing {{ e1 }} <span class=\"colorFF8C00\">(+{{ f3 }})</span> <span class=\"color99FF99\">(+{{ a2 }})</span> physical damage (applies on-hit effects). <br><br>Ezreal's cooldowns are reduced by {{ e2 }} second if Mystic Shot hits a target.",
        "sanitizedTooltip": "Ezreal fires a bolt of energy, dealing {{ e1 }} (+{{ f3 }}) (+{{ a2 }}) physical damage (applies on-hit effects). Ezreal's cooldowns are reduced by {{ e2 }} second if Mystic Shot hits a target.",
        "leveltip": {
          "label": [
            "Bonus Damage", "Cooldown", "Mana Cost"
          ],
          "effect": [
            "{{ e1 }} -> {{ e1NL }}", "{{ cooldown }} -> {{ cooldownnNL }}", "{{ cost }} -> {{ costnNL }}"
          ]
        },
        "image": {
          "full": "EzrealMysticShot.png",
          "sprite": "spell2.png",
          "group": "spell",
          "x": 0,
          "y": 144,
          "w": 48,
          "h": 48
        },
        "resource": "{{ cost }} Mana",
        "maxrank": 5,
        "cost": [
          28, 31, 34, 37, 40
        ],
        "costType": "Mana",
        "costBurn": "28/31/34/37/40",
        "cooldown": [
          6.0, 5.5, 5.0, 4.5, 4.0
        ],
        "cooldownBurn": "6/5.5/5/4.5/4",
        "effect": [
          null, [
            35.0, 55.0, 75.0, 95.0, 115.0
          ], [
            1.0, 1.0, 1.0, 1.0, 1.0
          ]
        ],
        "effectBurn": [
          "", "35/55/75/95/115", "1"
        ],
        "vars": [
          {
            "key": "a2",
            "link": "spelldamage",
            "coeff": [0.4]
          }
        ],
        "range": [
          1150, 1150, 1150, 1150, 1150
        ],
        "rangeBurn": "1150",
        "key": "EzrealMysticShot"
      }, {
        "name": "Essence Flux",
        "description": "Ezreal fires a fluctuating wave of energy, dealing magic damage to enemy champions, while increasing the Attack Speed of allied champions.",
        "sanitizedDescription": "Ezreal fires a fluctuating wave of energy, dealing magic damage to enemy champions, while increasing the Attack Speed of allied champions.",
        "tooltip": "Ezreal fires a wave of energy that damages all enemy champions it passes through for {{ e1 }} <span class=\"color99FF99\">(+{{ a1 }})</span> magic damage. If Ezreal or his Allied champions are hit by the wave, their Attack Speed is increased by {{ e2 }}% for 5 seconds.",
        "sanitizedTooltip": "Ezreal fires a wave of energy that damages all enemy champions it passes through for {{ e1 }} (+{{ a1 }}) magic damage. If Ezreal or his Allied champions are hit by the wave, their Attack Speed is increased by {{ e2 }}% for 5 seconds.",
        "leveltip": {
          "label": [
            "Damage", "Attack Speed % Increase", "Mana Cost"
          ],
          "effect": [
            "{{ e1 }} -> {{ e1NL }}", " {{ e2 }}% -> {{ e2NL }}%", " {{ cost }} -> {{ costnNL }}"
          ]
        },
        "image": {
          "full": "EzrealEssenceFlux.png",
          "sprite": "spell2.png",
          "group": "spell",
          "x": 48,
          "y": 144,
          "w": 48,
          "h": 48
        },
        "resource": "{{ cost }} Mana",
        "maxrank": 5,
        "cost": [
          50, 60, 70, 80, 90
        ],
        "costType": "Mana",
        "costBurn": "50/60/70/80/90",
        "cooldown": [
          9.0, 9.0, 9.0, 9.0, 9.0
        ],
        "cooldownBurn": "9",
        "effect": [
          null, [
            70.0, 115.0, 160.0, 205.0, 250.0
          ], [
            20.0, 25.0, 30.0, 35.0, 40.0
          ]
        ],
        "effectBurn": [
          "", "70/115/160/205/250", "20/25/30/35/40"
        ],
        "vars": [
          {
            "key": "a1",
            "link": "spelldamage",
            "coeff": [0.8]
          }
        ],
        "range": [
          1000, 1000, 1000, 1000, 1000
        ],
        "rangeBurn": "1000",
        "key": "EzrealEssenceFlux"
      }, {
        "name": "Arcane Shift",
        "description": "Ezreal teleports to a target nearby location and fires a homing bolt which strikes the nearest enemy unit.",
        "sanitizedDescription": "Ezreal teleports to a target nearby location and fires a homing bolt which strikes the nearest enemy unit.",
        "tooltip": "Ezreal teleports to a target nearby location and fires a homing bolt at the nearest enemy unit, dealing {{ e1 }} <span class=\"color99FF99\">(+{{ a1 }})</span> magic damage.",
        "sanitizedTooltip": "Ezreal teleports to a target nearby location and fires a homing bolt at the nearest enemy unit, dealing {{ e1 }} (+{{ a1 }}) magic damage.",
        "leveltip": {
          "label": [
            "Damage", "Cooldown"
          ],
          "effect": [
            "{{ e1 }} -> {{ e1NL }}", " {{ cooldown }} -> {{ cooldownnNL }}"
          ]
        },
        "image": {
          "full": "EzrealArcaneShift.png",
          "sprite": "spell2.png",
          "group": "spell",
          "x": 96,
          "y": 144,
          "w": 48,
          "h": 48
        },
        "resource": "{{ cost }} Mana",
        "maxrank": 5,
        "cost": [
          90, 90, 90, 90, 90
        ],
        "costType": "Mana",
        "costBurn": "90",
        "cooldown": [
          19.0, 17.0, 15.0, 13.0, 11.0
        ],
        "cooldownBurn": "19/17/15/13/11",
        "effect": [
          null, [
            75.0, 125.0, 175.0, 225.0, 275.0
          ]
        ],
        "effectBurn": [
          "", "75/125/175/225/275"
        ],
        "vars": [
          {
            "key": "a1",
            "link": "spelldamage",
            "coeff": [0.75]
          }
        ],
        "range": [
          475, 475, 475, 475, 475
        ],
        "rangeBurn": "475",
        "key": "EzrealArcaneShift"
      }, {
        "name": "Trueshot Barrage",
        "description": "Ezreal winds up for 1 second to fire a powerful barrage of energy missiles which do massive damage to each unit they pass through (deals 10% less damage to each unit it passes through).",
        "sanitizedDescription": "Ezreal winds up for 1 second to fire a powerful barrage of energy missiles which do massive damage to each unit they pass through (deals 10% less damage to each unit it passes through).",
        "tooltip": "Ezreal winds up for 1 second to fire a barrage of missiles dealing {{ e1 }} <span class=\"colorFF8C00\">(+{{ f1 }})</span> <span class=\"color99FF99\">(+{{ a1 }})</span> magic damage to each unit it passes through. However, it deals {{ e2 }}% less damage for each unit it hits (minimum {{ e3 }}%).",
        "sanitizedTooltip": "Ezreal winds up for 1 second to fire a barrage of missiles dealing {{ e1 }} (+{{ f1 }}) (+{{ a1 }}) magic damage to each unit it passes through. However, it deals {{ e2 }}% less damage for each unit it hits (minimum {{ e3 }}%).",
        "leveltip": {
          "label": ["Damage"],
          "effect": [" {{ e1 }} -> {{ e1NL }}"]
        },
        "image": {
          "full": "EzrealTrueshotBarrage.png",
          "sprite": "spell2.png",
          "group": "spell",
          "x": 144,
          "y": 144,
          "w": 48,
          "h": 48
        },
        "resource": "{{ cost }} Mana",
        "maxrank": 3,
        "cost": [
          100, 100, 100
        ],
        "costType": "Mana",
        "costBurn": "100",
        "cooldown": [
          80.0, 80.0, 80.0
        ],
        "cooldownBurn": "80",
        "effect": [
          null, [
            350.0, 500.0, 650.0
          ], [
            10.0, 10.0, 10.0
          ], [
            30.0, 30.0, 30.0
          ]
        ],
        "effectBurn": [
          "", "350/500/650", "10", "30"
        ],
        "vars": [
          {
            "key": "f1",
            "link": "bonusattackdamage",
            "coeff": [1.0]
          }, {
            "key": "a1",
            "link": "spelldamage",
            "coeff": [0.9]
          }
        ],
        "range": [
          20000, 20000, 20000
        ],
        "rangeBurn": "20000",
        "key": "EzrealTrueshotBarrage"
      }
    ],
    "passive": {
      "name": "Rising Spell Force",
      "description": "Hitting a target with any of Ezreal's abilities increases his Attack Speed by 10% for 6 seconds (effect stacks up to 5 times).",
      "sanitizedDescription": "Hitting a target with any of Ezreal's abilities increases his Attack Speed by 10% for 6 seconds (effect stacks up to 5 times).",
      "image": {
        "full": "Ezreal_RisingSpellForce.png",
        "sprite": "passive0.png",
        "group": "passive",
        "x": 96,
        "y": 96,
        "w": 48,
        "h": 48
      }
    },
  }
];
