import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import styles from '../styles';

export default class TwoSeatKayak extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.human}>
                <Text style={styles.humanTextResult}>
                    {this.props.name["0"]}
                </Text>
                <Text style={styles.humanTextResult}>
                    {this.props.name["1"]}
                </Text>
                <View style={styles.kayakContainer}>
                    <Image style={styles.kayakImgResult} source={this.getKayak()}/>
                    <Image style={styles.secondSeatFirstKayakHumanImage} source={this.getFirstHumanImage()}/>
                    <Image style={styles.secondSeatSecondKayakHumanImage} source={this.getSecondHumanImage()}/>
                </View>
            </View>
        );
    }

    getKayak() {
        return require('../../../img/kayak_result_x2.png')
    }

    getFirstHumanImage(){
        if(this.props.sex["0"]){
            return require('../../../img/man.png');
        }else {
            return require('../../../img/women.png');
        }
    }

    getSecondHumanImage(){
        if(this.props.sex["1"]){
            return require('../../../img/man.png');
        }else {
            return require('../../../img/women.png');
        }
    }
}

