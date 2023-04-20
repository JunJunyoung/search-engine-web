import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { summonerState } from "../atoms/SummonerAtom";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [summonerName, setSummonerName] = useRecoilState(summonerState);
  const navigate = useNavigate();
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "") return false;
      navigate("/Summoner");
    }
  };

  console.log("summonerState>>>", summonerState);
  console.log("summonerName>>>", summonerName);

  return (
    <div className="Container">
      <SearchBarWrap>
        <SummonerTextField
          id="outlined-basic"
          label="소환사 명을 입력해주세요"
          onKeyPress={onKeyPress}
          onChange={(event) => setSummonerName(event.target.value)}
        />
      </SearchBarWrap>
    </div>
  );
};

const SearchBarWrap = styled.div`
  flex-direction: row;
  width: 100%;
`;

const SummonerTextField = styled(TextField)`
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 50px;
  margin-right: 1rem;
  margin-bottom: 0.1rem;
  border-radius: 0.3rem;
  height: 100%;
  width: 100%;
`;

export default SearchBox;
