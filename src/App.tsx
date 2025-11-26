import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./component/navbar"


function App() {
  return (
  <Grid
      templateRows={{base:"repeat(2, 1fr)", lg:"repeat(2,1fr)"}}
      templateColumns={{base:"repeat(1, 1fr)",lg:"repeat(2,1fr)"}}
    >
      <GridItem rowSpan={1} colSpan={2} >
        <NavBar></NavBar>
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}  display={{base: "none", lg: "block"}}>
        Aside
      </GridItem>
      <GridItem rowSpan={1} colSpan={{base: 2, lg: 1}} >
        Main
      </GridItem>
      
    </Grid>
  );
}

export default App;
