import Button, { ButtonPropsItem } from "@/src/components/ui/button";
import {StyleSheet, View, FlatList, Text, StatusBar} from "react-native";
import {useMemo, useState} from "react";
import PostCard from "@/src/components/ui/postCard";
import { PostData } from "@/src/staticData/postData";

const IndexTab = () => {
    const [activeId, setActiveId] = useState<string>('1');

    const buttonItem: ButtonPropsItem[] = [
        { id: '1', title: 'All' },
        { id: '2', title: 'Entertainment' },
        { id: '3', title: 'Lifestyles' },
        { id: '4', title: 'Sports' },
        { id: '5', title: 'Technology' },
        { id: '6', title: 'Health' },
        { id: '7', title: 'Government' },
        { id: '8', title: 'Business' },
    ];


    const filteredPosts = useMemo(() => {
        if (activeId === '1') return PostData;
        const categoryTitle = buttonItem.find(btn => btn.id === activeId)?.title;
        return PostData.filter(post => post.category === categoryTitle);
    }, [activeId]);

    return (
        <View style={styles.safeArea}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <FlatList
                    data={buttonItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContainer}
                    renderItem={({ item }) => (
                        <Button
                            id={item.id}
                            title={item.title}
                            backgroundColor={activeId === item.id ? '#154454' : '#fff'}
                            textColor={activeId === item.id ? '#fff' : '#144554'}
                            onPress={() => setActiveId(item.id)}
                        />
                    )}
                />
            </View>

            <FlatList
                data={filteredPosts}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.cardContainer}
                renderItem={({ item }) => (
                    <PostCard
                        id={item.id}
                        name={item.name}
                        location={item.location}
                        imageUrl={item.imageUrl}
                        postDate={item.postDate}
                        postContent={item.postContent}
                        views={item.views}
                        discription={item.discription}
                        fullLocation={item.fullLocation}
                    />
                )}
                ListEmptyComponent={() => (
                    <View style={{ padding: 20 }}>
                        <Text style={{ textAlign: 'center', color: '#666' }}>
                            No posts found in this category.
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    header: {
        height: 55,
        width: '100%',
        backgroundColor: '#e8e8e8',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    scrollContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    cardContainer: {
        paddingVertical: 5,
        paddingBottom: 10,
        gap: 8,
        alignItems: 'center',
    },
});

export default IndexTab;
