'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar, ChevronRight, Clock, Salad, TrendingUp, Users } from "lucide-react"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

const weightData = [
  { name: "Ene", weight: 70 },
  { name: "Feb", weight: 69 },
  { name: "Mar", weight: 68 },
  { name: "Abr", weight: 67.5 },
  { name: "May", weight: 67 },
  { name: "Jun", weight: 66 },
]

export function DashboardComponent() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Citas Hoy</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">3 completadas, 2 pendientes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nuevos Pacientes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">+30% desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progreso Promedio</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <Progress value={68} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calorías Promedio</CardTitle>
            <Salad className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,850</div>
            <p className="text-xs text-muted-foreground">kcal por paciente/día</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Progreso de Peso Promedio</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={weightData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="weight" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Próximas Citas</CardTitle>
            <CardDescription>Tienes 3 citas programadas para hoy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>MG</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">María García</p>
                  <p className="text-sm text-muted-foreground">
                    Consulta de seguimiento
                  </p>
                </div>
                <div className="ml-auto font-medium">
                  <Clock className="h-4 w-4 text-muted-foreground inline mr-1" />
                  14:30
                </div>
              </div>
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>JR</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">Juan Rodríguez</p>
                  <p className="text-sm text-muted-foreground">
                    Primera consulta
                  </p>
                </div>
                <div className="ml-auto font-medium">
                  <Clock className="h-4 w-4 text-muted-foreground inline mr-1" />
                  16:00
                </div>
              </div>
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">Ana López</p>
                  <p className="text-sm text-muted-foreground">
                    Revisión de plan alimenticio
                  </p>
                </div>
                <div className="ml-auto font-medium">
                  <Clock className="h-4 w-4 text-muted-foreground inline mr-1" />
                  17:30
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Pacientes Recientes</CardTitle>
          <Button variant="ghost" size="sm">
            Ver todos
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/04.png" alt="Avatar" />
                <AvatarFallback>CS</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">Carlos Sánchez</p>
                <p className="text-sm text-muted-foreground">
                  Objetivo: Pérdida de peso
                </p>
              </div>
              <div className="ml-auto font-medium">
                Progreso: 60%
              </div>
            </div>
            <div className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/05.png" alt="Avatar" />
                <AvatarFallback>LM</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">Laura Martínez</p>
                <p className="text-sm text-muted-foreground">
                  Objetivo: Ganancia muscular
                </p>
              </div>
              <div className="ml-auto font-medium">
                Progreso: 75%
              </div>
            </div>
            <div className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/06.png" alt="Avatar" />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">David Pérez</p>
                <p className="text-sm text-muted-foreground">
                  Objetivo: Mantenimiento
                </p>
              </div>
              <div className="ml-auto font-medium">
                Progreso: 90%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}