import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";

const DATA = [
    {
        title: "Template",
        items: [
            {
                label: "Features",
                href: "#features"
            },
            {
                label: "Testimonials",
                href: "#testimonials"
            },
            {
                label: "FAQ",
                href: "#faq"
            }
        ]
    },
    {
        title: "Company",
        items: [
            {
                label: "About",
                href: "https://github.com/christian-luntok/",
                target: "_blank"
            },
            {
                label: "Twitter",
                href: "https://github.com/christian-luntok/",
                target: "_blank"
            },
            {
                label: "Instagram",
                href: "https://github.com/christian-luntok/",
                target: "_blank"
            },
            {
                label: "Facebook",
                href: "https://github.com/christian-luntok/",
                target: "_blank"
            }
        ]
    }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white">
            {/* Footer Links */}

            {/* Footer Credits */}
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-6">
                    <p>
                        conatct:{" "}
                        <span className="underline font-bold">
                            info@wbi.cam
                        </span>{" "}
                        or leave your contact infomration to our chatbot 👉
                    </p>

                    <p className="my-0">
                        © {year} A.I. Chatbot. All rights reserved{" - "}
                        <span className="font-normal">
                            A template by{" "}
                            <Link
                                className="transition-colors duration-300 hover:underline"
                                href="https://chrstnl.com"
                                target="_blank"
                            >
                                chrstnl.
                            </Link>
                        </span>
                    </p>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
