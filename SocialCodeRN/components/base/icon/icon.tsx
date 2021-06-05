import React from 'react';
import { Home, Search } from 'react-native-feather';
interface IconsProps {
  color: string;
  width: number;
  height: number;
  name: string;
}
const Icons = (props: IconsProps) => {
  const { color, width, height, name } = props;
  const iconToReturn = () => {
    if (name === 'Home') {
      return <Home color={color} width={width} height={height} />;
    } else if (name === 'Discovery') {
      return <Search color={color} width={width} height={height} />;
    }
  };
  return iconToReturn();
};
export default Icons;
