import React from "react";
import { Card } from "../../components/blog/Card";
import { Category } from "../../components/category/Category"
import Foreword from "../../components/foreword/Foreword";
import Contact from "../contact/Contact";

export const Home = () => {
  return (
    <>
      <Category />  
      <Foreword />
      <Card />
      <Contact />
    </>
  );
};
