import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import Home from './components/Home';
import People from './components/People';
import Kayak from './components/Kayak';
import Result from './components/Result';
import RegistrationForm from './components/RegistrationForm';

const AppNavigator = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'KayakTrip',
            headerStyle: {
                backgroundColor: '#02aeee',
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 30,
                padding: 20,
                alignSelf: 'center'
            }
        }
    },
    RegistrationForm: {
        screen:RegistrationForm
    },
    People: {
        screen: People
    },
    Kayak: {
        screen: Kayak
    },
    Result: {
        screen: Result
    }
});

const Navigator = ({dispatch, nav}) => (
    <AppNavigator
        navigation={addNavigationHelpers({
            dispatch,
            state: nav
        })}
    />
);

Navigator.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
};

export const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

export default connect(
    state => ({
        nav: state.nav
    })
)(Navigator);
