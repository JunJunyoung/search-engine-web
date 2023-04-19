import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import axios from "axios";
import { rankDataState, infoState } from "../atoms/summoner";

const SummonerTop = ({ data, key }) => {
  const [rankData, setRankData] = useRecoilState(rankDataState);
  const getRankData = async () => {
    const response = await axios(
      `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${data.id}?api_key=${key}`
    );
    console.log("response>>>", response);
    setRankData(response);
  };
  useEffect(() => {
    getRankData();
  }, []);
  const soloRank = rankData?.find(
    (rank) => rank.queueType === "RANKED_SOLO_5x5"
  );
  const teamRank = rankData?.find(
    (rank) => rank.queueType === "RANKED_FLEX_SR"
  );
  const RankInfo = [soloRank, teamRank];
  const [infostate, setState] = useRecoilState(infoState);
  const icons = {
    IRON: "iron",
    BRONZE: "bronze",
    SILVER: "silver",
    GOLD: "gold",
    PLATINUM: "platinum",
    DIAMOND: "diamond",
    MASTER: "master",
    GRANDMASTER: "grandmaster",
    CHALLENGER: "challenger",
  };

  return (
    <Box>
      <WrapperColOne>
        <IconBox>
          <Icon
            src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${data.profileIconId}.png`}
          />
          <Level>{data.summonerLevel}</Level>
        </IconBox>
        <div>
          <NameBox>
            <ColBox>
              <Name>{data.name}</Name>
            </ColBox>
            <Reload
              onClick={() => {
                window.location.reload();
              }}
            >
              update
            </Reload>
          </NameBox>
          <ChangeBtnBox onClick={() => setState((prev) => !prev)}>
            <WinInfo style={{ color: "#9055A2", fontWeight: "bold" }}>
              {infostate ? "MATCH" : "IN-GAME"}
            </WinInfo>
          </ChangeBtnBox>
        </div>
      </WrapperColOne>
      <WrapperColtwo>
        {RankInfo.map((info, idx) => (
          <TierBox key={idx}>
            <Img
              src={
                info
                  ? `${process.env.PUBLIC_URL}/img/${icons[info.tier]}.png`
                  : `${process.env.PUBLIC_URL}/img/provisional.png`
              }
              alt="Tier"
            />
            <TierInfo>
              <TierTitle>{idx === 0 ? "soloRank" : "flexRank"}</TierTitle>
              <InfoBox>
                <Rank tier={info?.tier}>{info ? info.tier : "Unranked"}</Rank>
                <Rank tier={info?.tier}>{info ? info.rank : ""}</Rank>
              </InfoBox>
              <WinInfo>{info?.leaguePoints} LP</WinInfo>
              {info && (
                <>
                  <WinInfo>
                    {Math.floor(
                      (info?.wins / (info?.wins + info?.losses)) * 100
                    )}
                    %
                  </WinInfo>
                  <InfoBox>
                    <WinInfo>
                      {info?.wins}
                      wins
                    </WinInfo>
                    <WinInfo>
                      {info?.losses}
                      losses
                    </WinInfo>
                  </InfoBox>
                </>
              )}
            </TierInfo>
          </TierBox>
        ))}
      </WrapperColtwo>
    </Box>
  );
};

const Box = styled.div`
  width: 98%;
  max-width: 980px;
  background-color: gray;
  border-radius: 10px;
  padding: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  box-sizing: border-box;
`;
const WrapperColOne = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const IconBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 25vw;
  height: 25vw;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
const Level = styled.h1`
  background-color: tomato;
  position: absolute;
  bottom: -20px;
  padding: 5px 10px;
  color: white;
  border-radius: 15px;
  font-family: "HBIOS-SYS";
`;
const NameBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-direction: column;
`;
const ColBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Name = styled.h1`
  font-weight: bold;
  font-family: "MonoplexKR-Regular";
  font-size: 6vw;
`;

const Reload = styled.h1`
  padding: 10px;
  background-color: red;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const WrapperColtwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: gray;
  width: 50%;
  border-radius: 10px;
`;

const TierBox = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
`;

const Img = styled.img`
  width: 20vw;
  height: 20vw;
`;

const TierInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  font-family: "MonoplexKR-Regular";
`;

const TierTitle = styled.h1`
  font-size: 12px;
  font-weight: bold;
  color: darkgray;
`;
const Rank = styled.h1`
  color: black;
  font-weight: bold;
  font-size: 4.5vw;
`;
const WinInfo = styled.h2`
  font-size: 13px;
  color: gray;
`;
const InfoBox = styled.div`
  display: flex;
  gap: 5px;
`;
const ChangeBtnBox = styled.div`
  margin-top: 5px;
  box-shadow: 1px gray;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
`;

export default SummonerTop;
