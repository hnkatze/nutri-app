"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Apple, Carrot, Leaf, Chrome } from "lucide-react";
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log("Iniciar sesión con:", email, password);
  };

  const handleGoogleLogin = () => {
    // Aquí iría la lógica para iniciar sesión con Google
    console.log("Iniciando sesión con Google");
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl font-bold text-center'>
            Iniciar Sesión
          </CardTitle>
          <CardDescription className='text-center'>
            Accede a tu cuenta de nutricionista
          </CardDescription>
          <div className='flex justify-center space-x-2 text-green-600'>
            <Apple size={24} />
            <Carrot size={24} />
            <Leaf size={24} />
          </div>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Link href={"/dash"}>
            <Button
              variant='outline'
              className='w-full'
              onClick={handleGoogleLogin}>
              <Chrome className='mr-2 h-4 w-4' />
              Iniciar sesión con Google
            </Button>
          </Link>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-background px-2 text-muted-foreground'>
                O continúa con
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Correo electrónico</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='nutricionista@ejemplo.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='password'>Contraseña</Label>
                <Input
                  id='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button
              type='submit'
              className='w-full mt-6 bg-green-600 hover:bg-green-700'>
              Iniciar Sesión
            </Button>
          </form>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <a href='#' className='text-sm text-green-600 hover:underline'>
            ¿Olvidaste tu contraseña?
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
