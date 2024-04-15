import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'

const getAll = () => {
    return axios.get(`${baseUrl}/api/all`)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
  }

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const supr = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};




export default { getAll, create, update,supr };