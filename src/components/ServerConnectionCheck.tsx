import { useEffect, useState } from 'react';
import { AlertCircle } from 'lucide-react';

const BACKEND_URL = 'http://localhost:5000/api/health';
const CHECK_INTERVAL = 2000; // Check every 2 seconds

export const ServerConnectionCheck = ({ children }: { children: React.ReactNode }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const checkBackend = async () => {
    try {
      const response = await fetch(BACKEND_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        setIsConnected(true); 
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    // Initial check
    checkBackend();

    // Keep checking until connected
    const interval = setInterval(async () => {
      if (!isConnected) {
        setAttempts(prev => prev + 1);
        const connected = await checkBackend();
        if (connected) {
          clearInterval(interval);
        }
      }
    }, CHECK_INTERVAL);

    return () => clearInterval(interval);
  }, [isConnected]);

  // Show black screen with alert while not connected
  if (!isConnected) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center space-y-6 p-8">
          <AlertCircle className="w-20 h-20 text-red-500 mx-auto animate-pulse" />
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">Connect Server</h1>
            <p className="text-gray-400 text-lg">
              Waiting for backend server to start...
            </p>
            <p className="text-gray-500 text-sm">
              Backend must be running on http://localhost:5000
            </p>
            <p className="text-gray-600 text-xs mt-4">
              Checking... (attempt {attempts})
            </p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  // Once connected, show the app (children)
  return <>{children}</>;
};
