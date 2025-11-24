import ContactForm from "@/components/ui/ContactForm";

// app/contact/page.js
export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Gleam Digital Technologies to discuss web, mobile, data, security, or cloud projects and start your next digital initiative.",
  openGraph: {
    title: "Contact | Gleam Digital Technologies",
    description:
      "Ready to build, secure, or scale your digital products? Contact Gleam Digital Technologies for a free initial consultation.",
  },
};

export default function Contact() {
  return <ContactForm />;
}
