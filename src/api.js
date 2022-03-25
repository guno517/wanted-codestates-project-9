import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
  headers: {
    Authorization: process.env.REACT_APP_API_KEY,
    ContentType: "application/json",
  },
});

export const userData = async (nickname) => {
  const userId = await (
    await api.get(`/kart/v1.0/users/nickname/${nickname}`)
  ).data.accessId;
  // console.log(userId);
  const data = await api.get(
    `/kart/v1.0/users/${userId}/matches?start_date=&end_date= &offset=0&limit=200`
  );
  // console.log(data.data.matches[0]);
  return data.data.matches[0].matches;
};

export const detailMatch = async (matchId) => {
  const detailData = await api.get(`/kart/v1.0/matches/${matchId}`);
  return detailData.data.players;
};

export const rankData = async () => {
  const rank = await api.get(
    `/kart/v1.0/matches/all?start_date=2022-03-01&end_date=&offset=0&limit=10&match_types=7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a`
  );
  return rank.data.matches;
};

export const detailRank = async (matchId) => {
  const detailData = await api.get(`/kart/v1.0/matches/${matchId}`);
  // .then((response) => response);
  console.log(detailData.data.players);
  return detailData.data.players;
};
