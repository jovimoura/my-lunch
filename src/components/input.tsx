import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      multiline
      textAlignVertical='top'
      placeholderTextColor={colors.slate[400]}
      className="h-32 bg-slate-800 rounded-md py-4 px-3 font-body text-sm text-white"
      {...rest}
    />
  );
}
