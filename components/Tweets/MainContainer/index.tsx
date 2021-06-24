import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import LeftContainer from "../LeftContainer";


const MainContainer = (props: any) => {
    const {userId, id, title, body} = props.data;
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <LeftContainer /> 
                <Text>Userid:</Text>
                <Text style={styles.userid}>{userId}</Text>
                <Text>Id</Text>
                <Text style={styles.id}>@{id}</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.titleblock}>
                <Text>Title:</Text>
                <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.bodyblock}>
                <Text>Body:</Text>
                <Text style={styles.body}>{body}</Text>
                </View>
                
            </View>
            

        </View>
    );
};
    
export default MainContainer;