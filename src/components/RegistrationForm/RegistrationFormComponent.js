import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    Picker,
    View,
    Button,
    Alert
} from 'react-native';

import DatePicker from 'react-native-datepicker'
import styles from './styles';
import {connect} from 'react-redux';
import CheckBox from 'react-native-check-box'



class RegistrationFormComponent extends Component{

    constructor(props){

        super(props);

        this.state = {
            checked: true,
            date:new Date().toISOString(),
            startingDate: new Date().toISOString(),
            finishingDate:new Date().toISOString(),
            kayakTripName :'',

        };
        }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#02aeee',
            }
        }
    };



    toggleCheckbox() {
        this.setState({checked: !this.state.checked});
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <View style={{flex: 2}}>
                    <TextInput style={styles.registrationInput}
                               maxLength={40}
                               placeholder='Название похода' placeholderTextColor='#04a8d2'
                               underlineColorAndroid='transparent'>
                    </TextInput>
                    <TextInput style={styles.registrationInput}
                               maxLength={40}
                               placeholder='Ваше имя' placeholderTextColor='#04a8d2'
                               underlineColorAndroid='transparent'>
                    </TextInput>
                    <TextInput style={styles.registrationInput}
                               maxLength={40}
                               placeholder='E-mail' placeholderTextColor='#04a8d2'
                               underlineColorAndroid='transparent'>
                    </TextInput>
                    <TextInput style={styles.registrationInput}
                               maxLength={40}
                               placeholder='Телефон' placeholderTextColor='#04a8d2'
                               underlineColorAndroid='transparent'>
                    </TextInput>

                    <Picker>
                        <Picker.Item label="www.piroga.by" value="piroga" />
                        <Picker.Item label="www.kayak.by" value="kayak-by" />
                        <Picker.Item label="gicsoft" value="gicsoft" />
                    </Picker>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                    <DatePicker date={this.state.startingDate} style={{width: 170, height:60, top:35}} customStyles={{
                        dateIcon: {
                            left: 0,
                            marginLeft: 4
                        },
                        dateInput: {
                            marginLeft: 26
                        }
                        }} onDateChange={(date) => {this.setState({startingDate:date})}}/>

                    <DatePicker date={this.state.finishingDate} style={{width: 170, height:60, top:35}} customStyles={{
                        dateIcon: {
                            left: 0,
                            marginLeft: 4
                        },
                        dateInput: {
                            marginLeft: 26
                        }
                    }} onDateChange={(date) => {this.setState({finishingDate:date})}}/>
                    </View>
                    <CheckBox
                        style={{flex: 1, padding: 10, width:170, marginLeft: 14}}
                        onClick={this.toggleCheckbox.bind(this)}
                        isChecked={this.state.checked}
                        leftText="Нужны палатки?"

                    />
                    <Button
                        onPress={() => {
                        goToPeoplePage(navigate) }}
                        title="Далее"
                        color="#f9cb09"
                        accessibilityLabel="Learn more about this purple button"
                    />

                </View>
            </View>
            )
    }


}

function mapStateToProps(state) {

    return {

    }
}

function goToPeoplePage(navigate) {

    let param = this.props;
    console.log("param" + " " + param);
    navigate('People');
   /* if (param !== undefined) {
        navigate('People');
    } else {
        Alert.alert(
            'Заполните все необходимые поля!', [{
                text: 'OK'
            },]
        );
    }*/
}


export default connect(
    mapStateToProps
)(RegistrationFormComponent)