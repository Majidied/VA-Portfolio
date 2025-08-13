import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EnvelopeIcon, 
  UsersIcon, 
  MagnifyingGlassIcon, 
  DocumentTextIcon,
  CogIcon,
  CodeBracketIcon,
  BoltIcon,
  ChevronDownIcon,
  CheckIcon 
} from '@heroicons/react/24/outline';
import { Button } from '../ui/button';
import { serviceCategories } from '../../content/services';

const iconMap = {
  'mail': EnvelopeIcon,
  'users': UsersIcon,
  'search': MagnifyingGlassIcon,
  'document-text': DocumentTextIcon,
  'cog': CogIcon,
  'code': CodeBracketIcon,
  'lightning-bolt': BoltIcon,
};

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Services – Organized into VA Skills + Enhancement Layer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From core administrative excellence to custom efficiency solutions that give you the edge
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-8">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className={`relative ${
                category.highlight 
                  ? 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-700' 
                  : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700'
              } rounded-2xl p-8`}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                {category.highlight && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium mb-4"
                  >
                    <BoltIcon className="h-4 w-4 mr-2" />
                    Your Competitive Edge
                  </motion.div>
                )}
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.services.map((service, serviceIndex) => {
                  const IconComponent = iconMap[service.icon as keyof typeof iconMap];
                  const isActive = activeService === service.id;
                  
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      {/* Service Header */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div className={`flex items-center justify-center w-12 h-12 rounded-lg mr-4 ${
                              category.highlight 
                                ? 'bg-blue-100 dark:bg-blue-900' 
                                : 'bg-gray-100 dark:bg-gray-700'
                            }`}>
                              <IconComponent className={`h-6 w-6 ${
                                category.highlight 
                                  ? 'text-blue-600 dark:text-blue-400' 
                                  : 'text-gray-600 dark:text-gray-400'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {service.title}
                              </h4>
                            </div>
                          </div>
                          
                          <Button
                            onClick={() => toggleService(service.id)}
                            variant="ghost"
                            size="icon"
                            aria-label={`Toggle details for ${service.title}`}
                          >
                            <ChevronDownIcon 
                              className={`h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 ${
                                isActive ? 'rotate-180' : ''
                              }`} 
                            />
                          </Button>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {service.description}
                        </p>
                      </div>

                      {/* Expandable Features */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50"
                          >
                            <div className="p-6">
                              <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                                What's Included:
                              </h5>
                              <div className="space-y-2">
                                {service.features.map((feature, index) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="flex items-start"
                                  >
                                    <CheckIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <div className="text-sm text-gray-600 dark:text-gray-300">
                                      {feature}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to experience the difference between a regular VA and a systems-enhanced VA?
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
              Let's Discuss Your Needs
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
