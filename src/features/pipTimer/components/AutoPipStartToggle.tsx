import type { Dispatch, SetStateAction } from 'react';

type AutoPipStartToggleProps = {
  autoPip: boolean;
  setAutoPip: Dispatch<SetStateAction<boolean>>;
};

export function AutoPipStartToggle({
  autoPip,
  setAutoPip,
}: AutoPipStartToggleProps) {
  return (
    <div className="hidden sm:flex flex-col items-center justify-center border border-dashed rounded-lg pt-1 pb-3 mb-6">
      <div className="form-control w-80">
        <label className="label cursor-pointer justify-between py-2 px-1 w-full">
          <span className="label-text text-base-content text-base font-bold">
            自動すみっこスタート機能
          </span>
          {autoPip ? (
            <span className="font-bold text-primary">ON</span>
          ) : (
            <span className="">OFF</span>
          )}
          <input
            type="checkbox"
            name="toggleAutoPip"
            className="toggle toggle-primary"
            checked={autoPip}
            onChange={(e) => setAutoPip(e.target.checked)}
          />
        </label>
      </div>
      <p className="text-sm">
        タイマーをスタートすると自動ですみっこへ向かいます
      </p>
    </div>
  );
}
