
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";

const MathPage = () => {
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

        <h1 className="text-3xl font-bold text-primary mb-6">Математика — 10 класс</h1>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Алгебра</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Тригонометрические формулы</h3>
                  <Separator className="mb-3" />
                  <ul className="space-y-2">
                    <li><strong>Основное тригонометрическое тождество:</strong> sin²α + cos²α = 1</li>
                    <li><strong>Формулы приведения:</strong> sin(π/2 - α) = cosα, cos(π/2 - α) = sinα</li>
                    <li><strong>Формулы сложения:</strong> sin(α + β) = sinα·cosβ + cosα·sinβ</li>
                    <li><strong>Формулы двойного угла:</strong> sin2α = 2sinα·cosα, cos2α = cos²α - sin²α</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Логарифмы и их свойства</h3>
                  <Separator className="mb-3" />
                  <ul className="space-y-2">
                    <li><strong>Определение:</strong> log<sub>a</sub>b = c, если a<sup>c</sup> = b</li>
                    <li><strong>Свойства:</strong> log<sub>a</sub>(xy) = log<sub>a</sub>x + log<sub>a</sub>y</li>
                    <li>log<sub>a</sub>(x/y) = log<sub>a</sub>x - log<sub>a</sub>y</li>
                    <li>log<sub>a</sub>(x<sup>n</sup>) = n·log<sub>a</sub>x</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Геометрия</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Стереометрия</h3>
                  <Separator className="mb-3" />
                  <ul className="space-y-2">
                    <li><strong>Объем прямоугольного параллелепипеда:</strong> V = abc</li>
                    <li><strong>Объем пирамиды:</strong> V = (1/3)Sh, где S — площадь основания, h — высота</li>
                    <li><strong>Объем конуса:</strong> V = (1/3)πr²h, где r — радиус основания, h — высота</li>
                    <li><strong>Объем шара:</strong> V = (4/3)πr³, где r — радиус</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Векторы в пространстве</h3>
                  <Separator className="mb-3" />
                  <ul className="space-y-2">
                    <li><strong>Скалярное произведение:</strong> a·b = |a|·|b|·cosφ</li>
                    <li><strong>Векторное произведение:</strong> |a×b| = |a|·|b|·sinφ</li>
                    <li><strong>Модуль вектора:</strong> |a| = √(x² + y² + z²)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MathPage;
