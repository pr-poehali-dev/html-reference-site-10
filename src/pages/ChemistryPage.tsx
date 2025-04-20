
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";

const ChemistryPage = () => {
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

        <h1 className="text-3xl font-bold text-primary mb-6">Химия — 10 класс</h1>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Органическая химия</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Углеводороды</h3>
                  <Separator className="mb-3" />
                  <ul className="space-y-2">
                    <li><strong>Алканы:</strong> C<sub>n</sub>H<sub>2n+2</sub> (метан CH₄, этан C₂H₆)</li>
                    <li><strong>Алкены:</strong> C<sub>n</sub>H<sub>2n</sub> (этилен C₂H₄, пропилен C₃H₆)</li>
                    <li><strong>Алкины:</strong> C<sub>n</sub>H<sub>2n-2</sub> (ацетилен C₂H₂)</li>
                    <li><strong>Арены:</strong> бензол C₆H₆, толуол C₇H₈</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Функциональные производные</h3>
                  <Separator className="mb-3" />
                  <ul className="space-y-2">
                    <li><strong>Спирты:</strong> R-OH (метанол CH₃OH, этанол C₂H₅OH)</li>
                    <li><strong>Альдегиды:</strong> R-CHO (формальдегид HCHO, ацетальдегид CH₃CHO)</li>
                    <li><strong>Карбоновые кислоты:</strong> R-COOH (уксусная кислота CH₃COOH)</li>
                    <li><strong>Аминокислоты:</strong> H₂N-CHR-COOH (глицин H₂N-CH₂-COOH)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Типы реакций в органической химии</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Основные типы реакций</h3>
                  <Separator className="mb-3" />
                  <ul className="space-y-2">
                    <li><strong>Замещение:</strong> CH₄ + Cl₂ → CH₃Cl + HCl</li>
                    <li><strong>Присоединение:</strong> C₂H₄ + H₂ → C₂H₆</li>
                    <li><strong>Отщепление:</strong> C₂H₅OH → C₂H₄ + H₂O</li>
                    <li><strong>Окисление:</strong> C₂H₅OH + [O] → CH₃CHO + H₂O</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Качественные реакции</h3>
                  <Separator className="mb-3" />
                  <ul className="space-y-2">
                    <li><strong>На двойную связь:</strong> C₂H₄ + Br₂ → C₂H₄Br₂ (обесцвечивание раствора брома)</li>
                    <li><strong>На альдегиды:</strong> реакция серебряного зеркала (реактив Толленса)</li>
                    <li><strong>На многоатомные спирты:</strong> взаимодействие с Cu(OH)₂ (ярко-синее окрашивание)</li>
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

export default ChemistryPage;
