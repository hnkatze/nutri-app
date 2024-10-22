"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Calendar,
  Phone,
  Mail,
  Weight,
  Ruler,
  Cake,
  Activity,
} from "lucide-react";

// Dummy data for patients
const patients: Patient[] = [
  {
    id: 1,
    name: "María García",
    age: 35,
    height: 165,
    weight: 68,
    email: "maria.garcia@email.com",
    phone: "+34 123 456 789",
    nextAppointment: "2023-06-15",
    avatar: "https://static-cse.canva.com/blob/1760022/1600w-vkBvE1d_xYA.jpg",
  },
  {
    id: 2,
    name: "Juan Rodríguez",
    age: 42,
    height: 178,
    weight: 82,
    email: "juan.rodriguez@email.com",
    phone: "+34 987 654 321",
    nextAppointment: "2023-06-18",
    avatar:
      "https://marketplace.canva.com/EAFmXS7R66Y/1/0/1600w/canva-avatar-foto-de-perfil-hombre-gafas-dibujo-ilustrado-moderno-verde-I9qMvdruJU8.jpg",
  },
  {
    id: 3,
    name: "Ana López",
    age: 28,
    height: 160,
    weight: 55,
    email: "ana.lopez@email.com",
    phone: "+34 456 789 123",
    nextAppointment: "2023-06-20",
    avatar:
      "https://marketplace.canva.com/EAFmvIPhMbo/1/0/1600w/canva-avatar-foto-de-perfil-mujer-estudiante-dibujo-alegre-ilustrado-moderno-verde%2C-azul-y-rosa-KgMUtWqT2uQ.jpg",
  },
];

function calculateBMI(weight: number, height: number): number {
  return Number((weight / Math.pow(height / 100, 2)).toFixed(1));
}

export default function PatientsScreen() {
  const [showNewPatientDialog, setShowNewPatientDialog] = useState(false);
  const [showPatiens, setShowPatients] = useState<Patient[]>(patients);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    email: "",
    phone: "",
    image: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPatient((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New patient data:", newPatient);
    // Here you would typically send this data to your backend
    setShowNewPatientDialog(false);
    setShowPatients((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: newPatient.name,
        age: Number(newPatient.age),
        height: Number(newPatient.height),
        weight: Number(newPatient.weight),
        email: newPatient.email,
        phone: newPatient.phone,
        nextAppointment: "2023-06-25",
        avatar: newPatient.image,
      },
    ]);
    setNewPatient({
      name: "",
      age: "",
      height: "",
      weight: "",
      email: "",
      phone: "",
      image: "",
    });
  };

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>Pacientes</h1>
        <Dialog
          open={showNewPatientDialog}
          onOpenChange={setShowNewPatientDialog}>
          <DialogTrigger asChild>
            <Button>Registrar Nuevo Paciente</Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Registrar Nuevo Paciente</DialogTitle>
              <DialogDescription>
                Ingrese los datos del nuevo paciente aquí. Haga clic en guardar
                cuando termine.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='name' className='text-right'>
                    Nombre
                  </Label>
                  <Input
                    id='name'
                    name='name'
                    value={newPatient.name}
                    onChange={handleInputChange}
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='age' className='text-right'>
                    Edad
                  </Label>
                  <Input
                    id='age'
                    name='age'
                    type='number'
                    value={newPatient.age}
                    onChange={handleInputChange}
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='height' className='text-right'>
                    Altura (cm)
                  </Label>
                  <Input
                    id='height'
                    name='height'
                    type='number'
                    value={newPatient.height}
                    onChange={handleInputChange}
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='weight' className='text-right'>
                    Peso (kg)
                  </Label>
                  <Input
                    id='weight'
                    name='weight'
                    type='number'
                    value={newPatient.weight}
                    onChange={handleInputChange}
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='email' className='text-right'>
                    Email
                  </Label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    value={newPatient.email}
                    onChange={handleInputChange}
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='phone' className='text-right'>
                    Teléfono
                  </Label>
                  <Input
                    id='phone'
                    name='phone'
                    value={newPatient.phone}
                    onChange={handleInputChange}
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='image' className='text-right'>
                    Avatar
                  </Label>
                  <Input
                    id='image'
                    name='image'
                    value={newPatient.image}
                    onChange={handleInputChange}
                    className='col-span-3'
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type='submit'>Guardar Paciente</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <ScrollArea className='h-[calc(100vh-12rem)]'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {showPatiens.map((patient) => (
            <Card key={patient.id} className='overflow-hidden'>
              <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2 p-6 flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-200'>
                  <Avatar className='h-24 w-24 mb-4'>
                    <AvatarImage src={patient.avatar} alt={patient.name} />
                    <AvatarFallback>
                      {patient.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className='text-center'>{patient.name}</CardTitle>
                  <CardDescription className='text-center'>
                    Paciente #{patient.id}
                  </CardDescription>
                </div>
                <CardContent className='md:w-1/2 p-6'>
                  <div className='grid gap-2'>
                    <div className='flex items-center'>
                      <Cake className='mr-2 h-4 w-4 opacity-70' />
                      <span>Edad: {patient.age} años</span>
                    </div>
                    <div className='flex items-center'>
                      <Ruler className='mr-2 h-4 w-4 opacity-70' />
                      <span>Altura: {patient.height} cm</span>
                    </div>
                    <div className='flex items-center'>
                      <Weight className='mr-2 h-4 w-4 opacity-70' />
                      <span>Peso: {patient.weight} kg</span>
                    </div>
                    <div className='flex items-center'>
                      <Activity className='mr-2 h-4 w-4 opacity-70' />
                      <span>
                        IMC: {calculateBMI(patient.weight, patient.height)}
                      </span>
                    </div>
                    <div className='flex items-center'>
                      <Mail className='mr-2 h-4 w-4 opacity-70' />
                      <span className='truncate w-52'>{patient.email}</span>
                    </div>
                    <div className='flex items-center'>
                      <Phone className='mr-2 h-4 w-4 opacity-70' />
                      <span>{patient.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </div>
              <CardFooter className='bg-muted/50 h-16 flex flex-col justify-center items-center p-0 '>
                <div className='flex items-center h-8 w-10/12 justify-between'>
                  <div className='flex items-center'>
                    <Calendar className='mr-2 h-4 w-4 opacity-70' />
                    <span>Próxima cita: {patient.nextAppointment}</span>
                  </div>
                  <Button variant='outline' size='sm'>
                    Ver detalles
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
