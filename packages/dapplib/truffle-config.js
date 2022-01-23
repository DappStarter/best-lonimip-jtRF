require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food shoulder rescue pizza pudding ice light army genuine'; 
let testAccounts = [
"0x863df8569d23726164a552d4f44d56824f75b9d9bd53d0a871c8f4d8baca2c7b",
"0xff8bb003d9272a36f6b991d42cf3712c4b66fda66e2d9df81149f9004165803a",
"0x4fc12756ee7403801f397ee897756844af6d5fa0e6d67485f19dfd2831c2c95b",
"0xbd02a80cfac263dbf33a9dc369e13c1d09d4fce1e6b3bd549381ace730b59404",
"0x3c512e6819f8575fd31d262b791df566f58bfda43296d2d9c3acb9aad46f38c1",
"0x25a0f036fb7ad2237c6d880e4ee72ea1139ae1411d588c41b12a5abc7ddf8600",
"0x1bbc8b89a8e994ba69dd5eac0a87afedd3550c7c5ffd4d79b92122a961d9d5c8",
"0xfe550e81e284266cd2c2062c72dd9a27da104f017e16f3cb1691cdd3259e8eba",
"0xf8ae1617303152684b71f3aa6dfed1e92927202c68b0f25e5294b1ee2712e0ba",
"0x2046b0f9cf449ecc22c0466e6dbaed5492d21911745a29095f85eeb83bb5f583"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


