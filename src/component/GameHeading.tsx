import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react"

interface Props {
    gameQuery?: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
    let heading = `${gameQuery?.platform?.name || ""} ${gameQuery?.genre?.name || ""} Games`;
  return (
    <Heading fontSize="5xl" marginY={5} >{heading || "Game Hub"}</Heading>
  )
}
