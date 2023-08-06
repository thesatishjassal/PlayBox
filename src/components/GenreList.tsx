import useGenres, { Genre } from "../hooks/useGeners";
import { Button, HStack, Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreSkelton from "./GenreSkelton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <List>
      <Heading fontSize='2xl' textAlign="left" marginBottom={3} fontWeight={500}>
        Generes
      </Heading>
      {/* {isLoading && skeleton.map((skeleton) => <GenreSkelton key={skeleton} />)} */}

      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectedGenre(genre)}
              variant="link"
              fontSize="lg"
              textAlign="left"
              whiteSpace='nowrap'
              objectFit='cover'
              fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
      {data.length == 0 && (
        <Text textAlign="left">
          No Game availble with {selectedGenre?.name} Genre!
        </Text>
      )}
    </List>
  );
};

export default GenreList;
