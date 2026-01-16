import { useState } from 'react';
import { Product } from '@/types/product';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Heart, Minus, Plus, Truck, RefreshCw, Shield, Star, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductDetailModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export const ProductDetailModal = ({ product, open, onClose }: ProductDetailModalProps) => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return null;

  // Convert USD to crypto (approximate rates)
  const ETH_RATE = 2500; // 1 ETH = $2500
  const USDC_RATE = 1; // 1 USDC = $1
  const ethPrice = (product.price / ETH_RATE).toFixed(4);
  const usdcPrice = (product.price / USDC_RATE).toFixed(2);
  const ethOriginalPrice = product.originalPrice ? (product.originalPrice / ETH_RATE).toFixed(4) : null;
  const usdcOriginalPrice = product.originalPrice ? (product.originalPrice / USDC_RATE).toFixed(2) : null;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{product.name}</DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-muted">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={cn(
                      "w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors",
                      activeImage === index ? "border-primary" : "border-transparent"
                    )}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex gap-2">
              {product.new && (
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                  New Arrival
                </span>
              )}
              {product.bestseller && (
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Bestseller
                </span>
              )}
            </div>

            <h2 className="font-display text-3xl font-semibold">
              {product.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < Math.floor(product.rating) 
                        ? "fill-primary text-primary" 
                        : "text-muted"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl">${product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-sm font-medium text-destructive">
                      Save ${(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  </>
                )}
              </div>
              
              {/* Crypto Prices */}
              <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-1">Pay with ETH</div>
                  <div className="font-mono font-medium">{ethPrice} ETH</div>
                  {ethOriginalPrice && (
                    <div className="font-mono text-xs text-muted-foreground line-through">{ethOriginalPrice} ETH</div>
                  )}
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-1">Pay with USDC</div>
                  <div className="font-mono font-medium">{usdcPrice} USDC</div>
                  {usdcOriginalPrice && (
                    <div className="font-mono text-xs text-muted-foreground line-through">{usdcOriginalPrice} USDC</div>
                  )}
                </div>
              </div>
            </div>

            <p className="text-muted-foreground">
              {product.description}
            </p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="block text-sm font-medium mb-3">
                  Colour: <span className="text-muted-foreground">{selectedColor}</span>
                </label>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "px-4 py-2 rounded-lg border transition-colors text-sm",
                        selectedColor === color
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Bag' : 'Out of Stock'}
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
              <div className="text-center">
                <Truck className="w-5 h-5 mx-auto mb-2 text-primary" />
                <span className="text-xs text-muted-foreground">Free Delivery</span>
              </div>
              <div className="text-center">
                <RefreshCw className="w-5 h-5 mx-auto mb-2 text-primary" />
                <span className="text-xs text-muted-foreground">30-Day Returns</span>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 mx-auto mb-2 text-primary" />
                <span className="text-xs text-muted-foreground">2-Year Warranty</span>
              </div>
            </div>

            {/* Product Details */}
            {(product.materials || product.dimensions) && (
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Product Details</h3>
                <dl className="grid grid-cols-2 gap-3 text-sm">
                  {product.materials && (
                    <>
                      <dt className="text-muted-foreground">Materials</dt>
                      <dd className="font-medium">{product.materials.join(', ')}</dd>
                    </>
                  )}
                  {product.dimensions && (
                    <>
                      <dt className="text-muted-foreground">Dimensions</dt>
                      <dd className="font-medium">
                        {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} cm
                      </dd>
                    </>
                  )}
                  <dt className="text-muted-foreground">Category</dt>
                  <dd className="font-medium capitalize">{product.category}</dd>
                  
                  <dt className="text-muted-foreground">SKU</dt>
                  <dd className="font-medium">FRN-{product.id.padStart(6, '0')}</dd>
                </dl>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
