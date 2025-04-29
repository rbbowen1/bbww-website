import { ReactNode } from "react";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import { ExternalLinkIcon } from "@radix-ui/react-icons";
// @ts-ignore
import { cn } from "@/lib/utils/classes";
// @ts-ignore
import { buttonVariants } from "@/components/buttons";
// @ts-ignore
import Script from 'next/script';
// @ts-ignore
import Head from 'next/head';

export default function Submitform({

  children,
}: {

  children: ReactNode;
}) {
  return (
    <>
          <Head>
        <script
          id="script"
          type="text/javascript"
          data-key="IehzsXNmx0ekLsE6scWo-Q"
          data-form="1"
          src="https://www.cognitoforms.com/f/seamless.js"
          async
        />
      </Head>
      <div>{children}</div>

    </>



  );
}