"use client";

import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiArrowUpRight, FiMoreHorizontal, FiX } from "react-icons/fi";

const predefinedData = [
  { name: "John Doe", date: "2024-01-15", service: "Haircut", phone: "123-456-7890", email: "john@example.com" },
  { name: "Jane Smith", date: "2024-01-16", service: "Manicure", phone: "123-456-7891", email: "jane@example.com" },
  { name: "Mark Johnson", date: "2024-01-17", service: "Massage", phone: "123-456-7892", email: "mark@example.com" },
  { name: "Emily Davis", date: "2024-01-18", service: "Facial", phone: "123-456-7893", email: "emily@example.com" },
  { name: "Michael Brown", date: "2024-01-19", service: "Pedicure", phone: "123-456-7894", email: "michael@example.com" },
  { name: "Sarah Connor", date: "2024-01-20", service: "Coloring", phone: "123-456-7895", email: "sarah@example.com" },
  { name: "David Beckham", date: "2024-01-21", service: "Nail Art", phone: "123-456-7896", email: "david@example.com" },
  { name: "Emma Watson", date: "2024-01-22", service: "Makeup", phone: "123-456-7897", email: "emma@example.com" },
  { name: "Chris Hemsworth", date: "2024-01-23", service: "Shave", phone: "123-456-7898", email: "chris@example.com" },
  { name: "Natalie Portman", date: "2024-01-24", service: "Hair Treatment", phone: "123-456-7899", email: "natalie@example.com" },
  { name: "Tom Hanks", date: "2024-01-25", service: "Spa", phone: "123-456-7800", email: "tom@example.com" },
  { name: "Robert Downey Jr.", date: "2024-01-26", service: "Beard Trim", phone: "123-456-7801", email: "robert@example.com" },
  { name: "Scarlett Johansson", date: "2024-01-27", service: "Highlights", phone: "123-456-7802", email: "scarlett@example.com" },
  { name: "Leonardo DiCaprio", date: "2024-01-28", service: "Hair Styling", phone: "123-456-7803", email: "leonardo@example.com" },
  { name: "Meryl Streep", date: "2024-01-29", service: "Blowdry", phone: "123-456-7804", email: "meryl@example.com" },
  { name: "Daniel Craig", date: "2024-01-30", service: "Haircut", phone: "123-456-7805", email: "daniel@example.com" },
  { name: "Hugh Jackman", date: "2024-01-31", service: "Facial", phone: "123-456-7806", email: "hugh@example.com" },
  { name: "Jennifer Aniston", date: "2024-02-01", service: "Manicure", phone: "123-456-7807", email: "jennifer@example.com" },
  { name: "Ryan Gosling", date: "2024-02-02", service: "Pedicure", phone: "123-456-7808", email: "ryan@example.com" },
  { name: "Jessica Alba", date: "2024-02-03", service: "Hair Color", phone: "123-456-7809", email: "jessica@example.com" },
  { name: "Will Smith", date: "2024-02-04", service: "Massage", phone: "123-456-7810", email: "will@example.com" },
  { name: "Gal Gadot", date: "2024-02-05", service: "Spa", phone: "123-456-7811", email: "gal@example.com" },
  { name: "Chris Pratt", date: "2024-02-06", service: "Shave", phone: "123-456-7812", email: "chris.pratt@example.com" },
  { name: "Natalie Dormer", date: "2024-02-07", service: "Hair Treatment", phone: "123-456-7813", email: "natalie.d@example.com" },
  { name: "Tom Hardy", date: "2024-02-08", service: "Highlights", phone: "123-456-7814", email: "tom.h@example.com" },
  { name: "Emma Stone", date: "2024-02-09", service: "Coloring", phone: "123-456-7815", email: "emma.s@example.com" },
  { name: "Dwayne Johnson", date: "2024-02-10", service: "Haircut", phone: "123-456-7816", email: "dwayne@example.com" },
  { name: "Julia Roberts", date: "2024-02-11", service: "Nail Art", phone: "123-456-7817", email: "julia@example.com" },
  { name: "Chris Evans", date: "2024-02-12", service: "Makeup", phone: "123-456-7818", email: "chris.e@example.com" },
  { name: "Robert Pattinson", date: "2024-02-13", service: "Beard Trim", phone: "123-456-7819", email: "robert.p@example.com" },
  { name: "Anne Hathaway", date: "2024-02-14", service: "Shave", phone: "123-456-7820", email: "anne@example.com" },
];

const BookingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(predefinedData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = predefinedData.slice(startIndex, startIndex + rowsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const openDetail = (booking) => {
    setSelectedBooking(booking);
  };

  const closeDetail = () => {
    setSelectedBooking(null);
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === "detail-overlay") {
      closeDetail();
    }
  };

  return (
    <div className="relative">
      <div className="p-4 rounded border border-stone-300">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-1.5 font-medium">
            <FaUser /> Bookings
          </h3>
          <button className="text-sm text-violet-500 hover:underline">See all</button>
        </div>
        <table className="w-full table-auto border-collapse">
          <TableHead />
          <tbody>
            {currentData.map((item, index) => (
              <TableRow
                key={index}
                name={item.name}
                date={item.date}
                service={item.service}
                phone={item.phone}
                onClick={() => openDetail(item)}
                order={startIndex + index + 1}
              />
            ))}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {selectedBooking && (
        <DetailPanel booking={selectedBooking} onClose={closeDetail} onOutsideClick={handleOutsideClick} />
      )}
    </div>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-gray-600">
        <th className="text-start p-2">Name</th>
        <th className="text-start p-2">Date</th>
        <th className="text-start p-2">Service</th>
        <th className="text-start p-2">Phone</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({ name, date, service, phone, onClick, order }) => {
  return (
    <tr onClick={onClick} className={`${order % 2 === 0 ? "bg-white" : "bg-zinc-200"} hover:bg-gray-100 cursor-pointer`}>
      <td className="p-2">
        <a className="underline flex items-center gap-1">
          {name} <FiArrowUpRight />
        </a>
      </td>
      <td className="p-2">{date}</td>
      <td className="p-2">{service}</td>
      <td className="p-2">{phone}</td>
      <td className="w-8">
        <button className="hover:bg-gray-200 transition-colors grid place-content-center rounded text-sm">
          <FiMoreHorizontal />
        </button>
      </td>
    </tr>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="mt-4 flex justify-end gap-2">
      <button
        className="px-3 py-1 border rounded text-sm hover:bg-gray-200"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`px-3 py-1 border rounded text-sm ${
            currentPage === index + 1
              ? "bg-violet-500 text-white"
              : "hover:bg-gray-200"
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="px-3 py-1 border rounded text-sm hover:bg-gray-200"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

const DetailPanel = ({ booking, onClose, onOutsideClick }) => {
  return (
    <div
      id="detail-overlay"
      className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-70 z-50"
      onClick={onOutsideClick}
    >
      <div className="bg-white w-1/3 h-full p-4 rounded-l-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <FiX size={20} />
        </button>
        <h2 className="text-xl font-bold mb-2">{booking.name}</h2>
        <p><strong>Date:</strong> {booking.date}</p>
        <p><strong>Service:</strong> {booking.service}</p>
        <p><strong>Phone:</strong> {booking.phone}</p>
        <p><strong>Email:</strong> {booking.email}</p>
      </div>
    </div>
  );
};

export default BookingPage;