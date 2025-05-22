"use client";

import * as React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (signInError) {
      if (signInError.message === 'Invalid login credentials') {
        setError("Credenziali di accesso non valide. Ricontrolla email e password.");
      } else if (signInError.message === 'Email not confirmed') {
        setError("Email non confermata. Controlla la tua casella di posta per il link di conferma.");
      } else {
        setError(signInError.message);
      }
    } else {
      // L'utente è loggato, reindirizza alla dashboard o alla pagina protetta
      // Assicurati che il middleware gestisca correttamente la protezione delle route
      router.push('/dashboard'); // o router.refresh() per aggiornare lo stato del server e far intervenire il middleware
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Accedi al tuo Account</h1>
          <p className="text-gray-500">Bentornato! Inserisci le tue credenziali.</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="tuamail@esempio.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="flex justify-between items-baseline">
              <Label htmlFor="password">Password</Label>
              <Link href="/reset-password" className="text-sm text-emerald-600 hover:underline">
                Password dimenticata?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600" disabled={loading}>
            {loading ? "Accesso in corso..." : "Accedi"}
          </Button>
        </form>
        <div className="text-sm text-center text-gray-500">
          Non hai un account?{" "}
          <Link href="/signup" className="font-medium text-emerald-600 hover:underline">
            Registrati
          </Link>
        </div>
      </div>
    </div>
  );
} 