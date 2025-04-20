
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";

const AlgebraPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Назад на главную
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-primary mb-6">Алгебра — 10 класс</h1>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Тригонометрия</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Основные тригонометрические функции</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 list-disc pl-5">
                      <li><strong>Синус:</strong> sin α = противолежащий катет / гипотенуза</li>
                      <li><strong>Косинус:</strong> cos α = прилежащий катет / гипотенуза</li>
                      <li><strong>Тангенс:</strong> tg α = sin α / cos α = противолежащий катет / прилежащий катет</li>
                      <li><strong>Котангенс:</strong> ctg α = cos α / sin α = прилежащий катет / противолежащий катет</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Основные тригонометрические тождества</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>sin²α + cos²α = 1</li>
                      <li>tg α · ctg α = 1</li>
                      <li>1 + tg²α = 1/cos²α</li>
                      <li>1 + ctg²α = 1/sin²α</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Формулы приведения</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Для углов вида: π/2 ± α, π ± α, 3π/2 ± α, 2π ± α</p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>sin(π/2 - α) = cos α</li>
                      <li>sin(π/2 + α) = cos α</li>
                      <li>sin(π - α) = sin α</li>
                      <li>sin(π + α) = -sin α</li>
                      <li>cos(π/2 - α) = sin α</li>
                      <li>cos(π/2 + α) = -sin α</li>
                      <li>cos(π - α) = -cos α</li>
                      <li>cos(π + α) = -cos α</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Логарифмы</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="log-1">
                  <AccordionTrigger>Определение и основные свойства</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Определение:</strong> log<sub>a</sub>b = c, если a<sup>c</sup> = b, где a > 0, a ≠ 1, b > 0</p>
                    <p className="font-medium mt-3">Основные свойства:</p>
                    <ul className="space-y-2 list-disc pl-5 mt-1">
                      <li>log<sub>a</sub>1 = 0</li>
                      <li>log<sub>a</sub>a = 1</li>
                      <li>log<sub>a</sub>(xy) = log<sub>a</sub>x + log<sub>a</sub>y</li>
                      <li>log<sub>a</sub>(x/y) = log<sub>a</sub>x - log<sub>a</sub>y</li>
                      <li>log<sub>a</sub>(x<sup>n</sup>) = n·log<sub>a</sub>x</li>
                      <li>log<sub>a</sub>x = log<sub>b</sub>x / log<sub>b</sub>a</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="log-2">
                  <AccordionTrigger>Логарифмические уравнения</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Основные типы логарифмических уравнений:</p>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li>
                        <p><strong>Простейшие уравнения вида:</strong> log<sub>a</sub>f(x) = b</p>
                        <p>Решение: f(x) = a<sup>b</sup></p>
                      </li>
                      <li>
                        <p><strong>Уравнения вида:</strong> log<sub>a</sub>f(x) = log<sub>a</sub>g(x)</p>
                        <p>Решение: f(x) = g(x) при условии f(x) > 0, g(x) > 0</p>
                      </li>
                      <li>
                        <p><strong>Уравнения, сводящиеся к квадратным:</strong></p>
                        <p>log<sub>a</sub>f(x) · log<sub>a</sub>g(x) = c</p>
                        <p>log<sub>a</sub>f(x) + log<sub>a</sub>g(x) = c</p>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Показательные функции и уравнения</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="exp-1">
                  <AccordionTrigger>Показательная функция</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Показательная функция:</strong> y = a<sup>x</sup>, где a > 0, a ≠ 1</p>
                    <p className="font-medium mt-3">Свойства показательной функции:</p>
                    <ul className="space-y-2 list-disc pl-5 mt-1">
                      <li>Область определения: вся числовая прямая R</li>
                      <li>Область значений: (0; +∞)</li>
                      <li>При a > 1: функция возрастает на всей области определения</li>
                      <li>При 0 < a < 1: функция убывает на всей области определения</li>
                      <li>График проходит через точку (0,1)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="exp-2">
                  <AccordionTrigger>Показательные уравнения</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Основные типы показательных уравнений:</p>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li>
                        <p><strong>Простейшие уравнения вида:</strong> a<sup>f(x)</sup> = a<sup>g(x)</sup></p>
                        <p>Решение: f(x) = g(x)</p>
                      </li>
                      <li>
                        <p><strong>Уравнения вида:</strong> a<sup>f(x)</sup> = b</p>
                        <p>Решение: f(x) = log<sub>a</sub>b</p>
                      </li>
                      <li>
                        <p><strong>Уравнения, сводящиеся к квадратным:</strong></p>
                        <p>a<sup>x²+bx+c</sup> = d или a<sup>x</sup>² + ba<sup>x</sup> + c = 0</p>
                        <p>Решаются заменой переменной t = a<sup>x</sup></p>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AlgebraPage;
