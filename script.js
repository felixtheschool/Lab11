// ==========================
// Lab 10: API Calls with JavaScript
// ==========================

// API Base URL
const API_URL = 'https://jsonplaceholder.typicode.com';

// ==========================
// Helper Functions
// ==========================

/**
 * Display a post in a formatted card
 * @param {object} post - Post object with id, title, and body
 * @param {HTMLElement} resultDiv - The div to display results in
 */
function displayPost(post, resultDiv) {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';
    postCard.innerHTML = `
        <span class="post-id">ID: ${post.id}</span>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
    resultDiv.innerHTML = '';
    resultDiv.appendChild(postCard);
}

/**
 * Display a success message
 * @param {string} message - Success message to display
 * @param {HTMLElement} resultDiv - The div to display the message in
 */
function displaySuccess(message, resultDiv) {
    resultDiv.innerHTML = `<div class="success-message">${message}</div>`;
}

/**
 * Display an error message with dynamic error type
 * @param {Error} error - The error object
 * @param {HTMLElement} resultDiv - The div to display the error in
 */
function displayError(error, resultDiv) {
    let errorType = 'Error';
    let errorMessage = error.message;

    // Determine error type for better user feedback
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
        errorType = 'Network Error';
        errorMessage = 'Unable to connect to the server. Please check your internet connection.';
    } else if (error.status === 404) {
        errorType = 'Not Found';
        errorMessage = 'The requested resource was not found.';
    } else if (error.status === 500) {
        errorType = 'Server Error';
        errorMessage = 'The server encountered an error. Please try again later.';
    } else if (error.status >= 400 && error.status < 500) {
        errorType = 'Client Error';
        errorMessage = 'Invalid request. Please check your input.';
    }

    resultDiv.innerHTML = `
        <div class="error-message">
            <span class="error-type">${errorType}:</span>
            ${errorMessage}
        </div>
    `;
}

/**
 * Show loading indicator
 * @param {HTMLElement} resultDiv - The div to show loading in
 */
function showLoading(resultDiv) {
    resultDiv.innerHTML = '<div style="text-align: center; color: #667eea;">Loading<span class="loading"></span></div>';
}

// ==========================
// Task 1: GET Request with fetch()
// ==========================

/**
 * Fetch data using the Fetch API
 */
function fetchWithFetch() {
    const resultDiv = document.getElementById('getResults');
    showLoading(resultDiv);

    fetch(`${API_URL}/posts/1`)
        .then(response => {
            // Check if response is ok (status 200-299)
            if (!response.ok) {
                const error = new Error(`HTTP error! Status: ${response.status}`);
                error.status = response.status;
                throw error;
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetch API - Data received:', data);
            displayPost(data, resultDiv);
        })
        .catch(error => {
            console.error('Fetch API - Error:', error);
            displayError(error, resultDiv);
        });
}

// ==========================
// Task 2: GET Request with XMLHttpRequest
// ==========================

/**
 * Fetch data using XMLHttpRequest
 */
function fetchWithXHR() {
    const resultDiv = document.getElementById('getResults');
    showLoading(resultDiv);

    const xhr = new XMLHttpRequest();
    
    // Configure the request
    xhr.open('GET', `${API_URL}/posts/2`, true);
    
    // Set up event handlers
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const data = JSON.parse(xhr.responseText);
                console.log('XHR - Data received:', data);
                displayPost(data, resultDiv);
            } catch (error) {
                console.error('XHR - JSON Parse Error:', error);
                displayError(error, resultDiv);
            }
        } else {
            const error = new Error(`HTTP error! Status: ${xhr.status}`);
            error.status = xhr.status;
            console.error('XHR - HTTP Error:', error);
            displayError(error, resultDiv);
        }
    };

    xhr.onerror = function() {
        const error = new Error('Network request failed');
        error.name = 'TypeError';
        console.error('XHR - Network Error:', error);
        displayError(error, resultDiv);
    };

    // Send the request
    xhr.send();
}

// ==========================
// Task 3: POST Request with fetch()
// ==========================

/**
 * Create a new post using the Fetch API
 * @param {Event} event - Form submit event
 */
function createPost(event) {
    event.preventDefault();
    
    const resultDiv = document.getElementById('postResults');
    const form = event.target;
    
    // Get form data
    const postData = {
        title: form.title.value,
        body: form.body.value,
        userId: 1 // Required by the API
    };

    showLoading(resultDiv);

    fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
    })
        .then(response => {
            if (!response.ok) {
                const error = new Error(`HTTP error! Status: ${response.status}`);
                error.status = response.status;
                throw error;
            }
            return response.json();
        })
        .then(data => {
            console.log('POST - Success:', data);
            displayPost(data, resultDiv);
            displaySuccess('✅ Post created successfully!', resultDiv);
            // Append the created post data
            const postCard = document.createElement('div');
            postCard.className = 'post-card';
            postCard.innerHTML = `
                <span class="post-id">Created ID: ${data.id}</span>
                <h3>${data.title}</h3>
                <p>${data.body}</p>
            `;
            resultDiv.appendChild(postCard);
            
            // Reset form
            form.reset();
        })
        .catch(error => {
            console.error('POST - Error:', error);
            displayError(error, resultDiv);
        });
}

// ==========================
// Task 4: PUT Request with XMLHttpRequest
// ==========================

/**
 * Update a post using XMLHttpRequest
 * @param {Event} event - Form submit event
 */
function updatePost(event) {
    event.preventDefault();
    
    const resultDiv = document.getElementById('putResults');
    const form = event.target;
    
    // Get form data
    const postId = form.id.value;
    const updateData = {
        id: parseInt(postId),
        title: form.title.value,
        body: form.body.value,
        userId: 1
    };

    showLoading(resultDiv);

    const xhr = new XMLHttpRequest();
    xhr.open('PUT', `${API_URL}/posts/${postId}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const data = JSON.parse(xhr.responseText);
                console.log('PUT - Success:', data);
                displaySuccess('✅ Post updated successfully!', resultDiv);
                
                // Display the updated post
                const postCard = document.createElement('div');
                postCard.className = 'post-card';
                postCard.innerHTML = `
                    <span class="post-id">Updated ID: ${data.id}</span>
                    <h3>${data.title}</h3>
                    <p>${data.body}</p>
                `;
                resultDiv.appendChild(postCard);
                
                // Reset form
                form.reset();
            } catch (error) {
                console.error('PUT - JSON Parse Error:', error);
                displayError(error, resultDiv);
            }
        } else {
            const error = new Error(`HTTP error! Status: ${xhr.status}`);
            error.status = xhr.status;
            console.error('PUT - HTTP Error:', error);
            displayError(error, resultDiv);
        }
    };

    xhr.onerror = function() {
        const error = new Error('Network request failed');
        error.name = 'TypeError';
        console.error('PUT - Network Error:', error);
        displayError(error, resultDiv);
    };

    xhr.send(JSON.stringify(updateData));
}

