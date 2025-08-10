import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="mt-2 text-sm text-gray-500">
        {address.street}, {address.suite}, {address.city} {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
