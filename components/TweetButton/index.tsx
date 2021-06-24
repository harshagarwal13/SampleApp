import React from 'react';
import {TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons";
import styles from "./styles";

const NewTweetButton = ()=> {
    const onPress = () => {
        console.warn("Opens New Tweet");
    }

    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <MaterialCommunityIcons name={"feather"} size={30} color='#fff'/>
        </TouchableOpacity>
    );
}

export default NewTweetButton;
