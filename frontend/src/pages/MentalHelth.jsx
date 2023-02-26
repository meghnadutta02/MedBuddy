import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import Carousel from "react-bootstrap/Carousel";
import "../App.css";

const questions = [
  {
    question: "Do you feel overwhelmed or stressed?",
    answerOptions: [
      { answerText: "Not at all", score: 0 },
      { answerText: "Somewhat", score: 1 },
      { answerText: "Very much", score: 2 },
    ],
  },
  {
    question: "Do you have trouble sleeping?",
    answerOptions: [
      { answerText: "Not at all", score: 0 },
      { answerText: "Somewhat", score: 1 },
      { answerText: "Very much", score: 2 },
    ],
  },
  {
    question: "Do you feel sad or down?",
    answerOptions: [
      { answerText: "Not at all", score: 0 },
      { answerText: "Somewhat", score: 1 },
      { answerText: "Very much", score: 2 },
    ],
  },
  {
    question: "Do you worry about lots of different things?",
    answerOptions: [
      { answerText: "Not at all", score: 0 },
      { answerText: "Somewhat", score: 1 },
      { answerText: "Very much", score: 2 },
    ],
  },
  {
    question: "Do you get irritable and/or easily annoyed when anxious?",
    answerOptions: [
      { answerText: "Not at all", score: 0 },
      { answerText: "Somewhat", score: 1 },
      { answerText: "Very much", score: 2 },
    ],
  },
  {
    question: "Does worry or anxiety make you feel fatigued or worn out?",
    answerOptions: [
      { answerText: "Not at all", score: 0 },
      { answerText: "Somewhat", score: 1 },
      { answerText: "Very much", score: 2 },
    ],
  },
  {
    question:
      "Does worry or anxiety interfere with falling and/or staying asleep?",
    answerOptions: [
      { answerText: "Not at all", score: 0 },
      { answerText: "Somewhat", score: 1 },
      { answerText: "Very much", score: 2 },
    ],
  },
  {
    question: "Does worry or anxiety make it hard to concentrate?",
    answerOptions: [
      { answerText: "Not at all", score: 0 },
      { answerText: "Somewhat", score: 1 },
      { answerText: "Very much", score: 2 },
    ],
  },
];

const suggestionMessages = [
  { score: 0, message: "You are doing well. Keep up the good work!" },
  {
    score: 1,
    message:
      "You may be experiencing some mild symptoms of stress. Consider practicing some self-care techniques such as meditation, exercise or talking to someone.",
  },
  {
    score: 2,
    message:
      "You may be experiencing symptoms of anxiety or depression. It is important to seek professional help. Talk to your doctor or a mental health professional.",
  },
];

const MentalHelth = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [suggestion, setSuggestion] = useState("");

  const handleAnswerButtonClick = (score) => {
    setScore(score + score);
    if (currentQuestion === questions.length - 1) {
      setShowScore(true);
      setSuggestion(getSuggestion(score + score));
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const getSuggestion = (score) => {
    for (let i = suggestionMessages.length - 1; i >= 0; i--) {
      if (score >= suggestionMessages[i].score) {
        return suggestionMessages[i].message;
      }
    }
    return "";
  };

  return (
    <Container>
      <div>
        <div className="border rounded m-4 p-4">
            <h2 className="text-center">Take a Survey</h2>
        {showScore ? (
          <div className="score-section">
            <div>You scored {score} points!</div>
            <div className="my-4">{suggestion}</div>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <h5>
                  Question {currentQuestion + 1} / {questions.length}
                </h5>
              </div>
              <div className="question-text">
                {questions[currentQuestion].question}
              </div>
            </div>
            <div className="answer-section my-2">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  id="mcq"
                  className="my-2"
                  onClick={() => handleAnswerButtonClick(answerOption.score)}
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}</div>
        <Carousel variant="dark" className="justify-center ">
          <h2 className="text-center my-4">Books for improvement</h2>
          <Carousel.Item>
            <div className="bg-light border">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/id/1347394607/photo/blue-hardcover-book-on-white-background-with-clipping-path.jpg?b=1&s=170667a&w=0&k=20&c=00UWvkAaHROqxH77WufL5z2PmeFo01CGUg684QM4XSE="
                />
                <Card.Body>
                  <Card.Title>The Body Keeps The Source</Card.Title>
                  <Card.Text>
                    For many people, trauma is part of life, and understanding
                    the science behind how it impacts the body can be a great
                    tool in recovery.
                  </Card.Text>
                  <Button variant="primary">Shop now at Amazon</Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="bg-light border">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/id/1347394607/photo/blue-hardcover-book-on-white-background-with-clipping-path.jpg?b=1&s=170667a&w=0&k=20&c=00UWvkAaHROqxH77WufL5z2PmeFo01CGUg684QM4XSE="
                />
                <Card.Body>
                  <Card.Title>The Body Keeps The Source</Card.Title>
                  <Card.Text>
                    For many people, trauma is part of life, and understanding
                    the science behind how it impacts the body can be a great
                    tool in recovery.
                  </Card.Text>
                  <Button variant="primary">Shop now at Amazon</Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="bg-light border">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/id/1347394607/photo/blue-hardcover-book-on-white-background-with-clipping-path.jpg?b=1&s=170667a&w=0&k=20&c=00UWvkAaHROqxH77WufL5z2PmeFo01CGUg684QM4XSE="
                />
                <Card.Body>
                  <Card.Title>The Body Keeps The Source</Card.Title>
                  <Card.Text>
                    For many people, trauma is part of life, and understanding
                    the science behind how it impacts the body can be a great
                    tool in recovery.
                  </Card.Text>
                  <Button variant="primary">Shop now at Amazon</Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="bg-light border">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/id/1347394607/photo/blue-hardcover-book-on-white-background-with-clipping-path.jpg?b=1&s=170667a&w=0&k=20&c=00UWvkAaHROqxH77WufL5z2PmeFo01CGUg684QM4XSE="
                />
                <Card.Body>
                  <Card.Title>The Body Keeps The Source</Card.Title>
                  <Card.Text>
                    For many people, trauma is part of life, and understanding
                    the science behind how it impacts the body can be a great
                    tool in recovery.
                  </Card.Text>
                  <Button variant="primary">Shop now at Amazon</Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* caroussel for vids */}
        <Carousel variant="dark" className="justify-center ">
          <h2 className="text-center my-4">Videos for a better mind</h2>
          <Carousel.Item>
            <div className="bg-light border">
              <iframe
                className="ifr"
                width="750"
                height="598"
                src="https://www.youtube.com/embed/3QIfkeA6HBY"
                title="8 Things You Can Do To Improve Your Mental Health"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="bg-light border"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="bg-light border">
              <iframe
                className="ifr"
                width="750"
                height="598"
                src="https://www.youtube.com/embed/3QIfkeA6HBY"
                title="8 Things You Can Do To Improve Your Mental Health"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="bg-light border">
              <iframe
                className="ifr"
                width="750"
                height="598"
                src="https://www.youtube.com/embed/3QIfkeA6HBY"
                title="8 Things You Can Do To Improve Your Mental Health"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};

export default MentalHelth;
