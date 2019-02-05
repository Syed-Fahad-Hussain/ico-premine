//var Token = artifacts.require("./Token.sol");
var CrowdFunding = artifacts.require("./ICO.sol");

module.exports = function(deployer) {
//  deployer.deploy(Token);
  deployer.deploy(CrowdFunding);
};
