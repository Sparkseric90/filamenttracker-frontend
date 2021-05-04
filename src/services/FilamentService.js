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
  return http.put(`/filament/${id}`, data);
};

const remove = id => {
  return http.delete(`/delete/${id}`);
};

const removeAll = () => {
  return http.delete(`/deleteall`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};
