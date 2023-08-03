import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGmesResponse {
  count: number;
  results: string;
}

export const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  console.log(games)

  useEffect(() => {
    apiClient
      .get<FetchGmesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <ul>{games && games.map((game) => <li key={game.id}>{game.name}</li>)}</ul>
  );
};

export default GameGrid;