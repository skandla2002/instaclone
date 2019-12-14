import React, { Component } from "react";
import { StyleSheet, Platform } from "react-native";
import { Icon } from "native-base";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

// 하단탭에 들어갈 컴포넌트들
import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";

const AppTabNavigator = createBottomTabNavigator({
  HomeTab: { sereen: HomeTab },
  SearchTab: { screen: SearchTab },
  AddMediaTab: { screen: AddMediaTab },
  LikesTab: { screen: LikesTab },
  ProfileTab: { screen: ProfileTab }
});

const AppTabContainer = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
  // navigationOptions 코드 추가
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera" style={{ paddingLeft: 10 }} />,
    title: "Instagram",
    headerRight: <Icon name="ios-send" style={{ paddingRight: 10 }} />
  };

  render() {
    // return (
    //   <View style={StyleSheet.container}>
    //     <Text>MainScreen</Text>
    //   </View>
    // );
    return <AppTabContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
