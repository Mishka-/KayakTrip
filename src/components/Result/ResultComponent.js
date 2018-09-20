import React, {Component, PropTypes} from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    ScrollView,
    Alert,
} from 'react-native';
import styles from './styles';

import {connect} from 'react-redux';

import OneSeatKayak from './Seats/OneSeatKayak';
import TwoSeatKayak from './Seats/TwoSeatKayak';
import ThreeSeatKayak from './Seats/ThreeSeatKayak';



class ResultComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kayaks: {},
            kayakList: {}
        };

        const {people} = this.props;
        const {kayaks} = this.props;
        const {kayakList} = this.props.kayaks.kayakList;

        this.state.listResult = people.peopleList;
        this.state.kayaks = kayaks.kayaks;
        this.state.kayakList = kayakList;

        this.state.resultKayaks = [];


        var totCapacity = this.props.kayaks.kayakList.list;
        var peopleList = this.props.people.peopleList;





        var mens = peopleList.filter(getMen);
        var womens = peopleList.filter(getWomen);


        //at least one man for each kayak
        function getMen(value) {
            return value.sex === true;
        }

        function getWomen(value) {
            return value.sex === false;
        }

        var resultCapacity;
        var availableCapacities = [];


        //getting total capacity from kayaks
        for (var key in totCapacity) {
            resultCapacity = totCapacity[key].map(function(k) {
                return  k.capacity;
            });
            availableCapacities.push(resultCapacity);
        }
        var mergedAvailableCapacities = [].concat.apply([], availableCapacities);

        var temp = mergedAvailableCapacities.map(function(x){
            return x + '';
        });


        var resultKayaks = this.state.resultKayaks;
        for(var i =0; i < temp.length; i++){
            resultKayaks[i] = new Array(temp[i] * temp[i].length);
        }

        var maxLength = getMaxArrayLength(resultKayaks);



        arrange();
        function arrange() {
            if(womens.length && !mens.length){
                for (var j = 0; j < maxLength; j++) {
                    for (var i = 0; i < resultKayaks.length; i++) {
                        if (resultKayaks[i].length > j) {
                            if (womens.length > 0 ) {
                                resultKayaks[i].splice(j, 1, womens[0]);
                                womens.shift();
                            }
                        }
                    }
                    if (womens.length === 0) {
                        break;
                    }
                }
            }
            if(womens.length && mens.length){
                for (var j = 0; j < maxLength; j++) {
                    for (var i = 0; i < resultKayaks.length; i++) {
                        if (resultKayaks[i].length > j) {
                            if (mens.length > 0 ) {
                                resultKayaks[i].splice(j, 1, mens[0]);
                                mens.shift();

                            }else {
                                resultKayaks[i].splice(j, 1, womens[0]);
                                womens.shift();
                            }
                        }
                    }
                    if (womens.length === 0) {
                        break;
                    }
                }
            }

            if(mens.length && !womens.length){

                for (var j = 0; j < maxLength; j++) {
                    for (var i = 0; i < resultKayaks.length; i++) {
                        if (resultKayaks[i].length > j) {
                            if (mens.length > 0 ) {
                                resultKayaks[i].splice(j, 1, mens[0]);
                                mens.shift();

                            }
                        }
                    }
                    if (mens.length === 0) {
                        break;
                    }
                }
            }

        }


        function getMaxArrayLength(resultKayaks) {
            var max = resultKayaks[0].length;
            if (resultKayaks.length > 1) {
                for (var i = 1; i < resultKayaks.length; i++) {
                    if (resultKayaks[i].length > max) {
                        max = resultKayaks[i].length;
                    }
                }
            }
            return max;
        }

    }



    render() {

        var res = this.randomList();


        var single;
        var oneSeats = Object.entries(res).map(function(val, key){
           single = res.filter(function (x){
                return x.length === 1;
            });
        });

        var oneSeatsResult = Object.entries(single).map(function(val, key){
            if(single){
                var oneSeatName = single.map(function(t){
                    return t[0].name;
                });
                var oneSeatSex = single.map(function(t){
                    return  t[0].sex;
                });

                return <OneSeatKayak key={key} keyval={key} name={oneSeatName[key]} sex={oneSeatSex[key]}></OneSeatKayak>;
            }
            return null;
        });


        var double;
        var twoSeats = Object.entries(res).map(function(val, key){
            double = res.filter(function (x){
                return x.length === 2;
            });
        });

        var twoSeatsResult = Object.entries(double).map(function(val, key){
            if(double){
                var twoSeatName = double.map(function(t){
                        return [t[0].name, t[1].name];
                });

                var twoSeatSex = double.map(function(t){
                      return [t[0].sex, t[1].sex];
                });
                return <TwoSeatKayak key={key} keyval={key} name={twoSeatName[key]} sex={twoSeatSex[key]}></TwoSeatKayak>;
            }
            return null;
        });

        var triple;
        var threeSeats = Object.entries(res).map(function(val, key){
            triple = res.filter(function (x){
                return x.length === 3;
            });
        });

        var threeSeatsResult = Object.entries(triple).map(function(val, key){
            if(triple){
                var threeSeatName = triple.map(function(t){
                        return [t[0].name, t[1].name, t[2].name] ;
                });
                var threeSeatSex = triple.map(function(t){
                        return [t[0].sex, t[1].sex, t[2].sex];
                });


                return <ThreeSeatKayak key={key} keyval={key} name={threeSeatName[key]} sex={threeSeatSex[key]}></ThreeSeatKayak>
            }
            return null;
        });

        return (
            <View style={styles.resultContentContainer}>
                <View >
                    <ScrollView>
                        {oneSeatsResult}
                        {twoSeatsResult}
                        {threeSeatsResult}
                    </ScrollView>
                </View>
                <View style={styles.resultBtnFooter}>
                    <TouchableOpacity style={styles.reloadBtn} onPress={() => this.forceUpdate()}>
                        <Text style={styles.reloadBtnText}>Перерасположить</Text>
                        <Image
                            style={styles.icReload}
                            source={require('../../img/ic_reload.png')}
                        />
                    </TouchableOpacity>

                </View>
            </View>);
    }

    randomList = () => {

        let arr = this.state.resultKayaks.slice();

        for (let i = arr.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
        }

        return arr;
    };


}

ResultComponent.navigationOptions = ({navigation}) => {
    return {
        //title: `#${navigation.state.params.tripName}`,
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#02aeee',
        },
        headerRight: (
            <TouchableHighlight onPress={this._onPressEdit}>
                <Image
                    style={styles.editBtn}
                    source={require('../../img/ic_edit.png')}
                />
            </TouchableHighlight>

        ),
    }
};

_onPressEdit = () => {
    Alert.alert("Edit");
};

function mapStateToProps(state) {
    return {
        people: state.people,
        kayaks: state.kayaks,
        kayakList: state.kayakList
    }
}
export default connect(
    /*state => ({
        people: state.people,
        kayaks: state.kayaks,
        kayakList: state.kayakList
    })*/
    mapStateToProps
)(ResultComponent)
