import { localTradeData } from "../data/main.js";
import { localTradeItems } from "../data/items.js";

export const getData = (key, data) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }

  return data;
};

export const getTradeData = () => getData("lscache-trade2data", localTradeData);
export const getTradeItems = () => {
  const data = getData("lscache-trade2items", localTradeItems);

  const result = {
    weapon: [],
    weapon2: [],

    amulet: [],
    ring: [],
    belt: [],

    helmet: [],
    gloves: [],
    armor: [],

    boots: [],

    flaskLife: [],
    flaskMana: [],
    charm: [],

    currency: [],
    gem: [],
    jewel: [],
    map: [],
    sanctum: [], // relic
  };

  const assign = (entries, links) => {
    for (const elm of entries) {
      const { type } = elm;
      const len = links.length ?? 4;
      const key = links[type.substring(type.length - len).trim()];

      if (key === undefined) {
        console.warn(`The next type is unidentified: ${type}`);
        continue;
      }

      result[key].push(elm);
    }
  };

  for (const item of data) {
    switch (item.id) {
      case "currency":
      case "gem":
      case "jewel":
      case "map":
      case "weapon":
      case "sanctum":
        result[item.id] = item.entries;
        break;
      case "accessory":
        assign(item.entries, { ulet: "amulet", Ring: "ring", Belt: "belt" });
        break;

      case "flask":
        const links = {
          harm: "charm",
          "Life Flask": "flaskLife",
          "Mana Flask": "flaskMana",
        };

        for (const elm of item.entries) {
          const { type } = elm;
          const key = links[type.substring(type.length - 4).trim()];
          const key2 = links[type.substring(type.length - 10).trim()];

          if (key === undefined && key2 === undefined) {
            console.warn(`The next type is unidentified: ${type}`);
            continue;
          }

          result[key ?? key2].push(elm);
        }
        break;

      case "armour":
        assign(item.entries, {
          arge: "weapon2",
          ield: "weapon2",
          iver: "weapon2",
          ocus: "weapon2",

          Cap: "helmet",
          clet: "helmet",
          iara: "helmet",
          helm: "helmet",
          Helm: "helmet",
          Hood: "helmet",
          Mask: "helmet",
          rown: "helmet",
          sage: "helmet",

          cers: "gloves",
          itts: "gloves",
          lets: "gloves",
          oves: "gloves",
          raps: "gloves",
          ttes: "gloves",
          uffs: "gloves",

          alia: "armor",
          ents: "armor",
          cket: "armor",
          Coat: "armor",
          Garb: "armor",
          late: "armor",
          Mail: "armor",
          ment: "armor",
          mour: "armor",
          ntle: "armor",
          rass: "armor",
          Robe: "armor",
          Vest: "armor",

          aves: "boots",
          dals: "boots",
          hoes: "boots",
          ings: "boots",
          pers: "boots",
          oots: "boots",
          sses: "boots",
          tons: "boots",
        });
        break;
    }
  }

  return result;
};
