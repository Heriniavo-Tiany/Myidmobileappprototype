import { User, FilePlus, QrCode, FileCheck, Fingerprint, FileText } from 'lucide-react';

interface DashboardProps {
  setCurrentScreen: (screen: string) => void;
}

export default function Dashboard({ setCurrentScreen }: DashboardProps) {
  const menuItems = [
    {
      icon: User,
      title: 'Mes informations',
      description: 'Voir et gérer vos données',
      color: 'bg-blue-500',
      screen: 'my-info'
    },
    {
      icon: FilePlus,
      title: 'Ajouter une information',
      description: 'Compléter votre profil',
      color: 'bg-green-500',
      screen: 'add-info'
    },
    {
      icon: QrCode,
      title: 'Mon QR Code',
      description: 'Partager votre identité',
      color: 'bg-purple-500',
      screen: 'qr-code'
    },
    {
      icon: FileCheck,
      title: 'Vérifier un document',
      description: 'Soumettre pour validation',
      color: 'bg-orange-500',
      screen: 'verify-doc'
    },
    {
      icon: FileText,
      title: 'Générer mon CV',
      description: 'CV numérique certifié',
      color: 'bg-teal-500',
      screen: 'generate-cv'
    }
  ];

  return (
    <div className="h-full w-full flex flex-col bg-[#F5F8FA]">
      <div className="bg-gradient-to-br from-[#003366] to-[#00529e] px-6 py-8 rounded-b-[30px] shadow-lg">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-3">
            <Fingerprint size={28} className="text-[#003366]" />
          </div>
          <div>
            <h1 className="text-white text-2xl">MyID</h1>
            <p className="text-white/80 text-sm">Tableau de bord</p>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <p className="text-white/90 text-sm mb-1">Bienvenue !</p>
          <p className="text-white">Gérez votre identité numérique en toute sécurité</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentScreen(item.screen)}
              className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <div className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-3`}>
                <item.icon className="text-white" size={28} />
              </div>
              <h3 className="text-[#003366] mb-1">{item.title}</h3>
              <p className="text-gray-500 text-xs">{item.description}</p>
            </button>
          ))}
        </div>

        <div className="mt-6 bg-white rounded-2xl p-4 shadow-md">
          <h3 className="text-[#003366] mb-2">Statistiques</h3>
          <div className="flex justify-around">
            <div className="text-center">
              <p className="text-2xl text-[#00CC66]">4</p>
              <p className="text-xs text-gray-500">Infos vérifiées</p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-orange-500">2</p>
              <p className="text-xs text-gray-500">En attente</p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-[#003366]">85%</p>
              <p className="text-xs text-gray-500">Complétude</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}