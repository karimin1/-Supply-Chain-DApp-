"use client";
import "./global.css";
import React, { useContext } from "react";
import { TrackingProvider } from "../Context/TrackingContext";
import { NavBar, Footer } from "../Components/index";

export default function RootLayout({ children }) {
  console.log("navbar", NavBar);

  return (
    <html lang="en">
      <body>
        <TrackingProvider>
          <NavBar />
          {children}
          <Footer /> 
        </TrackingProvider>
      </body>
    </html>
  );
}
