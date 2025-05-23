import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: true, title: "Tabs" }}>
      <Tabs.Screen
        name="one"
        options={{ title: "Tab One", headerShown: false }}
      />
      <Tabs.Screen name="two" />
      <Tabs.Screen
        name="posts"
        options={{
          title: "Posts",
          headerShown: false,
          // tabBarStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
};

export default _layout;
