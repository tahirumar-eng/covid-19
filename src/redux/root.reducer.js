import caseReducers from "./case/case.reducer";

import  { combineReducers } from 'redux';
import chartReducers from "./chart/chart.reducers";
import chart2Reducers from "./chart2/Chart2.reducer";
import chart3Reducers from "./chart3/chart3.reducers";
import allcasesReducers from "./allcases/allcases.reducer";
import cchartReducer from "./countrychar/cchart.reducer";

const rootReducer=combineReducers({
    case:caseReducers,
    chart:chartReducers,
    chart2:chart2Reducers,
    chart3:chart3Reducers,
    all:allcasesReducers,
    cchart:cchartReducer
    

})
export default rootReducer