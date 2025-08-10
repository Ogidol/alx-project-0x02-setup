import React from "react";
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Posts</h1>
        <p className="mt-4">List of posts will appear here.</p>
      </main>
    </div>
  );
};

export default Posts;
