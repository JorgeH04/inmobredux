import { combineReducers } from 'redux';

const featuredReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_FEATURED_SUCCESS':
        return action.featured;
      default:
        return state;
    }
  };

const propertiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_PROPERTIES_SUCCESS':
      return action.properties;
    default:
      return state;
  }
};



const rootReducer = combineReducers({
  properties: propertiesReducer,
  featured: featuredReducer,
});

export default rootReducer;