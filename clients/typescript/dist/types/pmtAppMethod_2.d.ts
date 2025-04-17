import { PmtAppMethodCurrentExcessOrder_2 } from "./pmtAppMethodCurrentExcessOrder_2";
import { PmtAppMethodDqExcessOrder_2 } from "./pmtAppMethodDqExcessOrder_2";
import { PmtAppMethodGracePmtExcessOrder_2 } from "./pmtAppMethodGracePmtExcessOrder_2";
import { PmtAppMethodPaymentOrder_2 } from "./pmtAppMethodPaymentOrder_2";
import { PmtAppMethodPrepaidExcessOrder_2 } from "./pmtAppMethodPrepaidExcessOrder_2";
import { VersionType } from "./versionType";
export interface PmtAppMethod_2 {
    createAddlPrincipalComment: boolean | null;
    currentExcessOrder: PmtAppMethodCurrentExcessOrder_2[];
    definedCode: number | null;
    description: string;
    dqExcessOrder: PmtAppMethodDqExcessOrder_2[];
    gracePmtExcessOrder: PmtAppMethodGracePmtExcessOrder_2[];
    includeEscrowUnpdinPmtDue: boolean | null;
    paymentOrder: PmtAppMethodPaymentOrder_2[];
    prepaidExcessOrder: PmtAppMethodPrepaidExcessOrder_2[];
    thresholdPaymentIndicator: number | null;
    type: number | null;
    version1: VersionType;
}
