export type Product = {
  slug: string;
  name: string;
  code: string;
  category: string;
  purity: string;
  sizes: string[];
  description: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "rp-101",
    name: "Peptide RP-101",
    code: "RP-101",
    category: "Lyophilized Peptide",
    purity: "≥99%",
    sizes: ["5 mg", "10 mg"],
    description:
      "Research-grade lyophilized peptide supplied for in-vitro laboratory use.",
  },
  {
    slug: "rp-114",
    name: "Peptide RP-114",
    code: "RP-114",
    category: "Lyophilized Peptide",
    purity: "≥99%",
    sizes: ["5 mg", "10 mg"],
    description:
      "Research-grade lyophilized peptide supplied for in-vitro laboratory use.",
  },
  {
    slug: "rp-128",
    name: "Peptide RP-128",
    code: "RP-128",
    category: "Peptide Blend",
    purity: "≥98%",
    sizes: ["10 mg"],
    description:
      "Multi-component research peptide blend for laboratory research applications.",
  },
  {
    slug: "rp-142",
    name: "Peptide RP-142",
    code: "RP-142",
    category: "Reference Standard",
    purity: "≥99%",
    sizes: ["1 mg", "5 mg"],
    description:
      "Analytical reference standard intended for laboratory calibration and testing use.",
  },
  {
    slug: "rp-156",
    name: "Peptide RP-156",
    code: "RP-156",
    category: "Lyophilized Peptide",
    purity: "≥99%",
    sizes: ["5 mg", "10 mg", "25 mg"],
    description:
      "Research-grade lyophilized peptide supplied for in-vitro laboratory use.",
  },
  {
    slug: "rp-167",
    name: "Peptide RP-167",
    code: "RP-167",
    category: "Custom Synthesis",
    purity: "Specification on request",
    sizes: ["Custom"],
    description:
      "Custom synthesis research peptide available to laboratory-specified requirements.",
  },
  {
    slug: "rp-183",
    name: "Peptide RP-183",
    code: "RP-183",
    category: "Peptide Blend",
    purity: "≥98%",
    sizes: ["10 mg"],
    description:
      "Multi-component research peptide blend for laboratory research applications.",
  },
  {
    slug: "rp-199",
    name: "Peptide RP-199",
    code: "RP-199",
    category: "Reference Standard",
    purity: "≥99%",
    sizes: ["1 mg", "5 mg"],
    description:
      "Analytical reference standard intended for laboratory calibration and testing use.",
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug);
}
