import { handleOpenModal } from './functions';

type ModalProps = {
  modalId: string;
  children: React.ReactNode;
};

function Modal({ modalId, children }: ModalProps) {
  return (
    <dialog id={modalId} className="modal">
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

export { Modal, handleOpenModal };
