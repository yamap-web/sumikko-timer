import { Modal } from '@/components/elements';

export function NotificationModal() {
  const releaseNotes = [
    {
      id: 1,
      title: '「自動すみっこスタート機能」をリリースしました',
      description:
        'タイマーのスタートと同時にすみっこに移動してくれるようになります！',
    },
  ];

  const isNoReleaseNotes = releaseNotes.length === 0;
  const noReleaseInfo = {
    title: '新着情報はありません',
    description: '実装して欲しい新機能がありましたらお問い合わせください。',
  };
  const newRelease = releaseNotes[releaseNotes.length - 1];

  return (
    <Modal modalId="notification-modal">
      <hgroup>
        <p>お知らせ</p>
        <h2 className="font-bold text-lg py-4">
          {isNoReleaseNotes ? noReleaseInfo.title : newRelease.title}
        </h2>
      </hgroup>
      <p className="text-sm">
        {isNoReleaseNotes ? noReleaseInfo.description : newRelease.description}
      </p>
    </Modal>
  );
}

export default NotificationModal;
