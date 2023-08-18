import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorToggleSwitch from "./ColorToggleSwitch";
import SearchInput from "./SearchInput";

function Navbar() {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorToggleSwitch />
    </HStack>
  );
}

export default Navbar;
