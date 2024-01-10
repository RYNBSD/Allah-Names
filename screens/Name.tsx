import React from "react";
import { View, Text } from "react-native";

import type { Navigation, Name } from "../types";

export default function Name({ route }: Navigation) {
  console.log(route.params);
  const { name, desc, transliteration, en, fr } = route.params as Name;

  return (
    <View>
      <Text>Name</Text>
    </View>
  );
}
