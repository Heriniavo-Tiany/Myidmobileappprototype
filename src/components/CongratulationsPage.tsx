import { PartyPopper } from 'lucide-react';
import { Button } from './ui/button';

interface CongratulationsPageProps {
  setCurrentScreen: (screen: string) => void;
}

export default function CongratulationsPage({ setCurrentScreen }: CongratulationsPageProps) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#00CC66] to-[#00a855] p-8">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl">
          <PartyPopper size={52} className="text-[#00CC66]" />
        </div>
        
        <h2 className="text-white text-3xl mb-4 text-center">Félicitations 🎉</h2>
        
        <p className="text-white/90 text-center text-lg px-6">
          Votre compte a été créé avec succès !
        </p>
      </div>

      <Button
        className="w-full h-14 bg-white text-[#00CC66] hover:bg-white/90 rounded-2xl shadow-lg"
        onClick={() => setCurrentScreen('dashboard')}
      >
        Accéder à mon tableau de bord
      </Button>
    </div>
  );
}
