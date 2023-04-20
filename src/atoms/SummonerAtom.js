import { atom } from "recoil";

export const summonerState = atom({
  key: "summonerState",
  default: {},
});

export const infoState = atom({
  key: "infoState",
  default: false,
});

export const userDataState = atom({
  key: "userDataState",
  default: {},
});

export const rankDataState = atom({
  key: "rankDataState",
  default: [],
});
