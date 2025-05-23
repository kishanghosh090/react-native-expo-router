import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: true,
        title: "Posts",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="/posts/[id]"
        options={{ title: "New post", presentation: "card" }}
      />
    </Stack>
  );
};

export default _layout;
