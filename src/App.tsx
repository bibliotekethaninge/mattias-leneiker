import React, { useState } from 'react';
import { MapPin, Calendar, CreditCard, CheckCircle, Package, AlertCircle } from 'lucide-react';

function App() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleCancellationClick = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmCancellation = () => {
    setIsConfirmed(true);
    setShowConfirmDialog(false);
  };

if (isConfirmed) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 space-y-8">
      <div className="text-center space-y-4 max-w-md">
        <CheckCircle className="w-16 h-16 text-[#00844C] mx-auto" />
        <h2 className="text-2xl font-bold text-gray-800">Avbokning bekräftas</h2>
        <p className="text-gray-600">Din leverans av medlemskortet kommer avbokas i våran säkra terminal. En bekräftelse kommer att skickas till din registrerade e-postadress när avbokningen är klar.</p>
      </div>
      
      {/* Twitch Stream */}
      <div className="w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        <iframe
          src={`https://player.twitch.tv/?channel=coopkundtjanst&parent=${window.location.hostname}&autoplay=true&muted=true`}
          className="w-full h-[500px]"  // Set a fixed height for the iframe
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}




  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#00844C] text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Coop Medlemskort</h1>
          <p className="mt-2 text-green-50">Avboka leverans av medlemskort</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leveransinformation</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-[#00844C] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Medlemsnummer</p>
                      <p className="font-medium">88391003919</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#00844C] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Leveransadress</p>
                      <p className="font-medium">Storgatan 123</p>
                      <p className="font-medium">12944 Stockholm</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-[#00844C] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Leveransdatum</p>
                      <p className="font-medium">15 mars 2024</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Package className="w-5 h-5 text-[#00844C] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Leveransstatus</p>
                      <p className="font-medium">Väntar på leverans</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-red-800">Viktig information</p>
                    <p className="text-red-700 text-sm">När du avbokar leveransen av ditt medlemskort kommer den aktuella beställningen att annulleras. Du kan när som helst beställa ett nytt kort via Coop.se.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCancellationClick}
                className="w-full md:w-auto px-6 py-3 bg-[#00844C] hover:bg-[#006d3f] text-white font-medium rounded-lg transition-colors duration-200"
              >
                Avboka leverans av medlemskort
              </button>
            </div>
          </div>
        </div>
      </main>

      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Bekräfta avbokning</h3>
            <p className="text-gray-600 mb-6">Är du säker på att du vill avboka leveransen av ditt medlemskort?</p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowConfirmDialog(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Avbryt
              </button>
              <button
                onClick={handleConfirmCancellation}
                className="flex-1 px-4 py-2 bg-[#00844C] hover:bg-[#006d3f] text-white rounded-lg transition-colors duration-200"
              >
                Bekräfta avbokning
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
