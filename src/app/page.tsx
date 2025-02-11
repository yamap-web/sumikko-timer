'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function Home() {
  const [pipWindow, setPiPWindow] = useState<Window | null>(null);

  async function openPiP() {
    if (typeof window === 'undefined') return;
    if (!('documentPictureInPicture' in window)) {
      alert(
        'このブラウザは Document Picture in Picture API をサポートしていません。'
      );
      return;
    }

    const pw = await window.documentPictureInPicture?.requestWindow({
      disallowReturnToOpener: false,
      height: 300,
      preferInitialWindowPlacement: false,
      width: 300,
    });

    if (!pw) return;
    setPiPWindow(pw);

    pw.addEventListener('pagehide', () => {
      setPiPWindow(null);
    });

    Array.from(document.styleSheets).forEach((styleSheet) => {
      try {
        const cssRules = Array.from(styleSheet.cssRules)
          .map((rule) => rule.cssText)
          .join('');
        const style = document.createElement('style');

        style.textContent = cssRules;
        pw.document.head.appendChild(style);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {
        const link = document.createElement('link');

        if (styleSheet.href == null) return;

        link.rel = 'stylesheet';
        link.type = styleSheet.type;
        link.media = styleSheet.media.toString();
        link.href = styleSheet.href;
        pw.document.head.appendChild(link);
      }
    });
  }

  function closePiP() {
    pipWindow?.close();
    setPiPWindow(null);
  }

  return (
    <div className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <h1 className="font-bold text-5xl mb-4">すみっこタイマー</h1>
        <div className="flex space-x-2">
          <button className="btn btn-primary" onClick={openPiP}>
            Open
          </button>
          <button className="btn btn-secondary" onClick={closePiP}>
            Close
          </button>
        </div>
        {pipWindow &&
          createPortal(
            <div>
              <p>タイマー</p>
              <button className="btn btn-primary">ボタン</button>
            </div>,
            pipWindow.document.body
          )}
      </main>
    </div>
  );
}
