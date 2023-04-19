import { atom } from "recoil";

export interface SUMMONER {
  summoner: string;
}

export const summonerState = atom<SUMMONER>({
  key: "summonerState",
  default: { summoner: "" },
});

export const infoState = atom({
  key: "infoState",
  default: false,
});

export const userDataState = atom({
  key: "InfoState",
  default: {},
});

export const rankDataState = atom({
  key: "InfoState",
  default: [],
});
