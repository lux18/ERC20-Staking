import {
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
  useTokenBalance,
} from "@thirdweb-dev/react";
import { useState, useEffect } from "react";
import {
  REWARD_TOKEN_ADDRESS,
  STAKE_CONTRACT_ADDRESS,
  STAKE_TOKEN_ADDRESS,
} from "../constants/addresses";
import { ethers } from "ethers";
import { RiExternalLinkFill } from "react-icons/ri";
import Link from "next/link";

export default function Stake() {
  const address = useAddress();

  const { contract: stakeTokenContract } = useContract(
    STAKE_TOKEN_ADDRESS,
    "token"
  );
  const { contract: rewardTokenContract } = useContract(
    REWARD_TOKEN_ADDRESS,
    "token"
  );
  const { contract: stakeContract } = useContract(
    STAKE_CONTRACT_ADDRESS,
    "custom"
  );

  const { data: stakeTokenBalance } = useTokenBalance(
    stakeTokenContract,
    address
  );
  const { data: rewardTokenBalance } = useTokenBalance(
    rewardTokenContract,
    address
  );

  const { data: stakeInfo, refetch: refetchStakeInfo } = useContractRead(
    stakeContract,
    "getStakeInfo",
    [address]
  );

  useEffect(() => {
    setInterval(() => {
      refetchStakeInfo();
    }, 10000);
  }, []);

  const [stakeAmount, setStakeAmount] = useState("0");

  function resetValue() {
    setStakeAmount("0");
  }

  return (
    <div>
      <div className="cardStaking">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Staking Pool</h1>
          <Link
            href="https://polygonscan.com/address/0xC1E940179053858cBA7E2e1058Eb1168024221E8"
            className="btn btn-sm button-87 d-flex align-items-center"
          >
            Staking Contract
            <RiExternalLinkFill className="ms-2 mb-0 icon-btn-vct" size={18} />
          </Link>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-12 col-md-6 mb-3">
          {" "}
          <div className="cardStakingInner px-4">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 mt-2">
                <p className="mb-0 text-center">Locked Amount</p>
                {stakeInfo && stakeInfo[0] ? (
                  <div>
                    <p className="lockAmount mb-0 text-center">
                      {ethers.utils.formatEther(stakeInfo[0])}{" "}
                    </p>
                    <p className="text-center"> USDT</p>
                  </div>
                ) : (
                  <p className="lockAmount mb-0 text-center">0.0</p>
                )}
                <p
                  className="mb-0 text-center"
                  style={{ fontSize: "12px", opacity: "50%" }}
                >
                  Stake amount
                </p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 mt-2">
                <p className="mb-1">Set Amount</p>

                <input
                  type="number"
                  max={stakeTokenBalance?.displayValue}
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="inputValueStaking"
                />
                <p
                  className="mb-0"
                  style={{ fontSize: "12px", opacity: "50%" }}
                >
                  Gas fees in MATIC form are required for this transaction
                </p>
                <div className="d-flex justify-content-between">
                  <Web3Button
                    style={{ minWidth: "90px", width: "45%" }}
                    className="btn button-84 mt-3 mb-2 "
                    contractAddress={STAKE_CONTRACT_ADDRESS}
                    action={async (contract) => {
                      await stakeTokenContract?.setAllowance(
                        STAKE_CONTRACT_ADDRESS,
                        stakeAmount
                      );
                      await contract.call("stake", [
                        ethers.utils.parseEther(stakeAmount),
                      ]);
                      resetValue();
                    }}
                  >
                    Stake
                  </Web3Button>
                  <Web3Button
                    style={{ minWidth: "90px", width: "45%" }}
                    className="btn button-85 mt-3 mb-2 "
                    contractAddress={STAKE_CONTRACT_ADDRESS}
                    action={async (contract) => {
                      await contract.call("withdraw", [
                        ethers.utils.parseEther(stakeAmount),
                      ]);
                    }}
                  >
                    Unstake
                  </Web3Button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className=" cardStakingInner">
            <div className="row">
              <div className="col">
                <p className="mb-0 text-center">Staking Rewards</p>
                {stakeInfo ? (
                  <div>
                    <p className="lockAmount mb-0 text-center">
                      {ethers.utils.formatEther(stakeInfo[1])}{" "}
                    </p>
                    <p className="text-center"> LT</p>
                  </div>
                ) : (
                  <p className="lockAmount mb-0 text-center">0.0 </p>
                )}
                <p
                  className="mb-0 text-center"
                  style={{ fontSize: "12px", opacity: "50%" }}
                >
                  Reward Amount
                </p>
              </div>
              <div className="col">
                <p style={{ fontWeight: "500" }} className="mb-0">
                  Note :
                </p>
                <p style={{ opacity: "70%", fontWeight: "400" }}>
                  If you have no staking then the rewards will stop
                </p>
                <Web3Button
                  className="btn button-88 w-100"
                  contractAddress={STAKE_CONTRACT_ADDRESS}
                  action={async (contract) => {
                    await contract.call("claimRewards");
                    resetValue();
                  }}
                >
                  Claim
                </Web3Button>
                <p
                  className="mb-0 mt-2"
                  style={{ fontSize: "12px", opacity: "50%" }}
                >
                  Gas fees in MATIC form are required for this transaction
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 mb-3"></div>
      </div>
    </div>
  );
}
