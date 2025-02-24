export function handleOpenModal(modalId: string) {
  const modalElement = document.getElementById(modalId) as HTMLDialogElement;
  modalElement.showModal();
}
