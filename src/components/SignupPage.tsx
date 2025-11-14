import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface SignupPageProps {
  setCurrentScreen: (screen: string) => void;
  setUserInfo: (info: any) => void;
}

export default function SignupPage({ setCurrentScreen, setUserInfo }: SignupPageProps) {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    genre: '',
    dateNaissance: '',
    email: '',
    telephone: ''
  });

  const handleSubmit = () => {
    setUserInfo(formData);
    setCurrentScreen('validation');
  };

  return (
    <div className="h-full w-full flex flex-col bg-[#F5F8FA]">
      <div className="bg-[#003366] px-6 py-4 flex items-center">
        <button onClick={() => setCurrentScreen('welcome')} className="mr-4">
          <ArrowLeft className="text-white" size={24} />
        </button>
        <h2 className="text-white text-xl">Créer un compte</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="space-y-4">
          <div>
            <Label className="text-[#003366] mb-2">Nom</Label>
            <Input
              className="h-12 rounded-xl border-gray-300"
              placeholder="Votre nom"
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            />
          </div>

          <div>
            <Label className="text-[#003366] mb-2">Prénom</Label>
            <Input
              className="h-12 rounded-xl border-gray-300"
              placeholder="Votre prénom"
              value={formData.prenom}
              onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
            />
          </div>

          <div>
            <Label className="text-[#003366] mb-2">Genre</Label>
            <Select value={formData.genre} onValueChange={(value) => setFormData({ ...formData, genre: value })}>
              <SelectTrigger className="h-12 rounded-xl border-gray-300">
                <SelectValue placeholder="Sélectionnez votre genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="homme">Homme</SelectItem>
                <SelectItem value="femme">Femme</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-[#003366] mb-2">Date de naissance</Label>
            <Input
              type="date"
              className="h-12 rounded-xl border-gray-300"
              value={formData.dateNaissance}
              onChange={(e) => setFormData({ ...formData, dateNaissance: e.target.value })}
            />
          </div>

          <div>
            <Label className="text-[#003366] mb-2">Email</Label>
            <Input
              type="email"
              className="h-12 rounded-xl border-gray-300"
              placeholder="exemple@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <Label className="text-[#003366] mb-2">Téléphone</Label>
            <Input
              type="tel"
              className="h-12 rounded-xl border-gray-300"
              placeholder="+261 34 00 000 00"
              value={formData.telephone}
              onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="p-6 bg-white border-t border-gray-200">
        <Button
          className="w-full h-14 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-2xl shadow-lg"
          onClick={handleSubmit}
        >
          Créer mon compte
        </Button>
      </div>
    </div>
  );
}
