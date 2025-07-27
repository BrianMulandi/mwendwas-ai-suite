import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Palette, Download, Sparkles } from 'lucide-react';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    
    // Simulate image generation
    setTimeout(() => {
      // In a real implementation, this would call DALL-E API
      setGeneratedImage('https://picsum.photos/512/512?random=' + Date.now());
      setIsLoading(false);
    }, 3000);
  };

  const downloadImage = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = 'ai-generated-image.jpg';
      link.click();
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <Card className="glass-card ai-glow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Palette className="w-6 h-6 text-ai-purple" />
              <span className="gradient-text">AI Image Generator</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Prompt Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Describe your image:</label>
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A futuristic cityscape at sunset with flying cars and neon lights..."
                className="min-h-24"
                disabled={isLoading}
              />
            </div>
            
            <Button
              onClick={generateImage}
              disabled={isLoading || !prompt.trim()}
              className="w-full ai-glow bg-ai-purple hover:bg-ai-purple/80"
              size="lg"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Generating Image...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Image
                </>
              )}
            </Button>
            
            {/* Generated Image */}
            {(generatedImage || isLoading) && (
              <Card className="glass-card">
                <CardContent className="p-6">
                  {isLoading ? (
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 border-4 border-ai-purple border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-muted-foreground">Creating your masterpiece...</p>
                      </div>
                    </div>
                  ) : generatedImage && (
                    <div className="space-y-4">
                      <img
                        src={generatedImage}
                        alt="Generated AI image"
                        className="w-full aspect-square object-cover rounded-lg ai-glow"
                      />
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                          Generated from: "{prompt}"
                        </p>
                        <Button
                          onClick={downloadImage}
                          variant="outline"
                          size="sm"
                          className="ai-glow"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
            
            {/* Usage Tips */}
            <Card className="glass-card">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">💡 Tips for better images:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Be specific about style (photorealistic, cartoon, oil painting)</li>
                  <li>• Include lighting details (golden hour, dramatic shadows)</li>
                  <li>• Mention camera angles (close-up, wide shot, bird's eye view)</li>
                  <li>• Add mood descriptors (mysterious, vibrant, serene)</li>
                </ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ImageGenerator;