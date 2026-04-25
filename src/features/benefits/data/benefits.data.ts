import EconmicIcon from "@/components/icons/EconmicIcon";
import { Benefits } from "../types/benefits.types";
import HealthIcon from "@/components/icons/HealthIcon";
import EnhancedIcon from "@/components/icons/EnhancedIcon";
import EnergyIcon from "@/components/icons/EnergyIcon";
import ClimateIcon from "@/components/icons/ClimateIcon";
import EducationIcon from "@/components/icons/EducationIcon";

export const benefits: Benefits[] = [
  {
    title: "Healthcare Advancements",
    description:
      "AI enables faster diagnosis, personalized treatment plans, and drug discovery, saving countless lives.",
    icon: HealthIcon,
    color: "primary",
  },
  {
    title: "Economic Growth",
    description:
      "AI-driven automation and insights contribute to increased productivity and economic expansion.",
    icon: EconmicIcon,
    color: "secondary",
  },
  {
    title: "Enhanced Security",
    description:
      "AI-powered systems detect and prevent cyber threats and fraud more effectively than traditional methods.",
    icon: EnhancedIcon,
    color: "accent",
  },
  {
    title: "Energy Efficiency",
    description:
      "AI optimizes energy consumption in industries and homes, reducing waste and environmental impact.",
    icon: EnergyIcon,
    color: "primary",
  },
  {
    title: "Climate Solutions",
    description:
      "AI models help predict climate patterns and develop strategies to combat climate change.",
    icon: ClimateIcon,
    color: "secondary",
  },
  {
    title: "Education Access",
    description:
      "AI-powered platforms provide personalized learning experiences to students worldwide.",
    icon: EducationIcon,
    color: "accent",
  },
];
