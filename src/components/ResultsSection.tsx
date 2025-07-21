const ResultsSection = () => {
  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 sm:px-4 xs:px-2">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Quantitative Results on Datasets
        </h2>
        
        {/* Evaluation Metric */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Evaluation Metric</h3>
          <div className="prose prose-lg max-w-none text-justify leading-relaxed text-foreground">
            
              
            
          </div>
        </div>

        {/* Results Table */}
        <div className="text-center mb-16 space-y-8">
  <img 
    src="IMAGES/ta1.png" 
    alt="Quantitative Results Table 1" 
    className="w-full max-w-5xl mx-auto rounded-lg shadow-medium" 
  />
  <div className="text-center">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Table1. :Resultsofadaptationfromnormaltofoggyweather(C2F)."SF"referstothesource-freesetting.“Oracle”referstothemodels
 trainedbyusinglabelsduringtraining.
          </p>
        </div>
  <img 
    src="IMAGES/ta2.png" 
    alt="Quantitative Results Table 2" 
    className="w-full max-w-5xl mx-auto rounded-lg shadow-medium" 
  />
  <div className="text-center">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Table2.Resultsofadaptationfromsmall-scaletolarge-scaledataset(C2B).

          </p>
        </div>
         <img 
    src="IMAGES/ta3.png" 
    alt="Quantitative Results Table 2" 
    className="w-full max-w-5xl mx-auto rounded-lg shadow-medium" 
  />
  <div className="text-center">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Table3. (Left)Resultsofadaptationfromsynthetictorealscenes
 (S2C).(Right)Resultsofadaptationacrosscameras(K2C).

          </p>
        </div>
         <img 
    src="IMAGES/ta4.png" 
    alt="Quantitative Results Table 2" 
    className="w-full max-w-5xl mx-auto rounded-lg shadow-medium" 
  />
  <div className="text-center">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Table4. (top)Resultsonadaptationfromlargetosmall-scale
 medicaldatasetswithdifferentmodalities(R2In),(bottom)Re
sultsonadaptationacrossmedicaldatasetswithdifferentmachine
acquisitions(D2In)

          </p>
        </div>
</div>


        {/* Qualitative Results */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Quantitative Results</h3>
          <div className="mb-8">
            <p className="text-muted-foreground leading-relaxed">
                The query-token domain feature alignment adaptively aggregates global context in the encoder and decoder. As visualized
                 in Fig. 3, the encoder query attends to regions with domain gaps, like dense fog, while the decoder query emphasizes foreground 
                 objects such as cars and bicycles, capturing key domain shifts. More visualizations and ablations are provided in the Supplementary Material (§ F).
            </p>
          </div>
          
          <div className="text-center">
            <img 
              src="IMAGES/t3a.png" 
              alt="Qualitative Results Comparison" 
              className="w-full max-w-5xl mx-auto rounded-lg shadow-medium"
            />
            <div className="text-center">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
        fig 3. (a) domain query-based feature alignment<strong>on the encoder side</strong> 

          </p>
        </div>
      
           <img 
              src="IMAGES/t3b.png" 
              alt="Qualitative Results Comparison" 
              className="w-full max-w-5xl mx-auto rounded-lg shadow-medium"
            />
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
       fig 3. (b) domain query-based feature alignment <strong>on the decoder side
</strong>
          </p>
        </div>
          
            <img 
    src="IMAGES/t4.png" 
    alt="Quantitative Results Table 2" 
    className="w-full max-w-5xl mx-auto rounded-lg shadow-medium" 
  /><div className="text-center">
          <p className="text-muted-foreground leading-relaxed">
                Fig. 4 presents in-depth visual comparisons between Focal Net-DINO and our framework <strong>TITAN</strong>, alongside the ground-truth annotations. As shown, <strong>TITAN</strong> consistently
 enhances detection performance across all three scenarios. It effectively reduces false positives and identifies difficult objects that FocalNet-DINO misses. In the first row, <strong>TITAN</strong>
successfully detects a car that is distant and not labeled in the ground-truth, highlighting its strong generalization capability to the target domain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;