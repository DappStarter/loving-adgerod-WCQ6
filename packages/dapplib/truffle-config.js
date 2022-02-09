require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index radar muscle uncover include kite army gift'; 
let testAccounts = [
"0xc4a0cada36fd316ce80e73a5f3b8afd09727f0f6e72011e344a657bcce4df7a9",
"0x80f09e49aea32467be9b20549a81735f639f5cd716871463d5cbff79c707dce0",
"0x309ddacad4bba240b8624b9aa4fb58774f682e3e221f5d61d50b488694b09553",
"0xf55d3671ea73df668ba8ce1ce9d7c8aba1cc0f9be6f4766e9498a4a0ff55f197",
"0xec75bbb0bfd25b4739c687285455d371691dab94861b39249538d88db6350e5c",
"0x36a466280a976f8b1624485556716bc0f433446b7280c536eabc27673ad07133",
"0xbca4bcbc87ab0ca14d0b6b318d4040dfaef40aa771ffb94095943702e61334be",
"0xa506b1c98e993df3ba087836da432c1c3b1b6def8d4fdbdf3a5d00af7f99f1bf",
"0x39db4b64c9197a60455aabd23e9c67283bf2fc0c8101b09f0cf17dcf5bf82880",
"0x3cfdfcdf04242cb06744379412387363c6c262361f57a3a0b842efb9418c3c6f"
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


