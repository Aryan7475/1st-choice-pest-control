import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface PestData {
  id: string;
  name: string;
  scientificName?: string;
  description: string;
  introContent?: string[];
  appearance: string;
  behavior: string[];
  treatmentSteps: { title: string; description: string }[];
  image: string;
  types?: { name: string; description: string }[];
  preventionTips?: string[];
}

export interface BundlePlan {
  title: string;
  savings: string;
  services: { name: string; icon: LucideIcon }[];
  details: {
    service: string;
    frequency: string;
    description: string;
  }[];
}

export interface LocationItem {
  street: string;
  city: string;
  zip: string;
}