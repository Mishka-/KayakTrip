import {combineReducers} from 'redux';
import {navReducer} from '../Navigator';
import {people} from './people';
import {kayaks} from './kayaks';
import peopleKayakCounter from './peopleKayakCounter';

const rootReducer = combineReducers(
{
    nav:navReducer,
    people:people,
    kayaks:kayaks,
    peopleKayakCounter:peopleKayakCounter,
});

export default rootReducer