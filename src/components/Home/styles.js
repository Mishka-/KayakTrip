import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#02aeee',
    },
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        resizeMode: 'cover', // or 'stretch'
        left: 0,
        bottom: 0,
        width: 270,
        height: 270
    },
    contentContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

    resultContainer:{
        flex: 5,

        backgroundColor: '#02aeee',
    },

    resultContentContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
       /* top: 0,
        bottom: 0,
        left: 0,
        right: 0,*/
    },
    resultIsReload: {
        width: 23,
        height: 23,
        resizeMode: 'contain',
        position: 'absolute',
        right: -170,
        bottom:120
    },

    img: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
        bottom: 50,
    },
    footer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
    },
    startBtn: {
        borderColor: '#ccc',
        justifyContent: 'center',
        elevation: 8,
        marginBottom: 30,
        zIndex: 10,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f9cb09',
        paddingHorizontal: 40,
        borderRadius: 25,
        width: 250,
        height: 50,
        overflow: 'hidden',
        margin: 10,
        /* shadow */
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    startBtn1: {
        justifyContent: 'center',
        marginBottom: 30,
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 40,
        resizeMode: 'contain',
        width: 250,
        height: 50,
        overflow: 'hidden',
        margin: 10
    },
    startBtnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    icBtnL: {
        position: 'absolute',
        resizeMode: 'contain',
        left: 40,
        width: 25,
        height: 25
    },
    icBtnR: {
        position: 'absolute',
        resizeMode: 'contain',
        right: 40,
        width: 25,
        height: 25
    },
});
