import bullsEye from "../assets/bulls-eye.webp";
import thumbsup from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import type { ImageProps } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}

export const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3:{src: meh, alt: "meh"},
    4:{src: thumbsup, alt: "recommended"},
    5:{src: bullsEye, alt: "exceptional"},
  }

  const roundedRating = Math.round(rating);

  return <Image  {...emojiMap[roundedRating]} boxSize={"25px"} marginTop={1}></Image>;
};
