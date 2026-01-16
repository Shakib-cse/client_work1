import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, Wallet, ShoppingBag, Truck, CreditCard, HelpCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: "Crypto Payments",
      icon: Wallet,
      questions: [
        {
          q: "How do I connect my wallet?",
          a: "Click the wallet icon in the header or you'll be prompted automatically when you visit the site. We support MetaMask and other Web3 wallets. Simply approve the connection request in your wallet extension."
        },
        {
          q: "What cryptocurrencies do you accept?",
          a: "We accept ETH (Ethereum) and USDC (USD Coin). All prices are displayed in USD with automatic conversion to crypto at checkout."
        },
        {
          q: "Are crypto transactions secure?",
          a: "Yes! All transactions are processed on the blockchain, providing transparency and security. We never have access to your private keys or wallet funds."
        },
        {
          q: "What if I don't have cryptocurrency?",
          a: "You'll need a Web3 wallet with ETH or USDC to make purchases. You can buy crypto through exchanges like Coinbase, Binance, or directly through MetaMask."
        }
      ]
    },
    {
      category: "Orders & Shipping",
      icon: Truck,
      questions: [
        {
          q: "How long does shipping take?",
          a: "Standard delivery takes 5-7 business days. Express delivery (2-3 days) is available at checkout. White glove delivery service is also available for larger items."
        },
        {
          q: "Do you ship internationally?",
          a: "Currently, we ship within the United States. International shipping will be available soon. Sign up for our newsletter to be notified."
        },
        {
          q: "How can I track my order?",
          a: "Once your order ships, you'll receive a tracking number via email. You can also view your order status in your wallet dashboard by connecting your wallet."
        },
        {
          q: "What if my item arrives damaged?",
          a: "We're sorry if that happens! Contact us within 48 hours of delivery with photos, and we'll arrange a replacement or refund immediately."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      icon: ShoppingBag,
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy for unused items in original packaging. Return shipping is free within the US."
        },
        {
          q: "How do refunds work with crypto?",
          a: "Refunds are processed to your original wallet address in the same cryptocurrency used for purchase, typically within 3-5 business days."
        },
        {
          q: "Can I exchange an item?",
          a: "Yes! Contact our support team to arrange an exchange. We'll cover return shipping and send your new item right away."
        },
        {
          q: "Are there any items that can't be returned?",
          a: "Custom-made or personalized items cannot be returned unless defective. All other items are eligible for return within 30 days."
        }
      ]
    },
    {
      category: "Products",
      icon: HelpCircle,
      questions: [
        {
          q: "Are your products sustainable?",
          a: "Yes! We prioritize eco-friendly materials and sustainable manufacturing processes. Each product page lists the materials used."
        },
        {
          q: "Do you offer assembly services?",
          a: "Yes, professional assembly service is available for an additional fee at checkout. Our team will assemble your furniture in your home."
        },
        {
          q: "Can I see products in person?",
          a: "Yes! Visit our showroom in New York to see and test our furniture. Check our Contact page for address and hours."
        },
        {
          q: "Do you offer warranties?",
          a: "All products come with a 2-year manufacturer warranty. Extended warranties are available for purchase at checkout."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">How Can We Help?</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for help..."
              className="pl-12 h-14 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/wallet" className="p-6 bg-muted/30 rounded-xl hover:bg-muted transition-colors text-center">
              <Wallet className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">Wallet Setup</h3>
              <p className="text-sm text-muted-foreground">Connect & manage</p>
            </Link>
            <Link to="/contact" className="p-6 bg-muted/30 rounded-xl hover:bg-muted transition-colors text-center">
              <MessageCircle className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">Contact Us</h3>
              <p className="text-sm text-muted-foreground">Get in touch</p>
            </Link>
            <Link to="/" className="p-6 bg-muted/30 rounded-xl hover:bg-muted transition-colors text-center">
              <ShoppingBag className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">Shop Now</h3>
              <p className="text-sm text-muted-foreground">Browse products</p>
            </Link>
            <Link to="/about" className="p-6 bg-muted/30 rounded-xl hover:bg-muted transition-colors text-center">
              <HelpCircle className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">About Us</h3>
              <p className="text-sm text-muted-foreground">Our story</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about shopping with crypto
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((category, idx) => (
              <div key={idx} className="bg-muted/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>
                
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, qIdx) => (
                    <AccordionItem key={qIdx} value={`${idx}-${qIdx}`} className="border-none">
                      <AccordionTrigger className="text-left hover:no-underline bg-background px-4 rounded-lg">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pt-4 text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg mb-8 opacity-90">
            Our support team is here to assist you with any questions
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="mailto:support@luxehome.com">
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpPage;
