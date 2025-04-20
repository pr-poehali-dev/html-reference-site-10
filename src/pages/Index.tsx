
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Atom, Flask } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-8 mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Справочник для 10-го класса</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полезные материалы и формулы по основным предметам школьной программы
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Математика</CardTitle>
                <CardDescription>Алгебра и геометрия</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Формулы, теоремы и методы решения уравнений, неравенств и задач по планиметрии и стереометрии.
              </p>
              <Link to="/math">
                <Button className="w-full">Перейти к разделу</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Atom className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Физика</CardTitle>
                <CardDescription>Механика и термодинамика</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Основные законы механики, термодинамики и электродинамики с формулами и примерами.
              </p>
              <Link to="/physics">
                <Button className="w-full">Перейти к разделу</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Flask className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Химия</CardTitle>
                <CardDescription>Органическая химия</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Основы органической химии, классы соединений, типы реакций и решение задач.
              </p>
              <Link to="/chemistry">
                <Button className="w-full">Перейти к разделу</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>© 2024 Справочник для 10-го класса. Все права защищены.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
