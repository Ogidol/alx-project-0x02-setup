import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-500">@{username}</p>
      <p className="mt-2">{email}</p>
      <p>{phone}</p>
      <p>
        {address.street}, {address.city}
      </p>
      <p className="text-blue-500">{website}</p>
      <div className="mt-2">
        <p className="font-semibold">{company.name}</p>
        <p className="text-sm italic">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
