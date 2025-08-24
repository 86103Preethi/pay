import React from "react";
import { Card, Button } from "flowbite-react";
import Qrcode from '../../assets/manage-qr-code.png';
import { Link } from "react-router-dom";


const QrCard = () => {
  return (
    <Card className="rounded-2xl shadow-md !bg-white border !border-gray-200">
      {/* Header */}
      <p className="text-xs text-[#999999] font-semibold tracking-wide w-[426px] h-[16px]">QR</p>

      {/* QR Section */}
      <div className="flex gap-20 items-center">
        <img
          src={Qrcode}
          alt="QR Code"
          className="w-36 h-36 rounded-md"
        />
        <div>
          <p className="font-semibold text-black">Order QR</p>
          <ul className="mt-1 text-lg text-[#999999] font-medium space-y-1">
            <li>• Receive Payment</li>
            <li>• Order new QRs</li>
            <li>• Download QR</li>
          </ul>
        </div>
      </div>

      {/* Divider + Button */}
      <hr className="my-3" />
      <Link to="/qr">
      <Button color="success"  className="w-full rounded-xl bg-[#42794a] hover:bg-green-700 text-white">
        View more
      </Button>
      </Link>
    </Card>
  );
};

export default QrCard;

