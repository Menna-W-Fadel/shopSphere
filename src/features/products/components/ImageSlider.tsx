import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useMemo, useState, useRef } from "react";
import { useAppTheme } from "@/hooks/useAppTheme";
import IconComponent from "@/components/IconComponent";
import { AppTheme } from "@/theme";
import { Product } from "@/types/products";
import { Ionicons } from "@expo/vector-icons";

export default function ImageSlider({ images }: Product) {
  const { appTheme } = useAppTheme();
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImg=()=>{
    if(activeIndex>=images.length-1) return
    setActiveIndex((prevIndex)=>prevIndex+1)
  }

  const prevImage =()=>{
     if(activeIndex<=0) return
    setActiveIndex((prevIndex)=>prevIndex-1)
  }
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: images[activeIndex] }}
        resizeMode="contain"
        width={350}
        height={300}
      />
      <View style={styles.row}>
        <View>
          <Pressable onPress={prevImage}>
            <IconComponent
              name="chevron-back"
              bgColor={appTheme.colors.surface}
              size={26}
              iconColor={appTheme.colors.primaryAction}
            ></IconComponent>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={nextImg}>
            <IconComponent
              name="chevron-forward"
              bgColor={appTheme.colors.surface}
              size={26}
              iconColor={appTheme.colors.primaryAction}
            ></IconComponent>
          </Pressable>
        </View>
      </View>

      <View
        style={[
          styles.row,
          {
            bottom: appTheme.spacing.md,
           // left: appTheme.spacing.md,
            //right: appTheme.spacing.md,
          },
        ]}
      >
        <View>
          <IconComponent
            name="ellipsis-horizontal"
            bgColor={appTheme.colors.surface}
            size={30}
            iconColor={appTheme.colors.primaryAction}
          ></IconComponent>
        </View>
        <View>
        <View style={styles.lengthContainer}>
          <Text style={styles.textStyle}>
            {activeIndex + 1}/{images.length}
          </Text>
        </View>
        </View>
      </View>
    </View>
  );
}

const createStyles = (apptheme: AppTheme) =>
  StyleSheet.create({
    container: {
      height: 250,
      width: "100%",
      overflow: "hidden",
      position: "relative",
      borderRadius: apptheme.radii.lg,
      backgroundColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
    },
    lengthContainer: {
      backgroundColor: apptheme.colors.surface,
      alignSelf:"flex-start",
      borderRadius: apptheme.radii.sm,
      justifyContent: "center",
      width:70,
      padding:apptheme.spacing.xs,
      alignItems:"center"
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
      width:"320"
    },
    textStyle:{
      color:apptheme.colors.primaryAction,
      fontSize:apptheme.typography.fontSize.xs,
      fontWeight:apptheme.typography.fontWeight.regular,
    }
  });
