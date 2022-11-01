import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";

const CategoryCard = ({ containerStyle, categoryItem, onPress, bookCoverUrl, accessibilityLabel }) => {
  return (
    <View style={{ marginVertical: SIZES.base, marginTop: SIZES.padding, paddingHorizontal: 24 }} >
      <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>

        {/* Book Cover */}
         <Image
          source={{ uri:bookCoverUrl}}
          resizeMode="cover"
          style={{ width: 100, height: 150, borderRadius: 10 }}
        /> 

        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        {/* Book name and author */}
        <View>
        <Text style={{ paddingRight: SIZES.padding, ...FONTS.h2, color: COLORS.white }} accessibilityLabel="title">{categoryItem.title}</Text>
        <Text style={{ ...FONTS.h3, color: COLORS.lightGray }} accessibilityLabel="author's name">{categoryItem.author}</Text>
        </View>
        {/* Book Info */}
        <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                                <Image
                                    source={icons.page_filled_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{categoryItem.pages}</Text>

                                <Image
                                    source={icons.read_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.base}}>{categoryItem.published}</Text>
                            </View>
        </View>

       
      </TouchableOpacity>
                                  

    </View>
  );
};

export default CategoryCard;
