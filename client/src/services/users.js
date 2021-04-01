export const destroyUser = async (id) => {
  const resp = await api.delete(`/users/${id}`);
  return resp;
};
