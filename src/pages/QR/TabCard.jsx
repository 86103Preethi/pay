import React, { useState } from "react";
import { Card, Button } from "flowbite-react";
import { HiOutlineQrcode, HiChevronDown, HiChevronUp } from "react-icons/hi";
import Tick from '../../assets/tick.png';
import Qrcode from '../../assets/manage-qr-code.png';


const TabCard = () => {
  const [activeTab, setActiveTab] = useState("activeQR"); // manage active tab
  const [openRequest, setOpenRequest] = useState(null); // dropdown state

  const qrCodes = [
    { id: "Q201946579", label: "Terminal 1" },
    { id: "Q201946580", label: "Terminal 2" },
    { id: "Q201946581", label: "Terminal 3" },
    { id: "Q201946582", label: "Terminal 4" },
  ];

  const qrRequests = [
    {
      id: "Q201946579",
      name: "All Marketing Sales",
      address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004",
      requestedOn: "26.04.2025",
      status: "Accepted",
    },
    {
      id: "Q201946580",
      name: "All Marketing Sales",
      address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004",
      requestedOn: "27.04.2025",
      status: "Accepted",
    },
  ];

  const statusSteps = [
    "QR Request Accepted",
    "Awaiting Production",
    "Awaiting Dispatch",
    "Awaiting Delivery",
  ];

  const toggleDropdown = (id) => {
    setOpenRequest(openRequest === id ? null : id);
  };

  return (
    <Card className="rounded-2xl shadow-md !bg-white border !border-gray-200 w-full max-w-md mx-auto ">
      {/* ---------- Custom Tabs ---------- */}
      <div className="flex border border-[#42794a] rounded-lg overflow-hidden mb-4">
        <button
          className={`flex-1 py-2 px-4 text-sm font-medium ${
            activeTab === "activeQR"
              ? "bgGreen text-white"
              : "bg-white text-[#42794a]"
          }`}
          onClick={() => setActiveTab("activeQR")}
        >
          Active QR Codes
        </button>
        <button
          className={`flex-1 py-2 px-4 text-sm font-medium ${
            activeTab === "qrRequests"
              ? "bgGreen text-white"
              : "bg-white text-[#42794a]"
          }`}
          onClick={() => setActiveTab("qrRequests")}
        >
          QR Code Requests
        </button>
      </div>
      

      {/* ---------- Active QR Codes Tab Content ---------- */}
      {activeTab === "activeQR" && (
        <div className="flex flex-col gap-3">
          {qrCodes.map((qr, idx) => (
            <div key={idx}>
            <div className="flex items-center justify-between rounded-lg w-full max-w-md shadow-sm p-3 bg-white">
              {/* Left Section */}
              <div className="flex items-center gap-3">
                {/* QR Image */}
                <div className="flex items-center justify-center">
                  <img
                    src={Qrcode}
                    alt="QR"
                    className="w-[96px] h-[96px] border rounded-md"
                  />
                </div>

                {/* Text Content */}
                <div className="min-w-0"> {/* prevents overflow */}
                  <p className="font-semibold text-gray-900 truncate">{qr.id}</p>
                  <p className="text-sm text-gray-600 truncate">
                    All Marketing Sales - <br></br>MS1903041155331648980231
                  </p>
                  <p className="text-xs text-gray-500">{qr.label}</p>
                </div>
              </div>

              {/* Right Arrow */}
              <span className="text-gray-400 text-lg flex-shrink-0">{">"}</span>
            </div>

              {idx < qrCodes.length - 1 && <hr className="border-gray-300" />}
            </div>
          ))}
          <Button className="w-full mt-4 rounded-lg bgGreen hover:bg-[#42794a]">
            Request more QR Codes
          </Button>
        </div>
      )}

       {/* ---------- QR Code Requests Tab Content ---------- */}
        {activeTab === "qrRequests" && (
        <div className="flex flex-col gap-3">
            {qrRequests.map((req, idx) => (
            <div key={req.id}>
                <div className="shadow-sm">
                {/* QR + Info */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center rounded-lg">
                    <img
                        src={Qrcode}
                        alt="QR"
                        className="w-[96px] h-[96px] border rounded-md"
                    />
                    </div>
                    <div>
                    <p className="font-semibold text-gray-900">{req.name}</p>
                    <p className="text-sm font-medium text-gray-700">{req.address}</p>
                    <p className="text-xs text-gray-500">
                        Requested on {req.requestedOn}
                    </p>
                    </div>
                </div>

                {/* Dropdown Header */}
                <div
                    className="mt-3 flex items-center justify-between bg-[#EEF8F2] p-2 rounded-md cursor-pointer"
                    onClick={() => toggleDropdown(req.id)}
                >
                    <span className="text-[#42794a] font-medium flex items-center gap-2">
                    <span className="rounded-full bgGreen flex-shrink-0 flex items-center justify-center">
                        <img src={Tick} alt="Tick" className="w-[24px] h-[24px]"/>
                    </span>
                    QR Request Accepted
                    </span>
                    {openRequest === req.id ? (
                    <HiChevronUp className="text-green-700" />
                    ) : (
                    <HiChevronDown className="text-green-700" />
                    )}
                </div>

                {/* Dropdown Content */}
                {openRequest === req.id && (
                    <div className="mt-2 flex flex-col gap-2 text-sm text-gray-600 p-2">
                    {statusSteps.slice(1).map((step) => (
                        <div
                        key={step}
                        className={`flex items-center gap-2 ${
                            step.includes(req.status)
                            ? "text-green-700 font-medium"
                            : ""
                        }`}
                        >
                        <span className="w-4 h-4 border rounded-full border-gray-400" />
                        {step}
                        </div>
                    ))}
                    </div>
                )}
                </div>

                {/* HR divider except last item */}
                {idx < qrRequests.length - 1 && (
                <hr className="border-gray-300 my-2" />
                )}
            </div>
            ))}
        </div>
        )}

    </Card>
  );
};

export default TabCard;