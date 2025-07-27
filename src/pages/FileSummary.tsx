import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, Download, Sparkles } from 'lucide-react';

const FileSummary = () => {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setSummary('');
    }
  };

  const processSummary = async () => {
    if (!file) return;
    
    setIsProcessing(true);
    
    // Simulate file processing
    setTimeout(() => {
      setSummary(`This is a demo summary of "${file.name}". In a real implementation, the AI would analyze the document content and provide intelligent insights including key points, main themes, important conclusions, and actionable items. The summary would be tailored to the document type and user needs.`);
      setIsProcessing(false);
    }, 3000);
  };

  const downloadSummary = () => {
    if (summary) {
      const blob = new Blob([summary], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${file?.name || 'document'}-summary.txt`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <Card className="glass-card ai-glow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-ai-purple" />
              <span className="gradient-text">Document AI Summarizer</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* File Upload */}
            <div className="space-y-4">
              <div className="border-2 border-dashed border-ai-purple/30 rounded-lg p-8 text-center hover:border-ai-purple/50 transition-colors">
                <Upload className="w-12 h-12 text-ai-purple mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Upload Document</h3>
                <p className="text-muted-foreground mb-4">
                  Support for PDF, DOC, TXT, and other text files
                </p>
                <label className="cursor-pointer">
                  <Button className="ai-glow bg-ai-purple hover:bg-ai-purple/80">
                    Choose File
                  </Button>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt,.md"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>

              {file && (
                <Card className="glass-card">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-8 h-8 text-ai-blue" />
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(file.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                      </div>
                      <Button
                        onClick={processSummary}
                        disabled={isProcessing}
                        className="ai-glow bg-ai-purple hover:bg-ai-purple/80"
                      >
                        {isProcessing ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            Summarize
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Summary Result */}
            {summary && (
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">AI Summary</CardTitle>
                    <Button
                      onClick={downloadSummary}
                      variant="outline"
                      size="sm"
                      className="ai-glow"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-foreground leading-relaxed">{summary}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Features */}
            <Card className="glass-card">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">📄 Supported Features:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="text-sm text-muted-foreground space-y-1">
                    <li>• Key points extraction</li>
                    <li>• Main theme identification</li>
                    <li>• Important conclusions</li>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <li>• Actionable items</li>
                    <li>• Context preservation</li>
                    <li>• Multiple file formats</li>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FileSummary;