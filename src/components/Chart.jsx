import React, { useEffect, useRef, useState } from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import SingleChart from "./SingleChart";
const Chart = () => {
  const chartRef = useRef(null);
  const [financialHealth, setFinancialHealth] = useState([]);
  useEffect(() => {
    axios
      .get("https://financial-health-60vf.onrender.com/api/v1/calculator")
      .then(function (response) {
        setFinancialHealth(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    console.log(financialHealth);
  }, []);

  return (
    <div>
      {" "}
      <div name="support" className="w-full mt-24">
        <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
          Chart Visual
        </h2>
        <div className="w-full h-[700px] bg-white-900/90 absolute"></div>

        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
            {financialHealth.map((item) => (
              <div className="bg-white rounded-xl shadow-2xl h-auto">
                <SingleChart
                  income={item.income}
                  expenses={item.expenses}
                  debt={item.debt}
                  assets={item.assets}
                  total={item.total}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
