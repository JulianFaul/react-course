import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'


test('Should setup default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});


// ADD_EXPENSE
test('Should setup add Expense', () => {
    const expense = {
        id: '109',
        description: 'Laptop',
        note: '',
        amount: 29500,
        createdAt: 20000
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});



// REMOVE_EXPENSE
test('Should setup remove Expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('Should not remove Expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

// EDIT_EXPENSE (2)

test('Should edit an expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{
            amount
        }

    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toEqual(amount)
});

test('Should not edit an expense if id not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates:{
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});