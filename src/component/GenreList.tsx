import { HStack, List, Image, Link, Stack, Spinner } from "@chakra-ui/react";
import type { Genre } from "@/hooks/useGenres";
import useData from "@/hooks/useData";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

export const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useData<Genre>("/genres");
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
    <List.Root>
      {data.map((genre: Genre) => (
        <Stack key={genre.id} paddingY="8px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
            />
            <Link onClick={() => onSelectGenre(genre)} fontSize={"lg"}>
              {genre.name}
            </Link>
          </HStack>
        </Stack>
      ))}
    </List.Root>
  );
};
