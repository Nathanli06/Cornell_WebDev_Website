import type { CompanyLogoKey } from "@/components/ui/company-logos";

export type Placement = {
  name: string;
  /** Omitted for brands without an available mark (renders as text only). */
  icon?: CompanyLogoKey;
};

export const placements: Placement[] = [
  { name: "Amazon", icon: "amazon" },
  { name: "IBM", icon: "ibm" },
  { name: "Apple", icon: "apple" },
  { name: "Uber", icon: "uber" },
  { name: "GEICO" },
  { name: "Meta", icon: "meta" },
  { name: "MathWorks", icon: "mathworks" },
  { name: "Oracle", icon: "oracle" },
  { name: "Infosys", icon: "infosys" },
  { name: "HubSpot", icon: "hubspot" },
  { name: "Jane Street" },
];
