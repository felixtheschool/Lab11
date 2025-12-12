# Lab 10 - API Calls with JavaScript

## 📋 Overview
This lab demonstrates API interaction using JavaScript's `fetch()` and `XMLHttpRequest` (XHR) methods. The project implements GET, POST, PUT, and DELETE requests to interact with the JSONPlaceholder API.

## 🎯 Learning Objectives
- Make GET, POST, and PUT requests using `fetch()` and `XMLHttpRequest`
- Handle both successful responses and errors effectively
- Work with JSON data and dynamically update the DOM
- Implement dynamic error handling based on error types

## 🚀 Features

### ✅ Task 1: GET Request with fetch()
- Fetches post data from `/posts/1`
- Displays title and body dynamically
- Comprehensive error handling

### ✅ Task 2: GET Request with XMLHttpRequest
- Fetches post data from `/posts/2`
- Uses traditional XHR approach
- Error handling for network and HTTP errors

### ✅ Task 3: POST Request with fetch()
- Create new posts with custom title and body
- Form validation
- Success confirmation with response data

### ✅ Task 4: PUT Request with XMLHttpRequest
- Update existing posts by ID
- Uses XHR for PUT operations
- Displays updated post data

### 🎁 Bonus Feature: DELETE Request
- Delete posts by ID using fetch()
- Additional endpoint exploration
- Success confirmation

## 🛠️ Technologies Used
- HTML5
- CSS3 (Responsive Design)
- Vanilla JavaScript (ES6+)
- JSONPlaceholder API
- Fetch API
- XMLHttpRequest

## 📁 Project Structure
```
Lab10/
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive design
├── script.js       # JavaScript logic for API calls
└── README.md       # This file
```

## 🎨 Features Implemented

### Dynamic Error Handling
Errors are displayed differently based on type:
- **Network Error**: Connection issues
- **Not Found (404)**: Resource doesn't exist
- **Server Error (500)**: Server-side issues
- **Client Error (4xx)**: Invalid requests

### Enhanced UI/UX
- ✨ Gradient background design
- 📱 Fully responsive layout
- 🎯 Color-coded buttons for different actions
- ⏳ Loading indicators during API calls
- ✅ Success/error message animations
- 🎨 Beautiful post card displays

## 🌐 API Endpoints Used
- `GET` https://jsonplaceholder.typicode.com/posts/1
- `GET` https://jsonplaceholder.typicode.com/posts/2
- `POST` https://jsonplaceholder.typicode.com/posts
- `PUT` https://jsonplaceholder.typicode.com/posts/{id}
- `DELETE` https://jsonplaceholder.typicode.com/posts/{id}

## 💻 How to Use

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Lab10.git
   cd Lab10
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **Interact with the API**
   - Click "Fetch Data with fetch()" to get post #1
   - Click "Fetch Data with XHR" to get post #2
   - Fill out the POST form to create a new post
   - Fill out the PUT form to update an existing post (try ID 1-100)
   - Use the DELETE form to remove a post

## 📝 Implementation Details

### fetch() vs XMLHttpRequest
This project demonstrates both modern (`fetch()`) and traditional (`XMLHttpRequest`) approaches:

**fetch() - Used for:**
- Task 1 (GET)
- Task 3 (POST)
- Bonus (DELETE)

**XMLHttpRequest - Used for:**
- Task 2 (GET)
- Task 4 (PUT)

### Error Handling Strategy
Each API call includes:
1. Loading state indication
2. Response validation
3. JSON parsing with error handling
4. Network error detection
5. HTTP status code checking
6. User-friendly error messages

## 🎓 Learning Outcomes
After completing this lab, you'll understand:
- The difference between `fetch()` and `XMLHttpRequest`
- How to handle asynchronous operations with Promises
- Proper error handling strategies for API calls
- Working with JSON data
- Dynamic DOM manipulation
- Form handling and validation
- HTTP methods (GET, POST, PUT, DELETE)

## 📱 Responsive Design
The application is fully responsive and works on:
- 💻 Desktop computers
- 📱 Tablets
- 📱 Mobile phones

## 🐛 Error Handling Examples
The app handles various error scenarios:
- Network disconnection
- Invalid post IDs
- Server errors
- Malformed JSON responses
- Timeout issues

## 👨‍💻 Author
Abdul Moeed Hadi Syed
- Student ID: N01774009
- Course: CPAN 113
- Institution: Humber College

## 📅 Date
December 12, 2025

## 📄 License
This project is created for educational purposes as part of Lab 10 assignment.

## 🙏 Acknowledgments
- JSONPlaceholder for providing the free API
- Humber College CPAN 113 course materials
- MDN Web Docs for API documentation

---

**Note**: This is a demonstration project using the JSONPlaceholder fake API. POST, PUT, and DELETE requests will simulate success but won't actually modify the server data.
