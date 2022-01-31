import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='ja'>
                <Head>
                    <body>
                        <Main />
                        <div id='portal'></div>
                        <NextScript />
                    </body>
                </Head>
            </Html>
        )
    }
}

export default MyDocument;