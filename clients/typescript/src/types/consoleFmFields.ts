import { VersionType } from "./versionType";

export interface ConsoleFmFields {
    automaticLogoffTime: boolean | null;
    bellEnabled: boolean | null;
    blinkEnabled: boolean | null;
    branch: boolean | null;
    cashDispenseMachine: boolean | null;
    cashMachineOrientation: boolean | null;
    checkValidatorType: boolean | null;
    checkValidatorUse: boolean | null;
    consoleNumber: boolean | null;
    consoleSystemFailure: boolean | null;
    dimEnabled: boolean | null;
    hostCufxPosterOffHost: number[];
    itcPort: boolean | null;
    itcScanner: boolean | null;
    logonPrevention: boolean | null;
    micrReader: boolean | null;
    moneyOrderPrinter9: number[];
    purposeCode: boolean | null;
    screenType: boolean | null;
    screenWidth: boolean | null;
    telephoneTransferDefault: boolean | null;
    totalLoanAdjustmentLimit: number[];
    version1: VersionType;
}