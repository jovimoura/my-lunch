import { View, FlatList } from 'react-native'
import { CategoryButton } from '@/components/category-button'
import { Header } from '@/components/header'
import { CATEGORIES } from '@/utils/data/products'
import { useState } from 'react'

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0])

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory)
  }
   return (
    <View className='pt-10'>
      <Header title='Faça seu pedido!' cartQuantityItems={1} />

      <FlatList 
        data={CATEGORIES}
        keyExtractor={item => item}
        renderItem={({ item }) => <CategoryButton isSelected={item === category} title={item} onPress={() => handleCategorySelect(item)} />}
        horizontal
        className='max-w-10 mt-5'
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}