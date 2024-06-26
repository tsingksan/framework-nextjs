"use client";
import React from "react";
import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import Image from "next/image";

import "./style.linaria.global.js";

const description = css`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  z-index: var(--layer-1);
  font-family: var(--font-mono);
`;

interface MainProperties extends React.HTMLAttributes<HTMLElement> {
  primary?: boolean;
}

interface MainComponentProperties extends React.HTMLAttributes<HTMLElement>, MainProperties {}

const Main: React.FC<MainComponentProperties> = ({ children, primary, ...restProperties }) => {
  const Main = styled.main<MainProperties>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    min-height: 100vh;
    background-color: var(--colors-primary);
    color: ${(properties) => (properties.primary ? "tomato" : "black")};
  `;

  return (
    <Main primary={primary} {...restProperties}>
      {children}
    </Main>
  );
};

export default function Home() {
  return (
    <Main>
      <div className={description}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={"vercelLogo"}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className={"center"}>
        <Image
          className={"logo"}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={"grid"}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={"card"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={"card"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={"card"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={"card"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
        </a>
      </div>
    </Main>
  );
}
