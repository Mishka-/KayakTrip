import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
//import styles from '../styles';
import styles from '../styles';


export default class OneSeatKayak extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View key={this.props} style={styles.human}>
                <Text style={styles.humanTextResult}>
                    {this.props.name}
                </Text>
                <View style={styles.kayakContainer}>
                    <Image style={styles.kayakImgResult} source={this.getKayak()}/>

                    <Image style={styles.oneSeatKayakHumanImage} source={this.getHumanImage()}/>
                </View>
            </View>
        );
    }

    getKayak() {
        return require('../../../img/kayak_result_x1.png')
    }

    getHumanImage(){
        if (this.props.sex) {
            return require('../../../img/man.png')
        } else {
            return require('../../../img/women.png')
        }
    }
}


/*const styles = StyleSheet.create({
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

    oneSeatKayakFirstHumanImage:{

        width: 50,
        height: 50,
        position: 'absolute',
    }
});*/