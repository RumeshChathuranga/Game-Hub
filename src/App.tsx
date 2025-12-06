import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./component/navbar";
import GameGrid from "./component/GameGrid";
import { GenreList } from "./component/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import { PlatformSelector } from "./component/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import { SortSelector } from "./component/SortSelector";
import { GameHeading } from "./component/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText?: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateRows={{ base: "repeat(2)", lg: "repeat(2)" }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem rowSpan={1} colSpan={2}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></NavBar>
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        paddingX={5}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={{ base: 2, lg: 1 }}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack gap={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onselectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
