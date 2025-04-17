import { RemittanceCompositeKey } from "./remittanceCompositeKey";

export interface RemittanceCreateResponse {
    remittanceCompositeKey: RemittanceCompositeKey;
    messageId: string;
}