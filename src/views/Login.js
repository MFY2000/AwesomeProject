import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Button from "../components/Button";

class Login extends Component {
  onPressRegister = () => {
    if(true){
      this.props.navigation.navigate("Register");
    }
  };  

  onPressLogin = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* brandName part */}
          <Text
            style={{
              fontSize: hp("15.25%"),
              // color:"red",
              fontSize: 70,
              fontWeight: "bold",

            }}
          >
            MFY
          </Text>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "400"
            }}
          >
            
          </Text>
        </View>
        <View
          style={{
            flex: 2
          }}
        >
          {/* Image part */}
          <ImageBackground
            source={require("../../assets/men_fashion.jpeg")}
            style={{
              flex: 1,
              width: null,
              height: hp("78%")
              // height: 550
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end"
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: hp("5%"),
                  paddingHorizontal: hp("2.5%")
                }}
              >
                <Button
                  onPress={this.onPressRegister}
                  backgroundColor="#F08C4F"
                  text="Register"
                />
                <Button backgroundColor="#5BBC9D" text="Login" onPress={this.onPressLogin}/>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default Login;
