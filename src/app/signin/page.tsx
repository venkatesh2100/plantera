"use client"

// pages/signup.tsx
import { useState } from 'react';

export default function SignupPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/request-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });


      if (res.ok) {
        setMessage('OTP sent to your email! Please verify to complete signup.');
      } else {
        setMessage('Something went wrong.');
      }
    } catch (error) {
      setMessage('Failed to send OTP. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="mb-6 text-2xl font-semibold text-center">Sign Up</h1>
        
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
        
        {message && <p className="mt-4 text-center text-blue-500">{message}</p>}
      </div>
    </div>
  );
}
