
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleAd from '@/components/GoogleAd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { redirectToLoginIfNeeded } from '@/utils/authUtils';

const Formulas = () => {
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
              <BreadcrumbPage>Important Formulas for NEET</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-neet-dark text-center mb-8">
          Essential Formulas for NEET Preparation
        </h1>
        
        <GoogleAd className="w-full max-w-3xl mx-auto mb-8" />
        
        <Tabs defaultValue="physics" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="physics">Physics</TabsTrigger>
            <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
            <TabsTrigger value="biology">Biology</TabsTrigger>
          </TabsList>
          
          <TabsContent value="physics" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Mechanics</CardTitle>
                <CardDescription>Key formulas for mechanics section</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="font-semibold">Equations of Motion:</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-2">v = u + at</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-1">s = ut + (1/2)at²</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-1">v² = u² + 2as</p>
                  <p className="text-sm text-gray-600 mt-1">Where v = final velocity, u = initial velocity, a = acceleration, t = time, s = displacement</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="font-semibold">Newton's Second Law:</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-2">F = ma</p>
                  <p className="text-sm text-gray-600 mt-1">Where F = force, m = mass, a = acceleration</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="font-semibold">Work, Energy, Power:</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-2">W = F·s = F×s×cosθ</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-1">KE = (1/2)mv²</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-1">PE = mgh</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-1">P = W/t = F·v</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Electrostatics & Magnetism</CardTitle>
                <CardDescription>Essential formulas for electricity and magnetism</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <p className="font-semibold">Coulomb's Law:</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-2">F = k·(q₁q₂)/r²</p>
                  <p className="text-sm text-gray-600 mt-1">Where F = electrostatic force, q₁ and q₂ = charges, r = distance between charges, k = 9×10⁹ N·m²/C²</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <p className="font-semibold">Electric Field:</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-2">E = F/q = k·Q/r²</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <p className="font-semibold">Ohm's Law:</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-2">V = IR</p>
                  <p className="text-sm text-gray-600 mt-1">Where V = potential difference, I = current, R = resistance</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="chemistry" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Physical Chemistry</CardTitle>
                <CardDescription>Important equations for physical chemistry</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <p className="font-semibold">Ideal Gas Equation:</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-2">PV = nRT</p>
                  <p className="text-sm text-gray-600 mt-1">Where P = pressure, V = volume, n = number of moles, R = gas constant, T = temperature</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <p className="font-semibold">First Law of Thermodynamics:</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-2">ΔU = q + w</p>
                  <p className="text-sm text-gray-600 mt-1">Where ΔU = change in internal energy, q = heat, w = work</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <p className="font-semibold">Rate Law:</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-2">Rate = k[A]ᵐ[B]ⁿ</p>
                  <p className="text-sm text-gray-600 mt-1">Where k = rate constant, [A] and [B] = concentrations, m and n = orders of reaction</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Organic Chemistry</CardTitle>
                <CardDescription>Key concepts and formulas in organic chemistry</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <p className="font-semibold">Resonance Energy:</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-2">E(resonance) = E(actual) - E(localized)</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <p className="font-semibold">Functional Group Classes:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                    <li>Alcohols: -OH</li>
                    <li>Aldehydes: -CHO</li>
                    <li>Ketones: C=O</li>
                    <li>Carboxylic Acids: -COOH</li>
                    <li>Amines: -NH₂</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="biology" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Genetics</CardTitle>
                <CardDescription>Important genetics formulas and principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <p className="font-semibold">Hardy-Weinberg Principle:</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-2">p² + 2pq + q² = 1</p>
                  <p className="text-sm text-gray-600 mt-1">Where p = frequency of dominant allele, q = frequency of recessive allele</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <p className="font-semibold">Mendelian Inheritance Ratios:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                    <li>Monohybrid Cross (F2): 3:1</li>
                    <li>Dihybrid Cross (F2): 9:3:3:1</li>
                    <li>Test Cross with Heterozygote: 1:1</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Physiology</CardTitle>
                <CardDescription>Key physiological formulas and relationships</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                  <p className="font-semibold">Cardiac Output:</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-2">CO = SV × HR</p>
                  <p className="text-sm text-gray-600 mt-1">Where CO = cardiac output, SV = stroke volume, HR = heart rate</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                  <p className="font-semibold">Fick's Law of Diffusion:</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-2">J = -D(∂C/∂x)</p>
                  <p className="text-sm text-gray-600 mt-1">Where J = diffusion flux, D = diffusion coefficient, ∂C/∂x = concentration gradient</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                  <p className="font-semibold">Photosynthesis Equation:</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mt-2">6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂</p>
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

export default Formulas;
