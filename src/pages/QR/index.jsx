import React from 'react'
import QrCard from './QrCard';
import TabCard from './TabCard'

const Index = () => {
  return (
    <div className="w-full max-w-[1000px]">
        <h1 className="font-gilroy font-bold mb-2 text-[24px] leading-[30px] sm:text-[28px] sm:leading-[34px] md:text-[32px] md:leading-[38px] tracking-normal text-gray-900">
          Manage QR/Pos
        </h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[490px]">
            <QrCard />
          </div>
          <div className="w-full md:w-[490px]">
            <TabCard />
          </div>
        </div>

    </div>
  )
}

export default Index