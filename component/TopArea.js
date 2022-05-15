import * as React from 'react';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet, Button, TextInput } from 'react-native';


const TopArea = (props) => {
    const { handleGetHttpRequest, handleChangeQuery,searchQuery } = props;

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Enter city name' value={searchQuery} onChangeText={(txt) => handleChangeQuery(txt)} />
            </View>
            <View style={styles.btnContainer}>
                <Button title='Get HTTP' onPress={handleGetHttpRequest} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f1f1f1",
        borderBottomWidth: 5,
        borderTopWidth: 1,
        borderColor:"#c1c1c1",
        height:120,
        padding:10
    },
    inputContainer: { padding: 5, borderWidth: 1, borderRadius: 5, width: "100%" },
    btnContainer: { marginTop: 15 }

});

export default TopArea;