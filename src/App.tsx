import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./component/navbar";
import GameGrid from "./component/GameGrid";
import { GenreList } from "./component/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>
      <GridItem rowSpan={1} colSpan={{ base: 2, lg: 1 }}>
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
