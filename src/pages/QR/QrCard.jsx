import React from "react";
import { Card, Button } from "flowbite-react";
import ManageLogo from "../../assets/manage-qr-pay-logo.png";
import ManageQr from "../../assets/manage-qr-code.png";
import Copy from "../../assets/copy.png";
import Share from "../../assets/share.png";
import Download from "../../assets/download.png";
// import DownloadIcon from "../assets/download.png";
// import ShareIcon from "../assets/share.png";

const QrCard = () => {
  return (
    <Card className="rounded-2xl shadow-md !bg-white border !border-gray-200 w-full">
      {/* Logo Header */}
      <div className="flex justify-center items-center">
        <img src={ManageLogo} alt="manage logo" className="w-[72px] h-[62px]" />
      </div>

      {/* QR Section */}
      <div className="flex flex-col items-center">
        {/* QR Image */}
        <img
          src={ManageQr}
          alt="QR Code"
          className="mb-2 w-full max-w-[406px] h-auto rounded-md"
        />

        {/* UPI Row */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <p className="font-bold text-[16px] sm:text-[18px] md:text-[20px] text-center">
            UPI ID: 987654321@qpay
          </p>
          <img
            src={Copy}
            alt="Copy UPI"
            className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] cursor-pointer"
          />
        </div>

        {/* Name */}
        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-gray-400 text-center">
          Ibrahim Mohammedilah
        </p>
      </div>

      {/* Download & Share Row */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4 w-full">
        {/* Download */}
        <Button
          className="flex items-center justify-center gap-2 flex-1 rounded-md w-full px-5 md:px-0 md:w-[204px] h-[56px] border border-gray-300 bg-[#EEEEEE] text-gray-700 hover:bg-gray-100"
        >
          <img src={Download} alt="Download" className="w-[24px] h-[24px]" />
          Download
        </Button>

        {/* Share */}
        <Button
          className="flex items-center justify-center gap-2 flex-1 rounded-md w-full px-5 md:px-0 md:w-[204px] h-[56px] border border-gray-300 bg-[#EEEEEE] text-gray-700 hover:bg-gray-100"
        >
          <img src={Share} alt="Share" className="w-[24px] h-[24px]" />
          Share
        </Button>
      </div>
    </Card>
  );
};


export default QrCard;