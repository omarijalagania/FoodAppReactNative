import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton, HeaderButtons } from 'react-navigation-header-buttons';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CustomHeaderButton = (props) => (
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === 'android' ? Colors.primaryColor : 'white'}
  />
);

export const CustomHeaderButtons = (props) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton} {...props} />
  );
};

export { Item } from 'react-navigation-header-buttons';
