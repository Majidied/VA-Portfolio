export const availability = {
  status: "Available for New Projects",
  nextAvailable: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
  currentCapacity: "2 slots remaining",
  workingHours: {
    timezone: "UTC+0",
    schedule: [
      { day: "Monday", hours: "9:00 AM - 6:00 PM" },
      { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
      { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
      { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
      { day: "Friday", hours: "9:00 AM - 6:00 PM" },
      { day: "Saturday", hours: "Limited availability" },
      { day: "Sunday", hours: "Emergency only" },
    ],
  },
  responseTime: {
    standard: "Within 24 hours",
    priority: "Within 4 hours",
    emergency: "Within 1 hour",
  },
  preferredContact: [
    {
      method: "Email",
      value: "mohammedmajidi321@gmail.com", // Replace with actual email
      primary: true,
    },
    {
      method: "Calendar Booking",
      value: "https://calendly.com/majidimajidi2003/30-minute-meeting", // Replace with actual booking link
      primary: false,
    },
  ],
};
