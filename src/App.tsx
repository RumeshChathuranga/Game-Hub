import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./component/navbar"
import GameGrid from "./component/GameGrid"

function App() {
  return (
  <Grid
      templateRows={{base:"repeat(2)", lg:"repeat(2)"}}
      templateColumns={{base:"repeat(1)",lg:"repeat(2)"}}
    >
      <GridItem rowSpan={1} colSpan={2} >
        <NavBar></NavBar>
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}  display={{base: "none", lg: "block"}}>
        Aside
      </GridItem>
      <GridItem rowSpan={1} colSpan={{base: 2, lg: 1}} >
        <GameGrid></GameGrid>
      </GridItem>
      
    </Grid>
  );
}

export default App;
