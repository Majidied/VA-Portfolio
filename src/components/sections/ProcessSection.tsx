import { motion } from 'framer-motion';
import { 
  EyeIcon, 
  PresentationChartLineIcon, 
  WrenchScrewdriverIcon, 
  PlayIcon 
} from '@heroicons/react/24/outline';
import { Button } from '../ui/button';
import { processSteps } from '../../content/services';

const stepIcons = [EyeIcon, PresentationChartLineIcon, WrenchScrewdriverIcon, PlayIcon];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Process – VA-Centric with a Custom Build Step
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A proven methodology that combines traditional VA excellence with custom system development
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-300 to-indigo-400 dark:from-blue-600 dark:to-indigo-500 h-full top-16">
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const IconComponent = stepIcons[index];
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Number (Desktop) */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <motion.div
                      className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(59, 130, 246, 0.7)",
                          "0 0 0 10px rgba(59, 130, 246, 0)",
                          "0 0 0 0 rgba(59, 130, 246, 0)"
                        ]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                      {/* Mobile Step Number */}
                      <div className="lg:hidden flex items-center mb-6">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                          {step.step}
                        </div>
                        <div className="h-px bg-gradient-to-r from-blue-300 to-transparent flex-1"></div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl mr-4 flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            {step.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                            {step.description}
                          </p>
                          
                          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className={`${!isEven ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}>
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        <IconComponent className="h-20 w-20 text-blue-600 dark:text-blue-400" />
                        
                        {/* Decorative Elements */}
                        <motion.div
                          className="absolute top-4 right-4 w-6 h-6 bg-blue-200 dark:bg-blue-700 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        />
                        
                        <motion.div
                          className="absolute bottom-6 left-6 w-4 h-4 bg-indigo-300 dark:bg-indigo-600 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                        />
                      </div>
                      
                      {/* Step indicator for visual element */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Let's start with a free consultation to map out your perfect support system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                size="lg"
                className="px-8 py-3 text-lg"
              >
                Start Free Consultation
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => {
                  const element = document.querySelector('#case-studies');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg"
              >
                See Case Studies
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
