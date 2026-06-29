export function Hero() {
  return (
    <div className="bg-gradient-to-b from-primary via-primary/95 to-primary/90 text-primary-foreground py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-accent/20 rounded-full text-accent text-sm font-semibold">
          Premium Desserts & Drinks
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-balance">
          Taste the Magic of
          <br />
          <span className="text-accent">Wonder Food&apos;s</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Exquisite crepes, waffles, tiramisu, and specialty drinks crafted with passion in Maraval.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors">
            Browse Menu
          </button>
          <button className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
