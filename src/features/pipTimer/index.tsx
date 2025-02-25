'use client';
import { useState, useEffect, useRef } from 'react';
import { usePictureInPicture } from '@/hooks/usePictureInPicture';
import { AutoPipStartToggle } from './components/AutoPipStartToggle';
import { PipTimerView } from './components/PipTimerView';
import { OpenPipButton } from './components/OpenPipButton';

export default function PipTimerLayout() {
  const [autoPip, setAutoPip] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { isSupported, handleOpenPipWindow, handleClosePipWindow, pipWindow } =
    usePictureInPicture({ containerRef });

  useEffect(() => {
    if (isSupported) {
      setAutoPip(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AutoPipStartToggle autoPip={autoPip} setAutoPip={setAutoPip} />
      <PipTimerView
        autoPip={autoPip}
        containerRef={containerRef}
        pipWindow={pipWindow}
        handleOpenPipWindow={handleOpenPipWindow}
      />
      <OpenPipButton
        pipWindow={pipWindow}
        handleOpenPipWindow={handleOpenPipWindow}
        handleClosePipWindow={handleClosePipWindow}
      />
    </>
  );
}
