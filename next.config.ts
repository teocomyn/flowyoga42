import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/qui-suis-je/",
        destination: "/qui-suis-je",
        permanent: true,
      },
      {
        source: "/cours-ateliers/",
        destination: "/cours",
        permanent: true,
      },
      {
        source: "/cours-ateliers",
        destination: "/cours",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "/ateliers",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/ateliers",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/ateliers",
        permanent: true,
      },
      {
        source: "/parenthese-sur-la-presquile-du-chatelet-dimanche-5-juillet",
        destination: "/ateliers/parenthese-presquile-chatelet",
        permanent: true,
      },
      {
        source: "/yoga-brunch-dimanche-21-juin-de-11h-a-13h30",
        destination: "/ateliers/yoga-brunch-solstice",
        permanent: true,
      },
      {
        source: "/yoghypnose-samedi-20-juin",
        destination: "/ateliers/yoghypnose-juin",
        permanent: true,
      },
      {
        source: "/lexperience-cartomancie-yin-yoga-voyage-sonore",
        destination: "/ateliers/tarot-yoga-mai",
        permanent: true,
      },
      {
        source: "/tarifs/",
        destination: "/tarifs",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/cgv/",
        destination: "/cgv",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
