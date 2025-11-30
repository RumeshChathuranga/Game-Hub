import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card.Root width={'300px'} overflow="hidden">
      <Skeleton height="200px" />
      <Card.Body gap="2">
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};
