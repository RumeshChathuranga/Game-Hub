import ExpandableText from "@/component/ExpandableText";
import useGame from "@/hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // by appending ! we are telling typescript that slug will never be undefined or null

  if (isLoading) return <Spinner />;

  if (error) throw error; // can log permenent place to log errors
  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw || ""}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
