interface PageHeroProps {
  title: string;
  description?: string;
  image?: string;
  transparentBackground?: boolean;
}

export function PageHero({ title, description, image, transparentBackground = false }: PageHeroProps) {
  return (
    <div className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center">
      {/* Background layers */}
      {!transparentBackground && (
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-[url('${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/lovable-uploads/bbc6d732-dfdf-4ade-b448-d507309fcdce.png')] bg-cover bg-center opacity-10`} />
          <div className="absolute inset-0 bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6 leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Wave Pattern - only show if not transparent background */}
      {!transparentBackground && (
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden -mb-1">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 150" 
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path 
              fill="#FFFFFF" 
              fillOpacity="1" 
              d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
} 