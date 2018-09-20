import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    Switch,
    ScrollView,
    TextInput,
    Alert,
    BackAndroid
} from 'react-native';
import styles from './styles';
import {Human as HumanModel} from '../../models/Human';
import {connect} from 'react-redux';

import  {addHuman as addHumanAction, delHuman as delHumanAction, peopleCountToNextPage as peopleCountToNextPageAction} from '../../actions';

import Human from './human';

class PeopleComponent extends Component {
    constructor(props) {

        super(props);

        this.state = {
            nameText: '',
            switchGenderIsOn: true,
        };

        //this.addHumanHandler = this.addHumanHandler.bind(this);
        console.log("checkPeopleComponent");
        //debugger;

    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#02aeee',
            },
            /*headerTitle: <TextInput
                placeholder='#Ваше название'
                placeholderTextColor='#80d7f7'
                onChangeText={(tripName) => navigation.setParams({tripName: tripName})}
                maxLength={30}
                style={{
                    height: 40,
                    marginLeft: 10,
                    marginRight: 10,
                    color: '#fff',
                    alignSelf: 'stretch'
                }}/>*/
        }
    };



    render() {
        const {navigate} = this.props.navigation;
        const {people} = this.props;
        let humans = [];
        if (people.peopleList.length > 0) {
            humans = people.peopleList.map((human, key) => {
                return <Human key={key} keyval={key} val={human}
                              deleteMethod={ () => this.deleteHuman(key)}>
                </Human>
            });
        }

        return (
            <View style={styles.container} >
                <View style={styles.header}>
                    <Image source={require('../../img/back_group_people.png')} style={styles.backgroundImage} />

                    <Image style={styles.headerImg} source={require('../../img/people_header.png')}/>
                    <View style={styles.containerCountPeople}>
                        <Image style={styles.countPeopleImg} source={require('../../img/ic_rowing_ri.png')}/>
                        <Text style={styles.countPeopleText}>x{humans.length}</Text>
                    </View>
                </View>

                <View style={{flex: 3}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 3}}>
                            <TextInput style={styles.nameTextInput}
                                       onChangeText={(nameText) => this.setState({nameText})}
                                       onSubmitEditing={this.addHuman.bind(this)}
                                       value={this.state.nameText}
                                       maxLength={40}
                                       placeholder='> Имя участника' placeholderTextColor='#04a8d2'
                                       underlineColorAndroid='transparent'>
                            </TextInput>
                        </View>

                        <View style={{flexDirection: 'row', flex: 3, right:-30}}>
                            <TouchableOpacity onPress={this.addHuman.bind(this)}  >
                                <Image style={styles.addImg} source={require('../../img/ic_add.png')}/>
                            </TouchableOpacity>
                            <Image style={styles.personImg} source={require('../../img/switch_women.png')}/>
                            <Switch onValueChange={(value) => this.setState({switchGenderIsOn: value})}
                                    value={this.state.switchGenderIsOn}/>
                            <Image style={styles.personImg} source={require('../../img/switch_man.png')}/>
                        </View>

                    </View>

                    <Text style={styles.listPeopleText}>Список участников</Text>
                    <ScrollView style={styles.scrollContainer} keyboardShouldPersistTaps={'always'}>
                        {humans}
                    </ScrollView>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => {
                        this.goToKayakPage(humans, navigate)
                    }} style={styles.nextBtn}>
                        <Text style={styles.startBtnText}>Далее</Text>
                        <Image
                            style={styles.icBtnR}
                            source={require('../../img/ic_navigate_next.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    goToKayakPage = (humans, navigate) => {
        let param = this.props.navigation.state.params;
        console.log("peopleParam" + " " + param);
        //if (param !== undefined && param.tripName !== '') {
            if (humans.length !== 0) {
                //this.peopleCountToNextPage.bind(this);
                //this.props.peopleCountToNextPageHandler(param);

                //this.props.peopleCountToNextPageHandler(humans);
                /*let newHuman = new HumanModel(
                    'инструктор',
                    true
                );

                humans.forEach(function(element, i) {
                    if (i % 12 === 0 && i !==0) {
                        this.props.addHumanHandler(newHuman);
                    }
                });*/



                addInstructor();
                navigate('Kayak', param)
            } else {
                Alert.alert(
                    'Внимание',
                    'Чтобы продолжить введите хотя бы одного участника сплава!',
                    [
                        {text: 'OK'},
                    ]
                )
            }

            function addInstructor() {
                //let name = this.state.nameText;
                console.log("adddinssttsa");
                let newHuman = new HumanModel(
                    "name",
                    true
                );
                this.addHumanHandler(newHuman);
                //this.setState({'nameText': ''});
            }
    };

    addHuman = () => {
        let name = this.state.nameText;
        if (name.trim().length > 0) {
            let sex = this.state.switchGenderIsOn;
            let newHuman = new HumanModel(
                name,
                sex
            );
            this.props.addHumanHandler(newHuman);
            this.setState({'nameText': ''});
        }
    };

    deleteHuman = (key) => {
        this.props.delHumanHandler(key);
    };

    peopleCountToNextPage = (count) => {
        this.props.peopleCountToNextPageHandler(count);
    }
}

function mapStateToProps(state) {
    return {
        people: state.people
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addHumanHandler: (newHuman) => dispatch(addHumanAction(newHuman)),
        delHumanHandler: (key) => dispatch(delHumanAction(key)),
        peopleCountToNextPageHandler:(humans) => dispatch(peopleCountToNextPageAction(humans))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PeopleComponent)
