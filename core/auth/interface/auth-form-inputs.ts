import { type Ionicons } from "@expo/vector-icons";
import { type TextInputProps } from "react-native";


export interface InputField<T> extends TextInputProps {
    name: keyof T & string;
    icon?: keyof typeof Ionicons.glyphMap;
}