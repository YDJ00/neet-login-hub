
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleAd from '@/components/GoogleAd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { redirectToLoginIfNeeded } from '@/utils/authUtils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const physicData = [
  { chapter: "Mechanics", questions: 13, percentage: 32.5 },
  { chapter: "Electrodynamics", questions: 10, percentage: 25 },
  { chapter: "Modern Physics", questions: 6, percentage: 15 },
  { chapter: "Optics", questions: 5, percentage: 12.5 },
  { chapter: "Thermodynamics", questions: 4, percentage: 10 },
  { chapter: "SHM & Waves", questions: 2, percentage: 5 },
];

const chemistryData = [
  { chapter: "Organic Chemistry", questions: 16, percentage: 40 },
  { chapter: "Physical Chemistry", questions: 13, percentage: 32.5 },
  { chapter: "Inorganic Chemistry", questions: 11, percentage: 27.5 },
];

const biologyData = [
  { chapter: "Human Physiology", questions: 14, percentage: 20 },
  { chapter: "Plant Physiology", questions: 8, percentage: 11.4 },
  { chapter: "Genetics & Evolution", questions: 12, percentage: 17.1 },
  { chapter: "Cell Biology", questions: 10, percentage: 14.3 },
  { chapter: "Ecology", questions: 6, percentage: 8.6 },
  { chapter: "Biological Classification", questions: 5, percentage: 7.1 },
  { chapter: "Animal Kingdom", questions: 5, percentage: 7.1 },
  { chapter: "Plant Kingdom", questions: 5, percentage: 7.1 },
  { chapter: "Biotechnology", questions: 5, percentage: 7.1 },
];

const ChapterWeightage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await redirectToLoginIfNeeded(navigate);
      setIsLoading(false);
    };
    
    checkAuth();
  }, [navigate]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <GoogleAd className="w-full" />
      
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>NEET Chapter Weightage</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-neet-dark text-center mb-8">
          NEET Chapter-wise Weightage Analysis
        </h1>
        
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Understanding chapter-wise weightage is crucial for NEET preparation. This analysis is based on the last 5 years of NEET question papers.
          Focus your studies on high-weightage chapters to maximize your score.
        </p>
        
        <GoogleAd className="w-full max-w-3xl mx-auto mb-8" />
        
        <Tabs defaultValue="biology" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="biology">Biology</TabsTrigger>
            <TabsTrigger value="physics">Physics</TabsTrigger>
            <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
          </TabsList>
          
          <TabsContent value="biology" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Biology Weightage (Total: 70 questions)</CardTitle>
                <CardDescription>Chapter-wise distribution of questions in NEET Biology section</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={biologyData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="chapter" angle={-45} textAnchor="end" height={100} />
                      <YAxis label={{ value: 'Average Questions', angle: -90, position: 'insideLeft' }} />
                      <Tooltip formatter={(value, name) => [value, name === 'questions' ? 'Average Questions' : 'Percentage']} />
                      <Legend />
                      <Bar dataKey="questions" fill="#8884d8" name="Average Questions" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-8 overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border">Chapter</th>
                        <th className="px-4 py-2 border">Average Questions</th>
                        <th className="px-4 py-2 border">Percentage</th>
                        <th className="px-4 py-2 border">Importance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {biologyData.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-2 border">{item.chapter}</td>
                          <td className="px-4 py-2 border text-center">{item.questions}</td>
                          <td className="px-4 py-2 border text-center">{item.percentage}%</td>
                          <td className="px-4 py-2 border text-center">
                            {item.percentage > 15 ? (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">High</span>
                            ) : item.percentage > 7 ? (
                              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Medium</span>
                            ) : (
                              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">Low</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="physics" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Physics Weightage (Total: 40 questions)</CardTitle>
                <CardDescription>Chapter-wise distribution of questions in NEET Physics section</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={physicData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="chapter" angle={-45} textAnchor="end" height={100} />
                      <YAxis label={{ value: 'Average Questions', angle: -90, position: 'insideLeft' }} />
                      <Tooltip formatter={(value, name) => [value, name === 'questions' ? 'Average Questions' : 'Percentage']} />
                      <Legend />
                      <Bar dataKey="questions" fill="#82ca9d" name="Average Questions" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-8 overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border">Chapter</th>
                        <th className="px-4 py-2 border">Average Questions</th>
                        <th className="px-4 py-2 border">Percentage</th>
                        <th className="px-4 py-2 border">Importance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {physicData.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-2 border">{item.chapter}</td>
                          <td className="px-4 py-2 border text-center">{item.questions}</td>
                          <td className="px-4 py-2 border text-center">{item.percentage}%</td>
                          <td className="px-4 py-2 border text-center">
                            {item.percentage > 20 ? (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">High</span>
                            ) : item.percentage > 10 ? (
                              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Medium</span>
                            ) : (
                              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">Low</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="chemistry" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Chemistry Weightage (Total: 40 questions)</CardTitle>
                <CardDescription>Chapter-wise distribution of questions in NEET Chemistry section</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chemistryData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="chapter" />
                      <YAxis label={{ value: 'Average Questions', angle: -90, position: 'insideLeft' }} />
                      <Tooltip formatter={(value, name) => [value, name === 'questions' ? 'Average Questions' : 'Percentage']} />
                      <Legend />
                      <Bar dataKey="questions" fill="#8884d8" name="Average Questions" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-8 overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border">Chapter</th>
                        <th className="px-4 py-2 border">Average Questions</th>
                        <th className="px-4 py-2 border">Percentage</th>
                        <th className="px-4 py-2 border">Importance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {chemistryData.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-2 border">{item.chapter}</td>
                          <td className="px-4 py-2 border text-center">{item.questions}</td>
                          <td className="px-4 py-2 border text-center">{item.percentage}%</td>
                          <td className="px-4 py-2 border text-center">
                            {item.percentage > 30 ? (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">High</span>
                            ) : item.percentage > 20 ? (
                              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Medium</span>
                            ) : (
                              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">Low</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <GoogleAd className="w-full max-w-3xl mx-auto mt-8" />
      </main>
      
      <Footer />
    </div>
  );
};

export default ChapterWeightage;
