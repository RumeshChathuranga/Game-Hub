import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card.Root overflow="hidden">
      <Skeleton height="200px" />
      <Card.Body gap={3}>
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};
