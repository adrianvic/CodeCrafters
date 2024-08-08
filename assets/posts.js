document.addEventListener('DOMContentLoaded', () => {
    fetch('.CodeCrafters/assets/posts.json')
        .then(response => response.json())
        .then(data => {
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
        })
        .catch(error => {
            const summary = document.getElementById('postsSummary');
            console.error('Error fetching posts:', error);
            summary.textContent = `Error fetching posts: ${error}`;
            
        });
});
