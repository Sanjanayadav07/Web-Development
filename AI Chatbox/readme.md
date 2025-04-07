# 💬 AI Chat App using Gemini 1.5 Flash

This is a dynamic AI chat application built using HTML, CSS, and JavaScript, integrated with Google's **Gemini 1.5 Flash** API. It supports both text input and image-based interactions, providing intelligent responses from the AI.

---

## 🚀 Features

- 🔤 Text-based user input with instant AI replies
- 🖼️ Upload and send image input (Base64 encoded)
- 🔄 Smooth chat flow with animations
- 📜 Automatic scroll to latest messages
- 🌐 Integration with Gemini 1.5 Flash API

---

## 🛠️ Technologies Used

- HTML, CSS, JavaScript
- FileReader API (for image conversion)
- Google Gemini 1.5 Flash API (via REST)

---

## 📸 Preview

![Ai Chat Bot - Personal - Microsoft​ Edge 07-04-2025 19_26_08](https://github.com/user-attachments/assets/69b9fd3a-21c1-4f04-98fc-ebd6505e98d8)



---

## 🧪 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ysanjanayadav07/ai-chat-app.git
   cd ai-chat-app
   
2. **Insert your Gemini API key**

## In script.js, replace:
```bash
const Api_Url="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=Your-Api-Key"

```
3. **Open index.html in your browser**

## 📂 File Structure

```
   ai-chat-app/
├── index.html
├── style.css
├── script.js
├── user.png
├── ai.png
├── img.svg
├── loading.webp
└── README.md
```

**🧠 How It Works**
- User enters a message or uploads an image.

- The input is sent to the Gemini API via a POST request.

- The API responds with AI-generated content, which is then displayed dynamically in the chat interface.

**🔐 API Key Note**
This app uses Google's Generative Language API. 
You can get your key from Google AI Studio and enable the Gemini 1.5 Flash model in your project.

Created with ❤️ by Sanjana Yadav



