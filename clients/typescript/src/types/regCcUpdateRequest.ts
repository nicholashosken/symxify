import { RegCcFields_2 } from "./regCcFields_2";

export interface RegCcUpdateRequest {
    regCcBranchValue: number;
    regCcBranchValueSpecified: boolean;
    regCcBranch: number | null;
    regCcFields: RegCcFields_2;
}