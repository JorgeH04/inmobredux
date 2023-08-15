import axios from 'axios';

const GET_PROPERTIES_SUCCESS = 'GET_PROPERTIES_SUCCESS';
const GET_FEATURED_SUCCESS = 'GET_FEATURED_SUCCESS';



// Acción para obtener propiedades destacadas
const getFeaturedSuccess = (featured) => ({
    type: GET_FEATURED_SUCCESS,
    featured,
  });

  export const getFeatured = () => async (dispatch) => {
    try {
      const API_URL = 'http://localhost:4000/ofertauno/uno'; // Mueve la URL aquí
      const response = await axios.get(API_URL);
      dispatch(getFeaturedSuccess(response.data));
    } catch (error) {
      console.error('Error fetching featured properties:', error);
    }
  };
  
//   export const getFeatured = (url) => async (dispatch) => {
//     try {
//       const response = await axios.get(url);
//       dispatch(getFeaturedSuccess(response.data));
//     } catch (error) {
//       console.error('Error fetching featured properties:', error);
//     }
//   };




// Acción para obtener propiedades
const getPropertiesSuccess = (properties) => ({
  type: GET_PROPERTIES_SUCCESS,
  properties,
});

export const getProperties = () => async (dispatch) => {
  try {
    const API_URL = 'http://localhost:4000/properties'; // Mueve la URL aquí
    const response = await axios.get(API_URL);
     dispatch(getPropertiesSuccess(response.data));
  } catch (error) {
    console.error('Error fetching properties:', error);
  }
};

