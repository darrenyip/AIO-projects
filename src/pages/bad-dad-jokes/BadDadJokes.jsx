import { useState } from "react";
import { StyledButton, StyledCard, StyledContainer } from "./dadJokes";
import axios from "axios";
import { useQuery } from "react-query";
async function getJokeApi() {
  const res = await axios.get("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  const joke = res.data;
  return joke;
}
function BadDadJokes(props) {
  const { data, isLoading, refetch } = useQuery("joke", getJokeApi);

  return (
    <StyledContainer>
      <StyledCard>
        <div className="title">Don't Laugh Challenge</div>
        <div className="text">{isLoading ? "Loading..." : data.joke}</div>
        <StyledButton onClick={refetch}>Get Another Joke</StyledButton>
      </StyledCard>
    </StyledContainer>
  );
}

export default BadDadJokes;
