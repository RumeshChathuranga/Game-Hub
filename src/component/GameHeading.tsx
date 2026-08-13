import useGameQueryStore from "@/store";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

export const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((p) => p.id === platformId);

  let heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading fontSize="5xl" marginY={5}>
      {heading || "Game Hub"}
    </Heading>
  );
};
