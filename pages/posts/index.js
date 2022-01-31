import Link from 'next/link';

const index = ({ posts }) => {
    return (
        <div>
            <h1>POST一覧</h1>
            <ul>
                {posts.map(post => {
                    return (
                        <Link key={post.id} href={`/posts/${post.id}`}>
                            <li>
                                <p>title: {post.title} <br /></p>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default index;

// （リクエスト毎にサーバー側でデータを取得）
// export async function getServerSideProps() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const posts = await res.json()
//     return { props: { posts } }
// }

// （ビルド時にデータを取得）
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return { props: { posts } }
}