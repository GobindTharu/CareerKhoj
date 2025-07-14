import React, { useEffect, isValidElement, cloneElement } from "react";
import { useSelector } from "react-redux";

export const ProtectedButtonToApply = ({ children }) => {
  const user = useSelector((state) => state.user?.user);
  console.log(user);
  const userHasResume = user?.profile?.resume !== null;

  useEffect(() => {
    if (!userHasResume) {
      console.warn("Please upload your resume first to apply.");
    }
  }, [userHasResume]);
  
  if (!isValidElement(children)) {
    console.error("ProtectedButtonToApply expects a single React element.");
    return null;
  }

  return cloneElement(children, {
    disabled: !userHasResume,
    title: !userHasResume ? "Please upload your resume to apply" : undefined,
  });
};
