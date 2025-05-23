import { Stack, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const post = () => {
  // const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    const parent = navigation.getParent();
    // console.log(parent);

    // Hide tab bar
    parent?.setOptions({
      tabBarStyle: { display: "none" },
    });

    return () => {
      // Restore tab bar when leaving the screen
      parent?.setOptions({
        tabBarStyle: undefined,
      });
    };
  }, [navigation]);

  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Post",
          presentation: "modal",
        }}
      />

      <Text>post</Text>
    </View>
  );
};

export default post;
