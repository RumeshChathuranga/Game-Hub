import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "./component/GameGrid";
import { GameHeading } from "./component/GameHeading";
import { GenreList } from "./component/GenreList";
import NavBar from "./component/navbar";
import { PlatformSelector } from "./component/PlatformSelector";
import { SortSelector } from "./component/SortSelector";

function App() {
  return (
    <Grid
      templateRows={{ base: "repeat(2)", lg: "repeat(2)" }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem rowSpan={1} colSpan={2}>
        <NavBar></NavBar>
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        paddingX={5}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList />
      </GridItem>
      <GridItem rowSpan={1} colSpan={{ base: 2, lg: 1 }}>
        <Box paddingLeft={2}>
          <GameHeading></GameHeading>
          <HStack gap={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
