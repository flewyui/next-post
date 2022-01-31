const Post = ({ post }) => {
    return (
        <div>
            <h1>POST(投稿) No.{post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default Post;

// （リクエスト毎にサーバー側でデータを取得）
// export async function getServerSideProps({ params }) {
//     const id = params.post
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     const post = await res.json()
//     if (!Object.keys(post).length) {
//         return {
//             notFound: true,
//         }
//     }
//     // console.log(params) => expected output: {post: 1} or {post: 7} or（まぁパラメータですね。）
//     // その他引数に「context」,「req」,「res」なども持たせられる
//     return { props: { post } }
// }

// （ビルド時にデータを取得）
export async function getStaticProps({ params }) {
    const id = params.post
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    return { props: { post } }
}

// （ビルド時に作成するページのパス一覧を「paths」としてreturnする関数）
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    const paths = posts.map(post => `/posts/${post.id}`)
    return {
        paths,
        fallback: false,
    }
}