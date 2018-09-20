import React from 'react';
import {
    Image,
    View,
    StyleSheet
} from 'react-native';

export default () => {
    return (
        <View>
            <Image style={styles.kayakImgResult} source={require('../../img/kayak_result_x1.png')}/>
        </View>
    );


};

const styles = StyleSheet.create({
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
    }
});
