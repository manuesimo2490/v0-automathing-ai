"use client";

import * as React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ResetPasswordPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Resetta la tua Password</h1>
          <p className="text-gray-500">Inserisci la tua email per ricevere un link di reset.</p>
        </div>
        <form className="space-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="tuamail@esempio.com" required />
          </div>
          <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
            Invia Link di Reset
          </Button>
        </form>
        <div className="text-sm text-center">
          <Link href="/login" className="font-medium text-emerald-600 hover:underline">
            Torna al Login
          </Link>
        </div>
      </div>
    </div>
  );
} 