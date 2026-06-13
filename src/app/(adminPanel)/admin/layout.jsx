import React from "react";
import Link from "next/link";
import Sidebar from "@/components/sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="w-4/5">{children}</div>
    </div>
  );
};

export default AdminLayout;
