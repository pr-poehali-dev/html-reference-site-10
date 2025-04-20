
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Atom, Beaker, Calculator } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-3">Справочник 10-го класса</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ваш удобный справочник по основным предметам. Выберите предмет, чтобы найти формулы, законы и теории.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/math" className="block">
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Математика</CardTitle>
                <CardDescription>Алгебра и геометрия</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Тригонометрические формулы, логарифмы, производные, интегралы и основные теоремы геометрии
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/algebra" className="block">
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                  <Calculator className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Алгебра</CardTitle>
                <CardDescription>Подробный справочник</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Тригонометрия, логарифмы, показательные функции и уравнения, работа с функциями
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/physics" className="block">
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                  <Atom className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Физика</CardTitle>
                <CardDescription>Механика и молекулярная физика</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Законы Ньютона, законы сохранения, молекулярно-кинетическая теория, 
                  термодинамика
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/chemistry" className="block">
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  <Beaker className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Химия</CardTitle>
                <CardDescription>Органическая химия</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Углеводороды и их производные, типы химических реакций, функциональные группы
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2023 Справочник ученика. Все права защищены.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
