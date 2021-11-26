const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/palenight")

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "Semaphore Documentation",
    url: "https://akinovak.github.io",
    baseUrl: "/semaphore-spec/",
    favicon: "/img/favicon.ico",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    organizationName: "Semaphore",
    projectName: "semaphore-spec",
    trailingSlash: false,

    presets: [
        [
            "@docusaurus/preset-classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/akinovak/semaphore-spec/edit/main/",
                    routeBasePath: "/"
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css")
                }
            })
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "Semaphore",
                items: [
                    {
                        href: "https://github.com/appliedzkp/semaphore",
                        label: "GitHub",
                        position: "right"
                    }
                ]
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Welcome",
                                to: "/"
                            },
                            {
                                label: "Technical overview",
                                to: "/technical-overview/intro"
                            },
                            {
                                label: "API",
                                to: "/api"
                            },
                            {
                                label: "References",
                                to: "/references"
                            }
                        ]
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Medium",
                                href: "https://medium.com/privacy-scaling-explorations"
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/PrivacyScaling"
                            }
                        ]
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Contracts",
                                href: "https://github.com/appliedzkp/semaphore"
                            },
                            {
                                label: "JS Library",
                                href: "https://github.com/appliedzkp/libsemaphore"
                            }
                        ]
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Semaphore`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        })
}
