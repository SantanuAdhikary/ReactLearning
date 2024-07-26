import AxiosInstances from "../AxiosInstance/axiosInstance";

const courseServices = {
  createService: async (payload) => {
    await AxiosInstances.post("/course", payload);
  },
  fetchService: async () => {
    let { data } = await AxiosInstances.get("/course");
    return data;
  },
  updateService: async (id, payload) => {
    await AxiosInstances.put(`/course/${id}`, payload);
  },
  deleteService: async (id )=> {
    await AxiosInstances.delete(`/course/${id}`);
  },
  fetchId: async (id) => {
    let { data } = await AxiosInstances.get(`/course/${id}`);
    return data;
  },
};

export default courseServices;