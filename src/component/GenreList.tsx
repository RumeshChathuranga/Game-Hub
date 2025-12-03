import { Box } from "@chakra-ui/react";
import type { Genre } from "@/hooks/useGenres";
import useData from "@/hooks/useData";

export const GenreList = () => {
  const { data } = useData<Genre>('/genres');
  return (
    <Box as="ul" listStylePosition="inside">
      {data.map((genre: Genre) => (<li key={genre.id}>{genre.name}</li>))}
    </Box>
  );
};
