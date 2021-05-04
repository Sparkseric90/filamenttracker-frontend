import http from "../http-common";

const getAll = () => {
  return http.get("/all");
};

const get = id => {
  return http.get(`/${id}`);
};

const create = data => {
  console.log(data)
  return http.post(`/new`, data);
};

const update = (id, data) => {
  return http.post(`/update/${id}`);
};

const remove = id => {
  return http.post(`/delete/${id}`);
};

// const removeAll = () => {
//   return http.post(`/deleteAll`);
// };

export default {
  getAll,
  get,
  create,
  update,
  remove
  // removeAll
};
