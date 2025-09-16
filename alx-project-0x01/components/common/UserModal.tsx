import React from "react";
import { UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">
          {user ? "User Details" : "Add User"}
        </h2>

        {user ? (
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-semibold">Username:</span> {user.username}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
            <p>
              <span className="font-semibold">Website:</span> {user.website}
            </p>
            <p>
              <span className="font-semibold">Company:</span> {user.company.name}
            </p>
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {user.address.street}, {user.address.city}
            </p>
          </div>
        ) : (
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="border rounded w-full p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded w-full p-2"
            />
            <input
              type="text"
              placeholder="Username"
              className="border rounded w-full p-2"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserModal;
