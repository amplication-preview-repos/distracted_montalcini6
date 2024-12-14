import { SignalWhereInput } from "./SignalWhereInput";
import { SignalOrderByInput } from "./SignalOrderByInput";

export type SignalFindManyArgs = {
  where?: SignalWhereInput;
  orderBy?: Array<SignalOrderByInput>;
  skip?: number;
  take?: number;
};
