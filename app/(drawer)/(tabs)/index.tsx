import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "expo-router";
import {DrawerActions} from "@react-navigation/native";

const IndexTab = () => {
    const  navigation = useNavigation();
    return(
        <SafeAreaView>
            <View>
                <Text
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    style={{}}
                >Discover</Text>
            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
   header:{
       height:70,
       width:'100%',
       backgroundColor:'#154454',
       },
});

export default IndexTab;
