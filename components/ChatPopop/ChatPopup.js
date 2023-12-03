import { BubbleChat } from "flowise-embed-react";

function ChatPopup() {
    return (
        <BubbleChat
            chatflowid="5de6edfa-6ded-4964-9452-43c4be839bf6"
            apiHost="https://chatbot.wbi.cam"
            theme={{
                button: {
                    backgroundColor: "#ffc56e",
                    right: 20,
                    bottom: 20,
                    size: "large",
                    iconColor: "white"
                    // customIconSrc:
                    //     "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg"
                },
                chatWindow: {
                    welcomeMessage:
                        "你好！我是 AI Chatbot 小幫手。你可以叫我 Lisa。",
                    backgroundColor: "#ffffff",
                    height: 700,
                    width: 400,
                    fontSize: 16,
                    poweredByTextColor: "#303235",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc:
                            "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png"
                    },
                    userMessage: {
                        backgroundColor: "#ffc56e",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc:
                            "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png"
                    },
                    textInput: {
                        placeholder: "請輸入你的問題",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#ffc56e"
                    }
                }
            }}
        />
    );
}

export default ChatPopup;
