import { useState } from "react";
import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGeners";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSlector from "./components/SortSelector";
import "./App.css";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5} textAlign="left">
              <HStack spacing={5} marginLeft={2} marginBottom={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSlectedPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
                <SortSlector
                  onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} sortOrder={gameQuery.sortOrder}                />
              </HStack>
              <GameGrid
                // selectedPlatform={gameQuery.platform}
                // selectedGenre={gameQuery.genre}
                gameQuery={gameQuery}
              />
            </Box>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
