import { Fingerprint } from 'lucide-react';
import { Button } from './ui/button';

interface WelcomePageProps {
  setCurrentScreen: (screen: string) => void;
}

export default function WelcomePage({ setCurrentScreen }: WelcomePageProps) {
  return (
    <div className="h-full w-full flex flex-col bg-gradient-to-br from-[#003366] to-[#00529e] p-8">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl mb-6">
          <Fingerprint size={44} className="text-[#003366]" />
        </div>
        <h1 className="text-white text-4xl mb-3">Bienvenue sur MyID</h1>
        <p className="text-white/90 text-center px-4 mb-12">
          Connectez-vous ou créez un compte pour gérer votre identité numérique.
        </p>
      </div>

      <div className="space-y-3 mb-8">
        <Button
          className="w-full h-14 bg-white text-[#003366] hover:bg-white/90 rounded-2xl shadow-lg"
          onClick={() => setCurrentScreen('signup')}
        >
          Se connecter
        </Button>
        <Button
          className="w-full h-14 bg-[#00CC66] text-white hover:bg-[#00b359] rounded-2xl shadow-lg"
          onClick={() => setCurrentScreen('signup')}
        >
          Créer un compte
        </Button>
      </div>
    </div>
  );
}
