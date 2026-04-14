# PDFCraft - Run and Deploy Instructions

This guide provides the commands needed to run the application locally and push it to GitHub.

## 🚀 How to Run Locally

Follow these steps to get the development server running on your machine:

1.  **Navigate to the project directory:**
    ```powershell
    cd pdf-tools-website
    ```

2.  **Install dependencies (if not already done):**
    ```powershell
    npm install
    ```

3.  **Start the development server:**
    ```powershell
    npm run dev
    ```

4.  **Open the application:**
    The app will be available at `http://localhost:5173/` (or the port shown in your terminal).

---

## ☁️ How to Push to GitHub

To store your code on GitHub, follow these commands. Replace `<your-repository-url>` with your actual GitHub repo link.

1.  **Initialize a Git repository:**
    ```powershell
    git init
    ```

2.  **Add all files to staging:**
    ```powershell
    git add .
    ```

3.  **Commit your changes:**
    ```powershell
    git commit -m "Initial commit: PDFCraft web application"
    ```

4.  **Link your GitHub repository:**
    ```powershell
    git remote add origin <your-repository-url>
    ```

5.  **Identify your branch (usually 'main'):**
    ```powershell
    git branch -M main
    ```

6.  **Push the code:**
    ```powershell
    git push -u origin main
    ```

---

## 🛠️ Build for Production

To create a production-ready bundle of your website:

```powershell
npm run build
```
The output will be in the `dist/` folder.
