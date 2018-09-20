import React, {Component, PropTypes} from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from './styles';

export default class HomeComponent extends Component {

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Image style={styles.img} source={require('../../img/img_logo.png')}/>
                </View>

                <Image source={require('../../img/back_group_logo.png')} style={styles.backgroundImage} />

                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => navigate('RegistrationForm')} style={styles.startBtn}>
                        <Image
                            style={styles.icBtnL}
                            source={require('../../img/ic_rowing_le.png')}
                        />
                        <Text style={styles.startBtnText}>НАЧАТЬ</Text>
                        <Image
                            style={styles.icBtnR}
                            source={require('../../img/ic_rowing_ri.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>);
    }
}