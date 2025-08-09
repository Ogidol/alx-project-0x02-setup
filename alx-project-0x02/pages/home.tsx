import React from "react";
import Card from "@/components/common/Card";

const Home: React.FC = () => {
  return (
    <main className="p-6 grid grid-cols-3 gap-4">
      <Card
        title="First Card"
        content="This is the content of the first card."
      />
      <Card title="Second Card" content="Here’s another example of a card." />
      <Card
        title="Third Card"
        content="Cards are reusable components in React."
      />
    </main>
  );
};
