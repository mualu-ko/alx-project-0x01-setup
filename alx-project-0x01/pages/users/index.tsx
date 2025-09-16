import React, { useState } from "react";
import { UserProps, UserData } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";

interface UsersPageProps {
  posts: UserProps[]; // posts is actually users from the API
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<UserProps[]>(posts);

  const handleAddUser = (user: UserData) => {
    const newUser: UserProps = {
      ...user,
      id: users.length + 1, // mock ID
      address: user.address,
      company: user.company,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>

      {isModalOpen && (
        <UserModal
                  onClose={() => setIsModalOpen(false)}
                  onSubmit={(newUser: UserProps) => {
                      handleAddUser(newUser);
                      setIsModalOpen(false);
                  } } isOpen={false} onOpen={function (): void {
                      throw new Error("Function not implemented.");
                  } }        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
