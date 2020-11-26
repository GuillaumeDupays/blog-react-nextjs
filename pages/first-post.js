import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Premier post</title>
            </Head>
            <h1>Premier post</h1>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </Layout>
    )
}