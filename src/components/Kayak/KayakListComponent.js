import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    Alert,
    Button,
    BackAndroid
} from 'react-native';
import styles from './styles';
import KayakItem from './KayakItem';
import {connect} from 'react-redux';
import {resetKayaks} from '../../actions';


class KayakListComponent extends Component {
    constructor(props) {
        super(props);
        this.goToPrevious = this.goToPrevious.bind(this);
    }


    static navigationOptions = ({navigation}) => {
        return {
            //title: `#${navigation.state.params.tripName}`,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#02aeee',
            },
            navigationOptions: {
                header: ({ state }) => ({
                    left: <Button
                        onPress={state.params.resetKayaksCapacities}
                    />
                })
            }
        }
    };

    resetKayaksCapacities() {

        this.props.resetKayaks();
        console.log('reset kayaks in kayakListComponent');
        //this.props.navigation.goBack();
    }

    goToPrevious(){
        //this.props.navigation._goBack();
    }

    componentDidMount() {

        //BackAndroid.addEventListener('backPress',  this.props.navigation.setParams({ resetKayakCapacities: this.resetKayaksCapacities() }));
    }

    componentWillUnmount() {
        this.props.navigation.setParams({ resetKayakCapacities: this.resetKayaksCapacities() });
        //BackAndroid.removeEventListener('backPress',  this.props.navigation.setParams({ resetKayakCapacities: this.resetKayaksCapacities() }));
    }

    render() {
        const {navigate} = this.props.navigation;

        var peopleCount = this.props.peopleCounter.length;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../../img/back_group_kayak.png')} style={styles.backgroundImage}/>
                    <Image style={styles.headerImg} source={require('../../img/kayak_header.png')}/>
                    <View style={styles.containerCountPeople}>
                        <Image style={styles.countPeopleImg} source={require('../../img/ic_rowing_ri.png')}/>
                        <Text style={styles.countPeopleText}>x{peopleCount}</Text>
                    </View>
                </View>

                <View style={{flex: 3}}>
                   <KayakItem  capacity="1"/>
                   <KayakItem  capacity="2"/>
                   <KayakItem  capacity="3"/>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => {
                        this.goToResultPage(peopleCount, navigate);
                    }} style={styles.nextBtn}>
                        <Text style={styles.startBtnText}>Далее</Text>
                        <Image
                            style={styles.icBtnR}
                            source={require('../../img/ic_navigate_next.png')}/>
                    </TouchableOpacity>
                </View>
            </View>

        );
    };

    goToResultPage = (count, navigate) => {
        let param = this.props.navigation.state.params;
        if (count === 0) {
            navigate('Result', param)
        }
        else {
            Alert.alert(
                'Внимание',
                'Выберите доступные каяки',
                [
                    {text: 'Ок', onPress: () => console.log('NO'), style: 'cancel'}
                ],
                {cancelable: false}
            )
        }
    };

    setParticipants = (navigate) => {
    let param = this.props.navigation.state.params;
    navigate('Result', param)
    };

}

function mapStateToProps(state) {

    return {
        kayakList: state.kayaks.kayakList,
        peopleCounter: state.peopleKayakCounter.peopleCounter,
        kayak:state.kayaks.kayak
    }
}

function mapDispatchToProps(dispatch) {
    return {
        /*addHumanHandlerCount: (newHuman) => dispatch(addHumanAction(newHuman)),
        delHumanHandlerCount: (key) => dispatch(delHumanAction(key)),*/
        resetKayaks:() => dispatch(resetKayaks())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KayakListComponent)