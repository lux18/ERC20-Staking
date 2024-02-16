import { STAKE_TOKEN_ADDRESS } from "../constants/addresses";
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { RiExternalLinkFill } from "react-icons/ri";

export default function Tokens() {
  const address = useAddress();
  const { contract: stakeTokenContract, isLoading: loadingToken } =
    useContract(STAKE_TOKEN_ADDRESS);
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
            fill="#53AE94"
          />
          <path
            d="M56.1723 43.3374V35.8994H73.1813V24.5664H26.8653V35.8994H43.8763V43.3314C30.0512 43.9664 19.6562 46.7044 19.6562 49.9844C19.6562 53.2644 30.0563 56.0024 43.8763 56.6414V80.4664H56.1763V56.6394C69.9763 56.0024 80.3503 53.2664 80.3503 49.9894C80.3503 46.7124 69.9763 43.9764 56.1763 43.3394M56.1763 54.6214V54.6154C55.8293 54.6374 54.0463 54.7444 50.0763 54.7444C46.9023 54.7444 44.6692 54.6544 43.8822 54.6134V54.6234C31.6682 54.0824 22.5512 51.9554 22.5512 49.4104C22.5512 46.8654 31.6692 44.7414 43.8822 44.1994V52.5044C44.6822 52.5594 46.9702 52.6944 50.1282 52.6944C53.9212 52.6944 55.8283 52.5364 56.1783 52.5044V44.1994C68.3683 44.7424 77.4643 46.8714 77.4643 49.4074C77.4643 51.9434 68.3643 54.0734 56.1783 54.6164"
            fill="white"
          />
        </svg>
        <RiExternalLinkFill className="iconLinkScan" size={24} />

        <div className="ms-4">
          <div className="d-flex"></div>
          <p className="balanceMyToken">
            {balance}{" "}
            <span style={{ fontSize: "18px", fontWeight: "600" }}>USDT</span>
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
