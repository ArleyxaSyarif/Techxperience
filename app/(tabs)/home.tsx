import { View, Text, Image, ScrollView,  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'
import Card from '@/components/Card'
import Card2 from '@/components/Card2'
import Card3 from '@/components/Card3'
import Program from '@/components/Program'


const home = () => {
  const cards = [
    {
      title: 'Modul Akademi',
      icon: <Ionicons name="book-outline" size={24} color="white" />
    },
    {
      title: 'Community',
      icon: <Ionicons name="people-outline" size={24} color="white" />
    },
  

  
  ]

  const cards2 = [
    {
  title: 'Event Hackton',
  icon: <Ionicons name="trophy-outline" size={24} color="white" />
},
{
  title: 'Chat CS',
  icon: <Ionicons name="chatbubble-outline" size={24} color="white" />
}
]

  return (
    <SafeAreaView style={tw`p-4 bg-[#1e1e1e] flex-1`}>
      <ScrollView>
      <View style={tw`p-2`}>
      <View style={tw`flex-row justify-between items-center`}>
        <View style={tw`w-40 h-10`}>
          <Image 
            source={require('@/assets/images/icon2.png')}
            style={tw`w-full h-full rounded-full`}
          />
        </View>
        <View style={tw`flex-row gap-4`}>
          <Ionicons name="search-outline" size={24} color="white" />
          <Ionicons name="notifications-outline" size={24} color="white" />
          <Ionicons name="person-outline" size={24} color="white" />
        </View>
      </View>
      
<ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`mt-4`}
      >
        <View style={tw`flex-row gap-4`}>
          <Image
            source={require('@/assets/images/ganjar.png')}
            style={tw`w-85 h-55 rounded-xl border border-white`}
          />
          <Image
            source={require('@/assets/images/ganjar.png')}
            style={tw`w-85 h-55 rounded-xl border border-white`}
          />
          <Image
            source={require('@/assets/images/ganjar.png')}
            style={tw`w-85 h-55 rounded-xl border border-white`}
          />
        </View>
        
      </ScrollView>

          <View style={tw`flex-row gap-2 justify-center mt-2`}>
            {cards.map((card, index) => (
              <Card key={index} title={card.title} icon={card.icon} />
            ))}
          </View>
          <View style={tw`flex-row gap-2 justify-center mt-2`}>
            {cards2.map((card, index) => (
              <Card key={index} title={card.title} icon={card.icon} />
            ))}
          </View>
                  <View style={tw`mb-4`}>
                    <View style={tw`flex-row justify-between items-center mb-5 mt-8`}>
                      <View style={tw`flex-row items-center gap-2`}>
                        <Ionicons name="book-outline" size={24} color="white" />
                        <Text style={tw`text-white text-lg font-bold`}>Mau belajar apa ni</Text>
                      </View>
                      <Text style={tw`text-white`}>Lihat Semua</Text>
                    </View>
                   

                    <View style={tw`gap-2 flex-row`}>
                      <View style={tw`gap-2`}>
                        <Card2 title="Modul Akademi" img={require('@/assets/images/foto1.png')} deskripsi="Belajar dari dasar sampai mahir" icon="play" />
                        <Card2 title="Modul Akademi" img={require('@/assets/images/ganjar.png')} deskripsi="Belajar dari dasar sampai mahir" icon="play" />
                      </View>
                      <View style={tw`gap-2`}>
                        <Card2 title="Modul Akademi" img={require('@/assets/images/ganjar.png')} deskripsi="Belajar dari dasar sampai mahir" icon="play" />                  
                        <Card2 title="Modul Akademi" img={require('@/assets/images/ganjar.png')} deskripsi="Belajar dari dasar sampai mahir" icon="play" />               
                      </View>
                    </View>
                    </View>         


                  <View style={tw`p-2`}>
                    <View style={tw`mb-4 flex flex-row items-center justify-between`}>
                        <Text style={tw`text-white text-base font-bold`}>📅 Ikuti Event Live Terdekat</Text>
                        <Text style={tw`text-white`}>Lihat Semua</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {[
                            "Hackathon",
                            "Design Web",
                            "Workshop",
                            "Hackathon",
                            "Design Web",
                            "Workshop",
                            "Hackathon",
                            "Design Web",
                            "Workshop",
                            "Hackathon",
                            "Design Web",
                            "Workshop",
                        ].map((item, index) => (
                            <View key={index} style={tw`mr-4 bg-neutral-800 px-4 py-2 rounded-1 border border-white mt-4 mb-4`}>
                                <Text style={tw`text-white`}>{item}</Text>
                            </View>
                        ))}
                    </ScrollView>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={tw`flex-row gap-4`}>
                            <Card3 img={require('@/assets/images/ganjar.png')} title="MasterClass Timothy Ronald" tgl="Hari ini, 12:00 WIB" harga="Free"></Card3>
                            <Card3 img={require('@/assets/images/ganjar.png')} title="MasterClass Timothy Ronald" tgl="Hari ini, 12:00 WIB" harga="Free"></Card3>
                        </View>
                    </ScrollView>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={tw`flex-row gap-4 mt-2`}>
                            <Card3 img={require('@/assets/images/ganjar.png')} title="MasterClass Timothy Ronald" tgl="Hari ini, 12:00 WIB" harga="Free"></Card3>
                            <Card3 img={require('@/assets/images/ganjar.png')} title="MasterClass Timothy Ronald" tgl="Hari ini, 12:00 WIB" harga="Free"></Card3>
                        </View>
                    </ScrollView>
                </View>



                <View style={tw`flex-1 bg-[#1e1e1e] mb-20`}>
                    <View style={tw`bg-[#1e1e1e] flex-row items-center justify-between p-4`}>
                        <View style={tw`flex-row items-center`}>
                            <View
                                style={tw`bg-white w-8 h-8 rounded-md flex items-center justify-center mr-2`}
                            >
                                <Text style={tw`text-black text-lg`}>17</Text>
                            </View>
                            <Text style={tw`text-white font-bold`}>Program Techxperiencee</Text>
                        </View>
                        <Text style={tw`text-white`}>Lihat Semua</Text>
                    </View>

                    <ScrollView horizontal={true} style={tw`mt-4`}>
                        <View style={tw`flex-row`}>
                            <Program
                                iconName="briefcase"
                                iconColor="green"
                                label="Techxperience Career"
                            />
                            <Program
                                iconName="building"
                                iconColor="orange"
                                label="Pengembangan Usaha"
                            />
                            <Program
                                iconName="graduation-cap"
                                iconColor="green"
                                label="Beasiswa Kuliah"
                            />
                            <Program
                                iconName="map"
                                iconColor="blue"
                                label="Techxperience Roadmap"
                            />
                        </View>
                    </ScrollView>
                </View>




                  </View>
          </ScrollView>
    </SafeAreaView>
  )
}
export default home