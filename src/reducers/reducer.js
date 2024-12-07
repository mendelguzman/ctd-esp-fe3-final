export const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_THEME':
        return { ...state, theme: action.payload };
      case 'SET_DENTISTS':
        return { ...state, dentists: action.payload };
      case 'ADD_FAV':
        return { ...state, favs: [...state.favs, action.payload] };
      case 'REMOVE_FAV':
        return { ...state, favs: state.favs.filter(fav => fav.id !== action.payload.id) };
      default:
        return state;
    }
  };
  