const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://orvanta-journey-production.up.railway.app";

export const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone: string;
  address: string;
  desiredCountry: string;
  visaType: string;
  message: string;
}) => {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  return response.json();
};
