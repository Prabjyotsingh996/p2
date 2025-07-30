const AbstractSection = () => {
  return (
    <section className="bg-muted/30 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-4 xs:px-2">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground animate-fade-in">Abstract</h2>
        
        <div className="prose prose-lg max-w-none text-justify leading-relaxed text-foreground animate-fade-in">
          <p className="mb-4">
            This work addresses the Source-Free Domain Adaptive Object Detection (SF-DAOD) problem, where only unlabeled target data is available 
            for adaptation. Most existing methods use a self-supervised student-teacher (ST) framework, which suffers due to noisy pseudo-labels
             caused by domain shift and bias. To overcome this, the authors propose <strong>TITAN</strong> (Target-based Iterative Query-Token Adversarial Network), 
             which partitions target data into easy and hard subsets using detection variance, helping to generate more reliable pseudo-labels.
              Additionally, TITAN introduces query-token-based adversarial modules to bridge domain gaps in feature representations. Experiments
               on four natural and two medical datasets show that TITAN significantly outperforms prior methods, achieving mAP improvements of 
               +22.7, +22.2, +21.1, and +3.7 on C2F, C2B, S2C, and K2C benchmarks, respectively.
          </p>
          
        
          
        
        
        </div>
      </div>
    </section>
  );
};

export default AbstractSection;