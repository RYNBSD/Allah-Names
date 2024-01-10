import "@total-typescript/ts-reset";
import type {
  NavigationProp,
  RouteProp,
  ParamListBase,
} from "@react-navigation/native";

export type Navigation = {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
};
