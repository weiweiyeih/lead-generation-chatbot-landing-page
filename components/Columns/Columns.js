import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "李先生 - 網路創業家",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "AI聊天機器人是近期我的網站上最有價值的工具之一，它能夠自動回答客戶的問題，節省了大量時間和人力成本。"
    },
    {
        id: uuid(),
        title: "陳先生 - 銷售主管",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "智能對話機器人幫助我們更好地了解客戶需求，並提供準確的解決方案，從而提高了銷售轉換率。"
    },
    {
        id: uuid(),
        title: "Jessica - 電子商務經理",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "使用AI Chatbot後，我們的sales leads數量翻倍，對於提升業績非常有幫助！"
    },
    {
        id: uuid(),
        title: "劉先生 - 網站工程師",
        icon: "劉先生 - 網站工程師",
        content:
            "整合A.I.對話機器人到我們的網站非常簡單，讓我輕鬆達成了自動化客戶互動的任務。"
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    {/* <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" /> */}
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
