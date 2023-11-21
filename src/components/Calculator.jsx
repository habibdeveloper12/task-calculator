import React, { useState } from "react";
import { useForm } from "react-cool-form";
import "./../styles.css";
const Field = ({ label, id, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
  </div>
);

// const Select = ({ label, id, children, ...rest }) => (
//   <div>
//     <label htmlFor={id}>{label}</label>
//     <select id={id} {...rest}>
//       {children}
//     </select>
//   </div>
// );

// const Textarea = ({ label, id, ...rest }) => (
//   <div>
//     <label htmlFor={id}>{label}</label>
//     <textarea id={id} {...rest} />
//   </div>
// );
const Calculator = () => {
  const [financialHealth, setFinancialHealth] = useState(null);
  const { form } = useForm({
    defaultValues: { income: 0, expenses: 0, debts: 0, assets: 0 },
    onSubmit: async (values) => {
      const response = await fetch(
        "https://financial-health-60vf.onrender.com/api/v1/calculator",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await response.json();
      console.log(data);
      setFinancialHealth(data.data);
    },
  });

  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Financial Health Calculator</h2>
          <p className="text-3xl py-6 text-gray-500">
            please provide monthly income,expenses,debt,assets cost in that
            field
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <form ref={form}>
              <Field
                label="monthly income,"
                id="income"
                name="income"
                type="number"
              />
              <Field
                label="monthly expenses,"
                id="expenses"
                name="expenses"
                type="number"
              />
              <Field
                label="monthly debts,,"
                id="debts"
                name="debts"
                type="number"
              />
              <Field
                label="monthly assets.,"
                id="assets"
                name="assets"
                type="number"
              />
              <input type="submit" value={"Submit Calculation"} />
            </form>
          </div>
        </div>
        {financialHealth !== null && (
          <h2 className="text-3xl pt-8 text-black-300 uppercase text-center">
            Financial Health Score: {financialHealth}%
          </h2>
        )}
      </div>
    </div>
  );
};

export default Calculator;
