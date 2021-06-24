import React, { Component} from "react";
import { FlatList, View, ActivityIndicator, ScrollView } from "react-native";
import MainContainer from "./MainContainer";
import styles from "./styles";



export default class Tweet extends Component
{
   constructor(props: any){
       super(props);
       this.state = {
           isLoading: true,
           dataSource: []
       }
   }
    componentDidMount()
    {
     
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then((response) => response.json())
     .then((responseJson) => {
         this.setState({
             isLoading: false,
             dataSource: responseJson,
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }
    render() {
       if(this.state.isLoading)
       {
           return(
               <View>
                   <ActivityIndicator size="large" animating/>
               </View>
           )
       } else {
            return(
                <ScrollView>
                    <View style={styles.container}>
                
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={({item})=> <MainContainer data = {item}/>}
                            showsHorizontalScrollIndicator={false}
                        />
               
                    </View>
                </ScrollView>
                
            );
       }
        

    }
}
   