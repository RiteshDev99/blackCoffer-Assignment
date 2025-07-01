import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomHeader = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Ionicons size={28} name="menu-outline" color="#fff" />
                </TouchableOpacity>

                <Text style={styles.title}>BWstory</Text>

                <TouchableOpacity>
                    <EvilIcons size={30} name="search" color="#fff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#0f3440",
        height: 65,
    },
    header: {
        height: 65,
        width: "100%",
        backgroundColor: "#154454",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 28,
        color: "#fff",
        fontWeight: "600",
    },
});

export default CustomHeader;
