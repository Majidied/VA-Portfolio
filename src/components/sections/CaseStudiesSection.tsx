import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  ClockIcon, 
  ChartBarIcon,
  StarIcon 
} from '@heroicons/react/24/outline';
import { Button } from '../ui/button';
import { caseStudies } from '../../content/case-studies';

export default function CaseStudiesSection() {
  const [activeStudy, setActiveStudy] = useState(0);

  const nextStudy = () => {
    setActiveStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevStudy = () => {
    setActiveStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[activeStudy];

  return (
    <section id="case-studies" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Case Studies – Showing Both VA & Tech Value
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real results from real clients who experienced the power of enhanced VA services
          </p>
        </motion.div>

        {/* Case Study Carousel */}
        <div className="relative">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <Button
              onClick={prevStudy}
              variant="outline"
              size="icon"
              className="rounded-full shadow-lg"
              aria-label="Previous case study"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </Button>

            {/* Study Indicators */}
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <Button
                  key={index}
                  onClick={() => setActiveStudy(index)}
                  variant="ghost"
                  size="sm"
                  className={`w-3 h-3 p-0 rounded-full transition-colors duration-200 ${
                    index === activeStudy 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextStudy}
              variant="outline"
              size="icon"
              className="rounded-full shadow-lg"
              aria-label="Next case study"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>

          {/* Case Study Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStudy}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 lg:p-12">
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                    {currentStudy.category}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {currentStudy.title}
                  </h3>

                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    <strong>Client:</strong> {currentStudy.client}
                  </p>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Challenge:
                    </h4>
                    <p className="text-gray-700 dark:text-gray-200">
                      {currentStudy.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Solution:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900 dark:text-white">VA Solution:</strong>
                          <span className="text-gray-700 dark:text-gray-200 ml-1">
                            {currentStudy.solution.va}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900 dark:text-white">Enhancement:</strong>
                          <span className="text-gray-700 dark:text-gray-200 ml-1">
                            {currentStudy.solution.enhancement}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Results:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentStudy.results.map((result, index) => (
                        <div 
                          key={index}
                          className="flex items-center bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-200">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics Side */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 lg:p-12 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Key Metrics
                  </h4>

                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-center"
                    >
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4">
                        <ClockIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {currentStudy.metrics.timeSaved}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Time Saved
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-center"
                    >
                      <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-4">
                        <ChartBarIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {currentStudy.metrics.efficiency}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Efficiency Gain
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-center"
                    >
                      <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full mx-auto mb-4">
                        <StarIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {currentStudy.metrics.satisfaction}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Client Satisfaction
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to become the next success story?
          </p>
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
              Start Your Transformation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
