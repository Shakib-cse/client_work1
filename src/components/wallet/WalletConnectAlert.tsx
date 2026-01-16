import { useWallet } from '@/context/WalletContext';
import { Button } from '@/components/ui/button';
import { Wallet, Shield, Zap, Lock } from 'lucide-react';

export const WalletConnectAlert = () => {
  const { showConnectPrompt, connect, isConnecting, isConnected } = useWallet();

  if (isConnected || !showConnectPrompt) return null;

  return (
    <>
      {/* Backdrop - cannot be dismissed */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-fade-in" />
      
      {/* Modal - mandatory connection */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full animate-scale-in p-8 md:p-12 relative">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wallet className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Connect Your Wallet to Continue
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              This is a crypto-first furniture store. Wallet connection is required to browse and purchase products.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Instant Payments</h3>
              <p className="text-sm text-muted-foreground">
                Pay with ETH, USDC, and other cryptocurrencies
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Secure & Private</h3>
              <p className="text-sm text-muted-foreground">
                Your wallet, your control. No personal data required
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Track Orders</h3>
              <p className="text-sm text-muted-foreground">
                View your purchase history and wallet balance
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <Button
              size="lg"
              className="w-full text-lg h-14"
              onClick={connect}
              disabled={isConnecting}
            >
              {isConnecting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Connecting...
                </>
              ) : (
                <>
                  <Wallet className="w-5 h-5 mr-2" />
                  Connect MetaMask Wallet
                </>
              )}
            </Button>
          </div>

          {/* Info */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Don't have MetaMask?{' '}
              <a
                href="https://metamask.io/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Install it here
              </a>
              {' '}to get started with crypto payments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
