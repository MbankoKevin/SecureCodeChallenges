 Secure Code Review Challenge

A hands-on learning environment for AppSec, DevSecOps, and secure coding

📌 Overview

This project is an intentionally vulnerable Node.js application designed for secure code review practice, AppSec training, and DevSecOps learning.

You will analyze real insecure patterns, identify vulnerabilities, and propose secure fixes just like a real-world assessment.

The challenge includes vulnerabilities such as:

❌ SQL Injection

❌ Stored XSS

❌ Insecure query building

❌ Missing validation & sanitization

❌ Poor handling of user input

❌ Lack of output encoding

🎯 Objectives

By completing this challenge, you will:<br>

✔ Develop your secure code review skills<br>
✔ Identify common vulnerabilities in backend code<br>
✔ Understand how insecure patterns translate into real exploits<br>
✔ Practice writing remediation recommendations<br>
✔ Strengthen your DevSecOps mindset (“security early”)<br>

🛠 Tech Stack

Node.js + Express

SQLite (better-sqlite3)

Simple REST API

Raw, intentionally vulnerable logic

📂 Project Structure

**insecure-blog-api/ <br>
│<br>
├── app.js          # Main vulnerable Node.js application<br>
├── blog.db         # Auto-generated SQLite database<br>
├── package.json<br>
└── README.md**


🚀 Getting Started
1️⃣ Install Requirements

Make sure you have Node.js installed:

node -v
npm -v


2️⃣ Clone the Repository
git clone <your-repo-url>
cd insecure-blog-api


3️⃣ Install Dependencies
npm install


4️⃣ Run the Application
node app.js


If successful, the app runs at:
http://localhost:3000



📝 Challenge Tasks
1. Identify All Vulnerabilities

Review app.js and list every issue you find:

insecure patterns

missing checks

logic flaws

bad error handling

poor validation

2. Explain the Impact

For each vulnerability:

What can an attacker do?

What data or systems are at risk?

3. Write Remediation Recommendations

Provide secure alternatives such as:

parameterized queries

input validation

output encoding

prepared statements

validation middleware

4. (Optional) Create the Secure Version

Rewrite the app using:

safe query builders

validation packages (e.g., Joi, Zod)

sanitization

proper error handling



⚠️ Disclaimer

This application is intentionally vulnerable.
Do NOT deploy it on a public server.
Use only in isolated environments for learning and training.

⭐ Contribute

Want to add new vulnerabilities, challenges, or secure fixes?
Pull requests are welcome!

📣 Share Your Results

Post your findings, report, or fixes and tag:

#AppSec #DevSecOps #SecureCoding #CyberSecurity
