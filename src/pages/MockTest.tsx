import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import GoogleAd from '@/components/GoogleAd';
import { redirectToLoginIfNeeded, getAuthState } from '@/utils/authUtils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type Question = {
  id: number;
  subject: 'Physics' | 'Chemistry' | 'Biology';
  category?: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const physicsQuestions: Question[] = [
  {
    id: 1,
    subject: 'Physics',
    category: 'Mechanics',
    text: 'A body is thrown vertically upwards with a speed of 20 m/s. What is its maximum height? (g = 10 m/s²)',
    options: ['10 m', '20 m', '30 m', '40 m'],
    correctAnswer: 1,
    explanation: 'Using the equation v² = u² + 2as, where final velocity v = 0 at maximum height, initial velocity u = 20 m/s, and acceleration a = -g = -10 m/s². So, 0 = 20² + 2(-10)s, which gives s = 20 m.'
  },
  {
    id: 2,
    subject: 'Physics',
    category: 'Mechanics',
    text: 'The distance covered by a body in 4 seconds under uniform acceleration is 40 m. Find its acceleration.',
    options: ['2.5 m/s²', '5 m/s²', '10 m/s²', '20 m/s²'],
    correctAnswer: 1,
    explanation: 'Using the equation s = ut + (1/2)at², where s = 40 m, u = 0 (assuming initial velocity is zero), and t = 4 s. So, 40 = 0 + (1/2)a(16), which gives a = 5 m/s².'
  },
  {
    id: 3,
    subject: 'Physics',
    category: 'Mechanics',
    text: 'A car moving with a speed of 30 m/s applies brakes and comes to rest in 10 seconds. What is the acceleration?',
    options: ['-1 m/s²', '-2 m/s²', '-3 m/s²', '-4 m/s²'],
    correctAnswer: 2,
    explanation: 'Using the equation a = (v - u)/t, where final velocity v = 0, initial velocity u = 30 m/s, and time t = 10 s. So, a = (0 - 30)/10 = -3 m/s².'
  },
  {
    id: 4,
    subject: 'Physics',
    category: 'Mechanics',
    text: 'A body of mass 5 kg is moving with a velocity of 10 m/s. What is its momentum?',
    options: ['25 kg·m/s', '50 kg·m/s', '100 kg·m/s', '250 kg·m/s'],
    correctAnswer: 1,
    explanation: 'Momentum = mass × velocity = 5 kg × 10 m/s = 50 kg·m/s.'
  },
  {
    id: 5,
    subject: 'Physics',
    category: 'Thermodynamics',
    text: 'A gas expands from a volume of 2 m³ to 4 m³. The pressure is constant at 10 Pa. What is the work done?',
    options: ['10 J', '20 J', '30 J', '40 J'],
    correctAnswer: 1,
    explanation: 'Work done = pressure × change in volume = 10 Pa × (4 - 2) m³ = 20 J.'
  }
];

const chemistryQuestions: Question[] = [
  {
    id: 1,
    subject: 'Chemistry',
    category: 'Organic Chemistry',
    text: 'What is the IUPAC name of CH₃-CH₂-CHO?',
    options: ['Methanol', 'Ethanal', 'Propanal', 'Butanal'],
    correctAnswer: 2,
    explanation: 'The IUPAC name of CH₃-CH₂-CHO is propanal, as it contains a three-carbon chain with an aldehyde group at the end.'
  },
  {
    id: 2,
    subject: 'Chemistry',
    category: 'Organic Chemistry',
    text: 'Which of the following is a characteristic property of alkanes?',
    options: ['They are highly reactive', 'They are polar and soluble in water', 'They are non-polar and insoluble in water', 'They readily undergo addition reactions'],
    correctAnswer: 2,
    explanation: 'Alkanes are non-polar hydrocarbons with single bonds, making them insoluble in water and relatively unreactive compared to other organic compounds.'
  },
  {
    id: 3,
    subject: 'Chemistry',
    category: 'Inorganic Chemistry',
    text: 'The oxidation state of chlorine in NaClO₃ is:',
    options: ['+1', '+3', '+5', '+7'],
    correctAnswer: 2,
    explanation: 'In NaClO₃, Na has oxidation state +1, O has -2 (three oxygen atoms total -6), and since the compound is neutral, chlorine must have an oxidation state of +5.'
  },
  {
    id: 4,
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    text: 'What is the molarity of a solution prepared by dissolving 10 g of NaCl (Molar mass = 58.5 g/mol) in 500 mL of solution?',
    options: ['0.17 M', '0.34 M', '0.51 M', '0.68 M'],
    correctAnswer: 1,
    explanation: 'Molarity = moles/volume in liters. Moles of NaCl = 10/58.5 = 0.171 mol. Volume = 500 mL = 0.5 L. Molarity = 0.171/0.5 = 0.34 M.'
  },
  {
    id: 5,
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    text: 'What is the pH of a neutral solution at 25°C?',
    options: ['0', '4', '7', '14'],
    correctAnswer: 2,
    explanation: 'At 25°C, a neutral solution has a pH of 7, which means the concentration of hydrogen ions [H⁺] equals the concentration of hydroxide ions [OH⁻].'
  }
];

