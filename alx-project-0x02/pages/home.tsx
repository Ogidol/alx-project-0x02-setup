import React, { useState } from "react";
import PostModal from "@/components/common/PostModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  return (
    <div className="p-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Add New Post
      </button>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(newPost) => setPosts([...posts, newPost])}
      />

      <div className="mt-6 space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="p-4 border rounded">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
