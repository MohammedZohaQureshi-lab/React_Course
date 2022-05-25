import React from 'react';

import Chart from "../Chart/Chart"

const ExpensesChart = props => {
    let chartDataPoints = [
        { id:"00",label: 'Jan', value: 0 },
        { id:"01",label: 'Feb', value: 0 },
        { id:"02",label: 'Mar', value: 0 },
        { id:"03",label: 'Apr', value: 0 },
        { id:"04",label: 'May', value: 0 },
        { id:"05",label: 'Jun', value: 0 },
        { id:"06",label: 'Jul', value: 0 },
        { id:"07",label: 'Aug', value: 0 },
        { id:"08",label: 'Sep', value: 0 },
        { id:"09",label: 'Oct', value: 0 },
        { id:"10",label: 'Nov', value: 0 },
        { id:"11",label: 'Dec', value: 0 }
    ]
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount
    }
    return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart;