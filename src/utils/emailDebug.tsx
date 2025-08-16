import React from 'react';
import { validateEmailConfig, sendTestEmail } from '../lib/mailSender';

/**
 * EmailJS Configuration Checker
 * Use this component during development to verify EmailJS setup
 */
export const EmailConfigChecker: React.FC = () => {
  const checkConfig = async () => {
    console.log('🔧 Checking EmailJS Configuration...');
    
    // Check environment variables
    const configValid = validateEmailConfig();
    
    if (!configValid) {
      console.error('❌ EmailJS configuration is incomplete!');
      console.log('📋 Make sure you have set the following environment variables:');
      console.log('   - VITE_EMAILJS_SERVICE_ID');
      console.log('   - VITE_EMAILJS_TEMPLATE_ID');
      console.log('   - VITE_EMAILJS_USER_ID');
      console.log('   - VITE_EMAILJS_ACCESS_TOKEN (optional)');
      return;
    }
    
    console.log('✅ EmailJS configuration looks good!');
    
    // Test email sending
    console.log('📧 Sending test email...');
    const testResult = await sendTestEmail();
    
    if (testResult.success) {
      console.log('✅ Test email sent successfully!');
      console.log('📬 Check your email inbox for the test message.');
    } else {
      console.error('❌ Test email failed:', testResult.error);
      console.log('🔍 Troubleshooting steps:');
      console.log('   1. Check your EmailJS dashboard');
      console.log('   2. Verify your service and template IDs');
      console.log('   3. Ensure your email service is properly configured');
      console.log('   4. Check EmailJS quota limits');
    }
  };

  // Only render in development mode
  if (import.meta.env.MODE !== 'development') {
    return null;
  }

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '20px', 
      right: '20px', 
      zIndex: 9999,
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '12px',
      borderRadius: '8px',
      fontSize: '12px'
    }}>
      <button
        onClick={checkConfig}
        style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px'
        }}
      >
        Test EmailJS
      </button>
    </div>
  );
};

/**
 * Console commands for debugging EmailJS
 * Run these in the browser console during development
 */
export const emailDebugCommands = {
  // Test email configuration
  testConfig: () => {
    return validateEmailConfig();
  },
  
  // Send a test email
  testEmail: async () => {
    const result = await sendTestEmail();
    console.log('Test email result:', result);
    return result;
  },
  
  // Check environment variables
  checkEnv: () => {
    const env = {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      userId: import.meta.env.VITE_EMAILJS_USER_ID,
      accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
    };
    
    console.table(env);
    return env;
  },
  
  // Enable debug mode
  enableDebug: () => {
    localStorage.setItem('emailjs_debug', 'true');
    console.log('EmailJS debug mode enabled');
  },
  
  // Disable debug mode
  disableDebug: () => {
    localStorage.removeItem('emailjs_debug');
    console.log('EmailJS debug mode disabled');
  }
};

// Make debug commands available globally in development
if (import.meta.env.MODE === 'development') {
  (window as any).emailDebug = emailDebugCommands;
  console.log('🛠️ EmailJS debug commands available: window.emailDebug');
}
