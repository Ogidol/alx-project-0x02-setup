import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const about: React.FC = () => {
  // This component renders the About page with a header and buttons of different sizes
  // The Header component is imported and used to display navigation links

  return (
    <>
      <div>
        <Header />
      </div>
      <main className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-3xl font-bold">About Page</h1>

        <Button
          size="small"
          shape="rounded-sm"
          label="Small Button"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Button
          size="medium"
          shape="rounded-md"
          label="Medium Button"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Button
          size="large"
          shape="rounded-lg"
          label="Large Button"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </main>
    </>
  );
};

export default about;
