
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import GoogleAd from '@/components/GoogleAd';

type Question = {
  id: number;
  subject: 'Biology' | 'Physics' | 'Chemistry';
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const mockQuestions: Question[] = [
  {
    id: 1,
    subject: 'Biology',
    text: 'Which of the following organelles is known as the "powerhouse of the cell"?',
    options: ['Nucleus', 'Mitochondria', 'Golgi apparatus', 'Endoplasmic reticulum'],
    correctAnswer: 1,
    explanation: 'Mitochondria are known as the "powerhouse of the cell" because they generate most of the cell\'s supply of adenosine triphosphate (ATP), used as a source of chemical energy.'
  },
  {
    id: 2,
    subject: 'Chemistry',
    text: 'Which of the following is NOT a state of matter?',
    options: ['Solid', 'Liquid', 'Gas', 'Energy'],
    correctAnswer: 3,
    explanation: 'The states of matter are solid, liquid, gas, and plasma. Energy is a property that matter possesses and not a state of matter itself.'
  },
  {
    id: 3,
    subject: 'Physics',
    text: 'What is the SI unit of force?',
    options: ['Watt', 'Joule', 'Newton', 'Pascal'],
    correctAnswer: 2,
    explanation: 'The newton (N) is the SI unit of force. It is named after Sir Isaac Newton and is defined as the force needed to accelerate 1 kilogram of mass at the rate of 1 meter per second squared.'
  },
  {
    id: 4,
    subject: 'Biology',
    text: 'DNA replication is:',
    options: ['Conservative', 'Semi-conservative', 'Dispersive', 'Non-conservative'],
    correctAnswer: 1,
    explanation: 'DNA replication is semi-conservative, meaning that each strand of the original DNA molecule serves as a template for the production of a new strand, resulting in two DNA molecules, each containing one original and one new strand.'
  },
  {
    id: 5,
    subject: 'Chemistry',
    text: 'Which of the following elements has the highest electronegativity?',
    options: ['Oxygen', 'Nitrogen', 'Fluorine', 'Chlorine'],
    correctAnswer: 2,
    explanation: 'Fluorine has the highest electronegativity value (3.98 on the Pauling scale) among all elements in the periodic table.'
  }
];

const MockTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(mockQuestions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  
  const handleOptionSelect = (optionIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };
  
  const handleNext = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const calculateScore = () => {
    let score = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === mockQuestions[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };
  
  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <GoogleAd className="w-full" />
      
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-neet-dark">NEET Mock Test</h1>
          <Button variant="outline" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {!showResults ? (
          <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-lg">
                    Question {currentQuestion + 1} of {mockQuestions.length}
                  </CardTitle>
                  <CardDescription>
                    Subject: {mockQuestions[currentQuestion].subject}
                  </CardDescription>
                </div>
                <div className="flex items-center bg-neet-light px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4 mr-2 text-neet-primary" />
                  <span className="text-neet-primary font-medium">{formatTime(timer)}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-lg font-medium">{mockQuestions[currentQuestion].text}</p>
              </div>
              <div className="space-y-3">
                {mockQuestions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`option-${index}`} 
                      checked={selectedAnswers[currentQuestion] === index}
                      onCheckedChange={() => handleOptionSelect(index)}
                    />
                    <label 
                      htmlFor={`option-${index}`}
                      className={`text-base cursor-pointer ${selectedAnswers[currentQuestion] === index ? 'font-medium' : ''}`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button 
                onClick={handleNext}
              >
                {currentQuestion === mockQuestions.length - 1 ? 'Finish' : 'Next'}
                {currentQuestion !== mockQuestions.length - 1 && <ArrowRight className="h-4 w-4 ml-2" />}
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
              <CardDescription>
                You scored {calculateScore()} out of {mockQuestions.length}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {mockQuestions.map((question, qIndex) => (
                  <div key={qIndex} className="border rounded-md p-4">
                    <p className="font-medium mb-2">{qIndex + 1}. {question.text}</p>
                    <div className="space-y-2 mb-4">
                      {question.options.map((option, oIndex) => (
                        <div 
                          key={oIndex} 
                          className={`p-2 rounded ${
                            question.correctAnswer === oIndex 
                              ? 'bg-green-100 border border-green-300' 
                              : selectedAnswers[qIndex] === oIndex && selectedAnswers[qIndex] !== question.correctAnswer
                                ? 'bg-red-100 border border-red-300'
                                : 'bg-gray-50 border border-gray-200'
                          }`}
                        >
                          {option} {
                            question.correctAnswer === oIndex 
                              ? '✓' 
                              : selectedAnswers[qIndex] === oIndex && selectedAnswers[qIndex] !== question.correctAnswer
                                ? '✗'
                                : ''
                          }
                        </div>
                      ))}
                    </div>
                    <div className="text-sm bg-blue-50 p-3 rounded border border-blue-200">
                      <p className="font-medium text-blue-800">Explanation:</p>
                      <p className="text-blue-700">{question.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => {
                  setCurrentQuestion(0);
                  setSelectedAnswers(Array(mockQuestions.length).fill(-1));
                  setShowResults(false);
                }}
                className="mr-2"
              >
                Retake Test
              </Button>
              <Button variant="outline" onClick={() => navigate('/')}>
                Back to Home
              </Button>
            </CardFooter>
          </Card>
        )}
        
        <GoogleAd className="w-full mt-8" />
      </main>
    </div>
  );
};

export default MockTest;
