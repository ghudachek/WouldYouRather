import api from "./api-config";

export const getAllComments = async (id, commentData) => {
  const resp = await api.get(`/questions/${id}/comments`, {
    comment: commentData,
  });
  return resp.data;
};

export const getOneComment = async (id, id2, commentData) => {
  const resp = await api.get(`/questions/${id}/comments/${id2}`, {
    comment: commentData,
  });
  return resp.data;
};

export const postComment = async (id, commentData) => {
  const resp = await api.post(`/questions/${id}/comments`, {
    comment: commentData,
  });
  return resp.data;
};

export const destroyComment = async (id) => {
  const resp = await api.delete(`comments/${id}`);
  return resp;
};
