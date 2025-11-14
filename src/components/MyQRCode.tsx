import { ArrowLeft, Share2, ScanLine } from 'lucide-react';
import { Button } from './ui/button';

interface MyQRCodeProps {
  setCurrentScreen: (screen: string) => void;
}

export default function MyQRCode({ setCurrentScreen }: MyQRCodeProps) {
  return (
    <div className="h-full w-full flex flex-col bg-[#F5F8FA]">
      <div className="bg-[#003366] px-6 py-4 flex items-center">
        <button onClick={() => setCurrentScreen('dashboard')} className="mr-4">
          <ArrowLeft className="text-white" size={24} />
        </button>
        <h2 className="text-white text-xl">Mon QR Code</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-6">
          <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
            {/* QR Code Pattern Simulation */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-4">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className={`${
                    Math.random() > 0.5 ? 'bg-[#003366]' : 'bg-transparent'
                  } rounded-sm`}
                ></div>
              ))}
            </div>
            
            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-[#003366]">
                <span className="text-[#003366]">ID</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[#003366] text-center mb-2">
          Scannez pour vérifier mon identité.
        </p>
        <p className="text-gray-500 text-sm text-center mb-8">
          ID: MG-2024-00123456
        </p>

        <div className="w-full space-y-3">
          <Button
            className="w-full h-14 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-2xl shadow-lg flex items-center justify-center gap-2"
          >
            <Share2 size={20} />
            Partager le lien
          </Button>
          
          <Button
            variant="outline"
            className="w-full h-14 border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white rounded-2xl shadow-lg flex items-center justify-center gap-2"
            onClick={() => setCurrentScreen('dashboard')}
          >
            <ScanLine size={20} />
            Scanner un QR code
          </Button>
        </div>
      </div>
    </div>
  );
}
