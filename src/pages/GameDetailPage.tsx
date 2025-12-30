import ExpandableText from "@/component/ExpandableText";
import GameAttributes from "@/component/GameAttributes";
import GameScreenshots from "@/component/GameScreenshots";
import GameTrailer from "@/component/GameTrailer";
import useGame from "@/hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // by appending ! we are telling typescript that slug will never be undefined or null

  if (isLoading) return <Spinner />;

  if (error || game === undefined) throw error; // can log permenent place to log errors
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game.description_raw || ""}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
