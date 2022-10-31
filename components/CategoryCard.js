import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";

const CategoryCard = ({ containerStyle, categoryItem, onPress }) => {
  return (
    <View style={{ marginVertical: SIZES.base, marginTop: SIZES.padding }}>
      <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>

        {/* Book Cover */}
        <Image
          source={categoryItem?.imgUrl}
          resizeMode="cover"
          style={{ width: 100, height: 150, borderRadius: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCard;
