import axios from 'axios';
import {BlockHash, BtcBlock, BtcInfo, BtcTx, BtcUTXO, TransactionHash} from '../model';

export const btcBroadcast = async (txData: string, signatureId?: string): Promise<TransactionHash> => {
    return (await axios.post(`https://api.tatum.io/v3/bitcoin/broadcast`,
        {txData, signatureId},
        {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

export const btcGetCurrentBlock = async (): Promise<BtcInfo> => {
    return (await axios.get('https://api.tatum.io/v3/bitcoin/info', {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

export const btcGetBlock = async (hash: string): Promise<BtcBlock> => {
    return (await axios.get(`https://api.tatum.io/v3/bitcoin/block/${hash}`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

export const btcGetBlockHash = async (i: number): Promise<BlockHash> => {
    return (await axios.get(`https://api.tatum.io/v3/bitcoin/block/hash/${i}`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

export const btcGetUTXO = async (hash: string, i: number): Promise<BtcUTXO> => {
    return (await axios.get(`https://api.tatum.io/v3/bitcoin/utxo/${hash}/${i}`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

export const btcGetTxForAccount = async (address: string, pageSize: number = 50, offset: number = 0): Promise<BtcTx[]> => {
    return (await axios.get(`https://api.tatum.io/v3/bitcoin/transaction/address/${address}?pageSize=${pageSize}&offset=${offset}`,
        {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

export const btcGetTransaction = async (hash: string): Promise<BtcTx> => {
    return (await axios.get(`https://api.tatum.io/v3/bitcoin/transaction/${hash}`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};