import React from "react";
import { Button, Card } from "flowbite-react";
import bank from "../assets/p-bank.png";
import profile from "../assets/p-profile.png";
import kyc from "../assets/p-kyc.png";
import order from "../assets/p-order.png";
import arrow from "../assets/arrow.png";

import smartspeaker from "../assets/smart-speaker.png";
import posmachine from "../assets/pos-machine.png";
import payment from "../assets/payment-settings.png";
import changLanguage from "../assets/change-language.png";
import manageStaff from "../assets/manage-staff.png";
import CardImage from "../assets/card-image.jpg";
import rectangle from "../assets/rectangle.png";
import bannerImg from '../assets/profile-banner.png';


const QuickLinkCard = ({ icon, arrowIcon, title, subtitle }) => (
  <Card className="cursor-pointer hover:shadow-md w-full md:w-[238px] h-[211px] flex flex-col gap-2 items-start sm:items-center !bg-[#EEF8F2] !border-gray-200">
    <div className="flex flex-row justify-between w-full">
      <img src={icon} alt={title} className="w-[64px] h-[64px]" />
      <img src={arrowIcon} alt="arrow" className="w-[24px] h-[24px]" />
    </div>
    <p className="font-gilroy font-semibold text-[24px] leading-[100%] tracking-normal text-[#42794A] text-left">
      {title}
    </p>
    <p className="font-medium text-[20px] leading-[100%] tracking-normal text-gray-400 text-left">
      {subtitle}
    </p>
  </Card>
);

const ServiceCard = ({ title, items }) => (
  <Card className="rounded-[16px] w-full max-w-md sm:max-w-lg lg:max-w-full border !border-gray-200 !bg-white opacity-100">
    {/* Title */}
    <h3 className="font-semibold text-[14px] leading-[16px] tracking-[0.12em] uppercase text-gray-500">
      {title}
    </h3>

    {/* Items with Flexbox */}
    <div className="flex flex-wrap">
      {items.map(({ img, label }, i) => (
        <div
          key={i}
          className="flex flex-col items-start gap-2 w-1/2 sm:w-1/3 md:w-1/4"
        >
          <img
            src={img}
            alt={label}
            className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] md:w-[100px] md:h-[100px]"
          />
<p className="text-xs sm:text-sm text-center break-words max-w-[100px]">{label}</p>
        </div>
      ))}
    </div>
  </Card>
);

const Profile = () => {
  return (
    <div className=" min-h-screen">
          <div className="h-240 w-full mb-5">
              <img
                src={bannerImg}
                alt="QR Code"
                className="rounded-lg border"
              />
          </div>


      <div
        style={{
          background:"radial-gradient(100% 533.55% at 100% 0%, #61CE70 0%, #42794A 100%)",
        }}
        className="rounded-xl flex flex-col md:flex-row items-center justify-between px-6 md:px-10  gap-6 w-full"
      >
          {/* Left Content */}
          {/* <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-snug">
              Pay <span className="text-[#caffd0]">₹1/month*</span> for the QPay
              <br />
              <span className="leading-relaxed block">POS Device</span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-white opacity-90">
              One device for accepting all modes of payments
            </p>
            <Button
              color="success"
              className="mt-5 bg-white text-[#4f9c5a] text-sm md:text-base px-5 py-2"
            >
              Download App Now!
            </Button>
          </div> */}
          {/* Right Image */}
          {/* <div className="flex-shrink-0">
            <img
              src={CardImage}
              alt="pos-device"
              className="w-[160px] sm:w-[200px] md:w-[260px] lg:w-[300px] h-auto"
            />
          </div> */}
          
        
         
      </div>



      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <QuickLinkCard
          icon={bank}
          arrowIcon={arrow}
          title="XXXX 9820"
          subtitle="ICICI Bank | Chennai Egmore Branch"
        />
        <QuickLinkCard
          icon={profile}
          arrowIcon={arrow}
          title="Business Profile"
          subtitle="View and edit your business details"
        />
        <QuickLinkCard
          icon={kyc}
          arrowIcon={arrow}
          title="KYC Verification"
          subtitle="Unlock exclusive benefits with KYC"
        />
        <QuickLinkCard
          icon={order}
          arrowIcon={arrow}
          title="Order QR"
          subtitle="Get paid, manage & order QRs"
        />
      </div>

      {/* Services Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <ServiceCard
          title="BUSINESS SERVICES"
          items={[
            { img: smartspeaker, label: "Smart Speaker" },
            { img: posmachine, label: "POS Machine" },
          ]}
        />
        <ServiceCard
          title="MANAGE BUSINESS"
          items={[
            { img: payment, label: "Payment Settings" },
            { img: manageStaff, label: "Manage Staff" },
            { img: changLanguage, label: "Change Language" },
          ]}
        />
      </div>
    </div>
  );
};

export default Profile;