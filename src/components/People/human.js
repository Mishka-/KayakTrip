import React, { Component } from 'react';
import styles from './styles'
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

export default class Human extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.human} >
                <Image style={styles.humanImg} source={this.getGender()}/>
                <Text style={styles.humanText}>{this.props.val.name}</Text>
                <TouchableOpacity onPress={this.props.deleteMethod.bind(this)} style={styles.humanDelete} >
                    <Text style={styles.humanDeleteText}>X</Text>
                </TouchableOpacity>
            </View>
        );
    }

    getGender() {
        if (this.props.val.sex) {
            return require('../../img/man.png')
        } else {
            return require('../../img/women.png')
        }
    }
}
