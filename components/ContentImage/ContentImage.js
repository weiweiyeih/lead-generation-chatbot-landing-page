import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "A.I.真智能",
        content:
            "我們的A.I. Chatbot智能聊天機器人使用 A.I. 深度機器學習技術，也就是通過學習大量文本數據而後預測答案，具有比傳統聊天機器人更高的語言理解和生成能力，可進行更自然、流暢的對話。不需要預設腳本，就可以幫你收集客戶名單！",
        align: "right",
        image: "/ai-intelligence.jpg"
    },
    {
        id: uuid(),
        title: "24/7 全天候服務",
        content:
            "A.I. 對話機器人能夠提供全天候的協助，與使用者隨時互動，有助於在正常工作時間之外提供資訊，並進行客戶開發。其智能化的應對機制不受時區限制，無論使用者身在何處、何時需要支援，都能即時回應需求。這不僅提供了極大的方便性，同時確保了您的潛在客戶在任何時刻都能得到迅速而有效的互動體驗。",
        align: "left",
        image: "/call-center.jpg"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
