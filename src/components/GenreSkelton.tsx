import { Skeleton, HStack, SkeletonCircle } from "@chakra-ui/react";

const GenreSkelton = () => {
  return (
    <>
      <HStack paddingY={2}>
        <SkeletonCircle size="10" />
        <Skeleton height="10px" width="70%" />
      </HStack>
    </>
  );
};

export default GenreSkelton;
