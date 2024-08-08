document.addEventListener('DOMContentLoaded', () => {
    fetch('/assets/posts.json')
        .then(response => {
            // Log the raw response text
            response.text().then(text => {
                console.log('Response text:', text);

                // Try parsing the text as JSON
                try {
                    const data = JSON.parse(text);

                    const postsContainer = document.getElementById('posts-container');
                    const summary = document.getElementById('postsSummary');
                    let postsCount = 0;

                    // Sort posts by timestamp (newest first)
                    data.posts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

                    // For each post...
                    data.posts.forEach(post => {
                        // ...create a div with the post
                        const postElement = document.createElement('div');
                        postElement.className = 'post';

                        if (post.buttonLink && post.buttonText != undefined) {
                            postElement.innerHTML = `
                            <h2 class="postTitle">${post.title}</h2>
                            <a class="postLink" href="${post.buttonLink}">${post.buttonText}</a>
                            <p class="postContent">${post.content}</p>
                            <p class="postDate">${new Date(post.timestamp).toLocaleString()}</p>
                            `;
                        } else {
                            postElement.innerHTML = `
                            <h2 class="postTitle">${post.title}</h2>
                            <p class="postContent">${post.content}</p>
                            <p class="postDate">${new Date(post.timestamp).toLocaleString()}</p>
                            `;
                        }
                        
                        postsContainer.appendChild(postElement);
                        postsCount++;
                    });

                    summary.textContent = `Loaded ${postsCount} posts.`;
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                    summary.textContent = `Error parsing JSON: ${error}`;
                }
            });
        })
        .catch(error => {
            const summary = document.getElementById('postsSummary');
            console.error('Error fetching posts:', error);
            summary.textContent = `Error fetching posts: ${error}`;
        });
});
