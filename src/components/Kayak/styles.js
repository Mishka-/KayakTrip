import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#02aeee',
        paddingBottom: 20,
        top: 0,
        left: 0,
        right: 0,
    },
    headerImg: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        resizeMode: 'contain', // or 'stretch'
        right: 0,
        bottom: 0,
        height: 140
    },
    containerCountPeople: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        right: 20
    },
    countPeopleImg: {
        resizeMode: 'contain',
        width: 25,
        height: 25
    },
    countPeopleText: {
        color: '#ffffff',
        fontSize: 18
    },
    containerKayak: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#02aeee'
    },
    countKayakText: {
        position: 'absolute',
        top: 0,
        color: '#05819e',
        fontSize: 15,
        fontWeight: 'bold'
    },
    kayakImg: {
        marginTop: 15,
        marginBottom: 10,
        width: 200,
        height: 70,
        resizeMode: 'contain'
    },
    incDecImg: {
        margin: 20,
        width: 35,
        height: 35,
        resizeMode: 'contain'
    },

    /*
     addButton:{
     backgroundColor:'#e6f7fd',
     width:30,
     height:30,
     borderRadius:90,
     borderColor:'#02aeee',
     alignItems:'center',
     justifyContent:'center',

     },
     addButtonText:{
     color:'#05819e',
     fontSize:15,
     },
     */

    footer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        right: 0,
    },
    nextBtn: {
        borderColor: '#ccc',
        justifyContent: 'center',
        elevation: 8,
        marginBottom: 20,
        marginRight: 20,
        zIndex: 10,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f9cb09',
        paddingHorizontal: 40,
        borderRadius: 25,
        width: 150,
        height: 50,
        overflow: 'hidden',
        margin: 10,
    },
    startBtnText: {
        color: '#fff',
        fontSize: 19,
        paddingRight: 10,
        paddingBottom: 4
    },
    icBtnR: {
        position: 'absolute',
        resizeMode: 'contain',
        right: 20,
        width: 20,
        height: 20
    },
})