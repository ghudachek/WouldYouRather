import api from "./api-config";

export const destroyUser = async (id) => {
  const resp = await api.delete(`/users/${id}`);
  return resp;
};

export const getUser = async (id) => {
  const resp = await api.get(`/user/${id}`);
  return resp.data;
};

export const getUserQuestions = async (id) => {
  const resp = await api.get(`/users/${id}/questions`);
  return resp.data;
};
