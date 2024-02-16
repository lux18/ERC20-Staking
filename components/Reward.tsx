import { REWARD_TOKEN_ADDRESS } from "../constants/addresses";
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { RiExternalLinkFill } from "react-icons/ri";

export default function Rewrads() {
  const address = useAddress();
  const { contract: stakeTokenContract, isLoading: loadingToken } =
    useContract(REWARD_TOKEN_ADDRESS);
  const { data: tokenBalance, isLoading: loadingTokenBalance } =
    useTokenBalance(stakeTokenContract, address);

  const balance = tokenBalance?.displayValue
    ? parseFloat(tokenBalance?.displayValue).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "";

  return (
    <div>
      <div className="cardMyToken d-flex">
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 0C77.613 0 100 22.387 100 50C100 77.613 77.612 100 50 100C22.388 100 0 77.619 0 50C0 22.381 22.384 0 50 0Z"
            fill="#44A9BF"
          />
          <path
            d="M30.9775 25.2247L45.9214 15L32.5506 44.8876H49.0674L45.1348 53.5393H18L30.9775 25.2247Z"
            fill="white"
          />
          <path
            d="M49.0674 53.5393L53 44.8876H82.4944L77.7753 53.5393H64L54.9551 74.7753L39.8427 85L54 53.5393H49.0674Z"
            fill="white"
          />
        </svg>
        <RiExternalLinkFill className="iconLinkScan" size={24} />

        <div className="ms-4">
          <p className="balanceMyToken">
            {balance}{" "}
            <span style={{ fontSize: "18px", fontWeight: "600" }}>LT</span>
          </p>
          <p className="balance2MyToken">
            {balance}{" "}
            <span style={{ fontSize: "16px", fontWeight: "600" }}>USDT</span>
          </p>
        </div>
      </div>
    </div>
  );
}
