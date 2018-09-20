import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import styles from '../styles';

export default class ThreeSeatKayak extends Component {
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
                <Text style={styles.humanTextResult}>
                    {this.props.name["2"]}
                </Text>
                <View style={styles.kayakContainer}>
                    <Image style={styles.kayakImgResult} source={this.getKayak()}/>
                    <Image style={styles.thirdSeatFirstKayakHumanImage} source={this.getFirstHumanImage()}/>
                    <Image style={styles.thirdSeatSecondKayakHumanImage} source={this.getSecondHumanImage()}/>
                    <Image style={styles.thirdSeatThirdKayakHumanImage} source={this.getThirdHumanImage()}/>
                </View>
            </View>
        );
    }

    getKayak() {
        return require('../../../img/kayak_result_x3.png')
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
    getThirdHumanImage(){
        if(this.props.sex["2"]){
            return require('../../../img/man.png');
        }else {
            return require('../../../img/women.png');
        }
    }
}
