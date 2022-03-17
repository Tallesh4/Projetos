require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/oTolUWtxSc9m9vaMe0VV3A2h1Vfi6RLS',
      accounts: ['19f62f3d0872a5df701ea13a3ca006aa59b5b101e722019da1c80efa44a4a7fc'],
    },
  },
};