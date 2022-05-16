import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyCard from '../component/MyCard';
import { Avatar, Button, Card, Title, Paragraph, List, Divider } from 'react-native-paper';

const WeatherDetailScreen = (props) => {
    const { navigation, route } = props;
    const { location, current } = route.params.itemData;
    return (
        <View style={styles.container}>
            <MyCard name={location.name} country={location.country} icon={current.condition.icon} >
                <List.Item title={`State: ${current.condition.text}`} />
                <Divider />
                <List.Item title={`Wind: ${current.wind_mph} mph`} />
                <Divider />
                <List.Item title={`Precip: ${current.precip_in} in`} />
                <Divider />
                <List.Item title={`Pressure: ${current.pressure_in} in`} />
                <Divider />
                <List.Item title={`Temp: ${current.temp_c} c`} />
                <Button uppercase={false} onPress={() => navigation.goBack()} theme={{colors:{primary:"#717171"}}}>Go Back</Button>
            </MyCard>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
});

export default WeatherDetailScreen;