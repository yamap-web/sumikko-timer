type OpenPipButtonProps = {
  pipWindow: Window | null;
  handleOpenPipWindow: () => Promise<void>;
  handleClosePipWindow: () => void;
};

export function OpenPipButton({
  pipWindow,
  handleOpenPipWindow,
  handleClosePipWindow,
}: OpenPipButtonProps) {
  return (
    <div className="flex justify-center sm:border border-dashed rounded-lg my-3">
      <button
        className="btn btn-link px-2"
        onClick={pipWindow ? handleClosePipWindow : handleOpenPipWindow}
      >
        {pipWindow ? 'もどって来ていいよ!' : '画面のすみっこへGo!'}
        {pipWindow ? '' : <ArrowRightIcon />}
      </button>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  );
}
