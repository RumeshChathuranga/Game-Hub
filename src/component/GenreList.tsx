import useGenres from "@/hooks/useGenres";
import { Box } from "@chakra-ui/react";

export const GenreList = () => {
  const { genres } = useGenres();
  return (
    <Box as="ul" listStylePosition="inside">
      {genres.map((genre) => (<li key={genre.id}>{genre.name}</li>))}
    </Box>
  );
};
