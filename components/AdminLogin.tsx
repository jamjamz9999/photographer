
import React, { useState } from 'react';
import { useContent } from './cms/ContentContext';
import { Lock, User, ArrowRight, Camera } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const { login } = useContent();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate a brief network delay for UX feel
    setTimeout(() => {
      const success = login(username, password);
      if (!success) {
        setError(true);
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden selection:bg-purple-100 selection:text-purple-900">
      
      {/* Animated Background Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100/40 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-100/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[20%] right-[20%] w-[20vw] h-[20vw] bg-pink-50/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Glass Card */}
      <div className="bg-white/70 backdrop-blur-xl p-10 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-full max-w-md border border-white/50 relative z-10 animate-slide-up">
        
        {/* Logo / Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative w-20 h-20 bg-gradient-to-br from-white to-neutral-50 rounded-2xl flex items-center justify-center text-blue-900 shadow-lg border border-white">
              <Camera size={32} strokeWidth={1.5} />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-purple-600 text-white p-1.5 rounded-full shadow-md">
               <Lock size={12} />
            </div>
          </div>
          
          <h1 className="text-3xl font-serif text-neutral-900 mb-2 text-center">Studio Access</h1>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3"></div>
          <p className="text-neutral-500 text-sm font-light tracking-wide text-center">
            Enter credentials to manage content
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">Username</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-blue-600 transition-colors">
                <User size={18} strokeWidth={1.5} />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value); setError(false); }}
                className="w-full pl-12 pr-4 py-4 bg-neutral-50/50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all text-neutral-800 placeholder-neutral-400 text-sm font-medium shadow-inner"
                placeholder="Enter username"
                autoFocus
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">Password</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-purple-600 transition-colors">
                <Lock size={18} strokeWidth={1.5} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                className="w-full pl-12 pr-4 py-4 bg-neutral-50/50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-500 transition-all text-neutral-800 placeholder-neutral-400 text-sm font-medium shadow-inner"
                placeholder="Enter password"
              />
            </div>
          </div>
            
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-500 text-xs px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in">
               <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
               Incorrect username or password.
            </div>
          )}
          
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 group mt-4"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                 <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                 Authenticating...
              </span>
            ) : (
              <>
                Login to Dashboard
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-[10px] text-neutral-400 font-light">
            Protected Area &copy; {new Date().getFullYear()} Jinette Ramos Photography
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
