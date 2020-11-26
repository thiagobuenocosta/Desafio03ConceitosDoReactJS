import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const listRepositories = () => {
  return api.get(`/repositories`)
}
export const addRepositorie = () => {
  const newRepositorie = { 
    id: "123",
    url: "https://github.com/josepholiveira",
    title: "Desafio ReactJS",
    techs: ["React", "Node.js"],
  };
  return api.post(`/repositories`, newRepositorie)
}
export const removeRepositorie = (id) => {
  return api.delete(`/repositories/${id}`)
}

export default api;
