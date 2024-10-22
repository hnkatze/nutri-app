"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock } from "lucide-react";

// Dummy data for appointments
const appointments = [
  {
    id: 1,
    patientName: "María García",
    patientAvatar: "/avatars/01.png",
    date: new Date(2023, 5, 15, 10, 0),
    duration: 60,
    type: "Consulta de seguimiento",
  },
  {
    id: 2,
    patientName: "Juan Rodríguez",
    patientAvatar: "/avatars/02.png",
    date: new Date(2023, 5, 15, 14, 30),
    duration: 45,
    type: "Primera consulta",
  },
  {
    id: 3,
    patientName: "Ana López",
    patientAvatar: "/avatars/03.png",
    date: new Date(2023, 5, 16, 11, 0),
    duration: 30,
    type: "Revisión de plan alimenticio",
  },
];

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [showNewAppointmentDialog, setShowNewAppointmentDialog] =
    useState(false);
  const [newAppointment, setNewAppointment] = useState({
    patientName: "",
    date: new Date(),
    time: "",
    duration: "",
    type: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New appointment data:", newAppointment);
    // Here you would typically send this data to your backend
    setShowNewAppointmentDialog(false);
    setNewAppointment({
      patientName: "",
      date: new Date(),
      time: "",
      duration: "",
      type: "",
    });
  };

  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.date.toDateString() === selectedDate?.toDateString()
  );

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>Citas</h1>
        <Dialog
          open={showNewAppointmentDialog}
          onOpenChange={setShowNewAppointmentDialog}>
          <DialogTrigger asChild>
            <Button>Nueva Cita</Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Agendar Nueva Cita</DialogTitle>
              <DialogDescription>
                Ingrese los detalles de la nueva cita aquí. Haga clic en guardar
                cuando termine.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='patientName' className='text-right'>
                    Paciente
                  </Label>
                  <Input
                    id='patientName'
                    name='patientName'
                    value={newAppointment.patientName}
                    onChange={handleInputChange}
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='date' className='text-right'>
                    Fecha
                  </Label>
                  <Input
                    id='date'
                    name='date'
                    type='date'
                    value={newAppointment.date.toISOString().split("T")[0]}
                    onChange={handleInputChange}
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='time' className='text-right'>
                    Hora
                  </Label>
                  <Input
                    id='time'
                    name='time'
                    type='time'
                    value={newAppointment.time}
                    onChange={handleInputChange}
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='duration' className='text-right'>
                    Duración (min)
                  </Label>
                  <Input
                    id='duration'
                    name='duration'
                    type='number'
                    value={newAppointment.duration}
                    onChange={handleInputChange}
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='type' className='text-right'>
                    Tipo
                  </Label>
                  <Select
                    name='type'
                    onValueChange={(value) =>
                      setNewAppointment((prev) => ({ ...prev, type: value }))
                    }>
                    <SelectTrigger className='col-span-3'>
                      <SelectValue placeholder='Seleccione el tipo de cita' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='first'>Primera consulta</SelectItem>
                      <SelectItem value='follow-up'>
                        Consulta de seguimiento
                      </SelectItem>
                      <SelectItem value='review'>
                        Revisión de plan alimenticio
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type='submit'>Guardar Cita</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>Calendario</CardTitle>
            <CardDescription>
              Seleccione una fecha para ver las citas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode='single'
              selected={selectedDate}
              onSelect={setSelectedDate}
              className='rounded-md border'
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Citas del día</CardTitle>
            <CardDescription>
              {selectedDate
                ? selectedDate.toLocaleDateString()
                : "Seleccione una fecha"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className='h-[300px]'>
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className='flex items-center space-x-4 mb-4'>
                    <Avatar>
                      <AvatarImage
                        src={appointment.patientAvatar}
                        alt={appointment.patientName}
                      />
                      <AvatarFallback>
                        {appointment.patientName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className='space-y-1'>
                      <h4 className='font-semibold'>
                        {appointment.patientName}
                      </h4>
                      <p className='text-sm text-muted-foreground'>
                        {appointment.type}
                      </p>
                      <div className='flex items-center text-sm'>
                        <Clock className='mr-1 h-4 w-4' />
                        {appointment.date.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                        <span className='mx-1'>•</span>
                        <span>{appointment.duration} min</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className='text-center text-muted-foreground'>
                  No hay citas para este día
                </p>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
