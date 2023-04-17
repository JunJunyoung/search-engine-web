import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { summonerState } from "../atoms/summoner";
import TextField from "@mui/material/TextField";
import axios from "axios";

const API_KEY = "RGAPI-3b7b2154-ce80-4fd7-b64f-66c1f441fa52";

const SearchBox = () => {
  const searchRef = useRef();
  const [summonerName, setSummonerName] = useRecoilState(summonerState);
  const clearInput = () => {
    searchRef.current.ref.clear();
    setSummonerName("");
  };

  const onPress = async () => {
    const response = await axios(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
    );
    console.log("response>>>", response);
  };

  return (
    <div className="Container">
      <SearchBarWrap>
        <SearchIcon
          source={{
            uri: "https://webstockreview.net/images/search-icon-png-4.png",
          }}
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          ref={searchRef}
        />
        <input
          ref={searchRef}
          placeholder="       검색어를 입력해 주세요"
          onChange={(text) => setSummonerName(text)}
          onSubmitEditing={onPress}
        />
        <button
          touch={summonerName}
          animation={
            summonerName.length > 0
              ? {
                  0: {
                    animation: false,
                  },
                  1: {
                    animation: "slideInRight",
                  },
                }
              : false
          }
          onPress={() => clearInput()}
        >
          <div style={{ fontSize: 16 }}>취소</div>
        </button>
      </SearchBarWrap>
    </div>
  );
};

const SearchBarWrap = styled.div`
  position: relative;
  flex-direction: row;
  width: 100%;
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 19px;
  top: 22px;
  width: 20px;
  height: 24px;
  z-index: ${({ touch }) => (touch.length > 0 ? -1 : 1)};
`;

export default SearchBox;
