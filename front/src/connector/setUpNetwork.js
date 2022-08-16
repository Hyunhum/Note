/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */

 export const setupNetwork = async () => {

    const provider = window.ethereum
  
    //const nodes = ["https://ropsten.infura.io/v3/"]//"https://api.cypress.ozys.net:8651"]//, "https://kaikas.cypress.klaytn.net:8651"] // , "https://api.baobab.klaytn.net:8651"]
  
    if (provider) {
  
      const chainId = parseInt("3", 10)
  
      try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
             },
          ],
        })
        return true
      } catch (error) {
        alert("네트워크 설정에 실패했습니다.");
        console.error('Failed to setup the network in Metamask:', error)
        return false
      }
    } else {
      alert("메타마스크를 설치해주세요.")
      console.error("Can't setup the ropsten network on metamask because window.ethereum is undefined")
      return false
    }
  }