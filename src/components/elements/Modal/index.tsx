export function Modal({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <dialog id="modal" className="modal">
      <div className="modal-box bg-slate-500">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
