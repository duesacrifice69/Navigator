import React, { useState } from "react";

const IncomeInfo = () => {
  const [view, setView] = useState("Earnings");

  const toggleView = (newView) => {
    setView(newView);
  };

  const DataEarnings = [
    {
      Basic_Salary: 285326.0,
      Allowance: 9209.5,
      Tea_Allowance: 650,
      CostOfLiving_Allowance: 7800.0,
      Productivity_Allowance: 10576.25,
      Telephone_Bill_Reimbursement: 2245.05,
      OPD_Treatment: 833.33,
    },
  ];

  const DataDeductions = [
    {
      Transport_Charges: 720.0,
      Distress_Loan_10_Month: 36115.0,
      Distress_Loan_10_Month_Interest: 2780.86,
      Sports_club: 10.0,
      Stamp_deduction: 25.0,
      By_Pass: 9510.87,
      Medical_treatment: 4755.43,
      Payee_monthly: 39148.23,
    },
  ];

  const formatFieldName = (fieldName) => {
    return fieldName
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const totalEarnings = Object.values(DataEarnings[0]).reduce(
    (total, value) => total + value,
    0
  );

  const totalDeductions = Object.values(DataDeductions[0]).reduce(
    (total, value) => total + value,
    0
  );

  const NetSalary = totalEarnings - totalDeductions;

  return (
    <div className="animate-fade-up animate-once">
      <div className="font-bold ">
        <div className="flex items-center justify-center ">
          <div className="mx-4 max-w-[1000px] flex-1">
            <div className="flex w-[100%] mt-4">
              <div className="w-[50%]">Total Earnings</div>
              <div>:</div>
              <div className="w-[50%] flex justify-end">
                {totalEarnings.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="mx-4 max-w-[1000px] flex-1">
            <div className="flex w-[100%] mt-4">
              <div className="w-[50%]">Total Deductions</div>
              <div>:</div>
              <div className="w-[50%] flex justify-end">
                -{totalDeductions.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="mx-4 max-w-[1000px] flex-1">
            <div className="flex w-[100%] mt-4">
              <div className="w-[50%]">Net Salary</div>
              <div>:</div>
              <div className="w-[50%] flex justify-end">{NetSalary}</div>
            </div>
            <div className="mt-2 border-b border-black border-dashed"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center m-5">
        <button
          className={`md:w-[130px] max-md:w-[100px] py-1 ${
            view === "Earnings"
              ? "bg-primary2 "
              : " bg-primary1 hover:bg-slate-300"
          } text-white rounded-l-full drop-shadow-lg`}
          onClick={() => toggleView("Earnings")}
        >
          Earnings
        </button>
        <button
          className={`md:w-[130px] max-md:w-[100px] py-1 ${
            view === "Deductions"
              ? "bg-primary2 "
              : " bg-primary1 hover:bg-slate-300"
          } text-white rounded-r-full drop-shadow-lg `}
          onClick={() => toggleView("Deductions")}
        >
          Deductions
        </button>
      </div>
      <div className="flex items-center justify-center ">
        <div className="mx-4 max-w-[1000px] flex-1">
          {view === "Earnings" && (
            <div className="">
              {Object.entries(DataEarnings[0]).map(([field, value], index) => (
                <div
                  key={index}
                  className="flex w-[100%] mt-4 animate-fade-up animate-once"
                >
                  <div className="w-[50%]">{formatFieldName(field)}</div>
                  <div>:</div>
                  <div className="w-[50%] flex justify-end">
                    {value.toFixed(2)}
                  </div>
                </div>
              ))}
              {/* Total Earnings */}
              <div className="flex mt-4 w-[100%] animate-fade-up animate-once">
                <div className="w-[50%] font-bold">Total Earnings</div>
                <div>:</div>
                <div className="w-[50%] flex justify-end font-bold">
                  {totalEarnings.toFixed(2)}
                </div>
              </div>
            </div>
          )}

          {view === "Deductions" && (
            <div className="">
              {Object.entries(DataDeductions[0]).map(
                ([field, value], index) => (
                  <div
                    key={index}
                    className="flex w-[100%] mt-4 animate-fade-up animate-once"
                  >
                    <div className="w-[50%]">{formatFieldName(field)}</div>
                    <div>:</div>
                    <div className="w-[50%] flex justify-end">
                      {value.toFixed(2)}
                    </div>
                  </div>
                )
              )}
              {/* Total Deductions */}
              <div className="flex mt-4 w-[100%] animate-fade-up animate-once">
                <div className="w-[50%] font-bold ">Total Deductions</div>
                <div>:</div>
                <div className="w-[50%] flex justify-end font-bold">
                  {totalDeductions.toFixed(2)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IncomeInfo;
