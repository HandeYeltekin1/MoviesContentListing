/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import HomeScreen from './src/screens/homeScreen/HomeScreen';
// import DetailScreen from './src/screens/detailScreen/DetailScreen';
// import { enableScreens } from 'react-native-screens';
// const Stack = createNativeStackNavigator();
// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'Welcome'}}
//         />
//         <Stack.Screen name="detail" component={DetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default MyStack;

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>Hande</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const navigator = createStackNavigator(
//   {
//    Home : HomeScreen,
//    Detail : DetailScreen
//   },
//   {
//     initialRouteName: "Index",
//     defaultNavigationOptions: {
//       title: "Blogs",
//     },
//   }
// );
// const App = createAppContainer(navigator);


// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import React from "react"
import {Text , StyleSheet , View } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DetailScreen from "./src/screens/detailScreen/DetailScreen";
import HomeScreen from "./src/screens/homeScreen/HomeScreen";

const navigator = createStackNavigator(
  {
    Home : HomeScreen,
    Detail : DetailScreen
  }, 
  {
    initialRouteName : 'Home',
    defaultNavigationOptions:{
      title : 'Canl?? Yay??n'
    }
  }
)
export default createAppContainer(navigator);