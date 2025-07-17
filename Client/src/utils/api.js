import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL ; 
export const postData = async (url , formData)=>{
    try {
        const response = await fetch(apiUrl + url  ,{
            method : 'POST' , 
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem('accessToken') || ''}`, 
                'Content-Type'  : 'application/json' , 
             },
             body :JSON.stringify(formData)
        });

         if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Request failed');
    }
    const data = await response.json();
    return data;
    } catch (error) {
        console.log(error.message) ; 
        throw error ; 
    }
} 



export const fetchDataFromApi = async (url, options = {}) => {
  try {
    const token = localStorage.getItem('accessToken');

    const response = await axios({
      method: 'GET',
      url: apiUrl + url,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      data: options.body || null,
      withCredentials: options.withCredentials || false,
    });

    return response.data;
  } catch (err) {
    console.error('API Fetch Error:', err);
    throw err;
  }
};
