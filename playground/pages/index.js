import Head from "next/head";
import { Editor } from "@/components";
import { initialBlocks } from "@/constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>Craftpage Playground</title>
        <meta name="description" content="Craftpage playground project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Editor blocks={initialBlocks} />
    </>
  );
}
