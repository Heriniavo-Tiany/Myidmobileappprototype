import { ArrowLeft, CheckCircle, Download, Share2, User, Link2, Mail, MessageCircle, Facebook, Twitter, Copy, Check, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface GenerateCVProps {
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

export default function GenerateCV({ setCurrentScreen, userInfo, verificationStatus }: GenerateCVProps) {
  const nom = userInfo.nom || 'Rakoto';
  const prenom = userInfo.prenom || 'Jean';
  const email = userInfo.email || 'jean.rakoto@email.mg';
  const telephone = userInfo.telephone || '+261 34 00 000 00';
  const dateNaissance = userInfo.dateNaissance || '15/03/1990';
  const genre = userInfo.genre || 'Homme';
  
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const cvLink = `https://myid.mg/cv/${prenom.toLowerCase()}-${nom.toLowerCase()}-${Math.floor(Math.random() * 100000)}`;
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(cvLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const shareOptions = [
    {
      icon: Copy,
      title: 'Copier le lien',
      description: 'Copier dans le presse-papiers',
      color: 'bg-gray-500',
      action: handleCopyLink
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Partager par email',
      color: 'bg-red-500',
      action: () => window.open(`mailto:?subject=Mon CV MyID&body=Consultez mon CV vérifié : ${cvLink}`)
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Partager sur WhatsApp',
      color: 'bg-green-600',
      action: () => window.open(`https://wa.me/?text=Consultez mon CV vérifié MyID : ${cvLink}`)
    },
    {
      icon: Facebook,
      title: 'Facebook',
      description: 'Partager sur Facebook',
      color: 'bg-blue-600',
      action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(cvLink)}`)
    },
    {
      icon: Twitter,
      title: 'Twitter',
      description: 'Partager sur Twitter',
      color: 'bg-sky-500',
      action: () => window.open(`https://twitter.com/intent/tweet?text=Consultez mon CV vérifié MyID&url=${encodeURIComponent(cvLink)}`)
    }
  ];

  return (
    <div className="h-full w-full flex flex-col bg-[#F5F8FA]">
      <div className="bg-[#003366] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => setCurrentScreen('dashboard')} className="mr-4">
            <ArrowLeft className="text-white" size={24} />
          </button>
          <h2 className="text-white text-xl">Mon CV Numérique</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* CV Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
          {/* Header with Photo */}
          <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
            <div className="w-20 h-20 bg-gradient-to-br from-[#003366] to-[#00529e] rounded-full flex items-center justify-center flex-shrink-0">
              <User className="text-white" size={40} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl text-[#003366] mb-1">{prenom} {nom}</h3>
              <p className="text-gray-600">Identité Numérique Vérifiée</p>
              <div className="mt-2 inline-flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
                <CheckCircle size={14} className="text-[#00CC66]" />
                <span className="text-xs text-[#00CC66]">Certifié MyID</span>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="mb-6">
            <h4 className="text-[#003366] mb-3 flex items-center gap-2">
              Informations Personnelles
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Nom complet</p>
                  <p className="text-[#003366]">{prenom} {nom}</p>
                </div>
                {verificationStatus.nom && verificationStatus.prenom && (
                  <CheckCircle size={18} className="text-[#00CC66] flex-shrink-0" />
                )}
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Genre</p>
                  <p className="text-[#003366]">{genre}</p>
                </div>
                {verificationStatus.genre && (
                  <CheckCircle size={18} className="text-[#00CC66] flex-shrink-0" />
                )}
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Date de naissance</p>
                  <p className="text-[#003366]">{dateNaissance}</p>
                </div>
                {verificationStatus.dateNaissance && (
                  <CheckCircle size={18} className="text-[#00CC66] flex-shrink-0" />
                )}
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-[#003366]">{email}</p>
                </div>
                {verificationStatus.email && (
                  <CheckCircle size={18} className="text-[#00CC66] flex-shrink-0" />
                )}
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Téléphone</p>
                  <p className="text-[#003366]">{telephone}</p>
                </div>
                {verificationStatus.telephone && (
                  <CheckCircle size={18} className="text-[#00CC66] flex-shrink-0" />
                )}
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center mb-3">
              Code de vérification d'authenticité
            </p>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 flex flex-col items-center">
              {/* QR Code */}
              <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center relative overflow-hidden border-2 border-gray-200">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 p-3">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className={`${
                        Math.random() > 0.5 ? 'bg-[#003366]' : 'bg-transparent'
                      } rounded-sm`}
                    ></div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-md shadow-md flex items-center justify-center border border-[#003366]">
                    <span className="text-[#003366] text-xs">CV</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Scannez pour vérifier ce CV
              </p>
              <p className="text-xs text-[#003366] mt-1">
                CV-MG-{new Date().getFullYear()}-{Math.floor(Math.random() * 100000).toString().padStart(6, '0')}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Document généré par MyID - Identité Numérique Madagascar
            </p>
            <p className="text-xs text-gray-400 text-center mt-1">
              Généré le {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 bg-white border-t border-gray-200 space-y-3">
        <Button
          className="w-full h-14 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-2xl shadow-lg flex items-center justify-center gap-2"
        >
          <Download size={20} />
          Télécharger le CV
        </Button>
        <Button
          variant="outline"
          className="w-full h-14 border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white rounded-2xl shadow-lg flex items-center justify-center gap-2"
          onClick={() => setShareOpen(true)}
        >
          <Share2 size={20} />
          Partager le CV
        </Button>
      </div>

      {/* Share Modal */}
      {shareOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 z-40 transition-opacity"
            onClick={() => setShareOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 max-h-[70vh] overflow-y-auto animate-slide-up">
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[#003366]">Partager votre CV</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Choisissez une méthode pour partager votre CV vérifié.
                  </p>
                </div>
                <button 
                  onClick={() => setShareOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="space-y-3 p-6">
              {shareOptions.map((option, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
                  onClick={() => {
                    option.action();
                    if (option.title !== 'Copier le lien') {
                      setShareOpen(false);
                    }
                  }}
                >
                  <div className={`${option.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <option.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-[#003366]">{option.title}</p>
                    <p className="text-sm text-gray-500">{option.description}</p>
                  </div>
                </button>
              ))}
              
              {copied && (
                <div className="px-4 py-3 bg-green-50 text-[#00CC66] rounded-xl flex items-center justify-center gap-2">
                  <Check size={18} />
                  <span className="text-sm">Lien copié dans le presse-papiers!</span>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}