import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface CodeValidationProps {
  setCurrentScreen: (screen: string) => void;
}

export default function CodeValidation({ setCurrentScreen }: CodeValidationProps) {
  const [code, setCode] = useState('');

  return (
    <div className="h-full w-full flex flex-col bg-[#F5F8FA] p-8">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-[#00CC66]/10 rounded-full flex items-center justify-center mb-6">
          <ShieldCheck size={44} className="text-[#00CC66]" />
        </div>
        
        <h2 className="text-[#003366] text-2xl mb-4 text-center">Validation du code</h2>
        
        <p className="text-gray-600 text-center mb-8 px-4">
          Un code de validation a été envoyé à votre adresse e-mail.
        </p>

        <div className="w-full space-y-4">
          <Input
            className="h-14 rounded-xl border-gray-300 text-center tracking-widest"
            placeholder="000000"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <p className="text-sm text-gray-500 text-center">
            Entrez le code reçu
          </p>
        </div>
      </div>

      <Button
        className="w-full h-14 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-2xl shadow-lg"
        onClick={() => setCurrentScreen('congratulations')}
      >
        Valider
      </Button>
    </div>
  );
}