import * as Notification from '@/features/notification';

export function Header() {
  function handleOpenModal() {
    const modalElement = document.getElementById('modal') as HTMLDialogElement;
    modalElement.showModal();
  }

  return (
    <header className="navbar bg-slate-500 px-4">
      <div className="navbar-start">
        <p className="hidden sm:block text-lg">
          画面のすみっこで時間を測ってくれる優しい子です。
        </p>
      </div>
      <div className="navbar-end">
        <Notification.Button onModalOpen={handleOpenModal} />
        <Notification.Modal />
      </div>
    </header>
  );
}
