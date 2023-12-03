import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import ChatPopup from "@components/ChatPopop/ChatPopup";
import ChatSection from "@components/ChatSection/ChatSection";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="A.I. Chatbot 🤖"
                description="AI
                            對話機器人，助您輕鬆開拓商機，精準收集目標客戶清單"
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Features</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                對話機器人的卓越行銷功能
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>深度互動、精準線索，助您引領行銷新紀元</p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>More Features</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                智慧融合，革命性行銷策略引爆！
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    A.I.
                                    對話機器人：無縫商機轉化，透過自動化與極致便利，讓您的行銷策略輕鬆實現。打造您的品牌未來，與創新科技一同翱翔於行銷的全新藍海，將商機源源不絕引入您的業務。
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/crm.jpg"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            自動匯出客戶資訊
                                        </CardHeader>
                                        <p>
                                            無縫橋接，A.I.
                                            對話機器人自動將商機送入您的 CRM
                                            或指定工作表，為您的業務開啟了全新的銷售前景。這項先進功能不僅節省了繁瑣的手動匯入步驟，更確保了線索的即時且準確的整合。這樣的智能匯出機制使您能夠即刻回應潛在客戶的需求，迅速啟動個性化的行銷活動，從而打造更加細緻且高效的銷售管道。讓
                                            A.I.
                                            對話機器人成為您行銷策略的得力助手，實現商機無縫轉化，為業務的成功鋪平道路。
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/code.jpg"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            輕鬆多元部署
                                        </CardHeader>
                                        <p>
                                            A.I.
                                            對話機器人擁有多元選擇，讓您根據您的需求選擇最適合的方式。無論是嵌入代碼於您的網站，或是透過部署專屬
                                            URL 分享至各種平台，都能輕鬆實現
                                            A.I.
                                            對話機器人的全面覆蓋。這種多元化的部署方式，讓您能夠根據不同的營銷策略和目標，靈活調整對話機器人的呈現形式。打造獨一無二的客戶互動體驗，讓您的品牌在數位領域中脫穎而出，贏得客戶的青睞。
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Testimonials</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                這些都是用戶給我們的真實反饋
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="try" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Try it now!</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                親身體驗，感受威力
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    點擊下方「開啟全頁對話匡」的按鈕來開啟全頁對話匡，或點擊右下角的訊息圖示，即可開始與A.I.
                                    Chatbot展開對話。點擊下方「查看所搜集的資訊」的按鈕，便可查看自動傳送到指定
                                    Google sheet 中的客戶資訊。
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/chatwindow.png"
                                            alt="Customizable Layouts image used."
                                        />
                                        {/* <CardHeader className="!text-black !text-2xl !font-bold">
                                            自動匯出客戶資訊
                                        </CardHeader> */}
                                        <ButtonGroup className="flex flex-col">
                                            <Link
                                                role="button"
                                                href="https://chatbot.wbi.cam/chatbot/5de6edfa-6ded-4964-9452-43c4be839bf6"
                                                className="btn btn--secondary mt-4"
                                                target="_blank"
                                            >
                                                開啟全頁對話匡
                                            </Link>
                                        </ButtonGroup>
                                        {/* <p>
                                            無縫橋接，A.I.
                                            對話機器人自動將商機送入您的 CRM
                                            或指定工作表，為您的業務開啟了全新的銷售前景。這項先進功能不僅節省了繁瑣的手動匯入步驟，更確保了線索的即時且準確的整合。這樣的智能匯出機制使您能夠即刻回應潛在客戶的需求，迅速啟動個性化的行銷活動，從而打造更加細緻且高效的銷售管道。讓
                                            A.I.
                                            對話機器人成為您行銷策略的得力助手，實現商機無縫轉化，為業務的成功鋪平道路。
                                        </p> */}
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/demo-sheet.png"
                                            alt="Progress Tracking image used."
                                        />
                                        {/* <CardHeader className="!text-black !text-2xl !font-bold">
                                            輕鬆多元部署
                                        </CardHeader> */}
                                        <ButtonGroup className="flex flex-col">
                                            <Link
                                                role="button"
                                                href="https://docs.google.com/spreadsheets/d/19ZKp5tqzbLS6PNJ-aoLz6avDlnHAoH8EeeZOpgV9_lI/edit?usp=sharing"
                                                className="btn btn--secondary mt-4"
                                                target="_blank"
                                            >
                                                查看所搜集的資訊
                                            </Link>
                                        </ButtonGroup>
                                        {/* <p>
                                            A.I.
                                            對話機器人擁有多元選擇，讓您根據您的需求選擇最適合的方式。無論是嵌入代碼於您的網站，或是透過部署專屬
                                            URL 分享至各種平台，都能輕鬆實現
                                            A.I.
                                            對話機器人的全面覆蓋。這種多元化的部署方式，讓您能夠根據不同的營銷策略和目標，靈活調整對話機器人的呈現形式。打造獨一無二的客戶互動體驗，讓您的品牌在數位領域中脫穎而出，贏得客戶的青睞。
                                        </p> */}
                                    </CardBody>
                                </Card>
                            </CardGroup>
                            {/* <ChatSection /> */}
                            {/* <Accordion /> */}
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
                <ChatPopup />
            </div>
        </Layout>
    );
}
