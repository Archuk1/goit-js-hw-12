import axios from "axios";

export default async function getImagesByQuery(query, page){
  const response = await axios.get(`https://pixabay.com/api/`, {
  params: {
    key: '53395315-8c17e52e5e4d7b2c0ffc17b33',
    q: query,
    image_type: 'photo',
    safesearch: true,
    orientation: 'horizontal',
    page: page,
    per_page: 15

    
  }
 })
 return response.data;
}

