'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[v0] Sign in attempt:', email);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <Link href="/" className="block text-center">
            <h1 className="text-3xl font-bold text-primary mb-2">blue.</h1>
            <p className="text-muted-foreground text-sm">Shipping</p>
          </Link>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-6 text-center">Sign In</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-3 hover:opacity-90 mt-6">
              Sign In
            </Button>
          </form>

          <div className="border-t border-border my-6"></div>

          <p className="text-center text-muted-foreground text-sm">
            Don&apos;t have an account?{' '}
            <a href="#" className="text-accent font-semibold hover:underline">
              Contact sales
            </a>
          </p>

          <p className="text-center text-muted-foreground text-xs mt-4">
            <a href="#" className="text-accent hover:underline">Forgot your password?</a>
          </p>

          <div className="mt-8 pt-8 border-t border-border">
            <Link href="/" className="text-center block text-sm text-muted-foreground hover:text-foreground">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
