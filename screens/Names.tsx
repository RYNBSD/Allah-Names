import React, { memo } from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";

import { ALLAH_NAMES } from "../constant";

const Name = memo(
  ({ name, transliteration }: { name: string; transliteration: string }) => {
    return (
      <TouchableOpacity>
        <Text>{name}</Text>
        <Text>{transliteration}</Text>
      </TouchableOpacity>
    );
  },
);

export default function Names() {
  return (
    <FlatList
      data={ALLAH_NAMES}
      renderItem={({ item: { name, transliteration } }) => (
        <Name key={name} name={name} transliteration={transliteration} />
      )}
      keyExtractor={({ name }) => name}
    />
  );
}
