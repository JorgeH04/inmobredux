const BASE_URL = 'http://localhost:4000';


export const fetchProperties = async (page, pageSize) => {
  try {
    const response = await fetch(`${BASE_URL}/properties?page=${page}&pageSize=${pageSize}`);
    if (!response.ok) {
      throw new Error('Error fetching properties');
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};



export const getPaginatedData = (state) => {
    const { data, page, pageSize } = state;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  };