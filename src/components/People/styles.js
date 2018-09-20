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
        height: 190
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
    scrollContainer: {
        marginBottom: 100,
    },
    nameTextInput: {
        alignSelf: 'stretch',
        color: '#04789d',
        padding: 10,
    },
    addImg: {
        margin: 10,
        width: 25,
        height: 25,
        top: 0,
        bottom: 0,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center'
    },
    personImg: {
        width: 30,
        height: 30,
        margin:8,
        marginLeft:-2,
        marginRight:-2,
        resizeMode: 'contain',
    },


    listPeopleText: {
        paddingLeft: 10,
        paddingBottom: 10,
        color: '#0294cd',
        borderBottomWidth: 1,
        borderBottomColor: '#02aeee'
    },
    footer: {
        flex: 1,
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
    human: {
        position:'relative',
        padding:20,
        paddingRight:100,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor:'#02aeee',
    },
    humanImg: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    humanImgResult: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        bottom:5
    },

    humanText:{
        paddingLeft:20,
    },
    humanDelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        top:10,
        bottom:10,
        right:10,
    },
    humanDeleteText:{
        color:'#047ba0',
    }
});
