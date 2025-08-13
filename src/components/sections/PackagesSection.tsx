import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckIcon, 
  XMarkIcon, 
  StarIcon,
  SparklesIcon,
  ClockIcon,
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { packages, addons, packageComparison } from '../../content/pricing';

export default function PackagesSection() {
  const [showComparison, setShowComparison] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="packages" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Hourly Services – Flexible & Value-Driven
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Pay only for the hours you need with transparent, competitive rates for every level of service
          </p>
          
          {/* Value Proposition */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 max-w-4xl mx-auto">
            <p className="text-lg text-blue-800 dark:text-blue-200 mb-4">
              <SparklesIcon className="h-6 w-6 inline mr-2" />
              <strong>Flexible Hourly Pricing:</strong> No long-term commitments, pay as you go
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <Badge variant="outline" className="flex items-center justify-center py-2 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                <CheckIcon className="h-4 w-4 mr-2" />
                Weekly bulk discounts available
              </Badge>
              <Badge variant="outline" className="flex items-center justify-center py-2 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                <CheckIcon className="h-4 w-4 mr-2" />
                No setup fees or hidden costs
              </Badge>
              <Badge variant="outline" className="flex items-center justify-center py-2 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                <CheckIcon className="h-4 w-4 mr-2" />
                Scale up or down as needed
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg border-2 overflow-hidden ${
                pkg.popular 
                  ? 'border-blue-500 dark:border-blue-400 transform scale-105' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-2 px-4">
                  <Badge variant="default" className="bg-transparent border-none text-white font-medium">
                    <StarIcon className="h-4 w-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className={`p-8 ${pkg.popular ? 'pt-16' : ''}`}>
                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {pkg.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">
                      /{pkg.period}
                    </span>
                  </div>
                  
                  {/* Minimum Hours & Discount */}
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <ClockIcon className="h-4 w-4 inline mr-1" />
                      Minimum: {pkg.minimumHours} hours/week
                    </p>
                    {pkg.bulkDiscount && (
                      <Badge variant="secondary" className="text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                        <CurrencyDollarIcon className="h-3 w-3 mr-1" />
                        {pkg.bulkDiscount}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Limitations (if any) */}
                {pkg.limitations.length > 0 && (
                  <div className="space-y-2 mb-8">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Limitations:
                    </p>
                    {pkg.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-start">
                        <XMarkIcon className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {limitation}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Ideal For */}
                <div className="mb-8">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Ideal For:
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {pkg.ideal}
                  </p>
                </div>

                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={scrollToContact}
                    variant={pkg.popular ? "default" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    {pkg.cta}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Additional Services & Add-ons
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {addon.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {addon.description}
                </p>
                <div className="flex items-baseline">
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    +${addon.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
                    {addon.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Toggle */}
        <div className="text-center mb-8">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => setShowComparison(!showComparison)}
              variant="outline"
              size="lg"
            >
              {showComparison ? 'Hide' : 'Show'} Detailed Comparison
            </Button>
          </motion.div>
        </div>

        {/* Comparison Table */}
        {showComparison && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Feature Comparison
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">
                        Feature
                      </th>
                      {packages.map((pkg) => (
                        <th key={pkg.id} className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">
                          {pkg.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {packageComparison.map((comparison, index) => (
                      <tr key={comparison.feature} className={`${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : ''}`}>
                        <td className="py-4 px-4 font-medium text-gray-900 dark:text-white">
                          {comparison.feature}
                        </td>
                        <td className="text-center py-4 px-4">
                          {comparison.essential === true ? (
                            <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                          ) : comparison.essential === false ? (
                            <XMarkIcon className="h-5 w-5 text-gray-400 mx-auto" />
                          ) : (
                            <span className="text-sm text-gray-600 dark:text-gray-300">{comparison.essential}</span>
                          )}
                        </td>
                        <td className="text-center py-4 px-4">
                          {comparison.optimized === true ? (
                            <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                          ) : comparison.optimized === false ? (
                            <XMarkIcon className="h-5 w-5 text-gray-400 mx-auto" />
                          ) : (
                            <span className="text-sm text-gray-600 dark:text-gray-300">{comparison.optimized}</span>
                          )}
                        </td>
                        <td className="text-center py-4 px-4">
                          {comparison.premium === true ? (
                            <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                          ) : comparison.premium === false ? (
                            <XMarkIcon className="h-5 w-5 text-gray-400 mx-auto" />
                          ) : (
                            <span className="text-sm text-gray-600 dark:text-gray-300">{comparison.premium}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Book your free consultation to discuss your needs and find the perfect hourly service level.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToContact}
                variant="default"
                size="lg"
                className="px-8 py-3 text-lg"
              >
                Book Free Consultation
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
                See Results First
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
