import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  ArrowUpIcon 
} from '@heroicons/react/24/outline';
import { personalInfo, navigation } from '../../content/general';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-blue-400 mb-4">
                {personalInfo.title}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Blending organizational expertise with custom-built solutions to help you work faster, smarter, and with complete accuracy. Supporting clients worldwide with reliable assistance and tailor-made workflows.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center">
                  <EnvelopeIcon className="h-4 w-4 mr-2 text-blue-400" />
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-blue-400" />
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email & Calendar Management</li>
              <li>Client Coordination</li>
              <li>Research & Documentation</li>
              <li>Custom Web Tools</li>
              <li>Process Automation</li>
              <li>Workflow Optimization</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </div>

            {/* Back to Top Button */}
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-sm">
                Available for new projects
              </div>
              <motion.button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
              >
                <ArrowUpIcon className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button for Mobile */}
      <motion.div
        className="fixed bottom-6 right-6 z-40 md:hidden"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          onClick={() => scrollToSection('#contact')}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
          }}
        >
          <EnvelopeIcon className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </footer>
  );
}
