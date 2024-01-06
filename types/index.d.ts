import "@total-typescript/ts-reset";

export type Names = {
  name: string;
  desc: string;
  transliteration: string;
  en: {
    meaning: string;
    desc: string;
  };
  fr: {
    meaning: string;
    desc: string;
  };
};
