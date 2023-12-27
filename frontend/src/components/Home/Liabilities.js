import React from "react";

const Liabilities = ({ onClose }) => {
  const sampleData = [
    {
      date: "2023.01.09",
      loanAmount: 2627611,
      installmentAmount: 36115,
      noOfInstallments: 51,
      outAmount: 758415,
      outInstallments: 21,
    },
  ];

  const calculateMonths = (startDate) => {
    const currentDate = new Date();
    const startDateObject = new Date(startDate);

    const monthsDifference =
      (currentDate.getFullYear() - startDateObject.getFullYear()) * 12 +
      (currentDate.getMonth() - startDateObject.getMonth());
    return monthsDifference;
  };

  const todayDate = new Date().toLocaleDateString();

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col w-full pb-5 m-5 text-lg bg-slate-100 max-md:text-sm">
          <div className="m-2 ml-auto text-3xl rounded-full bg-slate-100 hover:bg-slate-200">
            <button
              onClick={onClose}
              className="flex items-center justify-end m-2"
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <div className="flex items-center justify-center ">
            <div className="mx-5 max-w-[1000px] flex-1 animate-fade-up animate-once">
              {sampleData.length > 0 ? (
                <>
                  {sampleData.map((data, index) => (
                    <div key={index}>
                      <div className="font-bold">
                        DISTRESS LOAN {calculateMonths(data.date)} MONTHS{" "}
                      </div>

                      <div className="flex mt-3 ">
                        <div className="w-[50%]">Data Granted</div>
                        <div>:</div>
                        <div className="w-[50%] flex justify-end">
                          {todayDate}
                        </div>
                      </div>

                      <div className="flex mt-1">
                        <div className="w-[50%]">Loan Amount</div>
                        <div>:</div>
                        <div className="w-[50%] flex justify-end">
                          {data.loanAmount.toFixed(2)}
                        </div>
                      </div>

                      <div className="flex mt-1">
                        <div className="w-[50%]">Installment Amount</div>
                        <div>:</div>
                        <div className="w-[50%] flex justify-end">
                          {data.installmentAmount.toFixed(2)}
                        </div>
                      </div>

                      <div className="flex mt-1 ">
                        <div className="w-[50%]">Number of Installment</div>
                        <div>:</div>
                        <div className="w-[50%] flex justify-end">
                          {data.noOfInstallments}
                        </div>
                      </div>

                      <div className="mt-6 border-t border-black border-dashed">
                        <div className="mt-6">
                          <div className="font-bold">OUTSTANDING</div>
                          <div className="flex mt-3 ">
                            <div className="w-[50%]">Amount</div>
                            <div>:</div>
                            <div className="w-[50%] flex justify-end">
                              {data.outAmount.toFixed(2)}
                            </div>
                          </div>
                          <div className="flex mt-1 ">
                            <div className="w-[50%]">Installment</div>
                            <div>:</div>
                            <div className="w-[50%] flex justify-end">
                              {data.outInstallments}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <p>No data available</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liabilities;
