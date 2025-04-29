"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import anime from 'animejs';
import { Check, Copy } from 'lucide-react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Typed from 'typed.js';

const DEI = () => {

  return (

    <>
     <Image
            src="/images/whoswho.png"
            width={150}
            height={150}
            alt="whoswho"
          />
    </>

  );
};

export default DEI;
