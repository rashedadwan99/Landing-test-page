import PhoneIcon from "@/components/icons/PhoneIcon";
import { ContactDetails } from "../types/contact.types";
import EmailIcon from "@/components/icons/EmailIcon";
import OfficeIcon from "@/components/icons/OfficeIcon";
export const contactDetails: ContactDetails[] = [
  {
    title: "Phone",
    text: "+1 (555) 123-4567",
    icon: PhoneIcon,
  },
  {
    title: "Email",
    text: "contact@airevolution.com",
    icon: EmailIcon,
  },
  {
    title: "Office",
    text: "123 AI Boulevard, Tech City, TC 10001",
    icon: OfficeIcon,
  },
];
