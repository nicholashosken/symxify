import { ConsoleFmHostCufxPosterOffHost } from "./consoleFmHostCufxPosterOffHost";
import { ConsoleFmMoneyOrderPrinter9 } from "./consoleFmMoneyOrderPrinter9";
import { ConsoleFmTotalLoanAdjustmentLimit } from "./consoleFmTotalLoanAdjustmentLimit";
import { VersionType } from "./versionType";
export interface ConsoleFm {
    automaticLogoffTime: number | null;
    bellEnabled: boolean | null;
    blinkEnabled: boolean | null;
    branch: number | null;
    cashDispenseMachine: number | null;
    cashMachineOrientation: number | null;
    checkValidatorType: number | null;
    checkValidatorUse: number | null;
    consoleNumber: number | null;
    consoleSystemFailure: boolean | null;
    dimEnabled: boolean | null;
    hostCufxPosterOffHost: ConsoleFmHostCufxPosterOffHost[];
    itcPort: number | null;
    itcScanner: boolean | null;
    logonPrevention: number | null;
    micrReader: number | null;
    moneyOrderPrinter9: ConsoleFmMoneyOrderPrinter9[];
    purposeCode: number | null;
    screenType: number | null;
    screenWidth: number | null;
    telephoneTransferDefault: boolean | null;
    totalLoanAdjustmentLimit: ConsoleFmTotalLoanAdjustmentLimit[];
    version1: VersionType;
}
