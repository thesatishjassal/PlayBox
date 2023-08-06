import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}


const NavBar = ({onSearch}: Props) => {
  return (
    <HStack justifyContent='space-between'>
      <Link href="."><Image src={logo} boxSize="60px" className="logo" /></Link>
      <SearchInput  onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
