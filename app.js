// Function to show a specific page by ID
function showPage(pageId) {
    document.querySelectorAll('.container > div').forEach(div => {
        div.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
};

// Show sign-up page when the sign-up button is clicked
document.getElementById('signupButton').addEventListener('click', function () {
    showPage('signupPage');
});

// Handle sign-up form submission
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // You can add validation or actual signup logic here
    showPage('postPage');
});

// Handle post form submission
document.getElementById('postForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let postContent = document.getElementById('postContent').value;
    let postImage = document.getElementById('postImage').files[0];
    let postsContainer = document.getElementById('postsContainer');

    if (postContent.trim() === '' && !postImage) return;

    let postElement = document.createElement('div');
    postElement.classList.add('post');

    let textElement = document.createElement('p');
    textElement.textContent = postContent;
    postElement.appendChild(textElement);

    if (postImage) {
        let imgElement = document.createElement('img');
        imgElement.src = URL.createObjectURL(postImage);
        imgElement.alt = 'Post Image';
        postElement.appendChild(imgElement);
    }

    postsContainer.appendChild(postElement);

    document.getElementById('postContent').value = ''; // Clear the textarea
    document.getElementById('postImage').value = ''; // Clear the file input
});


// Initially show the home page
showPage('homePage');