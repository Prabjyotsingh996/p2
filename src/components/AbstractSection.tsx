const AbstractSection = () => {
  return (
    <section className="bg-muted/30 py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground animate-fade-in">Abstract</h2>
        
        <div className="prose prose-lg max-w-none text-justify leading-relaxed text-foreground animate-fade-in">
          <p className="mb-4">
            We focus on source-free domain adaptive object detection (SF-DAOD) problem when source data is unavailable during adaptation and the model must adapt to unlabeled target
 domain. Majority of approaches for the problem employ a self-supervised approach using a student-teacher (ST)
 Hard Samples Recall framework where pseudo-labels are generated via a source
pretrained model for further fine-tuning. We observe that the performance of a student model often degrades drastically,
 due to collapse of teacher model primarily caused by high noise in pseudo-labels, resulting from domain bias, discrepancies, and a significant domain shift across domains. To
 obtain reliable pseudo-labels, we propose a Target-based Iterative Query-Token Adversarial Network (<strong>TITAN</strong>) which separates the target images into two subsets that are similar
 to the source (easy) and those that are dissimilar (hard). We propose a strategy to estimate variance to partition the target domain. This approach leverages the insight that higher
 detection variances correspond to higher recall and greater similarity to the source domain. Also, we incorporate query
token based adversarial modules into a student-teacher baseline framework to reduce the domain gaps between two feature representations. Experiments conducted on four natural
 imaging datasets and two challenging medical datasets have substantiated the superior performance of <strong>TITAN</strong> compared to existing state-of-the-art (SOTA) methodologies. We report 
 an mAP improvement of +22.7, +22.2, +21.1 and +3.7 percent over the current SOTA on C2F, C2B, S2C, and K2C benchmarks respectively
          </p>
          
        
          
        
        
        </div>
      </div>
    </section>
  );
};

export default AbstractSection;