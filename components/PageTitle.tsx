import React from "react";

const PageTitle = ({ desc, title }: { title: string; desc?: string }) => {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-4xl font-black mb-2">{title}</h1>
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default PageTitle;
