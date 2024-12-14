import { Signal as TSignal } from "../api/signal/Signal";

export const SIGNAL_TITLE_FIELD = "senderId";

export const SignalTitle = (record: TSignal): string => {
  return record.senderId?.toString() || String(record.id);
};
