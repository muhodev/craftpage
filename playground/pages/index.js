import Head from "next/head";
import { Editor } from "@/components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Craftpage Playground</title>
        <meta name="description" content="Craftpage playground project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Editor />
    </div>
  );
}
