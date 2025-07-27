# 🛡️ Sentinels – Secure Document Printing System

**Sentinels** is a secure, end-to-end encrypted document printing and sharing system designed to eliminate privacy risks associated with printing sensitive documents at local print shops. The platform ensures that documents like Aadhaar cards, passports, and legal papers are never stored on shopkeepers’ systems and cannot be accessed, copied, or recovered after use.

---

## 📽️ Demo Video

🎥 [Watch Demo](https://drive.google.com/file/d/1rL-FqMPwezju4VGNZTVM_utt50XtEvgj/view)

---

## 🔒 Problem Statement

In today’s digital world, printing documents at shops poses serious security threats. Documents often stay on shared devices, exposing users to identity theft, spam, and financial fraud.

**Sentinels** solves this by offering:

- ✅ End-to-end encrypted document sharing
- ✅ No file storage on shop systems
- ✅ One-time print with self-destructing access
- ✅ Contactless file transfer via WhatsApp

---

## 🚀 Features

### 🔐 End-to-End Encryption
- Client-side AES-256 encryption for all documents
- ECDH (Elliptic Curve Diffie-Hellman) key exchange for secure link sharing

### ⏳ Self-Destructing Links
- One-time access links for shopkeepers
- File is auto-deleted after print

### 🔍 Anti-Forensic Printing
- Temporary files are securely overwritten post-print
- Prevents disk recovery and RAM dump attacks

### 📍 Nearby Secure Print Shop Detection
- Real-time location filtering to show only verified shops
- Unregistered shops can receive encrypted links via WhatsApp

### 🖥️ Shopkeeper Dashboard
- Dashboard for print shops to view file names and print (no preview or edit)
- Access-controlled environment for print request handling

---

## 🧰 Tech Stack

| Technology        | Purpose                                                             |
|------------------|---------------------------------------------------------------------|
| **JavaScript (Node.js)** | Custom backend APIs for encryption, routing, and file handling     |
| **TypeScript**          | Strongly-typed frontend development for enhanced reliability    |
| **MongoDB**             | Secure storage for encrypted documents and metadata             |
| **AES-256 Encryption**  | Strong symmetric encryption for file protection                 |
| **ECDH Key Exchange**   | Secure key sharing between users and printers                   |
| **Express.js**          | Backend framework for API development                           |
| **Socket.io**           | Real-time communication between clients and server              |
| **Twilio API (OCR)**    | Text extraction from images and documents (OCR integration)     |

---

## 💡 How It Works

1. **User Uploads Document**  
   - Document is encrypted on the client-side  
   - A one-time access link is generated

2. **Link Shared with Print Shop**  
   - Shop receives link via WhatsApp (no phone number shared)  
   - Shop can only view filename and hit “Print”

3. **Secure Printing & Destruction**  
   - Document is decrypted temporarily and printed  
   - All decrypted traces are erased instantly (anti-forensics)

---

## ✅ Benefits

- **Privacy First**: Files never leave the user's encrypted control  
- **No Storage on Print Shop Devices**  
- **Contactless, Frictionless Experience**  
- **Regulatory Compliance Friendly**  

---

