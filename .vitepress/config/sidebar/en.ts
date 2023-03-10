import type { DefaultTheme } from "vitepress";

export const en: DefaultTheme.Sidebar = {
  "/": [
    {
      text: "Products",
      collapsible: true,
      collapsed: false,
      link: "/en/products/",
      items: [
        {
          text: "🗃️ Help Desk",
          link: "/en/products/help-desk"
        },
        {
          text: "📝 Comment",
          link: "/en/products/comment",
        },
        {
          text: "👏 Clap",
          link: "/en/products/clap",
        },
        {
          text: "✉️ Feedback",
          link: "/en/products/feedback",
        },
        {
          text: "✔️ Verification",
          link: "/en/products/verification",
        },
        {
          text: "🤳 eKYC",
          link: "/en/products/ekyc",
        },
        {
          text: "ℹ️ Helpful",
          link: "/en/products/helpful",
        },
        {
          text: "🚨 Report",
          link: "/en/products/report",
        },
      ],
    },
    {
      text: "SDKs",
      collapsible: true,
      collapsed: true,
      link: "/en/sdks/",
      items: [
        { text: "Werify", link: "/en/skds/werify" },
        { text: "Help Desk", link: "/en/skds/help-desk" },
        { text: "Comment", link: "/en/skds/comment" },
        { text: "Clap", link: "/en/skds/clap" },
        { text: "Feedback", link: "/en/skds/feedback" },
        { text: "Verification", link: "/en/skds/verification" },
        { text: "eKYC", link: "/en/skds/ekyc" },
        { text: "Helpful", link: "/en/skds/helpful" },
        { text: "Report", link: "/en/skds/report" },
      ]
    },
    {
      text: "Rest APIs",
      collapsible: true,
      collapsed: true,
      link: "/en/api/",
      items: [
            {
              text: "oAuth",
              link: "/en/api/oauth",
            },
            {
              text: "User",
              link: "/en/api/user",
            },
            {
              text: "Clap",
              link: "/en/api/clap",
            },
            {
              text: "Comment",
              link: "/en/api/comment",
            },
      ],
    },
  ],
};
