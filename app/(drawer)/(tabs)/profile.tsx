import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Button from "@/src/components/ui/button";

const ProfileTab = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userDetails}>
                <View style={styles.profileInfo}>
                    <Image
                        source={require("@/assets/icons/user.png")}
                        style={styles.profilePic}
                    />

                    <View style={styles.textContainer}>
                        <View style={styles.nameRow}>
                            <Text style={styles.name}>Ritesh Chaudhary</Text>
                            <Button
                                id={""}
                                title={"Edit"}
                                backgroundColor={"#154454"}
                                textColor={"#fff"}
                            />
                        </View>
                        <View style={styles.row}>
                            <FontAwesome size={18} name="location-arrow" color={"#080808"} />
                            <Text style={styles.text}>Berihwa, Uttar Pradesh</Text>
                        </View>

                        <View style={styles.row}>
                            <Ionicons size={18} name="bag" color={"#080808"} />
                            <Text style={styles.text}>Coding</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.connections}>
                    <View style={styles.connectionsRow}>
                        <Button
                            id={""}
                            title={"Trash"}
                            backgroundColor={"#154454"}
                            textColor={"#fff"}
                        />

                        <View style={styles.statsRow}>
                            <View style={styles.statBox}>
                                <Text style={styles.statNumber}>0</Text>
                                <Text style={styles.statLabel}>Feed</Text>
                            </View>
                            <View style={styles.statBox}>
                                <Text style={styles.statNumber}>0</Text>
                                <Text style={styles.statLabel}>Followers</Text>
                            </View>
                            <View style={styles.statBox}>
                                <Text style={styles.statNumber}>1</Text>
                                <Text style={styles.statLabel}>Following</Text>
                            </View>
                            <View style={styles.statBox}>
                                <Text style={styles.statNumber}>2</Text>
                                <Text style={styles.statLabel}>Blocked</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.aboutSections}>
                <View style={styles.aboutHeader}>
                    <View style={styles.aboutText}>
                        <Text style={{fontSize:18, fontWeight:'bold', color:'#262626'}}>About me </Text>
                        <Text>Anonymous </Text>
                    </View>

                    <View style={styles.btnContainer}>
                        <Button
                            id={""}
                            title={"Drafts"}
                            backgroundColor={"#154454"}
                            textColor={"#fff"}
                        />
                        <Button
                            id={""}
                            title={"History"}
                            backgroundColor={"#154454"}
                            textColor={"#fff"}
                        />
                    </View>
                </View>

                <View  style={styles.MediaPostSections}>
                    <Text style={{fontSize:20, }}>No Post</Text>


                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    userDetails: {
        width: "100%",
        paddingVertical: 20,
    },
    profileInfo: {
        flexDirection: "row",
        paddingHorizontal: 10,
        alignItems: "flex-start",
    },
    profilePic: {
        height: 90,
        width: 90,
        borderRadius: 25,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
        gap: 8,
    },
    nameRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#080808",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    text: {
        fontSize: 16,
        color: "#080808",
    },
    connections: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    connectionsRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    statsRow: {
        flexDirection: "row",
        paddingVertical: 8,
        borderRadius: 8,
    },
    statBox: {
        alignItems: "center",
        width: 70,
    },
    statNumber: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#262626",
    },
    statLabel: {
        fontSize: 12,
        color: "#adadad",
        textAlign: "center",
    },
    aboutSections:{
        flex:1,
    },
    aboutHeader:{
        height: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal:10,
    },
    aboutText:{
        flexDirection: "column",
        gap:8,
    },
    btnContainer:{
        flexDirection: "row",
    },
    MediaPostSections:{
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ProfileTab;
