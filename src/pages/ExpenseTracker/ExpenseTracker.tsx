import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import transactionApi from 'api/services/transaction';
import { ITransaction } from 'models';
import React, { useEffect, useState } from 'react';
import { DataUtils } from 'utils';
import { TransactionSumary, TransactionList, TransactionInput } from './components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      margin: '0 auto',
    },
  }),
);

const ExpenseTracker: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [transactions, setTransaction] = useState<ITransaction[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const transaction = await fetchTransactions();
      setTransaction(transaction);
    };
    fetchData();
  }, []);

  /**
   * Fetch expense to display
   */
  const fetchTransactions = async () => {
    let arr: any[] = [];
    await transactionApi.fetch().then((res) => {
      arr = DataUtils.deepCloneArray(res);
    });
    return arr;
  };

  // const addTransaction: AddExpenseForm = async (name, amount, date) => {
  //   // const expense: IExpense =;
  //   const transaction = {
  //     name,
  //     amount,
  //     date: DateUtils.strToTimeStamp(date),
  //     created_at: DateUtils.strToTimeStamp(DateUtils.getCurrentDateStr()),
  //     updated_at: DateUtils.strToTimeStamp(DateUtils.getCurrentDateStr()),
  //   };

  //   await transactionApi.add(transaction).then((res) => {
  //     setTransaction([res, ...transactions]);
  //   });

  //   // re-render
  // };

  const deleteTransaction = async (id?: string) => {
    await transactionApi.delete(id);
    setTransaction(transactions.filter((expense) => expense.id !== id));
  };

  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12} className={classes.appBar}>
        <TransactionSumary />
        <TransactionInput />
        {/* <TransactionList transactions={transactions} onDelete={deleteTransaction} /> */}
      </Grid>
      <Grid item sm={4} xs={12}>
        Shedule payment list goes here
        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      </Grid>
    </Grid>
  );
};

export default ExpenseTracker;