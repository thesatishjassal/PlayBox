import {
  Box,
  Card,
  CardBody,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card className="skeletoncard" borderRadius={10} padding="6">
        <Skeleton height="180px" size="10"></Skeleton>
        <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
    </Card>
  );
};
