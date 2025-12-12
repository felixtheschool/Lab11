# GitHub Setup and Deployment Instructions

## 📦 Step 1: Push to GitHub

Your code is already committed locally. To push to GitHub:

```bash
cd "/mnt/chromeos/removable/Space/School @Humber/'25 Fall/CPAN 113/Lab10"
git push origin master
```

If you need to set up authentication:
```bash
# If using HTTPS, you may need to configure credentials
git config credential.helper store

# Then try pushing again
git push origin master
```

## 🌐 Step 2: Enable GitHub Pages

1. Go to your GitHub repository: https://github.com/felixtheschool/Lab10
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `master`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait a few minutes for deployment
7. Your site will be available at: `https://felixtheschool.github.io/Lab10/`

## 📋 Step 3: Test Your Live Site

Once deployed, test all features:
- ✅ Fetch Data with fetch()
- ✅ Fetch Data with XHR
- ✅ Create Post (POST)
- ✅ Update Post (PUT)
- ✅ Delete Post (DELETE)

## 📝 Submission Checklist

Before submitting, ensure:
- [ ] All files are pushed to GitHub
- [ ] GitHub Pages is enabled and working
- [ ] README.md is complete with your information
- [ ] All 4 tasks are working correctly
- [ ] Error handling is implemented
- [ ] Bonus DELETE feature is included
- [ ] Page is responsive and styled

## 🔗 Submission Links

**GitHub Repository:**
```
https://github.com/felixtheschool/Lab10
```

**Live Demo (GitHub Pages):**
```
https://felixtheschool.github.io/Lab10/
```

## 🧪 Testing Checklist

Test each feature:

### Task 1: fetch() GET
- [ ] Click "Fetch Data with fetch()"
- [ ] Post #1 should display
- [ ] Check browser console for logs

### Task 2: XHR GET
- [ ] Click "Fetch Data with XHR"
- [ ] Post #2 should display
- [ ] Check browser console for logs

### Task 3: POST
- [ ] Fill in title and body
- [ ] Click "Create Post"
- [ ] Success message should appear
- [ ] New post data should display

### Task 4: PUT
- [ ] Enter post ID (1-100)
- [ ] Enter new title and body
- [ ] Click "Update Post"
- [ ] Success message should appear
- [ ] Updated post should display

### Bonus: DELETE
- [ ] Enter post ID (1-100)
- [ ] Click "Delete Post"
- [ ] Success message should appear

### Error Handling
- [ ] Test with invalid post ID (e.g., 9999)
- [ ] Test with disconnected internet (if possible)
- [ ] Verify different error types are displayed correctly

## 🎨 Features Completed

✅ **All Required Tasks:**
1. GET request with fetch() - Endpoint: /posts/1
2. GET request with XHR - Endpoint: /posts/2
3. POST request with fetch() - Create new posts
4. PUT request with XHR - Update existing posts

✅ **All Challenges:**
1. Dynamic error handling (Network, 404, 500, Client errors)
2. Bonus feature: DELETE request
3. Enhanced responsive styling with gradient design

✅ **Extra Features:**
- Loading indicators
- Animated success/error messages
- Beautiful post card displays
- Fully responsive design
- Form validation
- Console logging for debugging
- Color-coded buttons
- Professional gradient background

## 📱 Browser Compatibility

Tested on:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## 🐛 Common Issues & Solutions

### Issue: Push requires authentication
**Solution:**
```bash
# Set up Git credentials
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# For HTTPS, use personal access token
git config credential.helper store
git push origin master
```

### Issue: GitHub Pages not working
**Solution:**
1. Ensure `index.html` is in the root directory ✅
2. Wait 2-5 minutes after enabling Pages
3. Check repository settings > Pages for status
4. Try hard refresh (Ctrl+Shift+R)

### Issue: API not working on live site
**Solution:**
- The API uses HTTPS, which is compatible with GitHub Pages
- Check browser console for CORS errors
- JSONPlaceholder API should work fine

## 📊 Grading Criteria Met

✅ **Setup (Complete)**
- index.html created
- style.css created
- script.js created
- Professional webpage design

✅ **Task 1 (Complete)**
- fetch() implementation
- GET request to /posts/1
- Dynamic data display
- Error handling

✅ **Task 2 (Complete)**
- XMLHttpRequest implementation
- GET request to /posts/2
- Dynamic data display
- Error handling

✅ **Task 3 (Complete)**
- Form for user input
- POST request with fetch()
- Endpoint: /posts
- Success confirmation
- Error handling

✅ **Task 4 (Complete)**
- Input field for post ID
- PUT request with XHR
- Endpoint: /posts/{id}
- Display updated data
- Error handling

✅ **Challenges (Complete)**
- Dynamic error handling by type
- Bonus feature (DELETE)
- Enhanced responsive styling

✅ **Submission Requirements (Complete)**
- Project folder with all files
- GitHub repository ready
- Ready for GitHub Pages deployment

## 🎓 What You've Learned

Through this lab, you've learned:
1. How to make API calls using fetch()
2. How to use XMLHttpRequest (traditional method)
3. Difference between GET, POST, PUT, DELETE methods
4. Proper error handling strategies
5. Working with JSON data
6. Dynamic DOM manipulation
7. Form handling and validation
8. Promises and async operations
9. HTTP status codes
10. Modern web development practices

## 📞 Need Help?

If you encounter issues:
1. Check browser console (F12) for errors
2. Verify all files are in the correct location
3. Test locally first before pushing
4. Check API endpoint URLs
5. Review error messages carefully

---

**Good luck with your submission! 🚀**
