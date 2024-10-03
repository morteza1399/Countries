export const useCountryApi = async () => {
  const api = useApi();
  const { data } = await api({
    method: "GET",
    url: "/country",
  });

  return data;
};
