import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? (
        <BarChart data={data}></BarChart>
      ) : (
        <AreaChart data={data}></AreaChart>
      )}
    </Wrapper>
  );
};
export default ChartsContainer;