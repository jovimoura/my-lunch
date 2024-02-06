import { Text, Pressable, PressableProps } from 'react-native'
import { clsx } from 'clsx'

type Props = PressableProps & {
  title: string
  isSelected?: boolean
}
 
export function CategoryButton({ title, isSelected, ...rest }: Props) {
  return (
    <Pressable
      className={clsx('bg-slate-800 px-4 justify-center border-2 border-transparent rounded-md h-10', isSelected && "border-2 border-lime-300")}
      {...rest}
    >
      <Text className='text-slate-100 font-subtitle text-sm'>{title}</Text>
    </Pressable>
  )
}