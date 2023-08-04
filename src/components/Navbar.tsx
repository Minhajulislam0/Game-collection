import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorToggleSwitch from "./ColorToggleSwitch";

function Navbar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorToggleSwitch />
    </HStack>
  );
}

export default Navbar;
