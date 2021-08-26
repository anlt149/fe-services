import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import expenseApi from 'api/expense.api';
import Button from 'components/Layout/Button';
import React, { Fragment, useEffect, useState } from 'react';
import { DataUtils } from 'utils';

import { IExpense } from 'models';
import ExpenseInput from './ExpenseInput';
import ExpenseList from './ExpenseList';

const ExpenseTracker = () => {
  const [showInput, setShowInput] = useState(false);
  const [expenses, setExpenses] = useState<IExpense[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const expenses = await fetchExpenses();
      setExpenses(expenses);
    };
    fetchData();
  }, []);

  const fetchExpenses = async () => {
    let arr: any[] = [];
    await expenseApi.fetch().then((res) => {
      arr = DataUtils.deepCloneArray(res);
    });
    return arr;
  };

  return (
    <Fragment>
      <div className="card-header">
        <h1>Expense Tracker</h1>
        <Button
          text={showInput ? "Close" : "Add"}
          color={showInput ? "default" : "primary"}
          icon={showInput ? <CloseIcon /> : <AddIcon />}
          onClick={() => setShowInput(!showInput)}
        />
      </div>
      <Fragment>{showInput && <ExpenseInput />}</Fragment>
      <ExpenseList expenses={expenses} />
    </Fragment>
  );
};

export default ExpenseTracker;
