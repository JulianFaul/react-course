import {addExpense, editExpense, removeExpense} from '../../actions/exspenses';

// REMOVE EXPENSE
test('Shoudl setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

// EDIT EXPENSE
test('should setup edit expense action object',() => {
    const action = editExpense('123abc', {note: "New note value"});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
        
    })
});

// ADD EXPENSE PROVIDED VALUES
test('should setup add expense action object with provided values',() => {
    const expenseData = {
        description: 'RENT',
        amount: 109570,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })

});

// ADD EXPENSE DEFAULT VALUES
test('should setup add expense action object with default values',() => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }
    })
});