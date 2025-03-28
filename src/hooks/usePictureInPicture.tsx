import { useState } from 'react';
import type { RefObject } from 'react';
import { createPortal } from 'react-dom';

type UsePictureInPictureProps = {
  containerRef: RefObject<HTMLDivElement | null>;
  height?: number;
  width?: number;
};

export function usePictureInPicture({
  containerRef,
  height,
  width,
}: UsePictureInPictureProps) {
  const [pipWindow, setPipWindow] = useState<Window | null>(null);

  async function handleOpenPipWindow() {
    if (!isPipSupported()) {
      return;
    }

    const newPipWindow = await window.documentPictureInPicture?.requestWindow({
      disallowReturnToOpener: false,
      height: height ? height : containerRef.current?.clientHeight,
      preferInitialWindowPlacement: true,
      width: width ? width : containerRef.current?.clientWidth,
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

    newPipWindow.document.documentElement.className =
      document.documentElement.className + '@container';
    newPipWindow.document.body.className = document.body.className;
    newPipWindow.document.documentElement.dataset.theme =
      document.documentElement.dataset.theme;
  }

  function handleClosePipWindow() {
    pipWindow?.close();
    setPipWindow(null);
  }

  return { handleOpenPipWindow, handleClosePipWindow, pipWindow };
}

export function isPipSupported() {
  const supportedFlg =
    typeof window !== 'undefined' && 'documentPictureInPicture' in window;
  return supportedFlg;
}

type PictureInPictureWindowProps = {
  pipWindow: Window | null;
  children: React.ReactNode;
};

// Picture in Picture Windowの状態変数と子要素を受け取って、ウィンドウが開かれている場合は子要素をポータルで描画するが、開かれていない場合はそのまま子要素を描画する
export default function PictureInPictureWindow({
  pipWindow,
  children,
}: PictureInPictureWindowProps) {
  return pipWindow ? (
    createPortal(children, pipWindow.document.body)
  ) : (
    <>{children}</>
  );
}
