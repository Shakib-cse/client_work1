import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Leaf, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Crafting beautiful spaces with sustainable furniture since 2020
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Design Your Perfect Space</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We believe that furniture is more than just functional pieces—it's an expression of who you are. 
              Our mission is to provide curated, high-quality furniture that transforms houses into homes.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Every piece in our collection is carefully selected for its craftsmanship, sustainability, 
              and timeless design. We work directly with artisans and manufacturers who share our commitment 
              to quality and environmental responsibility.
            </p>
            <Link to="/">
              <Button size="lg" className="gap-2">
                Explore Collection <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
              alt="Modern living room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We prioritize eco-friendly materials and sustainable manufacturing processes in every product.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Craftsmanship</h3>
              <p className="text-muted-foreground">
                Each piece is crafted with attention to detail, ensuring quality that lasts for generations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust</h3>
              <p className="text-muted-foreground">
                We stand behind our products with comprehensive warranties and exceptional customer service.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground">
                We support local artisans and give back to the communities where our furniture is made.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From a small workshop to a global furniture destination
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="text-primary font-bold text-lg mb-2">2020</div>
              <h3 className="text-2xl font-bold mb-4">The Beginning</h3>
              <p className="text-muted-foreground">
                Started with a vision to make sustainable, beautiful furniture accessible to everyone. 
                Our first collection featured 20 handcrafted pieces.
              </p>
            </div>
            <div className="order-1 md:order-2 h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"
                alt="Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80"
                alt="Showroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-primary font-bold text-lg mb-2">2022</div>
              <h3 className="text-2xl font-bold mb-4">Expansion</h3>
              <p className="text-muted-foreground">
                Opened our flagship showroom and expanded our collection to over 100 unique pieces. 
                Partnered with artisans from around the world.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="text-primary font-bold text-lg mb-2">2024</div>
              <h3 className="text-2xl font-bold mb-4">Web3 Innovation</h3>
              <p className="text-muted-foreground">
                Pioneered cryptocurrency payments in the furniture industry, making luxury furniture 
                accessible to the global Web3 community.
              </p>
            </div>
            <div className="order-1 md:order-2 h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                alt="Modern technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-lg opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Unique Products</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Artisan Partners</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Sustainable</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore our curated collection of sustainable, beautiful furniture designed for modern living.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/">
            <Button size="lg" className="gap-2">
              Shop Now <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/wallet">
            <Button size="lg" variant="outline">
              Connect Wallet
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
