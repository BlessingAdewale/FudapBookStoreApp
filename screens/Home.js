import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
  ScrollView,
} from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../constants";

import { CategoryCard } from "../components";

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white}}>
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            // ListHeaderComponent={
            //   <View>
            //     {/* Header Section */}
            //     <View style={{ height: 200 }}>
            //     {renderHeader()}
            //     </View>
            //     {renderButtonSection()}
            //     <View style={{ marginTop: SIZES.padding }}>
            //     {renderCategoryHeader()}
            //     </View>
            //     {renderMyBookSection()}
            //   </View>
            // }
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
