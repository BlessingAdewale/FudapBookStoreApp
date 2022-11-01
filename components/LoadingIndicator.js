import React from 'react';
import { View, Text } from 'react-native';
import ContentLoader, {
    FacebookLoader,
    InstagramLoader,
    Bullets
  } from "react-native-easy-content-loader";

  import { COLORS } from "../constants";

export default function LoadingIndicator(accessibilityLabel, testID) {
  return (
   
<ContentLoader active listSize={4} primaryColor={COLORS.primary} animationDuration={50} />


    

  )
}
