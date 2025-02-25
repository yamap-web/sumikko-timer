'use client';
import { useEffect, useState } from 'react';
import { isPipSupported } from '@/hooks/usePictureInPicture';
import Alert from '@/components/elements/Alert';

export default function IsSupportedPipAlert() {
  const [message, setMessage] = useState('');

  // TODO: 環境変数に設定して管理する
  const browserCompatibility = 'Chrome 116~, Edge 116~, Opera 102~';
  const pointInTime = '2025年2月';

  const alertMessage = `このブラウザは Document Picture in Picture API をサポートしていません。${browserCompatibility}をお試しください。（${pointInTime}時点）`;

  const flg = isPipSupported();

  useEffect(() => {
    if (!flg) {
      setMessage(alertMessage);
    }
  }, [alertMessage, flg]);

  return <Alert theme="warning" message={message} setMessage={setMessage} />;
}
