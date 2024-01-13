import React, { memo } from "react";
import { Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

import { ALLAH_NAMES } from "../constant";
import type { Navigation } from "../types";

type NameProp = { name: string; transliteration: string; onPress: () => void };

const Name = memo(({ name, transliteration, onPress }: NameProp) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{name}</Text>
      <Text>{transliteration}</Text>
    </TouchableOpacity>
  );
});

export default function Names({ navigation }: Navigation) {
  return (
    <FlatList
      data={ALLAH_NAMES}
      renderItem={({ item }) => (
        <Name
          key={item.name}
          name={item.name}
          transliteration={item.transliteration}
          onPress={() => navigation.navigate("Name", item)}
        />
      )}
      keyExtractor={({ name }) => name}
    />
  );
}

const styles = StyleSheet.create({});
