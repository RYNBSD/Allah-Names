import React from "react";
import { View, Text } from "react-native";

import { useNames } from "../hooks";

function Name({
  name,
  transliteration,
}: {
  name: string;
  transliteration: string;
}) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{transliteration}</Text>
    </View>
  );
}

export default function Names() {
  const names = useNames();

  return (
    <View>
      {names.map((name) => (
        <Name name={name.name} transliteration={name.transliteration} />
      ))}
    </View>
  );
}
