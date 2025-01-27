import React from "react";
import Head from "next/head";

const fallbackSeoData = {
  metaTitle: "Aanchal Goyal ",
  metaDescription: "Portfolio Website",
  metaSocial: undefined,
  keywords: "Frontend developer, Software developer",
  metaRobots: "ALL",
  structuredData: null,
  metaViewport: "width=device-width, initial-scale=1.0",
  canonicalURL: null,
};
export const SEO = (props: any) => {
  const {
    metaTitle,
    metaDescription,
    metaImage,
    metaSocial,
    keywords,
    metaRobots,
    structuredData,
    metaViewport,
    canonicalURL,
  } = props.seoData ?? fallbackSeoData;

  //   const ogImage =
  //     metaSocial?.find((social) => social?.socialNetwork === "Facebook")?.image
  //       ?.data?.attributes?.url ?? metaImage?.data?.attributes?.url;

  //   const twitterMeta = metaSocial?.find(
  //     (social) => social?.socialNetwork === "Twitter"
  //   );

  return (
    <Head>
      <title>{metaTitle ?? "Kaizen Print"}</title>
      <meta name="title" content={metaTitle ?? "Kaizen Print"} />
      <meta name="description" content={metaDescription} />
      <meta
        name="keywords"
        content={keywords ?? "Job Search, Startup jobs, Find Candidates"}
      />
      <meta name="robots" content={metaRobots ?? "ALL"} />
      <meta
        name="viewport"
        content={metaViewport ?? "width=device-width, initial-scale=1.0"}
      />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      {canonicalURL && <link rel="canonical" href={canonicalURL} />}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};
