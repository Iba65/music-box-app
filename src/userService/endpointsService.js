import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const getAll = async (alias, setRespGetAll) => {
  const request = await axios.get(baseURL+alias)
  const response = request;
  setRespGetAll(response);
}
const getImgArtist = async (alias, id, setRespGetAll) => {
  const request = await axios.get(`${baseURL}${alias}/${id}`)
  const response = request;
  setRespGetAll(response);
}
const getArtistDetails = async (alias, idArtist, setRespGetArtistDetails) => {
  const request = await axios.get(`${baseURL}${alias}/${idArtist}`)
  const response = request;
  setRespGetArtistDetails(response);
}

const getAllAlbum = async (alias, setRespGetAllAlbum) => {
  const request = await axios.get(baseURL+alias)
  const response = request;
  setRespGetAllAlbum(response);
}
const getArtistAlbums = async (alias, idArtist, setRespGetArtistAlbums) => {
  const request = await axios.get(`${baseURL}${alias}/${idArtist}`)
  const response = request;
  setRespGetArtistAlbums(response);
}
const getSongsAlbums = async (alias, idA, nomA, setRespGetSongstAlbums) => {
  const request = await axios.get(`${baseURL}${alias}/${idA}/${nomA}`)
  const response = request;
  setRespGetSongstAlbums(response);
}

export {
  getAll,
  getAllAlbum,
  getArtistDetails,
  getImgArtist,
  getArtistAlbums,
  getSongsAlbums
};