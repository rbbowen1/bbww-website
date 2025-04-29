"use client";

import { useEffect } from "react";

export default function CognitoFormEmbed({ src }: { src: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.cognitoforms.com/f/IehzsXNmx0ekLsE6scWo-Q/1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src={src}
      allow="payment"
      style={{ border: 0, width: "100%", }}
      height={512}
    />
  );
}


{/* <iframe src="https://www.cognitoforms.com/f/IehzsXNmx0ekLsE6scWo-Q/1" allow="payment" style="border:0;width:100%;" height="512"></iframe>
<script src="https://www.cognitoforms.com/f/iframe.js"></script> */}