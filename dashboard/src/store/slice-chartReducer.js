import { createSlice } from '@reduxjs/toolkit'
import { initialCircle, initialTrend } from '../region';

const { tickets: initialCircleTickets } = initialCircle;
const chartReducer = createSlice({
  name: 'charts',
  initialState: { tickets: initialCircleTickets, trending: initialTrend,chartTitle:'Overall Ticket Count Month',trendTitle:'Overall Ticket Count Month'  },
  reducers: {
    updateCharts(state, actions) {
      debugger;
      state.tickets = actions.payload.tickets;
      state.trending = actions.payload.trending;
      state.chartTitle = actions.payload.chartTitle;
      state.trendTitle = actions.payload.trendTitle;
    }
  }
})
export const chartActions = chartReducer.actions;
export default chartReducer