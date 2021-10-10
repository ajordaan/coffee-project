import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      beans: {
        id: "beans",
        intro: "This is a page about coffee beans.",
        details: [
          {
            id: "father",
            heading: "Father Coffee",
            text:
              "Diego's name has appeared on a lot of our boxes in the last year. We just can't get enough of the distinct coffees the team at El Paraíso are producing. And, our 6th release from the, a natural processed castillo, is no different. Raspberry, peach, sweet melon notes dominate up front before leading to cacao on the finish. A superb natural with a cleanliness that should come as no surprise from a producer that does nothing but reset expectations. NB:While an absolute banger in its own right, this lot is not part of our Special Release genre as Diego's coffees typically are. We'll have more of his signature Hyperprocessed lots coming in the next few months.Diego's name has appeared on a lot of our boxes in the last year. We just can't get enough of the distinct coffees the team at El Paraíso are producing. And, our 6th release from the, a natural processed castillo, is no different. Raspberry, peach, sweet melon notes dominate up front before leading to cacao on the finish. A superb natural with a cleanliness that should come as no surprise from a producer that does nothing but reset expectations. NB:While an absolute banger in its own right, this lot is not part of our Special Release genre as Diego's coffees typically are. We'll have more of his signature Hyperprocessed lots coming in the next few months.",
            active: true,
          },
          {
            id: "origin",
            heading: "Origin Coffee Roasters",
            text:
              "Origin Carmo do Paranaíbe, Cerrado Mineiro Owner Pedro Humberto Veloso Altitude 1,132 masl Varietals Yellow Catuaí Processing Natural Flavours thick caramel, roasted cashew nuts, yellow cherries, Coca Cola finish Acidity soft apple and orange Body coconut milk Roast medium–light Suggested Brewing pourover, Chemex, Aeropress, siphon",
            active: true,
          },
          {
            id: "rosetta",
            heading: "Rosetta Roastery",
            text:
              "Over the years, we've released a handful of 'reserve' coffees - unique gems that help showcase the diversity that exists within coffee, as well as the flavour potential that can be achieved when the stars align (and people work incredibly hard). Our first reserve, in 2011, was from Hacienda La Esmeralda. This is our third release from the farm; a worthy member of the triumvirate, and a nostalgic nod to a coffee that astounded us and many of our early supporters. In 2004 Price Peterson and his family, owners of Hacienda La Esmeralda, created waves in the coffee community when one of their lots smashed the record for the most expensive coffee to ever be bought on auction. They'd discovered two types of of the Geisha variety on their farm a little while earlier - and luck had them pick the better one to focus on cultivating. Geisha coffee had been brought to Central America from Ethiopia in the 1950s, after being discovered by a British consul in the West Arsi region of Ethiopia. The reason it was selected was purely for its disease resistance properties. The consul was selecting seeds from trees that had withstood a severe coffee leaf rust disease outbreak; in fact, a botanist describing the cultivar at the time noted its 'very poor cup quality'. We're thankful that fate had a long view, and brought this coffee to the worlds' attention again - this time when the distinctive, floral aromatics and delightful fruit notes it boasts are cup qualities that are lauded and saught after.",
            active: true,
          },
        ],
      },
      machines: {
        id: "machines",
        intro: "This is a page about coffee machines.",
        details: [
          {
            id: "la-marzocco",
            heading: "La Marzocco",
            text: "A legendary brand in the industry",
            active: true,
          },
          {
            id: "breville",
            heading: "Breville",
            text: "Breville is no stranger to the coffee world.",
            active: true,
          },
          {
            id: "rancilio",
            heading: "Rancilio",
            text: "You can't go wrong with a good ol' Rancilio machine.",
            active: true,
          },
          {
            id: "specht",
            heading: "Specht",
            text:
              "Specht is for the coffee fanatics. From custom colours to handmade wooden finishes, these machines are nothing short of luxurious.",
            active: true,
          },
        ],
      },

      manualBrews: {
        id: "manual-brews",
        intro: "This is a page about manual coffee brewing methods.",
        details: [
          {
            id: "aeropress",
            heading: "Aeropress",
            text: "Some more Aeropress info.",
            active: true,
          },
          {
            id: "brew-time",
            heading: "Brew time",
            text: "Info on brew time and all that goodness.",
            active: true,
          },
          {
            id: "grind-size",
            heading: "Grind size",
            text: "Grind size can make or break your cup.",
            active: true,
          },
          {
            id: "water-temp",
            heading: "Water temperature",
            text: "Info on how much you should heat your water",
            active: true,
          },
          {
            id: "method",
            heading: "Method",
            text:
              "To mix or not to mix is the question and even then, swirl or stir?",
            active: true,
          },
          {
            id: "v60",
            heading: "V60",
            text: "Some V60 info.",
            active: true,
          },
          {
            id: "chemex",
            heading: "Chemex",
            text: "Some Chemex info.",
            active: true,
          },
          {
            id: "french-press",
            heading: "French Press",
            text: "Some French Press info.",
            active: true,
          },
        ],
      },
      searchArray: [""],
      search: "",
    };
  },
  mutations: {
    updateSearch(state, payload) {
      state.search = payload;
      for (let i = 0; i < state.beans.length; i++) {
        state.beans[i].active = false;
      }
    },
    filterSearch(state) {
      for (let i = 0; i < state.beans.length; i++) {
        if (
          state.beans[i].text.toLowerCase().includes(state.search.toLowerCase())
        ) {
          state.beans[i].active = true;
        }
      }
    },
  },
});

export default store;
