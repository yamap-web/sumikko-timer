import { useState } from 'react';
import { createPortal } from 'react-dom';

export function usePictureInPicture({ width = 300, height = 300 }) {
  const [pipWindow, setPipWindow] = useState<Window | null>(null);
  const isSupported =
    typeof window !== 'undefined' && 'documentPictureInPicture' in window;

  async function handleOpenPipWindow() {
    if (!isSupported) {
      alert(
        'このブラウザは Document Picture in Picture API をサポートしていません。'
      );
      return;
    }

    const newPipWindow = await window.documentPictureInPicture?.requestWindow({
      disallowReturnToOpener: false,
      height: height,
      preferInitialWindowPlacement: false,
      width: width,
    });

    if (!newPipWindow) return;
    setPipWindow(newPipWindow);

    newPipWindow.addEventListener('pagehide', () => {
      setPipWindow(null);
    });

    Array.from(document.styleSheets).forEach((styleSheet) => {
      try {
        const cssRules = Array.from(styleSheet.cssRules)
          .map((rule) => rule.cssText)
          .join('');
        const styleElm = document.createElement('style');

        styleElm.textContent = cssRules;
        newPipWindow.document.head.appendChild(styleElm);
      } catch {
        const linkElm = document.createElement('link');

        if (styleSheet.href == null) return;

        linkElm.rel = 'stylesheet';
        linkElm.type = styleSheet.type;
        linkElm.media = styleSheet.media.toString();
        linkElm.href = styleSheet.href;
        newPipWindow.document.head.appendChild(linkElm);
      }
    });
  }

  function handleClosePipWindow() {
    pipWindow?.close();
    setPipWindow(null);
  }

  return { handleOpenPipWindow, handleClosePipWindow, pipWindow };
}

type PictureInPictureWindowProps = {
  pipWindow: Window;
  children: React.ReactNode;
};

export default function PictureInPictureWindow({
  pipWindow,
  children,
}: PictureInPictureWindowProps) {
  return createPortal(children, pipWindow.document.body);
}
