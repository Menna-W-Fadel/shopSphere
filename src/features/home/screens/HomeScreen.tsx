import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { useAppTheme } from "../../../hooks/useAppTheme";
import { type AppTheme } from "../../../theme/index";
import { useMemo } from "react";
import Navbar from "../../../components/Navbar";
import Chip from "../../../components/Chip";
import Header from "../components/Header";
import FeaturedSection from "../components/FeaturedSection";

function HomeScreen() {
  const { mode, appTheme, setMode } = useAppTheme();
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Navbar screenName="ShopSphere" />
      <Chip textContext="Curated For You" hasIcon={true} icon="leaf-outline" />
      <Header />
      <FeaturedSection/>
    </View>
      </ScrollView>
  );
}

const createStyles = (appTheme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    headerStyle: {
      color: appTheme.colors.textPrimary,
      fontSize: 20,
    },
  });

export default HomeScreen;


 {/*             
            <Text style={styles.headerStyle}> current mode is {mode}</Text>
            <Pressable onPress={()=>setMode('light')}>
                <Text style={styles.headerStyle}> set light mode</Text>
            </Pressable>
            <Pressable onPress={()=>setMode('dark')}>
                <Text style={styles.headerStyle}> set dark mode</Text>  
            </Pressable> */}