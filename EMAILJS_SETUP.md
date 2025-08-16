# EmailJS Setup Guide

This project uses EmailJS to handle form submissions and email sending. Follow these steps to configure EmailJS for your VA Portfolio.

## 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down the **Service ID** (e.g., `service_abcd1234`)

## 3. Create Email Templates

### Contact Form Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}

Project Type: {{project_type}}
Budget: {{budget}}
Timeline: {{timeline}}

Message:
{{message}}

---
Submitted on: {{timestamp}}
From: {{page_url}}
User Agent: {{user_agent}}
```

4. Save and note the **Template ID** (e.g., `template_xyz5678`)

### Auto-Reply Template
1. Create another template for auto-replies
2. Template content:

**Subject:** Thank you for contacting Mohammed Majidi - VA Services

**Body:**
```
Dear {{user_name}},

Thank you for reaching out! I've received your message and will get back to you within 24 hours.

Your inquiry is important to me, and I'm excited to learn more about how I can help streamline your business operations with my virtual assistant services.

In the meantime, feel free to:
- Explore my portfolio and case studies
- Check out my service packages
- Schedule a direct call if you prefer

Best regards,
Mohammed Majidi
Expert Virtual Assistant

---
This is an automated response. Please do not reply to this email directly.
```

3. Note the **Template ID** for the auto-reply

### Quote Request Template (Optional)
Create a separate template for quote requests with fields like:
- Service Type: {{service_type}}
- Project Description: {{project_description}}
- Requirements: {{requirements}}

## 4. Get Your API Keys

1. Go to **Account** → **General**
2. Find your **Public Key** (User ID)
3. Optionally, create an **Access Token** for enhanced security

## 5. Configure Environment Variables

1. Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```

2. Fill in your EmailJS credentials in the `.env` file:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_USER_ID=your_user_id_here
VITE_EMAILJS_ACCESS_TOKEN=your_access_token_here
```

## 6. Test the Setup

1. Start your development server:
```bash
npm run dev
```

2. Navigate to the contact section
3. Fill out and submit the contact form
4. Check your email for the received message
5. Check the sender's email for the auto-reply

## 7. Email Template Variables

The following variables are available in your email templates:

### Contact Form Variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{company}}` - Company name
- `{{phone}}` - Phone number
- `{{project_type}}` - Project type/hours needed
- `{{budget}}` - Budget information
- `{{timeline}}` - Timeline requirements
- `{{message}}` - Main message content
- `{{subject}}` - Email subject
- `{{timestamp}}` - Submission timestamp
- `{{page_url}}` - Page URL where form was submitted
- `{{user_agent}}` - Browser information

### Auto-Reply Variables:
- `{{user_name}}` - Recipient's name
- `{{to_email}}` - Recipient's email

## 8. Troubleshooting

### Common Issues:

1. **"Service not found" error**
   - Check that your Service ID is correct
   - Ensure the service is active in EmailJS dashboard

2. **"Template not found" error**
   - Verify your Template ID is correct
   - Make sure the template is published

3. **Emails not sending**
   - Check your email service quota (free plan has limits)
   - Verify your email service credentials
   - Check EmailJS dashboard logs

4. **Auto-reply not working**
   - Ensure you have a separate template for auto-replies
   - Check that the template ID is correctly set

### Debug Mode:
To enable debug logging, add this to your console:
```javascript
localStorage.setItem('emailjs_debug', 'true');
```

## 9. Production Deployment

When deploying to production:

1. Set environment variables in your hosting platform
2. Test the contact form functionality
3. Monitor EmailJS dashboard for usage and errors
4. Consider upgrading to a paid plan for higher limits

## 10. Security Notes

- Never commit your `.env` file to version control
- Use Access Tokens for enhanced security
- Regularly monitor EmailJS usage in the dashboard
- Set up email validation and rate limiting if needed

---

For more information, visit the [EmailJS Documentation](https://www.emailjs.com/docs/).
