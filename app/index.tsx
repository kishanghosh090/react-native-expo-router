import { Button } from "@react-navigation/elements";
import { Link } from "expo-router";
import React from "react";
import { StatusBar, Text, View } from "react-native";

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar backgroundColor="#ff2d2d" />
      <Text>home index</Text>
      <Link href="/register" asChild>
        <Button>register</Button>
      </Link>
      <Link href="/one" asChild>
        <Button>open tab one</Button>
      </Link>
    </View>
  );
};

export default index;
