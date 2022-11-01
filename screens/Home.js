import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../constants";

import { CategoryCard, LoadingIndicator, MyBookCard } from "../components";

const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 18 }}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 1,
        }}
      ></View>
    </View>
  );
};

const Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const url = "https://fudap-books-api.herokuapp.com/books/";

  const getData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  function renderHeader() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        {/* Greetings */}
        <View style={{ flex: 1 }}>
          <View style={{ marginRight: SIZES.padding }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              Good Afternoon
            </Text>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              Blessing Adeleke
            </Text>
          </View>
        </View>

        {/* Points */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: 40,
            paddingLeft: 3,
            paddingRight: SIZES.radius,
            borderRadius: 20,
          }}
          onPress={() => {
            console.log("Point");
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <Image
                source={icons.plus_icon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>

            <Text
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.body3,
              }}
            >
              {" "}
              240 point
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  function renderButtonSection() {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", padding: SIZES.padding }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 70,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius,
          }}
        >
          {/* Claim */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.log("Claim")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.claim_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}
              >
                Claim
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <LineDivider />

          {/* Get Point */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.log("Get Point")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.point_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}
              >
                Get Point
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <LineDivider />

          {/* My Card */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.log("My Card")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}
              >
                My Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderMyBookSection() {
    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Book</Text>

          <TouchableOpacity onPress={() => console.log("See More")}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.lightGray,
                alignSelf: "flex-start",
                textDecorationLine: "underline",
              }}
            >
              see more
            </Text>
          </TouchableOpacity>
        </View>

        {/* Books */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          <FlatList
            data={data}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <MyBookCard
                bookCoverUrl={item.imgUrl}
                containerStyle={{
                  marginLeft: index == 1 ? SIZES.padding : 0,
                  marginRight: SIZES.base,
                }}
                categoryItem={item}
                onPress={() =>
                  navigation.navigate("BookDetail", { book: item })
                }
              />
            )}
          />
        </View>
      </View>
    );
  }

  function renderCategoryHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          paddingHorizontal: 2,
        }}
      >
        {/* Section Title */}
        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
            color: COLORS.white,
          }}
        >
          Categories
        </Text>
        {/* View All */}
        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body4,
            }}
          >
            View all
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <View>
        {isLoading ? (
          <LoadingIndicator 
          testID
          accessibilityLabel
          />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}   
            testID
            accessibilityLabel
            ListHeaderComponent={
              <View>
                <StatusBar barStyle="light-content" />
                {/* Header Section */}
                <View style={{ height: 200, paddingHorizontal: 0 }}>
                  {renderHeader()}
                  {renderButtonSection()}
                </View>

                <View style={{ paddingHorizontal: 20 }}>
                  {renderMyBookSection()}
                </View>
                <View
                  style={{ marginTop: SIZES.padding, paddingHorizontal: 24 }}
                >
                  {renderCategoryHeader()}
                </View>
              </View>
            }
            ListFooterComponent={
              <View
                style={{
                  marginBottom: 100,
                }}
              ></View>
            }
            renderItem={({ item }) => (
              <CategoryCard
                containerStyle={{ marginHorizontal: SIZES.padding }} 
                bookCoverUrl={item.imgUrl}
                categoryItem={item}
                onPress={() =>
                  navigation.navigate("BookDetail", { book: item })
                }
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
