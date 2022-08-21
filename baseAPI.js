function BaseAPI() {
  axios.defaults.baseURL =
    "https://es6-asm-default-rtdb.asia-southeast1.firebasedatabase.app/";

  this.get = async (endPoint) => {
    return await axios.get(`/${endPoint}.json`);
  };

  this.post = async (endPoint, dataPost) => {
    return await axios.post(`/${endPoint}.json`, dataPost);
  };

  this.delete = async (endPoint, id) => {
    return await axios.delete(`/${endPoint}/${id}.json`);
  };

  this.put = async (endPoint, dataPut, id) => {
    return await axios.put(`/${endPoint}/${id}.json`, dataPut);
  };
}
export default BaseAPI;
