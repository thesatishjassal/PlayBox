import { Image, SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import useGames, { Platform } from "../hooks/useGames";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { Genre } from "../hooks/useGeners";
import { GameQuery } from "../App";
import notDound from "../assets/404.gif";

interface Props {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}

export const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if(error) return <Text>{error}</Text>
  
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={3}>
      {isLoading &&
        skeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {data && data ? (
        data.map((game) => <GameCard key={game.id} game={game}></GameCard>)
      ) : (
        <Image src={notDound} />
      )}
      {data.length == 0 && (
        <Text textAlign="left">
          No Game availble with {gameQuery.platform?.name} Platform!
        </Text>
      )}
    </SimpleGrid>
  );
};

export default GameGrid;
