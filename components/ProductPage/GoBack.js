"use client";
import React from "react";
import { FaLessThan } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/products/all");
    }
  };

  return (
    <button
      onClick={goBack}
      className="flex items-center justify-start no-underline text-[#222] text-lg gap-[3px] hover:underline"
    >
      <FaLessThan size={18} /> Back to Search Results
    </button>
  );
};

export default GoBack;