const biologyQuestions: Question[] = [
  {
    id: 1,
    subject: 'Biology',
    category: 'Cell Biology',
    text: 'The cell organelle responsible for protein synthesis is:',
    options: ['Mitochondria', 'Ribosome', 'Golgi apparatus', 'Lysosome'],
    correctAnswer: 1,
    explanation: 'Ribosomes are the cellular organelles responsible for protein synthesis. They read the messenger RNA (mRNA) and translate the genetic code to produce proteins.'
  },
  {
    id: 2,
    subject: 'Biology',
    category: 'Cell Biology',
    text: 'The mitochondrion is known as the:',
    options: ['Brain of the cell', 'Powerhouse of the cell', 'Kitchen of the cell', 'Storehouse of the cell'],
    correctAnswer: 1,
    explanation: 'Mitochondria are known as the powerhouse of the cell because they generate most of the cell\'s supply of adenosine triphosphate (ATP), which is used as energy.'
  },
  {
    id: 3,
    subject: 'Biology',
    category: 'Genetics',
    text: 'The process by which genetic material is passed from parent to offspring is called:',
    options: ['Mutation', 'Evolution', 'Heredity', 'Variation'],
    correctAnswer: 2,
    explanation: 'Heredity is the process by which genetic information is passed from parent to offspring, resulting in the inheritance of traits.'
  },
  {
    id: 4,
    subject: 'Biology',
    category: 'Human Physiology',
    text: 'The hormone responsible for regulating blood sugar levels is:',
    options: ['Thyroxine', 'Insulin', 'Estrogen', 'Testosterone'],
    correctAnswer: 1,
    explanation: 'Insulin is the hormone produced by the beta cells of the pancreas that regulates blood glucose levels by allowing cells to take up glucose from the bloodstream.'
  },
  {
    id: 5,
    subject: 'Biology',
    category: 'Human Physiology',
    text: 'Which organ produces bile in the human body?',
    options: ['Pancreas', 'Liver', 'Kidney', 'Spleen'],
    correctAnswer: 1,
    explanation: 'The liver produces bile, which is stored in the gallbladder and released into the small intestine to aid in the digestion and absorption of fats.'
  }
];

const allQuestions: Question[] = [...physicsQuestions, ...chemistryQuestions, ...biologyQuestions];

const MockTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(allQuestions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [timer, setTimer] = useState(900); // 15 minutes in seconds
  const [activeSubject, setActiveSubject] = useState<'all' | 'Physics' | 'Chemistry' | 'Biology'>('all');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  useEffect(() => {
    const checkLogin = async () => {
      const authState = getAuthState();
      setIsLoggedIn(authState);
      
      if (!authState) {
        await redirectToLoginIfNeeded(navigate);
      }
    };
    
    checkLogin();
  }, [navigate]);
  
  useEffect(() => {
    let interval: number | undefined;
    
    if (timer > 0 && !showResults && isLoggedIn) {
      interval = window.setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            setShowResults(true);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer, showResults, isLoggedIn]);
  
  const filteredQuestions = activeSubject === 'all' 
    ? allQuestions 
    : allQuestions.filter(q => q.subject === activeSubject);
  
  const handleOptionSelect = (optionIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };
  
  const handleNext = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
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
    filteredQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!isLoggedIn) {
    return null;
  }

  if (filteredQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>No Questions Available</CardTitle>
            <CardDescription>
              There are no questions available for this subject at the moment.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" onClick={() => navigate('/')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

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
          <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle className="text-lg">
                    Question {currentQuestion + 1} of {filteredQuestions.length}
                  </CardTitle>
                  <CardDescription>
                    Subject: {filteredQuestions[currentQuestion].subject} 
                    {filteredQuestions[currentQuestion].category && ` | Category: ${filteredQuestions[currentQuestion].category}`}
                  </CardDescription>
                </div>
                <div className="flex items-center bg-neet-light px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4 mr-2 text-neet-primary" />
                  <span className="text-neet-primary font-medium">{formatTime(timer)}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <Tabs
                defaultValue="all"
                value={activeSubject}
                onValueChange={(value) => {
                  setActiveSubject(value as 'all' | 'Physics' | 'Chemistry' | 'Biology');
                  setCurrentQuestion(0);
                  setSelectedAnswers(Array(filteredQuestions.length).fill(-1));
                }}
                className="mb-6"
              >
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="Physics">Physics</TabsTrigger>
                  <TabsTrigger value="Chemistry">Chemistry</TabsTrigger>
                  <TabsTrigger value="Biology">Biology</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="mb-6">
                <p className="text-lg font-medium">{filteredQuestions[currentQuestion].text}</p>
              </div>
              
              <div className="space-y-3">
                <RadioGroup 
                  value={selectedAnswers[currentQuestion] !== -1 ? selectedAnswers[currentQuestion].toString() : undefined}
                  onValueChange={(value) => handleOptionSelect(parseInt(value))}
                >
                  {filteredQuestions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem id={`option-${index}`} value={index.toString()} />
                      <Label 
                        htmlFor={`option-${index}`}
                        className="text-base cursor-pointer"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
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
                {currentQuestion === filteredQuestions.length - 1 ? 'Finish' : 'Next'}
                {currentQuestion !== filteredQuestions.length - 1 && <ArrowRight className="h-4 w-4 ml-2" />}
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
              <CardDescription>
                You scored {calculateScore()} out of {filteredQuestions.length}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {filteredQuestions.map((question, qIndex) => (
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
                  setSelectedAnswers(Array(filteredQuestions.length).fill(-1));
                  setShowResults(false);
                  setTimer(900);
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
