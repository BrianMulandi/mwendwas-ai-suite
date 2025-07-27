import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { 
  Brain, 
  MessageCircle, 
  Image, 
  Mic, 
  FileText, 
  Mail, 
  ShoppingBag,
  Sparkles,
  Zap,
  Rocket
} from 'lucide-react';
import heroImage from '@/assets/ai-hero-bg.jpg';

const Index = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI Chat Assistant',
      description: 'Intelligent conversations powered by advanced AI',
      path: '/chat',
      color: 'text-ai-purple'
    },
    {
      icon: Image,
      title: 'Image Generation',
      description: 'Create stunning visuals with AI image generation',
      path: '/image-generator',
      color: 'text-ai-blue'
    },
    {
      icon: Mic,
      title: 'Voice Chat',
      description: 'Natural voice conversations with AI',
      path: '/voice-chat',
      color: 'text-ai-cyan'
    },
    {
      icon: FileText,
      title: 'Document Summary',
      description: 'Intelligent document analysis and summarization',
      path: '/file-summary',
      color: 'text-ai-purple'
    },
    {
      icon: Mail,
      title: 'Email Assistant',
      description: 'Smart email composition and responses',
      path: '/email-assistant',
      color: 'text-ai-blue'
    },
    {
      icon: ShoppingBag,
      title: 'Shopping AI',
      description: 'Personalized shopping recommendations',
      path: '/shop-assistant',
      color: 'text-ai-cyan'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-16 h-16 text-ai-purple mr-4" />
            <h1 className="text-6xl font-bold gradient-text">
              Mwendwa's AI
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your comprehensive AI-powered suite for chat, image generation, voice interaction, and intelligent assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chat">
              <Button size="lg" className="ai-glow bg-ai-purple hover:bg-ai-purple/80">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Chatting
              </Button>
            </Link>
            <Link to="/image-generator">
              <Button size="lg" variant="outline" className="ai-glow">
                <Zap className="w-5 h-5 mr-2" />
                Generate Images
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI-Powered Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive suite of AI tools designed to enhance your productivity and creativity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Link key={index} to={feature.path}>
                  <Card className="glass-card ai-glow h-full hover:scale-105 transition-transform cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <IconComponent className={`w-8 h-8 ${feature.color}`} />
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="glass-card ai-glow max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl gradient-text">Ready to Experience AI?</CardTitle>
              <CardDescription className="text-lg">
                Join thousands of users already using our AI-powered tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/chat">
                <Button size="lg" className="ai-glow bg-ai-purple hover:bg-ai-purple/80">
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
