import api from "./api-config";

export const getAllQuestions = async () => {
  const resp = await api.get("/questions");
  return resp.data;
};

export const getOneQuestion = async (id) => {
  const resp = await api.get(`/questions/${id}`);
  return resp.data;
};

export const postQuestion = async (questionData) => {
  const resp = await api.post("/questions", { question: questionData });
  return resp.data;
};

export const putQuestion = async (id, questionData) => {
  const resp = await api.put(`/questions/${id}`, { question: questionData });
  return resp.data;
}; //for updating color??

export const destroyQuestion = async (id) => {
  const resp = await api.delete(`/questions/${id}`);
  return resp;
};
