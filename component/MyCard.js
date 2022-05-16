import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MyCard = (props) => {
  const { name, country, icon, data, isPressable, children } = props;
  const navigation = useNavigation();

  const LeftContent = props => <Avatar.Image {...props} size={50} source={{ uri: `http:${icon}` }} theme={{ colors: { primary: "white" } }} />

  return (
    <View style={styles.container}>
      <Pressable disabled={!isPressable} onPress={() => isPressable ? navigation.navigate("WeatherDetailScreen", { itemData: data }) : null}>
        <Card >
          <Card.Title title={name} subtitle={country} left={LeftContent} />
          {
            children &&
            <Card.Content>
              {children}
            </Card.Content>
          }
        </Card>
      </Pressable>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 10
  }
});

export default MyCard;