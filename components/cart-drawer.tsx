"use client";

import { MenuItem } from "@/app/page";
import { X, Trash2, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  onRemove: (index: number) => void;
  onClear: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onRemove,
  onClear,
}: CartDrawerProps) {
  const [customerDetails, setCustomerDetails] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const total = items.reduce((sum, item) => sum + item.price, 0);
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

  const handleCheckout = () => {
    if (items.length === 0) return;

    const message = [
      "Hello! I would like to place an order:",
      "",
      ...items.map(
        (item, index) => `${index + 1}. ${item.name} - ${item.price} DA`,
      ),
      "",
      customerDetails.trim()
        ? `Customer details: ${customerDetails.trim()}`
        : "Customer details: Not provided",
      `Total: ${total} DA`,
    ].join("\n");

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = whatsappNumber
      ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
      : `https://wa.me/?text=${encodedMessage}`;

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-screen w-full sm:w-96 bg-card border-l border-border shadow-lg z-50 transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-accent" />
            <h2 className="text-xl font-bold text-foreground">Your Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center justify-between bg-muted/50 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">
                      {item.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.category}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 ml-4">
                    <span className="text-lg font-bold text-accent whitespace-nowrap">
                      {item.price} DA
                    </span>
                    <button
                      onClick={() => onRemove(index)}
                      className="p-2 hover:bg-destructive/20 text-destructive rounded-lg transition-colors"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <span className="text-lg font-semibold text-foreground">
                Total:
              </span>
              <span className="text-3xl font-bold text-accent">{total} DA</span>
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <label
                  htmlFor="customer-details"
                  className="text-sm font-medium text-foreground"
                >
                  Delivery details / location
                </label>
                <textarea
                  id="customer-details"
                  value={customerDetails}
                  onChange={(event) => setCustomerDetails(event.target.value)}
                  placeholder="e.g. 12 Rue de la Paix, Maraval"
                  className="w-full min-h-20 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors active:scale-95"
              >
                Send to WhatsApp
              </button>
              <button
                onClick={onClear}
                className="w-full py-3 bg-destructive/10 text-destructive font-semibold rounded-lg hover:bg-destructive/20 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
