import React from "react";
import { View, Image } from "react-native";
import ProfilePicture from "../../ProfilePicture";
export type LeftContainerProps = {

}

const LeftContainer = () => (
    <View style={{margin: 5}}>
        <ProfilePicture size={40} image={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.blU8srAMdm0DwyFKQ31u_AHaE8%26pid%3DApi&f=1'}/>
    </View>
)

export default LeftContainer;