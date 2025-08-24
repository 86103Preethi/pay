import React from "react";
import { Card, Button } from "flowbite-react";

const transactionCard = () => {
  const transactions = [
    { id: 1, name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: 90 },
    { id: 2, name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: 90 },
    { id: 3, name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: 90 },
  ];

  return (
    <Card className="rounded-2xl shadow-md !bg-white border !border-gray-200">
      {/* Settlement Header */}
      <div  className="flex justify-between items-center ">
        <div className="mb-3">
            <p className="text-xs text-gray-500 font-semibold tracking-wide">
            TOTAL TRANSACTIONS
            </p>
            <p className="text-xl font-bold text-gray-800">₹1,23,816.19</p>
        </div>
       <div>
          <svg className="ml-3 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div> 
       </div>
      <hr/>

      {/* Transactions */}
      <div className="">
        {transactions.map((txn) => (
          <div
            key={txn.id}
            className="flex justify-between py-2 text-sm"
          >
            <div>
              <p className="font-medium text-gray-800">{txn.name}</p>
              <p className="text-gray-500 text-sm">{txn.date}</p>
            </div>
            <p className="font-semibold text-green-600">+₹{txn.amount}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-4">
        <Button className="w-full rounded-xl bg-[#42794a] hover:bg-green-700 text-white">
          View All
        </Button>
      </div>
    </Card>
  );
};

export default transactionCard;
