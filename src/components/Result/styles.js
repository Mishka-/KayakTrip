import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    human: {
        flex:1,
        position:'relative',
        padding:20,
        paddingRight:100,
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor:'#02aeee',
    },
    humanTextResult:{
        color: '#05819e',
        paddingTop:10,
        paddingBottom:10,
        paddingRight: 10,
    },
    kayakContainer: {
        position: 'absolute',
        right: 20,
        top:0,
        bottom:0
    },
    kayakImgResult:{
        flex:1,
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    ///kayaks

    oneSeatKayakHumanImage:{
        position:'absolute',
        right:64,
        top:27,
        width: 20,
        height: 20,
    },

    secondSeatFirstKayakHumanImage:{
        position:'absolute',
        right:90,
        top:47,
        width: 20,
        height: 20,
    },

    secondSeatSecondKayakHumanImage:{
        position:'absolute',
        right:40,
        top:47,
        width: 20,
        height: 20,
    },

    thirdSeatFirstKayakHumanImage:{
        position:'absolute',
        right:108,
        top:66,
        width: 20,
        height: 20,
    },
    thirdSeatSecondKayakHumanImage:{
        position:'absolute',
        right:66,
        top:66,
        width: 20,
        height: 20,
    },

    thirdSeatThirdKayakHumanImage:{
        position:'absolute',
        right:23,
        top:66,
        width: 20,
        height: 20,
    },




    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    /*contentContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },*/
    resultSeatsContainer:{
        flex: 3,
        flexDirection: 'column'
    },

    footer: {
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        right: 0,
    },

    resultBtnFooter:{
        //flexDirection: 'column',
        position: 'absolute',
        //alignItems: 'flex-end',
        bottom: -250,
        right: 0,
    },

    reloadBtn: {
        borderColor: '#ccc',
        justifyContent: 'center',
        elevation: 8,
        marginBottom: 30,
        zIndex: 10,
        alignItems: 'center',
        backgroundColor: '#f9cb09',
        paddingHorizontal: 40,
        borderRadius: 25,
        width: 240,
        height: 50,
        overflow: 'hidden',
        margin: 10,
        /* shadow */
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        right: 55,
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    shareBtn: {
        justifyContent: 'center',
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: '#f9cb09',
        borderRadius: 25,
        width: 50,
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
        shadowOpacity: 1.0
    },
    reloadBtnText: {
        color: '#fff',
        fontSize: 18,
        paddingRight: 5,
        paddingBottom: 4,
    },
    icReload: {
        width: 23,
        height: 23,
        resizeMode: 'contain',
        position: 'absolute',
        right: 12
    },
    icShare: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        position: 'absolute'
    },
    editBtn: {
        marginRight: 20,
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
});
