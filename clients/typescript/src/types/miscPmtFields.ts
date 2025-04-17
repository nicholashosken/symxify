import { VersionType } from "./versionType";

export interface MiscPmtFields {
    accountMask: number[];
    ficsDataSourceName: number[];
    mpQuestionFormat: number[];
    onlineDbPassword: number[];
    onlineDbUserId: number[];
    onlineGlobalAppPasswd: number[];
    onlineGlobalAppUserId: number[];
    procTranCodePayment1: number[];
    procTranCodePayment10: number[];
    procTranCodePayment2: number[];
    procTranCodePayment3: number[];
    procTranCodePayment4: number[];
    procTranCodePayment5: number[];
    procTranCodePayment6: number[];
    procTranCodePayment7: number[];
    procTranCodePayment8: number[];
    procTranCodePayment9: number[];
    procTranCodePmtDesc1: number[];
    procTranCodePmtDesc10: number[];
    procTranCodePmtDesc2: number[];
    procTranCodePmtDesc3: number[];
    procTranCodePmtDesc4: number[];
    procTranCodePmtDesc5: number[];
    procTranCodePmtDesc6: number[];
    procTranCodePmtDesc7: number[];
    procTranCodePmtDesc8: number[];
    procTranCodePmtDesc9: number[];
    processorAbbreviation: number[];
    processorAcctVerCode: number[];
    processorCode: number[];
    processorName: number[];
    processorPromptOrder: boolean | null;
    trackingTypes: number[];
    transactionGlCode: number[];
    version1: VersionType;
}