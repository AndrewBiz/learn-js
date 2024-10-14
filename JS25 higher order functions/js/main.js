import { posts } from "./posts.js";
// posts.forEach(post => {
//     console.log(post);
// })

const filteredPosts = posts.filter((post) => {
    return post.userId === 1;
})

console.log(filteredPosts)


const mappedPosts = filteredPosts.map((post) => {
    return 111 * post.id;
})
console.log(mappedPosts)

const sumPosts = mappedPosts.reduce((sum, post) => {
    return sum + post
})

console.log(sumPosts)