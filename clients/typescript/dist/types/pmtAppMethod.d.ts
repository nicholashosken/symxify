import { PmtAppMethodCurrentExcessOrder } from "./pmtAppMethodCurrentExcessOrder";
import { PmtAppMethodDqExcessOrder } from "./pmtAppMethodDqExcessOrder";
import { PmtAppMethodGracePmtExcessOrder } from "./pmtAppMethodGracePmtExcessOrder";
import { PmtAppMethodPaymentOrder } from "./pmtAppMethodPaymentOrder";
import { PmtAppMethodPrepaidExcessOrder } from "./pmtAppMethodPrepaidExcessOrder";
import { VersionType } from "./versionType";
export interface PmtAppMethod {
    createAddlPrincipalComment: boolean | null;
    currentExcessOrder: PmtAppMethodCurrentExcessOrder[];
    definedCode: number | null;
    description: string;
    dqExcessOrder: PmtAppMethodDqExcessOrder[];
    gracePmtExcessOrder: PmtAppMethodGracePmtExcessOrder[];
    includeEscrowUnpdinPmtDue: boolean | null;
    paymentOrder: PmtAppMethodPaymentOrder[];
    prepaidExcessOrder: PmtAppMethodPrepaidExcessOrder[];
    thresholdPaymentIndicator: number | null;
    type: number | null;
    version1: VersionType;
}
