import { TokenList, TokenInfo } from '@uniswap/token-lists';
import * as contracts from './contracts.json';

async function generate() {
  let tokens: TokenInfo[] = [];
  for (let contract of contracts.default) {
    tokens.push({
      chainId: contract.chain_id,
      address: contract.address,
      name: contract.name,
      symbol: contract.symbol,
      decimals: contract.decimals,
      logoURI: contract.thumbnail,
    });
  }

  // generate token list
  const tokenList: TokenList = {
    name: 'Galxe Loyalty Point',
    timestamp: new Date().toISOString(),
    version: {
      major: 1,
      minor: 0,
      patch: 0,
    },
    tokens: tokens,
    keywords: ['galxe', 'loyalty point'],
  };

  // print the resulting JSON to stdout
  process.stdout.write(JSON.stringify(tokenList, null, 2));
}

generate();
