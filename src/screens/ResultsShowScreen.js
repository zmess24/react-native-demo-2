import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

export default ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    
    const getResult = async (id) => {
        const res = await yelp.get(`/${id}`);
        setResult(res.data)
    };
    console.log(result)
    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    <Image source={{ uri: item }} style={styles.image}/>
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});