import { FC } from "react";
import { FlatList, Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";

import { TEAM_RANKINGS } from "../data/ranking";
import TeamItem from "../components/TeamItem";
import Colors from "../constants/Colors";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RankingScreen: FC = () => {
  type Team = {
    name: string;
    score: number;
  };

  const sortedTeamRanking = TEAM_RANKINGS.slice().sort((a: Team, b: Team) => {
    return b.score - a.score;
  });
  const LEADERBOARD = sortedTeamRanking.slice(3);
  return (
      <View style={styles.rootContainer}>
        <LinearGradient colors={[Colors.purpleDark,Colors.purpleLight]} style={styles.winnerView}>
          {/* 2ND WINNER */}
          <View style={styles.winnerElement2}>
              <MaterialCommunityIcons name="crown" size={24} color="#E6E6E6" />
              <View style={styles.imageViewSilver}>
                <Image source={require("../assets/Images/teamImage.png")} 
                  style={styles.image}
                />
              </View>
              <Text style={styles.teamNameSilver}>{sortedTeamRanking[1].name}</Text>
              <Text style={styles.teamScoreSilver}>{sortedTeamRanking[1].score}</Text>
          </View>
          {/* 1ST WINNER */}
          <View style={styles.winnerElement1}>
              <MaterialCommunityIcons name="crown" size={30} color="#FFEC40" />
              <View style={styles.imageViewGold}>
                <Image source={require("../assets/Images/teamImage.png")} 
                  style={styles.imageGold}
                />
              </View>
              <Text style={styles.teamNameGold}>{sortedTeamRanking[0].name}</Text>
              <Text style={styles.teamScoreGold}>{sortedTeamRanking[0].score}</Text>
          </View>
          {/* 3RD WINNER */}
          <View style={styles.winnerElement3}>
              <MaterialCommunityIcons name="crown" size={24} color="#CC6C05" />
              <View style={styles.imageViewBronze}>
                <Image source={require("../assets/Images/teamImage.png")} 
                  style={styles.image}
                />
              </View>
              <Text style={styles.teamNameBronze}>{sortedTeamRanking[2].name}</Text>
              <Text style={styles.teamScoreBronze}>{sortedTeamRanking[2].score}</Text>
          </View>
        </LinearGradient>
        <View style={styles.leaderboard}>
          <FlatList
            data={LEADERBOARD}
            keyExtractor={(item) => item.name}
            renderItem={({ item, index }) => 
            ( 
               <TeamItem teamInfo={item} index={index+4}/>
            )}
          />
        </View>
      </View>
  );
};

export default RankingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.OffWhite,
  },
  winnerView: {
    flexDirection: "row",
    justifyContent: "center",
    //marginTop: 3,
    //borderRadius: 25,
    //borderWidth: 4,
    //borderColor: Colors.red,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    alignSelf: 'stretch',
    backgroundColor: Colors.purpleLight,
    elevation: 8,
    paddingBottom: 10,
  },
  winnerElement2: {
    //borderWidth: 1,
    paddingTop: 95,
    position: "relative",
    zIndex: 1,
    paddingRight: 55,
    alignItems: "center",
  },
  winnerElement1: {
    //paddingTop: 5,
    position: "absolute",
    zIndex: 2,
    alignItems: "center",
  },
  winnerElement3: {
    //borderWidth: 1,
    paddingTop: 95,
    position: "relative",
    alignItems: "center",
    paddingLeft: 55,
    zIndex: 1,
  },
  imageViewGold: {
    overflow: "hidden",
    height: 165,
    width: 165,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "#FFEC40",
    borderWidth: 6,
    elevation: 30,
    shadowColor: "#000000",
    //borderWidth: 1,
  },
  imageGold: {
    height: 165,
    width: 165,
  },
  imageViewSilver: {
    overflow: "hidden",
    height: 115,
    width: 115,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#E6E6E6",
    borderWidth: 6,
    borderRadius: 100,
    //borderWidth: 1,
  },
  imageViewBronze: {
    overflow: "hidden",
    height: 115,
    width: 115,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#CC6C05",
    borderWidth: 6,
    borderRadius: 100,
    //borderWidth: 1,
  },
  image: {
    height: 125,
    width: 125,
  },
  teamNameGold: {
    fontSize: 29,
    fontWeight: "bold",
    color: Colors.OffWhite,
  },
  teamScoreGold: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.red,
  },
  teamNameSilver: {
    fontSize: 23,
    fontWeight: "bold",
    color: Colors.OffWhite,

  },
  teamScoreSilver: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.red,
  },
  teamNameBronze: {
    fontSize: 23,
    fontWeight: "bold",
    color: Colors.OffWhite,

  },
  teamScoreBronze: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.red,
  },
  // teamScoreHeading: {
  //   color: Colors.purpleDark,
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   textAlign: "right",
  //   alignSelf: "stretch",
  //   paddingRight: 20,
  // },
  leaderboard: {
    marginVertical: 10,
    width: "100%",
    alignContent: "stretch",
    alignItems: "stretch",
    marginBottom: 10,
    paddingBottom: 10,
  },
});
