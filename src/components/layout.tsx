"use client";

import React from "react";
import Link from "next/link";
import {
  Apple,
  Search,
  User,
  LogOut,
  Settings,
  Clipboard,
  Calendar,
  Users,
  BarChart,
  HelpCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-background flex'>
      {/* Menú vertical */}
      <aside className='w-64 bg-green-50 border-r border-green-100'>
        <nav className='p-4 space-y-2'>
          <Link
            href='/dashboard'
            className='flex items-center space-x-2 text-green-700 hover:bg-green-100 rounded-lg p-2'>
            <Clipboard className='h-5 w-5' />
            <span>Dashboard</span>
          </Link>
          <Link
            href='/citas'
            className='flex items-center space-x-2 text-green-700 hover:bg-green-100 rounded-lg p-2'>
            <Calendar className='h-5 w-5' />
            <span>Citas</span>
          </Link>
          <Link
            href='/pacientes'
            className='flex items-center space-x-2 text-green-700 hover:bg-green-100 rounded-lg p-2'>
            <Users className='h-5 w-5' />
            <span>Pacientes</span>
          </Link>
          <Link
            href='/estadisticas'
            className='flex items-center space-x-2 text-green-700 hover:bg-green-100 rounded-lg p-2'>
            <BarChart className='h-5 w-5' />
            <span>Estadísticas</span>
          </Link>
          <Link
            href='/ayuda'
            className='flex items-center space-x-2 text-green-700 hover:bg-green-100 rounded-lg p-2'>
            <HelpCircle className='h-5 w-5' />
            <span>Ayuda</span>
          </Link>
        </nav>
      </aside>

      <div className='flex-1 flex flex-col'>
        {/* Navbar horizontal */}
        <header className='h-16 border-b border-green-100 bg-white flex items-center justify-between px-4'>
          <Link href='/' className='flex items-center space-x-2 text-green-700'>
            <Apple className='h-6 w-6' />
            <span className='text-xl font-bold'>NutriSalud</span>
          </Link>

          <div className='flex-1 max-w-md mx-4'>
            <div className='relative'>
              <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input placeholder='Buscar...' className='pl-8' />
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage src='/avatars/01.png' alt='@usuario' />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end' forceMount>
              <DropdownMenuItem>
                <User className='mr-2 h-4 w-4' />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className='mr-2 h-4 w-4' />
                <span>Ajustes</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className='mr-2 h-4 w-4' />
                <span>Cerrar sesión</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Contenido principal */}
        <main className='flex-1 overflow-y-auto p-6'>{children}</main>
      </div>
    </div>
  );
}
