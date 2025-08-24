import React from "react";
import { Card, Button } from "flowbite-react";
import Chart from '../../assets/piechart.png';

const QrCard = () => {
  return (
    <Card className="rounded-2xl shadow-md !bg-white border !border-gray-200">
      {/* Header */}
      <p className="text-xs text-[#999999] font-semibold tracking-wide w-[426px] h-[16px]">PROFILE</p>

      <div className="flex gap-20 items-center">
        <img
        src={Chart}
          alt="30%"
          className="w-36 h-36 rounded-md"
        />
        <div>
          <p className="font-semibold text-black">Complete your Profile</p>
          <ul className="mt-1 text-lg text-[#999999] font-medium space-y-1">
            <li>• Personal KYC</li>
            <li>• Company KYC</li>
            <li>• Onboarding details</li>
          </ul>
        </div>
      </div>

      {/* Divider + Button */}
      <hr className="my-3" />
      <Button color="success" className="w-full rounded-xl bg-[#42794a] hover:bg-green-700 text-white">
        Next
      </Button>
    </Card>
  );
};

export default QrCard;

