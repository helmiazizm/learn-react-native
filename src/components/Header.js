import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

const Header = ({styles, title}) => {
  const [isShowingText, setIsShowingText] = useState(true);

  useEffect(() => {
    const toggle = setInterval(() => {
      setIsShowingText(!isShowingText);
    }, 1000);
    return () => clearInterval(toggle);
  });

  if (!isShowingText) {
    return <Text style={styles.header}>Ratio'd</Text>;
  }

  return <Text style={styles.header}>{title}</Text>;
};

export default Header;
