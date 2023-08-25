import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { DATE_DATA } from "../../utils/consts";

interface Contribution {
  date: string;
  count: number;
}

export const getData = async () => {
  try {
    const res = await axios.get(`${DATE_DATA}`);
    const dataArray = Object.entries(res.data);
    const objectArray = dataArray.map(([date, count]) => ({
      date,
      count: Number(count),
    }));
    return objectArray;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const dateSlice = createSlice({
  name: "date",
  initialState: [] as Contribution[],
  reducers: {
    setContributions: (state, action: PayloadAction<Contribution[]>) => {
      return action.payload;
    },
  },
});

export const { setContributions } = dateSlice.actions;

export default dateSlice.reducer;
