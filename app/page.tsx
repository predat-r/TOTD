'use client';
import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import Dropdown from "@/components/Dropdown";
import React, { useState } from "react";
const page = () => {
  const [showdropdown,setShowdropdown] = useState(false);
  const toggleDropdown = () =>{
    setShowdropdown(!showdropdown);
  }
  return (
    <div className="relative">
      <Navbar toggleDropdown={toggleDropdown} />
      {showdropdown?<Dropdown />:null}
      <Heading/>
    </div>
  );
};

export default page;
