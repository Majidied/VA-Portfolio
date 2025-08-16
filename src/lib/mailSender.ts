import emailjs from 'emailjs-com';

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_qoa29cp',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_7z91yp5',
  userId: import.meta.env.VITE_EMAILJS_USER_ID || 'F_DZ8hE4OlklvQm8x',
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN || 'your_access_token',
};

// Email template types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
}

export interface QuoteRequestData extends ContactFormData {
  serviceType: string;
  projectDescription: string;
  requirements: string[];
  preferredStartDate?: string;
}

export interface NewsletterSubscriptionData {
  email: string;
  name?: string;
  interests?: string[];
}

// Email sending responses
export interface EmailResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

// Initialize EmailJS
export const initializeEmailJS = (): void => {
  try {
    emailjs.init(EMAILJS_CONFIG.userId);
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
  }
};

// Generic email sender
export const sendEmail = async (
  templateParams: Record<string, any>,
  templateId?: string
): Promise<EmailResponse> => {
  try {
    // Validate configuration
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.userId) {
      throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
    }

    // Add timestamp and user info to template params
    const enhancedParams = {
      ...templateParams,
      timestamp: new Date().toLocaleString(),
      user_agent: navigator.userAgent,
      page_url: window.location.href,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      templateId || EMAILJS_CONFIG.templateId,
      enhancedParams,
      EMAILJS_CONFIG.userId
    );

    console.log('Email sent successfully:', response);

    return {
      success: true,
      message: 'Email sent successfully!',
      data: response,
    };
  } catch (error: any) {
    console.error('Failed to send email:', error);
    
    return {
      success: false,
      message: 'Failed to send email. Please try again later.',
      error: error.message || 'Unknown error occurred',
    };
  }
};

// Send contact form email
export const sendContactForm = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: 'Please fill in all required fields (name, email, message).',
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.',
      };
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'New Contact Form Submission',
      message: formData.message,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not provided',
      project_type: formData.projectType || 'Not specified',
      budget: formData.budget || 'Not specified',
      timeline: formData.timeline || 'Not specified',
      reply_to: formData.email,
    };

    return await sendEmail(templateParams);
  } catch (error: any) {
    return {
      success: false,
      message: 'Failed to send contact form. Please try again.',
      error: error.message,
    };
  }
};

// Send quote request email
export const sendQuoteRequest = async (quoteData: QuoteRequestData): Promise<EmailResponse> => {
  try {
    // Validate required fields
    if (!quoteData.name || !quoteData.email || !quoteData.serviceType || !quoteData.projectDescription) {
      return {
        success: false,
        message: 'Please fill in all required fields for the quote request.',
      };
    }

    const templateParams = {
      from_name: quoteData.name,
      from_email: quoteData.email,
      subject: `Quote Request: ${quoteData.serviceType}`,
      service_type: quoteData.serviceType,
      project_description: quoteData.projectDescription,
      requirements: quoteData.requirements.join(', '),
      company: quoteData.company || 'Not provided',
      phone: quoteData.phone || 'Not provided',
      budget: quoteData.budget || 'Not specified',
      timeline: quoteData.timeline || 'Not specified',
      preferred_start_date: quoteData.preferredStartDate || 'Flexible',
      message: quoteData.message,
      reply_to: quoteData.email,
    };

    return await sendEmail(templateParams, 'quote_request_template');
  } catch (error: any) {
    return {
      success: false,
      message: 'Failed to send quote request. Please try again.',
      error: error.message,
    };
  }
};

// Send newsletter subscription confirmation
export const sendNewsletterSubscription = async (
  subscriptionData: NewsletterSubscriptionData
): Promise<EmailResponse> => {
  try {
    if (!subscriptionData.email) {
      return {
        success: false,
        message: 'Email address is required for newsletter subscription.',
      };
    }

    const templateParams = {
      from_email: subscriptionData.email,
      subscriber_name: subscriptionData.name || 'Subscriber',
      interests: subscriptionData.interests?.join(', ') || 'General updates',
      subject: 'Newsletter Subscription Confirmation',
      templateId: 'newsletter_template',
    };

    return await sendEmail(templateParams, 'newsletter_template');
  } catch (error: any) {
    return {
      success: false,
      message: 'Failed to process newsletter subscription. Please try again.',
      error: error.message,
    };
  }
};

// Send auto-reply email to user
export const sendAutoReply = async (userEmail: string, userName: string): Promise<EmailResponse> => {
  try {
    const templateParams = {
      to_email: userEmail,
      user_name: userName,
      subject: 'Thank you for contacting us!',
      reply_message: `
        Dear ${userName},
        
        Thank you for reaching out! I've received your message and will get back to you within 24 hours.
        
        In the meantime, feel free to explore my portfolio and services on the website.
        
        Best regards,
        Mohammed Majidi
        Expert Virtual Assistant
      `,
    };

    return await sendEmail(templateParams, 'template_zje9j4n');
  } catch (error: any) {
    return {
      success: false,
      message: 'Failed to send auto-reply.',
      error: error.message,
    };
  }
};

// Utility function to validate email configuration
export const validateEmailConfig = (): boolean => {
  const requiredFields = ['serviceId', 'templateId', 'userId'];
  const missingFields = requiredFields.filter(
    (field) => !EMAILJS_CONFIG[field as keyof typeof EMAILJS_CONFIG]
  );

  if (missingFields.length > 0) {
    console.error('Missing EmailJS configuration:', missingFields);
    return false;
  }

  return true;
};

// Test email functionality
export const sendTestEmail = async (): Promise<EmailResponse> => {
  try {
    const testData: ContactFormData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Email',
      message: 'This is a test email to verify EmailJS configuration.',
    };

    return await sendContactForm(testData);
  } catch (error: any) {
    return {
      success: false,
      message: 'Test email failed.',
      error: error.message,
    };
  }
};

// Initialize EmailJS when the module is imported
if (typeof window !== 'undefined') {
  initializeEmailJS();
}
