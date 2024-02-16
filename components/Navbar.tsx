import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Navbars() {
  return (
    <div style={{ paddingLeft: "14px", paddingRight: "14px" }}>
      <div className="d-flex container align-items-center justify-content-between p-3 nav-lux">
        <div style={{ width: "200px" }}>
          <svg
            className="ms-1"
            width="80"
            height="27"
            viewBox="0 0 80 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.12 26H0.92V25.008L3.928 22.64V3.248L0.6 2.128L1.24 0.848H10.968V1.84L7.928 4.208V24.56H16.184L20.888 17.616L21.848 17.936V26.576L20.12 26ZM48.8298 4.208V16.08C48.8298 18.32 48.2858 20.24 47.1978 21.84C46.1311 23.44 44.8084 24.6453 43.2298 25.456C41.6511 26.2453 40.1044 26.64 38.5898 26.64C36.6911 26.64 34.9844 26.224 33.4698 25.392C31.9764 24.5387 30.8031 23.376 29.9498 21.904C29.1178 20.4107 28.7018 18.736 28.7018 16.88V3.248L25.3738 2.128L26.0138 0.848H35.7418V1.84L32.7018 4.208V15.344C32.7018 18.0533 33.3631 20.1653 34.6858 21.68C36.0298 23.1947 38.0564 23.952 40.7658 23.952C41.7684 23.952 42.7498 23.632 43.7098 22.992C44.6911 22.3307 45.4911 21.3707 46.1098 20.112C46.7498 18.8533 47.0698 17.3707 47.0698 15.664V3.792L43.7418 2.128L44.3818 0.848H51.8698V1.84L48.8298 4.208ZM79.1478 26H69.4198V25.008L71.9478 23.056L65.8678 15.376L59.2118 22.896L63.8518 24.72L63.2118 26H53.4838V25.008L57.0358 22.832L64.8758 14.096L57.0358 4.08L53.8038 2.128L54.4438 0.848H64.1718V1.84L61.6438 3.792L67.6918 11.408L73.8038 3.984L69.1318 2.128L69.7718 0.848H79.4998V1.84L76.2038 3.856L68.7478 12.72L76.5878 22.768L79.7878 24.72L79.1478 26Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="d-flex">
          {/* <Link className="navbar-lux" href={"/"}>
          Home
        </Link>
        <Link className="navbar-lux" href={"/staking"}>
          Staking
        </Link>{" "} */}
        </div>
        <div style={{ width: "200px" }}>
          <ConnectWallet className="d-flex ms-auto" />
        </div>
      </div>
    </div>
  );
}
