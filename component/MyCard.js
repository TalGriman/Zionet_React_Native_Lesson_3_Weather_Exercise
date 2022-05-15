import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';


const MyCard = (props) => {
  const { name, country, icon } = props;

  const LeftContent = props => <Avatar.Image {...props} size={50} source={{ uri: `http:${icon}` }} theme={{ colors: { primary: "white" } }} />


  return (
    <View style={styles.container}>
      <Card >
        <Card.Title title={name} subtitle={country} left={LeftContent} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal:10
  }
});

export default MyCard;