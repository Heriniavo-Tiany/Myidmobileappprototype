import { useState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface AddInformationProps {
  setCurrentScreen: (screen: string) => void;
}

export default function AddInformation({ setCurrentScreen }: AddInformationProps) {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="h-full w-full flex flex-col bg-[#F5F8FA]">
      <div className="bg-[#003366] px-6 py-4 flex items-center">
        <button onClick={() => setCurrentScreen('dashboard')} className="mr-4">
          <ArrowLeft className="text-white" size={24} />
        </button>
        <h2 className="text-white text-xl">Ajouter une information</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="space-y-4">
          <div>
            <Label className="text-[#003366] mb-2">Type d'information</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="h-12 rounded-xl border-gray-300">
                <SelectValue placeholder="Sélectionnez un type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="education">Éducation</SelectItem>
                <SelectItem value="travail">Travail</SelectItem>
                <SelectItem value="administratif">Administratif</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-[#003366] mb-2">Description</Label>
            <Textarea
              className="min-h-32 rounded-xl border-gray-300"
              placeholder="Décrivez l'information que vous souhaitez ajouter..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <Label className="text-[#003366] mb-2">Document ou photo</Label>
            <button className="w-full h-32 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center hover:border-[#00CC66] hover:bg-[#00CC66]/5 transition-colors">
              <div className="w-12 h-12 bg-[#00CC66]/10 rounded-full flex items-center justify-center mb-2">
                <Upload className="text-[#00CC66]" size={24} />
              </div>
              <p className="text-gray-600 text-sm">Cliquez pour télécharger</p>
              <p className="text-gray-400 text-xs mt-1">PDF, JPG, PNG (max. 5MB)</p>
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white border-t border-gray-200">
        <Button
          className="w-full h-14 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-2xl shadow-lg"
          onClick={() => setCurrentScreen('dashboard')}
        >
          Enregistrer
        </Button>
      </div>
    </div>
  );
}
