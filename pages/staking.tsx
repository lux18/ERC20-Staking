import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useState, useEffect } from "react";
import Tokens from "../components/Token";
import Rewrads from "../components/Reward";
import Stake from "../components/Stake";

export default function Staking() {
  const address = useAddress();

  if (!address) {
    return (
      <div className="container">
        <br />
        <p>Please connect your wallet</p>
      </div>
    );
  }

  return (
    <div className="container">
      <br />
      <div>
        <div className="row">
          <div className="col mb-3">
            <Tokens />
          </div>
          <div className="col mb-3">
            <Rewrads />
          </div>
        </div>
        <Stake />
      </div>
    </div>
  );
}
