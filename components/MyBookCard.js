import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";

const MyBookCard = ({categoryItem, onPress, bookCoverUrl, containerStyle }) => {
   return (
    <TouchableOpacity
          style={{
            flex: 1,
            ...containerStyle
          }}
          onPress={onPress}
        >
          {/* Book Cover */}
          <Image
            source={{ uri: bookCoverUrl}}
            resizeMode="cover"
            style={{
              width: 180,
              height: 250,
              borderRadius: 20,
            }}
          />

          {/* Book Info */}
          <View
            style={{
              marginTop: SIZES.radius,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.clock_icon}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}
            >
              3d
            </Text>

            <Image
              source={icons.page_icon}
              style={{
                marginLeft: SIZES.radius,
                width: 20,
                height: 20,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}
            >
              75%
            </Text>
          </View>
        </TouchableOpacity>
        );
};

export default MyBookCard;