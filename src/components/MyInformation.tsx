import { ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';

interface MyInformationProps {
  setCurrentScreen: (screen: string) => void;
  userInfo: {
    nom: string;
    prenom: string;
    genre: string;
    dateNaissance: string;
    email: string;
    telephone: string;
  };
  verificationStatus: {
    nom: boolean;
    prenom: boolean;
    genre: boolean;
    email: boolean;
    telephone: boolean;
    dateNaissance: boolean;
  };
}

export default function MyInformation({ setCurrentScreen, userInfo, verificationStatus }: MyInformationProps) {
  const fields = [
    { label: 'Nom', value: userInfo.nom || 'Rakoto', verified: verificationStatus.nom },
    { label: 'Prénom', value: userInfo.prenom || 'Jean', verified: verificationStatus.prenom },
    { label: 'Genre', value: userInfo.genre || 'Homme', verified: verificationStatus.genre },
    { label: 'Email', value: userInfo.email || 'jean.rakoto@email.mg', verified: verificationStatus.email },
    { label: 'Téléphone', value: userInfo.telephone || '+261 34 00 000 00', verified: verificationStatus.telephone },
    { label: 'Date de naissance', value: userInfo.dateNaissance || '15/03/1990', verified: verificationStatus.dateNaissance }
  ];

  // Calculate completion percentage based on verified fields
  const verifiedCount = Object.values(verificationStatus).filter(Boolean).length;
  const totalFields = Object.keys(verificationStatus).length;
  const completionPercentage = Math.round((verifiedCount / totalFields) * 100);

  return (
    <div className="h-full w-full flex flex-col bg-[#F5F8FA]">
      <div className="bg-[#003366] px-6 py-4 flex items-center">
        <button onClick={() => setCurrentScreen('dashboard')} className="mr-4">
          <ArrowLeft className="text-white" size={24} />
        </button>
        <h2 className="text-white text-xl">Mes informations</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="bg-gradient-to-br from-[#00CC66] to-[#00a855] rounded-2xl p-4 mb-6 text-white">
          <p className="text-sm mb-1">Profil complété à</p>
          <p className="text-3xl">{completionPercentage}%</p>
        </div>

        <div className="space-y-3">
          {fields.map((field, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">{field.label}</p>
                  <p className="text-[#003366]">{field.value}</p>
                </div>
                <div className="ml-3">
                  {field.verified ? (
                    <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                      <CheckCircle size={16} className="text-[#00CC66]" />
                      <span className="text-xs text-[#00CC66]">Vérifié</span>
                    </div>
                  ) : (
                    <button 
                      onClick={() => setCurrentScreen('verify-doc')}
                      className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-lg hover:bg-orange-100 transition-colors"
                    >
                      <AlertTriangle size={16} className="text-orange-500" />
                      <span className="text-xs text-orange-500">Non vérifié</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-white border-t border-gray-200">
        <Button
          className="w-full h-14 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-2xl shadow-lg"
          onClick={() => setCurrentScreen('dashboard')}
        >
          Vérifier mes informations
        </Button>
      </div>
    </div>
  );
}