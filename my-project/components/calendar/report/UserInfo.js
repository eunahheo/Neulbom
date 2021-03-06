import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";

const screenSize = Dimensions.get("screen");

const UserInfo = (props) => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const year = new Date().getFullYear() - userInfo.memberYear + 1;
  return (
    <View style={props.styles.box}>
      <Text style={props.styles.title}>
        {userInfo.memberNickname}님의 신체 정보
      </Text>

      <View style={styles.userInfoRow}>
        <Text style={styles.userInfoItemContent}>{userInfo.memberDesc}</Text>
      </View>
      <View style={styles.flexDirectionRow}>
        <View style={styles.userInfo}>
          <View style={styles.userInfoItem}>
            <Text>나이</Text>
            <Text style={styles.userInfoItemContent}>{year}세</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text>키</Text>
            <Text style={styles.userInfoItemContent}>
              {userInfo.memberHeight}cm
            </Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text>몸무게</Text>
            <Text style={styles.userInfoItemContent}>
              {userInfo.memberWeight}kg
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  flexDirectionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: screenSize.height * 0.01,
    justifyContent: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  userInfoItem: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginHorizontal: screenSize.width * 0.03,
    marginVertical: screenSize.height * 0.01,
    borderRadius: 10,
    width: screenSize.width * 0.2,
    height: screenSize.width * 0.2,
    elevation: 3,
  },
  userInfoItemContent: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  userInfoRow: {
    backgroundColor: "white",
    marginHorizontal: screenSize.width * 0.04,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    elevation: 3,
    marginTop: 10,
  },

  userInfoItemContent: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});
