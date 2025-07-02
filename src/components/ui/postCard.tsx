import {StyleSheet, Text, View} from "react-native";
import {Image} from "expo-image";

import Button from "@/src/components/ui/button";
import {EvilIcons, FontAwesome, Octicons} from "@expo/vector-icons";
import {useState} from "react";

export interface postCardProps {
    id: string;
    name:string;
    location:string;
    imageUrl:string;
    postDate:string;
    postContent:string;
    views:string;
    discription:string;
    fullLocation:string;
    category?:string;
}
const PostCard = ({
    name,
    location,
    imageUrl,
    postDate,
    postContent,
    views,
    discription,
    fullLocation,
                  }:postCardProps) => {
    const [activeHeart,setActiveHeart]=useState(false);
    const [activeFollower,setActiveFollower]=useState(false);
    const [activeFollowerText,setActiveFollowerText]=useState('Follow');



    return(

        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <View style={{flexDirection:'row', alignItems:'center', gap:7,}}>
                    <Image source={require('@/assets/icons/user.png')}
                           style={styles.profilePic}
                    />
                    <View>
                        <Text style={{color:'#348fd9', fontWeight:'bold', fontSize:14}}>{name}</Text>
                        <Text>{location}</Text>
                    </View>
                </View>
                <Button id={""} title={activeFollowerText}
                        backgroundColor={activeFollower ? "#154454" : "#fff"}
                        textColor={activeFollower ? "#fff" : "#154454"}
                        onPress={() => {
                            setActiveFollower(prev => !prev);
                            setActiveFollowerText(prev =>
                                prev === 'Follow' ? 'Following' : 'Follow'
                            );
                        }}
                />
            </View>
            <View style={{flex:1}}>
                <Image
                    source={{uri: imageUrl}}
                    style={{height:280, width: '100%'}}
                    contentFit="cover"
                />
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, paddingVertical:5,}}>
                <Text>{postDate}</Text>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Text>{postContent}</Text>
                    <Text>{views}</Text>
                </View>
            </View>
            <Text style={{paddingHorizontal:15}}>{discription}</Text>
            <View style={{flexDirection:'row', paddingHorizontal:20, marginTop:10, gap:15, }}>
                {
                    activeHeart  ? (
                        <Octicons  size={25} name="heart-fill" color={'#154454'}
                                   onPress={()=> setActiveHeart(prev => !prev)}

                        />
                    ):(
                        <Octicons  size={25} name="heart" color={'#154454'}
                                   onPress={()=> setActiveHeart(prev => !prev)}

                        />
                    )

                }

                <EvilIcons size={30} name="share-google" color={'#154454'} />
                <EvilIcons size={30} name="comment" color={'#154454'} />
            </View>
            <View style={{ flexDirection:'row', paddingHorizontal:10, gap:5, marginTop:10,}}>
                <FontAwesome size={25} name="location-arrow" color={'#154454'} />
                <Text>{fullLocation}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        maxHeight: '100%',
        overflow: 'hidden',
        width: '95%',
        backgroundColor:'#fff',
        borderRadius:14,
        paddingBottom:10,
    },
    header:{
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        width:'100%',
    },
    profilePic:{
        height:40,
        width:40,
        borderRadius:25,
    },
});

export default PostCard
