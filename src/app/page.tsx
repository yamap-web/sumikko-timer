'use client';

import PictureInPictureWindow, {
  usePictureInPicture,
} from '@/hooks/usePictureInPicture';

export default function Home() {
  const { handleOpenPipWindow, handleClosePipWindow, pipWindow } =
    usePictureInPicture({
      width: 300,
      height: 300,
    });

  return (
    <div className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <h1 className="font-bold text-5xl mb-4">すみっこタイマー</h1>
        <div className="flex space-x-2">
          <button className="btn btn-primary" onClick={handleOpenPipWindow}>
            Open
          </button>
          <button className="btn btn-secondary" onClick={handleClosePipWindow}>
            Close
          </button>
        </div>
        {pipWindow ? (
          <PictureInPictureWindow pipWindow={pipWindow}>
            <div>
              <p>タイマー</p>
            </div>
          </PictureInPictureWindow>
        ) : (
          <div>
            <p>タイマー</p>
          </div>
        )}
      </main>
    </div>
  );
}
