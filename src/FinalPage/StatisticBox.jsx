import React from "react";

function StatisticBox({ value, label }) {
  return (
    <div>
      <span className="text-6xl">{value}</span>
      <br />
      <span className="text-2xl text-stone-500">{label}</span>
    </div>
  );
}

export default StatisticBox;