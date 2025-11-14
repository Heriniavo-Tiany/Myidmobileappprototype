import { useState } from 'react';
import { ArrowLeft, Upload, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface VerifyDocumentProps {
  setCurrentScreen: (screen: string) => void;
  setVerificationStatus: (status: any) => void;
}

export default function VerifyDocument({ setCurrentScreen, setVerificationStatus }: VerifyDocumentProps) {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    // Update verification status - all verified except telephone
    setVerificationStatus({
      nom: true,
      prenom: true,
      genre: true,
      email: true,
      telephone: false,
      dateNaissance: true
    });
    setTimeout(() => {
      setSubmitted(false);
      setCurrentScreen('my-info');
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center bg-[#F5F8FA] p-8">
        <div className="w-20 h-20 bg-[#00CC66]/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
          <CheckCircle size={44} className="text-[#00CC66]" />
        </div>
        <h2 className="text-[#003366] text-2xl mb-4 text-center">Document soumis !</h2>
        <p className="text-gray-600 text-center px-4">
          Votre document est en cours de vérification.
        </p>
        <p className="text-gray-500 text-sm text-center px-4 mt-2">
          Vous recevrez une notification une fois la vérification terminée.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col bg-[#F5F8FA]">
      <div className="bg-[#003366] px-6 py-4 flex items-center">
        <button onClick={() => setCurrentScreen('dashboard')} className="mr-4">
          <ArrowLeft className="text-white" size={24} />
        </button>
        <h2 className="text-white text-xl">Vérifier un document</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <p className="text-sm text-blue-800">
            Soumettez vos documents officiels pour validation. Le processus peut prendre 1 à 3 jours ouvrables.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <Label className="text-[#003366] mb-2">Type de document</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="h-12 rounded-xl border-gray-300">
                <SelectValue placeholder="Sélectionnez le type de document" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cin">Carte d'Identité Nationale</SelectItem>
                <SelectItem value="passeport">Passeport</SelectItem>
                <SelectItem value="diplome">Diplôme</SelectItem>
                <SelectItem value="attestation">Attestation de travail</SelectItem>
                <SelectItem value="autre">Autre document</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-[#003366] mb-2">Description</Label>
            <Textarea
              className="min-h-24 rounded-xl border-gray-300"
              placeholder="Ajoutez des détails sur le document..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <Label className="text-[#003366] mb-2">Télécharger le document</Label>
            <button className="w-full h-40 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center hover:border-[#00CC66] hover:bg-[#00CC66]/5 transition-colors">
              <div className="w-16 h-16 bg-[#00CC66]/10 rounded-full flex items-center justify-center mb-3">
                <Upload className="text-[#00CC66]" size={28} />
              </div>
              <p className="text-gray-600">Télécharger un document</p>
              <p className="text-gray-400 text-sm mt-2">PDF, JPG, PNG (max. 10MB)</p>
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white border-t border-gray-200">
        <Button
          className="w-full h-14 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-2xl shadow-lg"
          onClick={handleSubmit}
        >
          Soumettre pour vérification
        </Button>
      </div>
    </div>
  );
}