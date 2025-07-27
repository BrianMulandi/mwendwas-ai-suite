import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

const VoiceChat = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Start listening simulation
      setTimeout(() => {
        setTranscript("Hello, I'd like to know about artificial intelligence.");
        setIsListening(false);
        // Simulate AI response
        setTimeout(() => {
          setResponse("AI is a fascinating field that involves creating intelligent machines capable of learning and problem-solving.");
          setIsSpeaking(true);
          setTimeout(() => setIsSpeaking(false), 3000);
        }, 1000);
      }, 3000);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <Card className="glass-card ai-glow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mic className="w-6 h-6 text-ai-purple" />
              <span className="gradient-text">Voice AI Assistant</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6 text-center">
            {/* Voice Visualizer */}
            <div className="flex justify-center">
              <div className={`w-32 h-32 rounded-full border-4 border-ai-purple flex items-center justify-center transition-all duration-300 ${
                isListening || isSpeaking ? 'scale-110 shadow-lg shadow-ai-purple/50' : ''
              }`}>
                {isListening ? (
                  <div className="flex space-x-1">
                    <div className="w-2 h-8 bg-ai-purple rounded animate-pulse"></div>
                    <div className="w-2 h-12 bg-ai-purple rounded animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-6 bg-ai-purple rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-10 bg-ai-purple rounded animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                ) : isSpeaking ? (
                  <Volume2 className="w-12 h-12 text-ai-purple animate-pulse" />
                ) : (
                  <Mic className="w-12 h-12 text-ai-purple" />
                )}
              </div>
            </div>

            {/* Status */}
            <div className="text-center">
              {isListening && (
                <p className="text-ai-purple font-medium">Listening... Speak now</p>
              )}
              {isSpeaking && (
                <p className="text-ai-blue font-medium">AI is speaking...</p>
              )}
              {!isListening && !isSpeaking && (
                <p className="text-muted-foreground">Press the button to start voice chat</p>
              )}
            </div>

            {/* Controls */}
            <div className="flex justify-center space-x-4">
              <Button
                onClick={toggleListening}
                className={`ai-glow ${
                  isListening 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : 'bg-ai-purple hover:bg-ai-purple/80'
                }`}
                size="lg"
                disabled={isSpeaking}
              >
                {isListening ? (
                  <>
                    <MicOff className="w-5 h-5 mr-2" />
                    Stop Listening
                  </>
                ) : (
                  <>
                    <Mic className="w-5 h-5 mr-2" />
                    Start Voice Chat
                  </>
                )}
              </Button>
            </div>

            {/* Transcript */}
            {transcript && (
              <Card className="glass-card text-left">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 text-ai-blue">You said:</h3>
                  <p className="text-foreground">{transcript}</p>
                </CardContent>
              </Card>
            )}

            {/* AI Response */}
            {response && (
              <Card className="glass-card text-left">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 text-ai-purple">AI Response:</h3>
                  <p className="text-foreground">{response}</p>
                </CardContent>
              </Card>
            )}

            {/* Instructions */}
            <Card className="glass-card">
              <CardContent className="p-4 text-left">
                <h3 className="font-semibold mb-2">🎤 How to use Voice Chat:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Click "Start Voice Chat" to begin listening</li>
                  <li>• Speak clearly into your microphone</li>
                  <li>• The AI will process your speech and respond</li>
                  <li>• Enable microphone permissions when prompted</li>
                </ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default VoiceChat;