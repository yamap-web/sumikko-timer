import type { Dispatch, SetStateAction } from 'react';

interface AlertProps {
  theme?: 'success' | 'warning';
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

function Alert({ theme, message, setMessage }: AlertProps) {
  const alertObject = {
    color: 'alert-info',
    icon: <InfoIcon />,
  };

  switch (theme) {
    case 'success':
      alertObject.color = 'alert-success';
      alertObject.icon = <SuccessIcon />;
      break;
    case 'warning':
      alertObject.color = 'alert-warning';
      alertObject.icon = <WarningIcon />;
      break;
  }

  if (message === '') {
    return null;
  } else {
    return (
      <div className="fixed left-1/2 z-50 w-full max-w-max -translate-x-1/2 p-4">
        <div className={`alert shadow-md ${alertObject.color}`} role="alert">
          {alertObject.icon}
          <span>{message}</span>
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => setMessage('')}
          >
            ✕
          </button>
        </div>
      </div>
    );
  }
}

function SuccessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg
      className="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 stroke-current"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
}

export default Alert;
