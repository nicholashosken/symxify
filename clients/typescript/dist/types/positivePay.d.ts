import { VersionType } from "./versionType";
export interface PositivePay {
    description: string;
    type: number | null;
    vendorId: string;
    vendorIndex: number | null;
    vendorToken: string;
    vendorUrl: string;
    version1: VersionType;
}
