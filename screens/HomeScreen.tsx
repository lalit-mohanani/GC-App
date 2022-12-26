import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { FC, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ImageBackground,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Card from "../components/UI/CarouselCard";
import Football from "../components/SportsUpdateCards/Football";
import Cricket from "../components/SportsUpdateCards/Cricket";
import { DUMMY_CAROUSEL_DATA } from "../data/carousel_data";

type RootParamsList = {
  HomeScreen: undefined;
};

type Props = BottomTabScreenProps<RootParamsList, "HomeScreen">;

const HomeScreen: FC<Props> = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef<any>(null);

  const Dimensions = useWindowDimensions();
  const windowWidth = Dimensions.width;
  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        source={require("../assets/Images/bg.jpg")}
        style={styles.bgImage}
      >
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.carouselContainer}>
            <Carousel
              layout="default"
              data={DUMMY_CAROUSEL_DATA}
              renderItem={Card}
              sliderWidth={windowWidth - 10}
              itemWidth={windowWidth + 10}
              inactiveSlideShift={0}
              useScrollView={true}
              vertical={false}
              ref={isCarousel}
              onSnapToItem={(index) => setIndex(index)}
              contentContainerCustomStyle={{
                marginBottom: 40,
              }}
            />
            <Pagination
              dotsLength={DUMMY_CAROUSEL_DATA.length}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: "rgba(0, 0, 0, 0.92)",
                marginVertical: 0,
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              tappableDots={true}
              containerStyle={{ marginTop: -80 }}
            />
          </View>
          <View style={styles.liveContainer}>
            <Text style={styles.titleText}>Live Now</Text>
            <Football
              matchName="GC Football Finals"
              team1="FCB"
              team2="RM"
              teamLogo1={require("../assets/Images/Group13.png")}
              teamLogo2={require("../assets/Images/Group12.png")}
              score1="3"
              score2="3"
              isPenalty={true}
              penaltyScore1="5"
              penaltyScore2="3"
              time="Full Time"
              venue="SAC Football Ground"
            />
            <Cricket
              matchName="GC Cricket Finals"
              team1={{
                teamName: "India",
                runs: 120,
                wickets: 1,
                logo: require("../assets/Images/Group13.png"),
              }}
              team2={{
                teamName: "Pakistan",
                runs: 119,
                wickets: 9,
                logo: require("../assets/Images/Group12.png"),
              }}
              balls={119}
              venue="MHR Ground"
              striker={{ playerName: "V. Kohli", runs: 45, balls: 34 }}
              nonStriker={{ playerName: "S. Yadav", runs: 48, balls: 24 }}
              bowler={{ playerName: "Pak Bowler", runs: 23, wickets: 1 }}
            />
          </View>
          <View style={styles.liveContainer}>
            <Text style={styles.titleText}>Upcoming</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  carouselContainer: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
  liveContainer: {
    flex: 1,
  },
  titleText: {
    color: "#FFDB7D",
    fontSize: 25,
    marginVertical: 5,
    marginLeft: 15,
    fontWeight: "bold",
  },
});
