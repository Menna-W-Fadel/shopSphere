import { View, Text, FlatList } from 'react-native'
import React,{useState,useMemo, useCallback,}from 'react';
import { useAppTheme } from '@/hooks/useAppTheme';
import { Ionicons } from '@expo/vector-icons';
import { Product, ProductVariant } from '@/types/products';
import VariantHeader from './VariantHeader';
import VariantCard from './VariantCard';


export default function VariantsSection({variants,selectedVariantId}:Product) {
    const [selectedVariant,setSelectedVariant] = useState(selectedVariantId)
  return (
    <FlatList
    data={variants}
    keyExtractor={(item)=>item.id}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({item})=><VariantCard variants={item} selectedVariant={selectedVariant} onSelect={setSelectedVariant} />}

    />
  )
}