const TeaserSection = () => {
  return (
    <section className="bg-background py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 sm:px-4 xs:px-2">
        {/* Main Teaser Image */}
        <div className="text-center mb-8 animate-fade-in">
          <img 
            src="IMAGES/t1.png"
            alt="grounded teacher Teaser " 
            className="w-full max-w-3xl mx-auto rounded-lg shadow-medium hover-scale transition-all duration-300"
          />
        </div>

        {/* Caption */}
        <div className="text-center">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
         Figure 1.
The core idea of our framework (<strong>TITAN</strong>) is that higher detection variances signal high recall and similarity to the source
 domain, enabling us to divide the target domain into easy and hard subsets..
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeaserSection;