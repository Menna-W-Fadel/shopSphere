import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useCategories } from '@/hooks/useCategories'
import CategoryChip from './CategoryChip'

export default function CategoriesSection() {
    const {data,error,isError,refetch,isFetching}=useCategories()
  return (
    <FlatList data={data}
    keyExtractor={(item)=>item.id}
    horizontal={true}
    renderItem={({item})=>(<CategoryChip {...item}/>)}
    showsHorizontalScrollIndicator={false}
    />

  )
}