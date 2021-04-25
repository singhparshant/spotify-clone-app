export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   token:
  //     "BQB-X5QWByPdMlafT18GWzqZeP-VtMNS5mismqgRsCGEcPRXTyxmqvpNMmMQe8ecO-hRv-1mqtcXAIHhzgnkuvLWTzt3YAienSqR7SsAQApmddlAYChiu_wAy8ZJeEgYAPo8GL2Sn_GnDG_2n7K4_7gBy1Po6n8cNur7lZCdwj_CgOKy",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
