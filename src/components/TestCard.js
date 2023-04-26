import "../styles.css";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Form, Item, Input, Select, InputNumber } from 'antd';
import QuestionPage from "../pages/QuestionPage";
import Questions from "./Questions";
import AnswerCard from "./AnswerCard";
import ReportList from "./ReportList";

const addressForm = [
    { id: 1, }
]

export default function TestCard() {

  const handleRegistry = () => {
    return <ReportList />
  }

  return (
       <div className="container">
          <div className="container-question">
            {/* <Questions /> */}
            <button
              onclick={handleRegistry} />
            <div className="container-input">
            {/* <AnswerCard /> */}
            <ReportList />
            </div>
          </div>
       </div>
       
  );
}
