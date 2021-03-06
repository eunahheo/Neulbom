import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Table,
  TableWrapper,
  Cell,
  Cols,
  Col,
} from "react-native-table-component";
import { Dimensions } from "react-native";

const screenSize = Dimensions.get("screen");

const BloodSugarReport = (props) => {
  const element = (before, after) => {
    return (
      <View style={{ alignItems: "center" }}>
        {before - after === 0 ? (
          <Text style={styles.btnText}>0</Text>
        ) : before > after ? (
          <Text style={styles.btnDownText}>▼{before - after}</Text>
        ) : (
          <Text style={styles.btnUpText}>▲{after - before}</Text>
        )}
      </View>
    );
  };
  const timeText = (idx) => {
    if (idx === 0) {
      return <Text style={styles.timeText}>아침</Text>;
    } else if (idx === 1) {
      return <Text style={styles.timeText}>점심</Text>;
    } else if (idx === 2) {
      return <Text style={styles.timeText}>저녁</Text>;
    }
  };

  const tableHead = ["식전", "식후"];
  const tableData1 = [
    [
      "어제",
      props.yesterdayBloodSugar.beforeBreakfast,
      props.yesterdayBloodSugar.afterBreakfast,
    ],
    [
      "오늘",
      props.todayBloodSugar.beforeBreakfast,
      props.todayBloodSugar.afterBreakfast,
    ],
    [
      " ",
      element(
        props.yesterdayBloodSugar.beforeBreakfast,
        props.todayBloodSugar.beforeBreakfast
      ),
      element(
        props.yesterdayBloodSugar.afterBreakfast,
        props.todayBloodSugar.afterBreakfast
      ),
    ],
  ];
  const tableData2 = [
    [
      "어제",
      props.yesterdayBloodSugar.beforeLunch,
      props.yesterdayBloodSugar.afterLunch,
    ],
    [
      "오늘",
      props.todayBloodSugar.beforeLunch,
      props.todayBloodSugar.afterLunch,
    ],
    [
      " ",
      element(
        props.yesterdayBloodSugar.beforeLunch,
        props.todayBloodSugar.beforeLunch
      ),
      element(
        props.yesterdayBloodSugar.afterLunch,
        props.todayBloodSugar.afterLunch
      ),
    ],
  ];
  const tableData3 = [
    [
      "어제",
      props.yesterdayBloodSugar.beforeDinner,
      props.yesterdayBloodSugar.afterDinner,
    ],
    [
      "오늘",
      props.todayBloodSugar.beforeDinner,
      props.todayBloodSugar.afterDinner,
    ],
    [
      " ",
      element(
        props.yesterdayBloodSugar.beforeDinner,
        props.todayBloodSugar.beforeDinner
      ),
      element(
        props.yesterdayBloodSugar.afterDinner,
        props.todayBloodSugar.afterDinner
      ),
    ],
  ];

  return (
    <View style={props.styles.box}>
      <Text style={props.styles.title}>최근 혈당값 추세</Text>
      <Text style={props.styles.subTitle}>
        전날에 비해 얼마나 좋아졌을까요?
      </Text>
      {/* 아침 */}
      <View style={styles.mainView}>
        <Table style={{ flexDirection: "row" }}>
          <TableWrapper style={{ width: 80 }}>
            <Cell data={timeText(0)} style={styles.singleHead} />
            <TableWrapper style={{ flexDirection: "row" }}>
              <Col
                data={tableHead}
                style={styles.title}
                heightArr={[30, 30, 30, 30]}
                textStyle={styles.titleText}
              ></Col>
            </TableWrapper>
          </TableWrapper>
          <TableWrapper style={{ flex: 1 }}>
            <Cols
              data={tableData1}
              heightArr={[30, 30, 30]}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
      {/* 점심 */}
      <View style={styles.mainView}>
        <Table style={{ flexDirection: "row" }}>
          <TableWrapper style={{ width: 80 }}>
            <Cell data={timeText(1)} style={styles.singleHead} />
            <TableWrapper style={{ flexDirection: "row" }}>
              <Col
                data={tableHead}
                style={styles.title}
                heightArr={[30, 30, 30, 30]}
                textStyle={styles.titleText}
              ></Col>
            </TableWrapper>
          </TableWrapper>
          <TableWrapper style={{ flex: 1 }}>
            <Cols
              data={tableData2}
              heightArr={[30, 30, 30]}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
      {/* 저녁 */}
      <View style={styles.mainView}>
        <Table style={{ flexDirection: "row" }}>
          <TableWrapper style={{ width: 80 }}>
            <Cell data={timeText(2)} style={styles.singleHead} />
            <TableWrapper style={{ flexDirection: "row" }}>
              <Col
                data={tableHead}
                style={styles.title}
                heightArr={[30, 30, 30, 30]}
                textStyle={styles.titleText}
              ></Col>
            </TableWrapper>
          </TableWrapper>
          <TableWrapper style={{ flex: 1 }}>
            <Cols
              data={tableData3}
              heightArr={[30, 30, 30]}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
    </View>
  );
};

export default BloodSugarReport;

const styles = StyleSheet.create({
  mainView: { marginVertical: 5 },
  singleHead: {
    backgroundColor: "#09BC8A",
    borderRadius: 10,
    marginHorizontal: 10,
    height: 30,
    alignItems: "center",
  },
  titleText: { textAlign: "center" },
  text: { margin: 6, textAlign: "center" },
  btnUpText: {
    textAlign: "center",
    color: "red",
    textAlign: "center",
    backgroundColor: "rgba(255,0,0,0.2)",
    borderRadius: 30,
    width: 60,
  },
  btnDownText: {
    textAlign: "center",
    color: "blue",
    textAlign: "center",
    backgroundColor: "rgba(0,56,255,0.2)",
    borderRadius: 30,
    width: 60,
  },
  btnText: {
    textAlign: "center",
    color: "black",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 30,
    width: 60,
  },
  timeText: {
    color: "white",
    fontWeight: "bold",
  },
});
