import { ENV } from "@pushprotocol/restapi/src/lib/constants";
import * as PushAPI from "@pushprotocol/restapi";

export interface IConfig {
  env?: ENV;
}

export interface IUserRequest {
  env?: ENV;
  account?: string;
  signer?: string;
  version?: string;
  additionalMeta?: {
    NFTPGP_V1?: {
      password: string;
    };
  };
  progressHook?: (progress: PushAPI.ProgressHookType) => void;
}

export interface fetchChatRequest {
  account: string;
  toDecrypt?: boolean;
  pgpPrivateKey?: string;
  env?: ENV;
}

export interface conversationHashRequest {
  account: string;
  conversationId: string;
  env?: ENV;
}

export interface conversationHashResponse {
  threadHash: string;
}

export interface ApproveChatRequest {
  status: "Approved";
  account: string;
  senderAddress: string;
}
export interface notificationType {
  senderType?: 0 | 1;
  signer: any;
  type: number;
  identityType: number;
  notification?: {
    title: string;
    body: string;
  };
  payload?: {
    sectype?: string;
    title: string;
    body: string;
    cta: string;
    img: string;
    metadata?: any;
    additionalMeta?: any;
  };
  recipients?: string | string[]; // CAIP or plain ETH
  channel: string; // CAIP or plain ETH
  expiry?: number;
  hidden?: boolean;
  graph?: {
    id: string;
    counter: number;
  };
  ipfsHash?: string;
  env?: ENV;
  chatId?: string;
  pgpPrivateKey?: string;
  chainId: number;
}
