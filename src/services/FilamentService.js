import http from "../http-common";

const getAll = () => {
  return http.get("/all");
};

const get = id => {
  return http.get(`/${id}`);
};

const create = data => {
  return http.post("new/1", data);
};

const update = (id, data) => {
  return http.put(`/filament/1`, data);
};

const remove = id => {
  return http.delete(`/delete/1`);
};

const removeAll = () => {
  return http.delete(``);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};
