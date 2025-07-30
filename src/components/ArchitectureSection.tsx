const ArchitectureSection = () => {
  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-4 xs:px-2">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          <strong>TITAN</strong> Architecture
        </h2>
        
        <div className="mb-8">
          <p className="text-justify leading-relaxed text-foreground mb-6">
           Object detection models, while highly effective in familiar domains, often fail to generalize to new visual domains due to 
           domain shifts. Traditional Unsupervised Domain Adaptation (UDA) mitigates this by aligning source and target features but
            requires access to source data during adaptation, which limits its practicality. This has led to growing interest in 
            Source-Free Domain Adaptive Object Detection (SF-DAOD), where adaptation is performed without source data. However, 
            applying SFDA to object detection is challenging due to complex scenes and noisy pseudo-labels generated in self-supervised 
            student-teacher (ST) frameworks, especially when domain shift is high. Such noise can corrupt both the student and the 
            teacher models via Exponential Moving Average (EMA) updates. While prior attempts have tried slowing teacher updates or 
            preserving earlier model states, they remain suboptimal. To address this, we propose **TITAN**—a query-token-driven 
            adversarial learning framework that partitions target data into easy and hard samples based on detection variance (higher 
            variance implies better alignment with the source) and incorporates adversarial modules into a transformer-based ST framework
             (FocalNet-DINO) to reduce domain gaps in both local and instance-level features.

          </p>
         
        </div>

        <div className="text-center animate-fade-in">
          <img 
            src="IMAGES/T2.png"
            alt="TITAN Architecture" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-medium hover-scale transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;