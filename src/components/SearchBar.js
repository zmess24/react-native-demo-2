import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                style={styles.inputStyle}
                placeholder="Search"
                onChangeText={onTermChange}
                value={term}
                onEndEditing={onTermSubmit}/>
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        margin: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        margin: 10
    }
});