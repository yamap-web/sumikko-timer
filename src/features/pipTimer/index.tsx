'use client';
import { useState, useEffect, useRef } from 'react';
import {
  usePictureInPicture,
  isPipSupported,
} from '@/hooks/usePictureInPicture';
import { AutoPipStartToggle } from './components/AutoPipStartToggle';
import { PipTimerView } from './components/PipTimerView';
import { OpenPipButton } from './components/OpenPipButton';

export default function PipTimerLayout() {
  const [autoPip, setAutoPip] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { handleOpenPipWindow, handleClosePipWindow, pipWindow } =
    usePictureInPicture({ containerRef, height: 280, width: 400 });

  useEffect(() => {
    if (isPipSupported()) {
      setAutoPip(true);
    }
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
