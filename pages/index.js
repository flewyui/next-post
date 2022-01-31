import Link from 'next/link';
import Head from 'next/head';
const products = [{ name: 'bag' }, { name: 'shoes' }, { name: 'socks' },]

export default function Home() {
  // （環境変数をブラウザ側で取得する場合）
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const api_key = process.env.NEXT_PUBLIC_API_KEY;
  //   }
  // }, [])

  return (
    <div>
      <Head>
        <title>{products[0].name}</title>
        <meta name="description" content={`${products[0].name}のページ`} />
        <meta property="og:title" content={products[0].name} />
        <meta property="og:description" content={`${products[0].name}のページ`} />
      </Head>
      <h1 className='text-3xl'>Hello Next.js</h1>
      <Content />
      <ul>
        {products.map(product => {
          return (
            <li key={product.name}>
              <Link href={`/products/${product.name}`}>
                <a>{product.name}</a>
              </Link>
            </li>
          )
        })}
        <li>
          <Link href='/about'>
            <a>about</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

// （環境変数をサーバー側で取得する場合）
// export async function getServerSideProps() {
//   const api_key = process.env.API_KEY;
//   const result = await fetch(`https://end_point_url/?api_key=${api_key}`)
//   console.log(result)
//   return { props: { result } }
// }

export const Content = () => {
  return (
    <div>
      <p>このコンポーネント内のみスタイルが適用されます。</p>
      <style jsx>
        {`
          p {
            color: blue;
          }
        `}
      </style>
    </div>
  )
}