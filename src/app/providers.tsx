"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export function Providers( { children }: { children: React.ReactNode})
// https://www.totaltypescript.com/jsx-element-vs-react-reactnode
//                                                           ^?
 {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
