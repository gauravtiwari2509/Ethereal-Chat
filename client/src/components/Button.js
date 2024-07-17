"use client";
import React from "react";
import HoverBorderGradient from '../components/ui/border-gradient'

export function Button(props) {
  return (
    <div className="flex justify-center items-center mt-5 text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex justify-center items-center space-x-2"
      >
        <span>{props.text}</span>
      </HoverBorderGradient>
    </div>
  );
}
