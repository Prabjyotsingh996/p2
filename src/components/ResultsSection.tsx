const ResultsSection = () => {
  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Quantitative Results on Mammogram Datasets
        </h2>
        
        {/* Evaluation Metric */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Evaluation Metric</h3>
          <div className="prose prose-lg max-w-none text-justify leading-relaxed text-foreground">
            <p className="mb-4">
              We evaluate the performance of our proposed TITAN method against other approaches on the four natural bench marks and two medical benchmarks mentioned earlier. Since
 UDA and SF-DAOD share similar task settings, we conducted comparisons with both. Table 1-3 and Table 4 present
 the comparison resultS on natural and medical images, respectively. Our proposed TITAN consistently out performs existingstate -of -the -art (SOTA) methods, demonstratingsig Exp Method Venue SF R@0.05 R@0.3 R@0.5 R@1.0 AUC F1-score
 D-adapt[44] ICLR’21 ✗ 0.04 0.12 0.18 0.29 0.439 0.263 AT[58] CVPR’22 ✗ 0.16 0.28 0.35 0.42 0.486 0.338
 H2FA[100] CVPR’22 ✗ 0.03 0.13 0.18 0.36 0.634 0.236 R2In MRT[113] ICCV’23 ✗ 0.32 0.52 0.69 0.72 0.741 0.352
 Mexformer[90] MM’21 ✓ 0.24 0.31 0.39 0.39 0.336 0.287 IRG[19] CVPR’23 ✓ 0.16 0.25 0.37 0.39 0.308 0.235 LPLD[104] ECCV’24 ✓ 0.25 0.25 0.45 0.43 0.548 0.635
 Ours 0.59 0.78 0.80 0.83 0.892 0.850 Exp Method Venue SF R@0.05 R@0.3 R@0.5 R@1.0 AUC F1-score D-adapt[44] ICLR’21 ✗ 0.00 0.06 0.09 0.1 0.381 0.362
 AT[58] CVPR’22 ✗ 0.01 0.08 0.10 0.15 0.385 0.311 H2FA[100] CVPR’22 ✗ 0.02 0.08 0.10 0.12 0.483 0.315 D2In MRT[113] ICCV’23 ✗ 0.03 0.09 0.12 0.17 0.739 0.587
 Mexformer[90] MM’21 ✓ 0.02 0.03 0.03 0.03 0.06 0.09 IRG[19] CVPR’23 ✓ 0.05 0.05 0.07 0.09 0.11 0.12
 LPLD[104] ECCV’24 ✓ 0.09 0.15 0.35 0.35 0.548 0.635 Ours 0.36 0.51 0.75 0.81 0.825 0.838
 snificant improvements across both natural and medical images ,highlighting its effectiveness in both domains and its potential to advance performance in real-world applications.
 This further establishes TITAN as a promising solution for tackling domain adaptation challenges in various tasks.
            </p>
            
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