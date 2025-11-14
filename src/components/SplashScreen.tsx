import { useEffect } from 'react';
import { Fingerprint } from 'lucide-react';

interface SplashScreenProps {
  setCurrentScreen: (screen: string) => void;
}

export default function SplashScreen({ setCurrentScreen }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('welcome');
    }, 2000);

    return () => clearTimeout(timer);
  }, [setCurrentScreen]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#003366] to-[#00529e] p-8">
      <div className="flex items-center justify-center mb-6">
        <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-xl">
          <Fingerprint size={56} className="text-[#003366]" />
        </div>
      </div>
      <h1 className="text-white text-5xl mb-4">MyID</h1>
      <p className="text-white/90 text-center text-lg px-8">
        Votre identité numérique, simple et sécurisée.
      </p>
      <div className="mt-12 flex space-x-2">
        <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
}
