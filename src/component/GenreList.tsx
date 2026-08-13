import useGameQueryStore from "@/store";
import type Genre from "@/entities/Genre";
import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Heading,
  HStack,
  Image,
  Link,
  List,
  Spinner,
  Stack,
} from "@chakra-ui/react";

export const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  if (error) return null;
  if (isLoading)
    return (
      <Spinner
        size="lg"
        color="blue.500"
        css={{ "--spinner-track-color": "colors.gray.200" }}
      />
    );
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List.Root>
        {data?.results.map((genre: Genre) => (
          <Stack key={genre.id} paddingY="8px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Link
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize={"lg"}
              >
                {genre.name}
              </Link>
            </HStack>
          </Stack>
        ))}
      </List.Root>
    </>
  );
};
