import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    //name: Playstation
    //slug: playstation
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    max: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      <HStack>
        {platforms.map((platform) => (
          <Icon key={platform.id} as={iconMap[platform.slug]} color={"gray.500"}/>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconsList;
