import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import SearchBar  from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

export default SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null }
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective"/>
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricer"/>
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Big Spender"/>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({});