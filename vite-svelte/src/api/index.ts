import axios from "axios";

export const getGraphData = async (from: string, to: string) => {
  const { data } = await axios.get(
    "https://api.covid19api.com/total/country/japan/status/confirmed",
    {
      params: { from, to },
    }
  );

  return data;
};

// ?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z
