import * as React from 'react';
import { StyleSheet } from 'react-native';
import Tweet from '../components/Tweets';
import NewTweetButton from '../components/TweetButton';
import { Text, View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Tweet />
      <NewTweetButton />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
