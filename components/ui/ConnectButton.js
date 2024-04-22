import { ConnectKitButton } from "connectkit";
import styles from "../Navbar/index.module.css";

export const ConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
        return (
          <button onClick={show} style={styles.btn_container_div}>
            {isConnected ? (
              address
            ) : (
              <>
                {" "}
                <i className="fa fa-wallet"></i>Connect Wallet
              </>
            )}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
