import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import WelcomePage from './components/WelcomePage';
import SignupPage from './components/SignupPage';
import CodeValidation from './components/CodeValidation';
import CongratulationsPage from './components/CongratulationsPage';
import Dashboard from './components/Dashboard';
import MyInformation from './components/MyInformation';
import AddInformation from './components/AddInformation';
import MyQRCode from './components/MyQRCode';
import VerifyDocument from './components/VerifyDocument';
import GenerateCV from './components/GenerateCV';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [userInfo, setUserInfo] = useState({
    nom: '',
    prenom: '',
    genre: '',
    dateNaissance: '',
    email: '',
    telephone: ''
  });
  const [verificationStatus, setVerificationStatus] = useState({
    nom: false,
    prenom: false,
    genre: false,
    email: true,
    telephone: false,
    dateNaissance: false
  });

  return (
    <div className="min-h-screen bg-[#F5F8FA] flex items-center justify-center p-4">
      <div className="w-full max-w-[390px] h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative">
        {currentScreen === 'splash' && <SplashScreen setCurrentScreen={setCurrentScreen} />}
        {currentScreen === 'welcome' && <WelcomePage setCurrentScreen={setCurrentScreen} />}
        {currentScreen === 'signup' && <SignupPage setCurrentScreen={setCurrentScreen} setUserInfo={setUserInfo} />}
        {currentScreen === 'validation' && <CodeValidation setCurrentScreen={setCurrentScreen} />}
        {currentScreen === 'congratulations' && <CongratulationsPage setCurrentScreen={setCurrentScreen} />}
        {currentScreen === 'dashboard' && <Dashboard setCurrentScreen={setCurrentScreen} />}
        {currentScreen === 'my-info' && <MyInformation setCurrentScreen={setCurrentScreen} userInfo={userInfo} verificationStatus={verificationStatus} />}
        {currentScreen === 'add-info' && <AddInformation setCurrentScreen={setCurrentScreen} />}
        {currentScreen === 'qr-code' && <MyQRCode setCurrentScreen={setCurrentScreen} />}
        {currentScreen === 'verify-doc' && <VerifyDocument setCurrentScreen={setCurrentScreen} setVerificationStatus={setVerificationStatus} />}
        {currentScreen === 'generate-cv' && <GenerateCV setCurrentScreen={setCurrentScreen} userInfo={userInfo} verificationStatus={verificationStatus} />}
      </div>
    </div>
  );
}