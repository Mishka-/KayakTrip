import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import styles from './styles';
import Kayak, {capacities} from  '../../models/Kayak';
import {connect} from 'react-redux';

import  {registerKayak, unRegisterKayak} from '../../actions';

export class KayakItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            kayaks: {},
            peopleCounter:[]
        };

    }


    kayakImages = {
        [capacities.ONE] : require('../../img/kayak_x1.png'),
        [capacities.TWO] : require('../../img/kayak_x2.png'),
        [capacities.THREE] : require('../../img/kayak_x3.png'),
    };

    render() {
        const {capacity} = this.props;
        const {kayakList} = this.props;
        const kayakRegisteredCount = kayakList.getKayakCount(capacity);


        const image = this.kayakImages[capacity];


        return <View style={styles.containerKayak}>
            <Text style={styles.countKayakText}>x{kayakRegisteredCount}</Text>
            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => {
                    this.decAction()
                }}>
                    <Image style={styles.incDecImg} source={require('../../img/ic_remove.png')}/>
                </TouchableOpacity>
                <Image style={styles.kayakImg} source={image}/>
                <TouchableOpacity onPress={() => {
                    this.incAction()
                }}>
                    <Image style={styles.incDecImg} source={require('../../img/ic_add.png')}/>
                </TouchableOpacity>
            </View>
        </View>

    }

    incAction() {
        const currentPeopleCount = this.props.peopleCounter;
        const currentCapacity = this.props.capacity;
        if(currentPeopleCount.length >= currentCapacity){

            const {capacity} = this.props;
            var people = this.props.people.list;
            let kayak = new Kayak(parseInt(capacity), people);
            this.props.registerKayak(kayak);
        }

    };

    decAction() {
        const {capacity} = this.props;
        const {kayakList} = this.props;

        const kayakRegisteredCount = kayakList.getKayakCount(capacity);


        if(kayakRegisteredCount !== 0){
            var people = this.props.people;
            let kayak = new Kayak(parseInt(capacity), people);
            this.props.unRegisterKayak(kayak);
        }

    };



}
function mapStateToProps(state) {
    return {
        kayakList: state.kayaks.kayakList,
        kayak:state.kayaks.kayak,
        peopleCounter: state.peopleKayakCounter.peopleCounter,
        people:state.people
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registerKayak: (kayak) => dispatch(registerKayak(kayak)),
        unRegisterKayak: (kayak) => dispatch(unRegisterKayak(kayak))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KayakItem)