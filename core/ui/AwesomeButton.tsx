import { Text, TouchableOpacity, View, GestureResponderEvent } from "react-native";

interface AwesomeButtonProps {
  title: string;
  color?: string;
  backgroundColor?: string;
  bold?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

export const AwesomeButton = ({
  title,
  color = "#000",
  backgroundColor = "#f1f1f1",
  bold = false,
  onPress,
}: AwesomeButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: 20,
          backgroundColor,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color,
            textAlign: "center",
            fontWeight: bold ? "900" : "normal",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
