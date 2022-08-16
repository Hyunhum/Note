import { ethers } from 'ethers'
import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "../../connector";
import { setupNetwork } from "../../connector/setUpNetwork";
import { formatEther } from '@ethersproject/units'
import Navbar from '../navbar/Navbar';
import React, {useState, useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { walletState } from '../../states/walletState';

function Account() {

    const {chainId, account, library, activate, deactivate, active} = useWeb3React()

    const [wallet, setWallet] = useRecoilState(walletState);
    
    const activateWallet = () => {
      if (setupNetwork()) {
        activate(injectedConnector);
      }
    }

    const deactivateWallet = () => {
        deactivate(injectedConnector);
        alert("지갑 연결이 해제되었습니다!");
    }

    const [balance, setBalance] = useState()

    const getEthBalance = () => {
      library
        .getBalance(account)
        .then((balance) => {
          if (!false) {
            setBalance(balance)
          }
        })
        .catch(() => {
          if (!false) {
            setBalance(null)
          }
        })
    }

    useEffect(() => {
      if (account && library) {

        getEthBalance()

        return () => {
          setBalance(undefined)
        }
      }
    }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

    setWallet(account);

    return (
        <div class="intro"> 
                <h5>블록체인 메모 서비스</h5>
                <h5>당신의 지갑 주소 : {wallet} </h5>
                <h5>당신의 ETH 잔고: {balance === null ? 'Error' : balance ?  `${parseFloat(formatEther(balance)).toFixed(2)}` : ''}</h5>
                {active ? (
                   <div>
                    <Navbar/>
                    <button onClick = {deactivateWallet}>
                      메타마스크 연결 해제
                    </button>
                   </div>
                ) : (
                  <div>
                    <button onClick = {activateWallet}>
                      메타마스크로 연결
                    </button>                    
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target='_blank' rel='noreferrer'>
                      혹시라도 메타마스크가 설치되지 않았다면? 메타마스크 설치하러 가기</a>
                  </div>
                )}
        </div>
           
    )

}

export default Account;