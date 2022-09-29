import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const getAll = async (alias, setRespGetAll) => {
    const request = await axios.get(baseURL+alias)
    const response = request;
    setRespGetAll(response);
  }

export default getAll;