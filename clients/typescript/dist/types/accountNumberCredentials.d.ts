import { SecondaryVerification } from "./secondaryVerification";
import { VersionType } from "./versionType";
export interface AccountNumberCredentials {
    accountNumber: string;
    optionalUserCode: number | null;
    homeBankingPassword: string;
    audioAccessCode: string;
    secondaryVerification: SecondaryVerification;
    version1: VersionType;
}
