import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Footer from "./Footer";
const Welcome = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white", height: 700 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{ alignItems: "center", fontSize: 30, color: "#939393" }}
          >
            Welcome to
          </Text>
        </View>
        <View style={styles.imagestyler}>
          <Image
            style={{
              width: 140,
              position: "relative",
              left: 100,
              marginBottom: 0,
              height: 90,
              marginTop: 10,
            }}
            source={require("../assets/beatle_logo.png")}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{ alignItems: "center", fontSize: 30, color: "#939393" }}
          >
            BEATLE SURVEY
          </Text>
        </View>
        <View style={styles.story}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 30,
              backgroundColor: "#56CDD3",
              width: "99%",
              borderTopLeftRadius: 32,
              borderTopRightRadius: 32,
              position: "absolute",
            }}
          >
            <Text style={{ fontSize: 22, color: "white" }}>
              The story of our company
            </Text>
          </View>
          <View
            style={{
              top: 20,
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 20,
            }}
          >
            <Text style={{ fontSize: 16, padding: 20, color: "grey" }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Text>
          </View>
        </View>
        <View
          style={{
            marginBottom: 30,
            // alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={styles.roundbutton}
            onPress={() => navigation.navigate("Info")}
          >
            <Text style={{ fontSize: 25, color: "white" }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  imagestyler: {
    height: 110,
  },
  story: {
    margin: 20,
    // maxHeight: "60%",
    // minHeight: "50%",
    bottom: 0,
    backgroundColor: "#CCCCCC",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: "center",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  roundbutton: {
    width: 120,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#369398",
    marginLeft: 120,
  },
});
export default Welcome;
