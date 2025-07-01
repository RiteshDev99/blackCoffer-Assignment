import { Drawer } from "expo-router/drawer";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    
    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={{
                alignItems: 'center',
                padding: 0,
                margin: 0,
                paddingLeft: 0,
                marginLeft: 0,
            }}
            style={{ padding: 0, margin: 0 }}
        >
            <View style={styles.userInfo}>
                <View style={styles.bgWrapper}>
                    <Image
                        source={{
                            uri: 'https://static.vecteezy.com/system/resources/thumbnails/006/654/400/small_2x/abstract-blue-digital-particles-wave-and-digital-data-network-connections-for-technology-background-concept-communication-or-social-media-connection-background-photo.jpg',
                        }}
                        style={styles.bgImg}
                    />
                </View>

                <View style={styles.headerContent}>
                    <View style={styles.userProfile}>
                        <SimpleLineIcons size={45} name="user" color="#154354" />
                    </View>
                    <Text style={styles.headerText}>Ritesh Chaudhary</Text>
                    <Text style={styles.headerText}>Itwa Up</Text>
                </View>
            </View>

            <View style={{ flex: 1, width: 300 }}>
                <DrawerItem
                    icon={() => <Ionicons size={25} name="home-outline" />}
                    label="Home"
                    labelStyle={{ color: '#000' }}
                    style={[
                        styles.drawerItem,
                    ]}
                    onPress={() => {
                        router.push("/(drawer)/(tabs)");
                    }}
                />

                <DrawerItem
                    icon={() => <SimpleLineIcons size={25} name="user" />}
                    label="Profile"
                    labelStyle={{ color: '#000' }}
                    style={[
                        styles.drawerItem,
                    ]}
                    onPress={() => {
                        router.push("/(drawer)/(tabs)/profile");
                    }}
                />
            </View>
        </DrawerContentScrollView>
    );
};

export default function Layout() {
    return (
        <Drawer
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: 300,
                    backgroundColor: '#fff',
                },
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        />
    );
}

const styles = StyleSheet.create({
    userInfo: {
        height: 140,
        width: 300,
        borderBottomRightRadius: 10,
        position: 'relative',
    },
    bgWrapper: {
        ...StyleSheet.absoluteFillObject,
        overflow: 'hidden',
        borderBottomRightRadius: 15,
    },
    bgImg: {
        width: 300,
        height: '100%',
    },
    headerContent: {
        padding: 20,
        gap: 4,
    },
    userProfile: {
        height: 70,
        width: 70,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "500",
    },
    drawerItem: {
        borderRadius: 8,
        padding: 6,
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
    },
});
