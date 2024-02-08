import { Link, LinkProps } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

type Props = LinkProps<string> & {
  title: string;
};

export function LinkButton({ title, ...rest }: Props) {
  return (
    <Link className="text-center" asChild {...rest}>
      <TouchableOpacity activeOpacity={0.7}>
        <Text className='text-slate-300 text-center text-base font-body'>{title}</Text>
      </TouchableOpacity>
    </Link>
  );
}
