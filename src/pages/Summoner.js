import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import SummonerTop from "../components/SummonerTop";
import SummonerIngame from "../components/SummonerIngame";
import SummonerBot from "../components/SummonerBot";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import { summonerState, infoState, userDataState } from "../atoms/SummonerAtom";

function getPlayerGames(evnet) {
  axios
    .get("http://localhost:4000/past5Games")
    .then(function (response) {
      setGameList(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
console.log(getPlayerGames);

const Summoner = () => {
  const summonerName = useRecoilValue(summonerState);
  const [data, setData] = useRecoilState(userDataState);
  const infostate = useRecoilValue(infoState);
  const getUserData = async () => {
    const response = await axios(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
    );
    const { data } = response;
    setData(data);
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container>
      <Header>
        <LogoImage className="BannerImg" src={logo} alt="로고" />
        <Box>{/* <InputForm /> */}</Box>
      </Header>
      <SummonerTop data={data} key={API_KEY} />
      {/* {infostate ? (
        <SummonerIngame userData={data} key={API_KEY} />
      ) : (
        <SummonerBot userData={data} key={API_KEY} />
      )} */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const Header = styled.div`
  background-color: gray;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  gap: 10px;
`;

const Box = styled.div`
  display: flex;
`;

const LogoImage = styled.img`
  margin-top: 10%;
  display: block;
  width: 80px;
  object-fit: scale-down;
`;

export default Summoner;
