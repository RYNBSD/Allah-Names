import React, { memo } from "react";
import { View, Text } from "react-native";

import type { Navigation, Name as TName } from "../types";

type Languages = "en" | "fr";

type SecondLanguageProp = {
  language: Languages;
  meaning: string;
  desc: string;
};

const SecondLanguage = memo(
  ({ language, meaning, desc }: SecondLanguageProp) => {
    return (
      <View>
        <Text>{language}</Text>
        <Text>{meaning}</Text>
        <Text>{desc}</Text>
      </View>
    );
  },
);

export default function Name({ route }: Navigation) {
  const { name, desc, transliteration, en, fr } = route.params as TName;
  const isEn = false;
  return (
    <View>
      <View>
        <Text>{name}</Text>
        <Text>{transliteration}</Text>
        <Text>{desc}</Text>
      </View>
      {isEn ? (
        <SecondLanguage language="en" meaning={en.meaning} desc={en.desc} />
      ) : (
        <SecondLanguage language="fr" meaning={fr.meaning} desc={fr.desc} />
      )}
    </View>
  );
}