// ==========================
// Bonus: DELETE Request
// ==========================

/**
 * Delete a post using the Fetch API
 * @param {Event} event - Form submit event
 */
function deletePost(event) {
    event.preventDefault();
    
    const resultDiv = document.getElementById('deleteResults');
    const form = event.target;
    const postId = form.id.value;

    showLoading(resultDiv);

    fetch(`${API_URL}/posts/${postId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                const error = new Error(`HTTP error! Status: ${response.status}`);
                error.status = response.status;
                throw error;
            }
            return response.json();
        })
        .then(data => {
            console.log('DELETE - Success:', data);
            displaySuccess(`✅ Post with ID ${postId} has been deleted successfully!`, resultDiv);
            form.reset();
        })
        .catch(error => {
            console.error('DELETE - Error:', error);
            displayError(error, resultDiv);
        });
}

// ==========================
// Event Listeners
// ==========================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Fetch with fetch()
    document.getElementById('fetchButton').addEventListener('click', fetchWithFetch);
    
    // Task 2: Fetch with XHR
    document.getElementById('xhrButton').addEventListener('click', fetchWithXHR);
    
    // Task 3: POST request
    document.getElementById('postForm').addEventListener('submit', createPost);
    
    // Task 4: PUT request
    document.getElementById('putForm').addEventListener('submit', updatePost);
    
    // Bonus: DELETE request
    document.getElementById('deleteForm').addEventListener('submit', deletePost);
    
    console.log('API Interaction Lab initialized successfully!');
});
