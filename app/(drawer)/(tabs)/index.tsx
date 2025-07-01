import Button, { ButtonPropsItem } from "@/src/components/ui/button";
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";

const IndexTab = () => {
    const [activeId, setActiveId] = useState<string>('1');

    const buttonItem: Omit<ButtonPropsItem, 'backgroundColor' | 'textColor' | 'onPress'>[] = [
        { id: '1', title: 'All' },
        { id: '2', title: 'Entertainment' },
        { id: '3', title: 'Lifestyles' },
        { id: '4', title: 'Sports' },
        { id: '5', title: 'Technology' },
        { id: '6', title: 'Health' },
        { id: '7', title: 'Government' },
        { id: '8', title: 'Business' },
    ];

    return (
        <SafeAreaView style={{ flex: 1, marginTop: 30 }}>
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 70,
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
});

export default IndexTab;
