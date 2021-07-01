import React, { useState } from "react";
import Zaps from "../public/lib/zapier/dataZap.json";
import { GoZap } from "react-icons/go";
import { HiArrowRight } from "react-icons/hi";
import Header from "../components/header";

const distinctAPIs = [];

Zaps.forEach((zap) => {
  zap.nodes.forEach(({ node: selected_api }) => {
    distinctAPIs[selected_api] = distinctAPIs[selected_api] || 0;
    distinctAPIs[selected_api] += 1;
  });
});

export default function App() {
  let [zaps, setZaps] = useState([]);
  return (
    <div className="h-screen flex flex-col">
      <Header onUpload={setZaps} />
      <div className="flex-1 bg-gray-50 overflow-scroll p-10">
        {zaps.map((zap) => (
          <div>
            <div className="flex items-center">
              <GoZap />
              {zap.title}
            </div>
            <div className="flex">
              {zap.nodes.map((node, index) => (
                <div className="flex items-center">
                <div className="bg-white rounded-md border py-3 px-4 my-6 space-y-1">
                  <div className="text-gray-500 text-xs font-medium tracking-tight">{node.selectedApi}</div>
                  <div className="text-sm font-medium tracking-tight">{node.action}</div>
                </div>
              {index !== zap.nodes.length - 1 && <HiArrowRight className="m-2" />}
              </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}