import React from 'react'

const Record = () => {
  const statsData = [
    {
      title: 'Account Holders',
      amount: '1.5K',
    },
    {
      title: 'Transactions',
      amount: '2.1K',
    },
    {
      title: 'Settlements',
      amount: '2.3K',
    },
    {
      title: 'QR Orders',
      amount: '45K',
    }
  ];

  const BoxWrapper = ({ children }) => {
    return (
      <div className="rounded-md p-6 flex-1 border border-gray-200 flex items-center justify-center shadow-sm min-w-[200px]">
        {children}
      </div>
    );
  };

  return (
    <div className="flex gap-7 w-full flex-wrap">
      {statsData.map((item, index) => (
        <BoxWrapper key={index}>
          <div className="flex flex-col items-center justify-center text-center">
            <strong className="text-2xl text-[#42794a] font-bold">{item.amount}</strong>
            <span className="text-lg text-[#999999] font-medium">{item.title}</span>
          </div>
        </BoxWrapper>
      ))}
    </div>
  );
};

export default Record;
