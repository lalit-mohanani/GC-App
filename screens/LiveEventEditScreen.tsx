import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import MainButton from "../components/MainButton";

type RootParamList = {
  LiveEventEditScreen: undefined;
  CricketLiveEditScreen: {
    id: string;
  };
  FootballLiveEditScreen: {
    id: string;
  };
  BasketballLiveEditScreen: {
    id: string;
  };
  VolleyballLiveEditScreen: {
    id: string;
  };
};

type Props = NativeStackScreenProps<RootParamList, "LiveEventEditScreen">;

const LiveEventEditScreen: FC<Props> = ({ navigation }) => {
  const [id, setId] = useState("");

  const updateLiveEvent = async () => {
    try {
      const response = await fetch(
        `https://gc-app-76138-default-rtdb.firebaseio.com/liveEvents/${id}.json`
      );
      const data = await response.json();
      console.log(data);
      switch (data.type) {
        case "Cricket":
          navigation.navigate("CricketLiveEditScreen", { id });
          break;
        case "Football":
          navigation.navigate("FootballLiveEditScreen", { id });
          break;
        case "Basketball":
          navigation.navigate("BasketballLiveEditScreen", { id });
          break;
        case "Volleyball":
          navigation.navigate("VolleyballLiveEditScreen", { id });
          break;  
        default:
          alert("Invalid ID");
      }
    } catch (error) {
      console.log(error);
      alert("Invalid ID");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        label="ID"
        value={id}
        onChangeText={(text) => setId(text)}
        mode="outlined"
        style={{ margin: 10, width: 300 }}
      />
      <MainButton
        style={{
          margin: 10,
          width: 150,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={updateLiveEvent}
      >
        Update
      </MainButton>
    </View>
  );
};

export default LiveEventEditScreen;
