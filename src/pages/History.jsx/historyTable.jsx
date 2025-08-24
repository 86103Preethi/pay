import React, { useEffect, useState } from "react";
import { Button, TextInput, Badge, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { Spinner } from "flowbite-react";
import { HiDownload, HiSearch, HiFilter, HiClock, HiX } from "react-icons/hi";
import bank from '../../assets/bank.png';
import search from '../../assets/search.png';
import Pagination from "./pagination";
import Clock from '../../assets/clock.png';
import Timer from '../../assets/timer.png';
// import { getTransactionHistory } from "../services/transactionService";


const transactions = [
  { id: 1, name: "Lisa", date: "03 Sep, 2021", account: "Google Pay", amount: "₹1,06,023", status: "Pending" },
  { id: 2, name: "Lisa", date: "03 Sep, 2021", account: "PhonePe", amount: "₹1,023", status: "Failed" },
  { id: 3, name: "Lisa", date: "03 Sep, 2021", account: "Paytm", amount: "₹1,023", status: "Success" },
  { id: 4, name: "Lisa", date: "03 Sep, 2021", account: "Paytm", amount: "₹1,06,023", status: "Failed" },
  { id: 5, name: "Lisa", date: "03 Sep, 2021", account: "PhonePe", amount: "₹1,023", status: "Failed" },
  { id: 6, name: "Lisa", date: "03 Sep, 2021", account: "PhonePe", amount: "₹1,023", status: "Failed" },
  { id: 7, name: "Lisa", date: "03 Sep, 2021", account: "PhonePe", amount: "₹1,023", status: "Failed" },
  { id: 8, name: "Lisa", date: "03 Sep, 2021", account: "PhonePe", amount: "₹1,023", status: "Failed" },
  { id: 9, name: "Lisa", date: "03 Sep, 2021", account: "PhonePe", amount: "₹1,023", status: "Failed" },
  { id: 10, name: "Lisa", date: "03 Sep, 2021", account: "PhonePe", amount: "₹1,023", status: "Failed" },
];

const History = () => {
  const [openModal, setOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);
//   const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

//   // Fetch API data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await getTransactionHistory(111, 0);
//         console.log("API Response:", res.data);
//         setTransactions(res.data?.data || []);
//          setIsLoading(false)
//       } catch (error) {
//         console.error("Failed to fetch transactions:", error);
//       } finally {
//         setLoading(false);
//       }
//     };


  useEffect(() => {
    const filtered = transactions.filter((txn) =>
      txn.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.account.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
    setCurrentPage(1); // reset to first page on search
  }, [searchTerm]);




  const getStatusBadge = (status) => {
    switch (status) {
      case "Success":
        return <Badge className="!bg-transparent !text-green-600 !border !border-green-600">{status}</Badge>;
      case "Pending":
        return <Badge className="!bg-transparent !text-yellow-600 !border !border-yellow-600">{status}</Badge>;
      case "Failed":
        return <Badge className="!bg-transparent !text-red-600 !border !border-red-600">{status}</Badge>;
      default:
        return <Badge className="!bg-transparent !text-gray-600 !border !border-gray-400">{status}</Badge>;
    }
  };


  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // pagination logic
  const totalPages = Math.ceil(filteredTransactions.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentTransactions = filteredTransactions.slice(startIndex, startIndex + rowsPerPage);


  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen text-base sm:text-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Settlement History</h1>
        <Button color="light" className="border !bg-white !border-green-600 !text-[#42794a] text-sm sm:text-lg">
          Download statement
        </Button>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <TextInput
          type="text"
          icon={HiSearch}
          placeholder="Search"
          className="flex-1 text-sm sm:text-base"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          theme={{
            field: {
              input: {
                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50 rounded-lg !bg-white !text-gray-900 !border-gray-300 placeholder:text-gray-400",
              },
            },
          }}
        />
        <Button
          color="light"
          onClick={() => {
            const filtered = transactions.filter((txn) =>
              txn.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              txn.account.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredTransactions(filtered);
          }}
          className="!bg-[#42794a] w-full sm:w-auto"
          theme={{
            base: "flex items-center justify-center px-4 py-2 text-sm sm:text-base font-medium rounded-lg !text-gray-600 !border !border-gray-300",
          }}
        >
          <img src={search} alt="search" className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </div>

      {/* Info Banner */}
      <div className="bg-green-100 border border-[#42794a] rounded-lg p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
        <div className="flex items-center gap-2 text-[#42794a] flex-wrap">
          <img src={Clock} alt="timer" className="w-6 h-6" />
          <p className="text-sm sm:text-base text-[#999999]">
            Today’s total collection will be auto-settled by{" "}
            <span className="font-semibold text-[#42794a]">08:00AM, 23rd Oct’22</span> Tomorrow.
          </p>
        </div>
        <Button
          color="success"
          className="bg-[#42794a] text-white  focus:outline-none focus:ring-0 mt-2 sm:mt-0"
          onClick={() => setOpenModal(true)}
        >
          <img src={Timer} alt="timer" className="w-6 h-6 mx-2" />
          <span >Settle Now!</span>
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-center text-[#999999] text-sm sm:text-base">
            <tr>
              <th className="py-2 px-1 sm:px-2">Name</th>
              <th className="py-2 px-1 sm:px-2">Date & Time</th>
              <th className="py-2 px-1 sm:px-2">Account</th>
              <th className="py-2 px-1 sm:px-2">Amount</th>
              <th className="py-2 px-1 sm:px-2">Status</th>
              <th className="py-2 px-1 sm:px-2">Details</th>
            </tr>
          </thead>
          {/* <tbody className="bg-white divide-y divide-gray-200 text-center text-sm sm:text-base">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((txn) => (
                <tr key={txn.id}>
                  <td className="py-2 px-1 sm:px-2">{txn.name}</td>
                  <td className="py-2 px-1 sm:px-2">{txn.date}</td>
                  <td className="py-2 px-1 sm:px-2">{txn.account}</td>
                  <td className="py-2 px-1 sm:px-2 font-semibold">{txn.amount}</td>
                  <td className="py-2 px-1 sm:px-2">{getStatusBadge(txn.status)}</td>
                  <td className="py-2 px-1 sm:px-2">
                    <a href="#" className="text-[#42794a] underline">View</a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 text-gray-500">No results found</td>
              </tr>
            )}
          </tbody> */}
        <tbody className="bg-white divide-y divide-gray-200 text-center text-sm sm:text-base">
        {isLoading ? (
            <tr>
            <td colSpan="6" className="py-6">
                <div className="flex justify-center items-center gap-2">
                <Spinner color="success" size="lg" />
                <span className="text-[#42794a] font-medium">Loading...</span>
                </div>
            </td>
            </tr>
        ) : currentTransactions.length > 0 ? (
            currentTransactions.map((txn) => (
            <tr key={txn.id}>
                <td className="py-2 px-1 sm:px-2">{txn.name}</td>
                <td className="py-2 px-1 sm:px-2">{txn.date}</td>
                <td className="py-2 px-1 sm:px-2">{txn.account}</td>
                <td className="py-2 px-1 sm:px-2 font-semibold">{txn.amount}</td>
                <td className="py-2 px-1 sm:px-2">{getStatusBadge(txn.status)}</td>
                <td className="py-2 px-1 sm:px-2">
                <a href="#" className="text-[#42794a] underline">View</a>
                </td>
            </tr>
            ))
        ) : (
            <tr>
            <td colSpan="6" className="py-4 text-gray-500">No results found</td>
            </tr>
        )}
        </tbody>
        </table>





      </div>


      
        {/* Pagination */}
        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
        />
      




      {/* Modal */}
      <Modal show={openModal} onClose={() => setOpenModal(false)} popup className="width:1032px, height:736px">
        <ModalHeader className="!bg-white text-black py-5">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-lg font-bold text-black px-5">Manage QR/POS</h2>
            <button
              onClick={() => setOpenModal(false)}
              className="p-1 rounded hover:bg-gray-100"
            >
              <HiX className="h-5 w-5" />
            </button>
          </div>
        </ModalHeader>
        <ModalBody className="!bg-white text-black">
          <div className="space-y-4 text-gray-700 text-sm">
            <div className="flex justify-between">
              <p className="font-semibold flex items-center gap-2">
                <img src={bank} alt="bank" className="w-6 h-6 rounded-md border" />
                Today’s Total Collection
              </p>
              <p className="font-bold">₹1,023</p>
            </div>

            <div className="flex justify-between text-black">
              <p className="flex items-center gap-2 text-green-500">
                <img src={bank} alt="bank" className="w-6 h-6 rounded-md border" /> Already Settled
              </p>
              <p>₹100</p>
            </div>

            <div className="pt-3 border-t flex flex-col gap-4">
              <p className="uppercase text-xs font-semibold text-[#999999] mb-2">
                Settlement Calculation
              </p>
              <div className="flex justify-between">
                <p className="text-[#999999]">Amount yet to be settled</p>
                <p className="font-semibold">IBRAHIM MOHAMMEDALI</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#999999]">Past pending amount</p>
                <p className="font-semibold">092141241127</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#999999]">Charges</p>
                <p className="font-semibold">07, Aug 2024</p>
              </div>
            </div>

            <div className="flex justify-between border-t pt-3">
              <p className="font-semibold flex items-center gap-2">
                <img src={bank} alt="bank" className="w-6 h-6 rounded-md border" /> Today’s Total Collection
              </p>
              <p className="font-bold">₹1,023</p>
            </div>

            <div className="bg-green-100 border border-green-300 rounded-lg p-3 flex justify-between items-center mt-3">
              <div>
                <p className="text-sm text-black">
                  Tap ‘Settle Now’ to instantly get settlements in your bank account.
                </p>
                <p className="text-xs text-green-600 font-semibold mt-1">Settle Now is Chargeable</p>
              </div>
              <Button
                color="success"
                className="bg-[#42794a] text-white text-xs"
                onClick={() => setOpenModal(false)}
              >
                Settle Now
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
      
    </div>
  );
};

export default History;
