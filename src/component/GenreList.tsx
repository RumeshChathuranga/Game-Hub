import { HStack, List, Image ,Text, Stack } from "@chakra-ui/react";
import type { Genre } from "@/hooks/useGenres";
import useData from "@/hooks/useData";
import getCroppedImageUrl from "@/services/image-url";

export const GenreList = () => {
  const { data } = useData<Genre>("/genres");
  return (
    <List.Root >
      {data.map((genre: Genre) => (
        <Stack key={genre.id} paddingY='8px'>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
            />
            <Text fontSize={'lg'}>{genre.name}</Text>
          </HStack>
        </Stack>
      ))}
    </List.Root>
  );
};
