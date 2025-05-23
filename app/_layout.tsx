import { Button } from "@react-navigation/elements";
import { Stack, useRouter } from "expo-router";
import React from "react";

const _layout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff2d2d",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: true, title: "Home" }}
      />
      <Stack.Screen
        name="register/index"
        options={{
          headerShown: true,
          animation: "ios_from_right",
          headerRight: () => {
            return (
              <Button
                onPressIn={() => {
                  router.push("/login");
                }}
              >
                login
              </Button>
            );
          },
          title: "Register",
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: "login",
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          title: "Tab One",
          headerShown: false,
          animation: "ios_from_left",
        }}
      />
    </Stack>
  );
};

export default _layout;
