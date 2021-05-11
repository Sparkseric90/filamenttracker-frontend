import https from "../http-common";

const getAll = () => {
  return https.get("/all");
};

const get = id => {
  return https.get(`/${id}`);
};

const create = data => {
  console.log(data)
  return https.post(`/new`, data);
};

const update = (id, data) => {
  return https.post(`/update/${id}`, data);
};

const remove = id => {
  return https.post(`/delete/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove
};
