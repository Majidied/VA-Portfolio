import { useState } from 'react';
import {
  sendContactForm,
  sendQuoteRequest,
  sendNewsletterSubscription,
  sendAutoReply,
} from '../lib/mailSender';
import type {
  ContactFormData,
  QuoteRequestData,
  NewsletterSubscriptionData,
  EmailResponse,
} from '../lib/mailSender';

interface UseEmailState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export const useEmail = () => {
  const [state, setState] = useState<UseEmailState>({
    loading: false,
    success: false,
    error: null,
  });

  const resetState = () => {
    setState({
      loading: false,
      success: false,
      error: null,
    });
  };

  const handleEmailResponse = (response: EmailResponse) => {
    setState({
      loading: false,
      success: response.success,
      error: response.success ? null : response.message,
    });
    return response;
  };

  const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
    setState({ loading: true, success: false, error: null });
    try {
      const response = await sendContactForm(formData);
      
      // Send auto-reply if contact form was successful
      if (response.success) {
        await sendAutoReply(formData.email, formData.name);
      }
      
      return handleEmailResponse(response);
    } catch (error: any) {
      return handleEmailResponse({
        success: false,
        message: 'An unexpected error occurred',
        error: error.message,
      });
    }
  };

  const sendQuoteEmail = async (quoteData: QuoteRequestData): Promise<EmailResponse> => {
    setState({ loading: true, success: false, error: null });
    try {
      const response = await sendQuoteRequest(quoteData);
      
      // Send auto-reply if quote request was successful
      if (response.success) {
        await sendAutoReply(quoteData.email, quoteData.name);
      }
      
      return handleEmailResponse(response);
    } catch (error: any) {
      return handleEmailResponse({
        success: false,
        message: 'An unexpected error occurred',
        error: error.message,
      });
    }
  };

  const subscribeToNewsletter = async (
    subscriptionData: NewsletterSubscriptionData
  ): Promise<EmailResponse> => {
    setState({ loading: true, success: false, error: null });
    try {
      const response = await sendNewsletterSubscription(subscriptionData);
      return handleEmailResponse(response);
    } catch (error: any) {
      return handleEmailResponse({
        success: false,
        message: 'An unexpected error occurred',
        error: error.message,
      });
    }
  };

  return {
    ...state,
    sendContactEmail,
    sendQuoteEmail,
    subscribeToNewsletter,
    resetState,
  };
};
