import { Drawer } from "expo-router/drawer";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

const CustomDrawerContent = ((props: DrawerContentComponentProps) => {
    const pathName = usePathname();

    useEffect(() => {
        console.log("Current Path:", pathName);
    }, [pathName]);
    

    return (
        <DrawerContentScrollView {...props}>
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

            <DrawerItem
                icon={() => (
                    <Ionicons
                        size={25}
                        name="home-outline"
                    />
                )}
                label="Home"
                style={[
                    styles.drawerItem,
                ]}
                onPress={() => router.push("/(drawer)/(tabs)")}
            />

            <DrawerItem
                icon={() => (
                    <SimpleLineIcons
                        size={25}
                        name="user"
                    />
                )}
                label="Profile"
                style={[
                    styles.drawerItem,
                ]}
                onPress={() => router.push("/(drawer)/(tabs)/profile")}
            />
        </DrawerContentScrollView>
    );
});

export default function Layout() {
    return (
        <Drawer
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        />
    );
}

const styles = StyleSheet.create({
    userInfo: {
        height: 165,
        width: '100%',
        borderRadius: 10,
        position: 'relative',
    },
    bgWrapper: {
        ...StyleSheet.absoluteFillObject,
        overflow: 'hidden',
        borderRadius: 10,
    },
    bgImg: {
        width: '100%',
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
        padding: 7,
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
    },
});
