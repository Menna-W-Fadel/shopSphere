import { View, Image,StyleSheet} from 'react-native';
import React from 'react';
import{images}from "../constants/images";
import { radii ,spacing} from '../theme';
export default function AvatarPhoto() {
  return (
    <View style={styles.container}>
      <Image source={images.profilePhoto} style={styles.image}/>
    </View>
  )
}

const styles =StyleSheet.create({
  container:{
    borderRadius:radii.lg,
    width:spacing.xl,
    height:spacing.xl,
    marginRight:spacing.md,
  },
  image:{
    height:spacing.xxxl,
    width:spacing.xxxl,
    borderRadius:radii.lg,
  }
})