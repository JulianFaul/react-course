import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters';
import moment from 'moment';


// SET_TEXT_FILTER (2)
test('Should set text filter with Provided values',() => {
    const action = setTextFilter('Bill');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Bill'
    })
});

test('Should set text filter with Default values',() => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});


// SORT_BY_DATE
test('Should set sort by date to Date',() => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});

// SORT_BY_AMOUNT
test('Should set sort by amount to Amount',() => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});


// SET_START_DATE
test('Should set the startDate object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })

});

// SET_END_DATE
test('Should set the endDate object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

