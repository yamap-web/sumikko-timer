type RequestWindowOptions = {
  disallowReturnToOpener?: boolean;
  height?: number;
  preferInitialWindowPlacement?: boolean;
  width?: number;
};

type DocumentPictureInPicture = {
  requestWindow: (options: RequestWindowOptions) => Promise<Window>;
};

interface Window {
  documentPictureInPicture?: DocumentPictureInPicture;
}
