import { atom } from "recoil";

export interface SUMMONER {
  summoner: string;
}

export const summonerState = atom<SUMMONER>({
  key: "summonerState",
  default: { summoner: "" },
});
