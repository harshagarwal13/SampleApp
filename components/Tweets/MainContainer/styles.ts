import { StyleSheet } from "react-native";
const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom:5,
        paddingTop: 5,
        marginHorizontal: 10,
        borderColor: '#808080',
        borderRadius: 15,
        resizeMode: 'cover',
        //height:200
    },
    id: {
        color: '#808080',
        marginHorizontal: 5,
    },
    userid: {
        fontWeight: 'bold',
        marginHorizontal: 5,
    },
    title: {
        paddingLeft:5,
        marginHorizontal: 5,
    },
    body: {
        paddingRight: 5,
        marginHorizontal: 5,
        
    },
    header: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#808080',
    },
    content: {
        width: '100%',
        paddingRight:10
    },
    titleblock: {
        flexDirection: 'row',
        width: '100%',
        paddingRight:5
    },
    bodyblock: {
        flexDirection: 'row',
        width: '100%',
        paddingRight:10
    }
    
});

export default styles;

