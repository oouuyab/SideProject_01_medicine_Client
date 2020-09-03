import { combineReducers } from 'redux';
import { medicineReducer } from './medicines';

export const allReducers = combineReducers({ medicineReducer });
