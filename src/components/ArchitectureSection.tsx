const ArchitectureSection = () => {
  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 sm:px-4 xs:px-2">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          <strong>TITAN</strong> Architecture
        </h2>
        
        <div className="mb-8">
          <p className="text-justify leading-relaxed text-foreground mb-6">
           <strong>Object Detection.</strong> Object detection is a well studied problem in computer vision [6, 22, 101, 109, 118]. The success of deep learning techniques for the problem has been supported by the abundance of extensively annotated detection
 datasets [15, 23, 27, 60, 105], which facilitates the super Easy Samples Variance <strong>Unsupervised Domain Adaptation (UDA).</strong> It has been
 widely observed that, despite their effectiveness in familiar visual contexts, deep object detection models often struggle to generalize to new visual domains. Unsupervised Domain
 Adaptation (UDA) is a popular solution strategy [11, 25, 37, 38, 65, 79, 84], which bridges the gap between source and
 target domains by aligning the feature distributions [10, 36, 42, 43, 81, 87, 113]. However, the strategy requires access to source-domain data at the adaptation stage, which severely
 limits its applicability [59, 63, 96]. This motivates us to focus on <strong>Source-Free Domain Adaptive Object Detection (SF-DAOD)</strong> in this work.
 Source-Free Domain Adaptive Object Detection (SFDOAD). SF-DAODhas received significant attention for the image classification task in recent years [21, 40, 45, 95, 102,
 103, 111]. However, there are relatively fewer works specifically addressing SF-DAOD [13, 40, 62, 71, 88]. Given the complexities of cluttered background, viewpoint variations,
and many negative samples in an object detection problem, directly applying traditional SFDA methods for classification tasks to SF-DAOD often leads to unsatisfactory performance.
 Thus, there is a need to develop techniques specially tailored for SF-DAOD. <strong>Problems in Current SF-DOAD Approaches.</strong> Many popular SF-DAOD techniques utilize a self-supervised approach
 in a student-teacher (ST) framework. These approaches rely on self-training using pseudo-labels produced by a model pre-trained on the source domain. [13, 53, 56, 86, 98]. How
ever, if the source data is biased, or the domain shift between source and target domains is high, then there is significant noise in the pseudo-labels, which impacts the training of a
 student model [19]. Since the pseudo-label error is significant, hence, Exponential Moving Average (EMA) step which updates the teacher model from the student model's weight,
 ends up corrupting the teacher model as well. This is typically not a problem in the UDA setting, as supervised data from the source domain, acts as an anchor and prevents error
 accumulation in the student, and then the EMA step ensures that the teacher model does not get corrupted at any point in the training/adaptation.
<strong>Solution Strategies to Mitigate SF-DOAD Problems.</strong> To tackle the above issues in SF-DAOD recent techniques [13, 71] have proposed to use a larger update step size for EMA to slow down the teacher model's updating process
 deliberately. An alternative strategy involves emphasizing the past teacher model's influence by adjusting its contribution, thereby preserving previous knowledge and reducing
 the rate of model updates. However, such attempts have demonstrated limited effectiveness [62].<strong>Our Insights and Proposed Strategy.</strong>  To tackle this is
sue, we propose a query-token-driven adversarial learning approach (<strong>TITAN</strong>). Our method employs a variance-based detection strategy to separate target data into easy and chal
lenging subsets, leveraging the insight that greater detection variance aligns with higher recall and stronger resemblance to the source domain, as illustrated in Fig. 1. Next, we
 integrate query-token-driven adversarial modules within a transformer-based student-teacher framework to bridge domain gaps in both local and instance-level feature representations,
  utilizing the FocalNet-DINO encoder and decoder accordingly.
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