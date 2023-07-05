"use client";
import './globals.css'
import { SessionProvider } from "next-auth/react";
import AppBar from "../components/AppBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <AppBar />
          <div className={"  h-screen "}>{children}</div>
        </SessionProvider></body>
    </html>
  )
}
