import { Button } from "@react-navigation/elements";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>index</Text>
      <Link href="/posts/1" asChild>
        <Button>new post</Button>
      </Link>
    </View>
  );
};

export default index;
