import { View, FlatList } from "react-native";
import ReelsCard from "@/components/ReelsCard";
import tw from "twrnc";

const reelsData = [{ id: "1", videoId: "zR6Hp9dqPrk", title: "Reels 1" },
    { id: "2", videoId: "bEYsq3oP4EM", title: "Reels 2" },
    { id: "3", videoId: "bEYsq3oP4EM", title: "Reels 3" }];

const reels = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      <FlatList
        data={reelsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReelsCard videoId={item.videoId} title={item.title} />
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default reels;