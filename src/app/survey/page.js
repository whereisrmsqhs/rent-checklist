"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { answers, questions } from "@/data/data";
import { useRouter } from "next/router";

export default function Survey() {
  const [questionOrder, setQuestionOrder] = React.useState(1);
  const [question, setQuestion] = React.useState(questions[1]);
  const [answer, setAnswer] = React.useState(answers[1]);
  const [progress, setProgress] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState({});
  const [userSelection, setUserSelection] = React.useState([]);
  const [isSelected, setIsSelected] = React.useState(null);
  const { toast } = useToast();
  const router = useRouter();

  const handleSelect = (index) => {
    setIsSelected(index);
    setSelectedAnswer(answer.answer[index]);
  };

  const handlePrevBtn = (event) => {
    event.preventDefault();

    const prevUserSelection = userSelection[userSelection.length - 1];
    const progressCal = (prevUserSelection.q_id / (questions.length - 1)) * 100;
    setQuestion(questions[prevUserSelection.q_id]);
    setQuestionOrder(prevUserSelection.q_id);
    setAnswer(answers[prevUserSelection.q_id]);
    setSelectedAnswer(answers[prevUserSelection.q_id]);

    setProgress(progressCal);
    setIsSelected(null);
    setUserSelection((prev) => {
      return prev.slice(0, -1);
    });
  };

  const handleNextBtn = (event) => {
    event.preventDefault();
    if (isSelected === null) {
      toast({
        variant: "destructive",
        title: "문항을 선택해주세요",
      });
      return;
    }
    let nextQuestionOrder = selectedAnswer.return_question;
    nextQuestionOrder =
      nextQuestionOrder === -1 ? questionOrder + 1 : nextQuestionOrder;
    if (questionOrder === questions.length) {
      router.push({
        pathname: "/result",
        query: userSelection,
      });
    }

    const progressCal = (questionOrder / (questions.length - 1)) * 100;
    const postUserSelection = {
      q_id: answers[questionOrder].q_id,
      answer: selectedAnswer,
    };

    setQuestion(questions[nextQuestionOrder]);
    setAnswer(answers[nextQuestionOrder]);

    setQuestionOrder(nextQuestionOrder);
    setProgress(progressCal);

    setUserSelection((prev) => {
      if (prev === undefined) {
        return [postUserSelection];
      } else {
        return [...prev, postUserSelection];
      }
    });

    setSelectedAnswer({});
    setIsSelected(null);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>
            Q{questionOrder}: {question.content}
          </CardTitle>
          <Progress value={progress} />
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label>아래에서 선택해주세요.</Label>
                {answer.answer.map((ans, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(index)}
                    className={`w-full border rounded pl-3 py-2 cursor-pointer hover:bg-slate-200 
      ${isSelected === index ? "bg-slate-200" : ""}`}
                  >
                    {ans.content} {isSelected === index ? "✅" : ""}
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                {questionOrder > 1 ? (
                  <Button onClick={handlePrevBtn}>이전</Button>
                ) : (
                  <></>
                )}
                <Button onClick={handleNextBtn}>다음</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
