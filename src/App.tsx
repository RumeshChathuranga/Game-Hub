import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./component/GameGrid";
import { GameHeading } from "./component/GameHeading";
import { GenreList } from "./component/GenreList";
import NavBar from "./component/navbar";
import { PlatformSelector } from "./component/PlatformSelector";
import { SortSelector } from "./component/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
          selectedGenreId={gameQuery.genreId}
          onSelectGenre={(genre) =>
            setGameQuery({ ...gameQuery, genreId: genre.id })
          }
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={{ base: 2, lg: 1 }}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack gap={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onselectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
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
