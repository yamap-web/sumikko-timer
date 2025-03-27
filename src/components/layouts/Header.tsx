import Notification from '@/features/notification';

export function Header() {
  return (
    <header className="navbar border-b-4 border-white/20 px-4">
      <div className="navbar-start">
        <p className="hidden sm:block text-lg">
          画面のすみっこで時間を計ってくれる優しい子です。
        </p>
      </div>
      <div className="navbar-end">
        <Notification.Button />
        <Notification.Modal />
      </div>
    </header>
  );
}
