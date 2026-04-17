/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://klarteq.de",
  generateRobotsTxt: true,
  exclude: ["/kontakt/danke", "/preview"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/kontakt/danke", "/preview"],
      },
    ],
  },
};
