import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  return formatter.format(price);
};

export function constructMetadata({
  title = "FineCard – Custom, high-quality payment cards designed to reflect your style.",
  description = "Personalize your card with cherished memories or fun moments, backed by our 5-year quality guarantee.",
  image = "/finecard_logo.png",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@sammie_chika",
    },
    icons,
    metadataBase: new URL("https://finecard.vercel.app/"),
  };
}
