import type { Metadata, Viewport } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { GrainOverlay } from "@/components/grain";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070707",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://iversonsantos.dev"),
  title: {
    default: "Iverson Santos — Desenvolvedor de Software & Produtos Digitais",
    template: "%s | Iverson Santos",
  },
  description:
    "Portfólio de Iverson Santos — Desenvolvedor de Software e Produtos Digitais. Aplicações modernas, Next.js 15, TypeScript, React e interfaces refinadas.",
  keywords: [
    "Iverson Santos",
    "Desenvolvedor",
    "Desenvolvedor Frontend",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Web",
    "Next.js 15",
    "TypeScript",
    "React 19",
    "Tailwind CSS",
    "Portfólio",
  ],
  authors: [{ name: "Iverson Santos", url: "https://iversonsantos.dev" }],
  creator: "Iverson Santos",
  publisher: "Iverson Santos",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Iverson Santos — Desenvolvedor de Software & Produtos Digitais",
    description:
      "Portfólio editorial apresentando cases reais em Next.js 15, React, TypeScript e alta performance.",
    url: "https://iversonsantos.dev",
    siteName: "Iverson Santos Portfólio",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Iverson Santos — Desenvolvedor de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iverson Santos — Desenvolvedor de Software & Produtos Digitais",
    description:
      "Cases reais em produção com Next.js 15, React, TypeScript e alta performance.",
    creator: "@iversonsantos",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Iverson Santos",
      jobTitle: "Desenvolvedor de Software",
      description:
        "Desenvolvedor de Software focado em transformar processos reais em aplicações modernas de alta performance.",
      url: "https://iversonsantos.dev",
      sameAs: [
        "https://github.com/IversonSantos-dev",
        "https://www.linkedin.com/in/iverson-santos-a96706193/",
      ],
      knowsAbout: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Supabase",
        "Engenharia de Software",
        "Arquitetura de Produto",
      ],
    },
  };

  return (
    <html lang="pt-BR" className={`dark ${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-white selection:text-black">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-mono focus:text-xs focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Pular para o conteúdo principal
        </a>
        <SmoothScroll>
          <GrainOverlay />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
