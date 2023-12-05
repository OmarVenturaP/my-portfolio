"use client";

import React from "react";
import { RecoilRoot } from "recoil";

const appProvider = ({ children }) => (
  <RecoilRoot>
    {children}
  </RecoilRoot>
);

export default appProvider;
