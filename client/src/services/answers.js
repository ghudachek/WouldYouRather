import api from "./api-config";
//GET
export const getAnswers = async () => {
  const resp = await api.get("/answers");
  return resp.data;
};

//POST
// :question_id
export const postAnswer = async (id, answerData) => {
  const resp = await api.post(`/questions/${id}/answers`, {
    answer: answerData,
  });
  return resp.data;
};

//PUT
//needs id of answer
export const putAnswer = async (id, answerData) => {
  const resp = await api.put(`/answers/${id}`, {
    answer: answerData,
  });
  return resp.data;
};
