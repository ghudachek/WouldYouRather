import api from "./api-config";

export const getAllQuestions = async () => {
  const resp = await api.get("/questions");
  return resp.data;
};

export const getOneQuestion = async (id) => {
  const resp = await api.get(`/question/${id}`);
  return resp.data;
};

export const postFood = async (questionData) => {
  const resp = await api.post("/questions", { question: questionData });
  return resp.data;
};

export const putFood = async (id, questionData) => {
  const resp = await api.put(`/questions/${id}`, { food: questionData });
  return resp.data;
};

export const destroyFood = async (id) => {
  const resp = await api.delete(`/questions/${id}`);
  return resp;
};
