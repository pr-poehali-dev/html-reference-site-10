
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";

const PhysicsPage = () => {
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

        <h1 className="text-3xl font-bold text-primary mb-6">Физика — 10 класс</h1>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Механика</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Кинематика</h3>
                  <Separator className="mb-3" />
                  <ul className="space-y-2">
                    <li><strong>Равномерное движение:</strong> s = vt</li>
                    <li><strong>Равноускоренное движение:</strong> v = v₀ + at</li>
                    <li><strong>Перемещение при равноускоренном движении:</strong> s = v₀t + (at²)/2</li>
                    <li><strong>Связь скорости и перемещения:</strong> v² = v₀² + 2as</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Динамика</h3>
                  <Separator className="mb-3" />
                  <ul className="space-y-2">
                    <li><strong>Второй закон Ньютона:</strong> F = ma</li>
                    <li><strong>Закон всемирного тяготения:</strong> F = G(m₁m₂)/r²</li>
                    <li><strong>Сила трения:</strong> F<sub>тр</sub> = μN</li>
                    <li><strong>Сила упругости:</strong> F = kx (закон Гука)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Молекулярная физика и термодинамика</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Основы МКТ</h3>
                  <Separator className="mb-3" />
                  <ul className="space-y-2">
                    <li><strong>Уравнение состояния идеального газа:</strong> pV = nRT</li>
                    <li><strong>Средняя кинетическая энергия молекул:</strong> E = (3/2)kT</li>
                    <li><strong>Закон Бойля-Мариотта:</strong> p₁V₁ = p₂V₂ (T = const)</li>
                    <li><strong>Закон Гей-Люссака:</strong> V₁/T₁ = V₂/T₂ (p = const)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Термодинамика</h3>
                  <Separator className="mb-3" />
                  <ul className="space-y-2">
                    <li><strong>Первое начало термодинамики:</strong> Q = ΔU + A</li>
                    <li><strong>Работа газа при изобарном процессе:</strong> A = pΔV</li>
                    <li><strong>КПД тепловой машины:</strong> η = (Q₁ - Q₂)/Q₁ = 1 - T₂/T₁</li>
                    <li><strong>Уравнение теплового баланса:</strong> Q₁ + Q₂ + ... + Qₙ = 0</li>
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

export default PhysicsPage;
