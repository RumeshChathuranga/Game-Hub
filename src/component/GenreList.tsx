import { HStack, List, Image, Text, Stack, Spinner } from "@chakra-ui/react";
import type { Genre } from "@/hooks/useGenres";
import useData from "@/hooks/useData";
import getCroppedImageUrl from "@/services/image-url";

export const GenreList = () => {
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
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </Stack>
      ))}
    </List.Root>
  );
};
