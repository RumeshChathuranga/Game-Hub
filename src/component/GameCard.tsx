import type { Game } from "../hooks/useGames"
import { Button, Card, Image, Text } from "@chakra-ui/react"


interface Props{
    game: Game
}
export const GameCard = ({game}: Props) => {
  return (
    <Card.Root maxW="sm" overflow="hidden" borderRadius={"10px"}>
      <Image
        src={game.background_image}
      />
      <Card.Body gap="2">
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
      </Card.Body>
      
    </Card.Root>
  )
}
