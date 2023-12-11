import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState, useEffect, Fragment } from "react";
import { createPortal } from "react-dom";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { WALLET_ADAPTERS } from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";

import tiktok from "../../public/images/tiktok-logo.png";
import gmail from "../../public/images/gmail-logo.png";
import authImage from "../../public/images/auth-image.png";
import Spinner from "@/components/Spinner";
import Backdrop from "@/components/Backdrop";

const SignIn = () => {
    const chainConfig = {
        chainNamespace: "eip155",
        chainId: "0x1",
        rpcTarget: process.env.NEXT_PUBLIC_RPC_TARGET,
        displayName: "Ethereum Mainnet",
        blockExplorer: "https://etherscan.io",
        ticker: "ETH",
        tickerName: "Ethereum",
    };

    const web3auth = new Web3AuthNoModal({
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,

        web3AuthNetwork: process.env.NEXT_PUBLIC_AUTH_NETWORK,
        chainConfig: chainConfig,
    });

    const privateKeyProvider = new EthereumPrivateKeyProvider({
        config: { chainConfig },
    });

    const openloginAdapter = new OpenloginAdapter({
        privateKeyProvider,
    });

    web3auth.configureAdapter(openloginAdapter);

    useEffect(() => {
        const init = async () => {
            await web3auth.init();
        };

        init();
    }, []);

    const router = useRouter();
    const emailRef = useRef();

    const [emailIsValid, setEmailValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const formSubmitHandler = async (provider, e) => {
        e.preventDefault();

        const emailValue = emailRef.current.value;
        const regex = /^\S+@\S+\.\S+$/;
        const emailIsValid = regex.test(emailValue);

        if (!provider && !emailIsValid) {
            setEmailValid(false);
            return;
        }

        setIsLoading(true);

        let web3authProvider;

        if (!provider) {
            try {
                web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
                    loginProvider: "email_passwordless",
                    extraLoginOptions: {
                        login_hint: emailValue,
                    },
                });
            } catch (err) {
                localStorage.removeItem("openlogin_store");
                // router.push("/");
                return;
            }
        } else {
            try {
                web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
                    loginProvider: provider,
                });
            } catch (err) {
                localStorage.removeItem("openlogin_store");
                // router.push("/");
                return;
            }
        }

        // console.log(emailValue);
    };

    return (
        <Fragment>
            {isLoading &&
                createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
            {isLoading &&
                createPortal(<Spinner />, document.getElementById("backdrop-root"))}
            <div
                className="bg-white flex flex-row justify-center h-screen items-center mx-auto"
                style={{ maxWidth: "1140px" }}
            >
                <div className="relative hidden md:block md:w-1/2">
                    <p className="font-bold text-light-pink absolute top-10 left-10">
                        Adcraft
                    </p>
                    <Image
                        src={authImage}
                        alt="adscraft image"
                        width={570}
                        height={300}
                        style={{ height: "100vh", objectFit: "cover", maxHeight: "580px" }}
                    />
                    <p className="text-white absolute bottom-5 left-10">Copyright 2023</p>
                </div>

                <div
                    className="flex flex-col justify-center md:h-screen px-5 md:w-1/2"
                    style={{ maxWidth: "720px", maxHeight: "580px" }}
                >
                    {/* <div className="flex flex-row gap-3 items-center justify-between md:justify-end mb-5 md:me-8">
                    <p className="text-sm">New to Adcraft?</p>
                    <button className="border-light-pink border-1 rounded py-1 px-2 text-light-pink transition-all duration-500 ease-in-out hover:bg-light-pink hover:text-white">Create Account</button>
                </div> */}
                    <div
                        className="mb-4 w-10/12 mx-auto"
                        style={{ width: "100%", maxWidth: "405px" }}
                    >
                        <h1 className="text-3xl mb-2">Sign In</h1>
                        <p className="">
                            Welcome to Adcraft. Sign into the platform with just one step.
                        </p>
                    </div>
                    <form className="">
                        <div
                            className="w-10/12 mx-auto mt-5 relative"
                            style={{ width: "100%", maxWidth: "405px" }}
                        >
                            {!emailIsValid && (
                                <p className="text-sm text-red-600 absolute right-0 top-3">
                                    invalid email format
                                </p>
                            )}
                            <label htmlFor="email">Email Address</label> <br />
                            <input
                                type="email"
                                id="email"
                                ref={emailRef}
                                onChange={() => setEmailValid(true)}
                                placeholder="example@mail.com"
                                className="border-none outline-none mt-3 ps-2 bg-light-brown rounded-md"
                                style={{ width: "100%", maxWidth: "405px", height: "50px" }}
                            />
                        </div>
                        {/* <div className="w-10/12 mx-auto mt-5" style={{width: "100%", maxWidth: "405px"}}>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" id="password" placeholder="*****************" className="border-none outline-none mt-3 ps-2 bg-light-brown rounded-md" style={{width: "100%", maxWidth: "405px", height: "50px"}} />
                    </div> */}
                        <div
                            className="mx-auto mt-10 flex flex-row justify-center"
                            style={{ width: "100%", maxWidth: "405px" }}
                        >
                            <button
                                onClick={formSubmitHandler.bind(null, "")}
                                className="border-light-pink border-2 rounded py-1 px-2 bg-light-pink text-white mx-auto transition-all duration-500 ease-in-out hover:bg-pink-400"
                                style={{ width: "100%", maxWidth: "405px", height: "50px" }}
                            >
                                Login
                            </button>
                        </div>
                        <div className="relative flex flex-row justify-center my-8 text-center">
                            <div
                                style={{
                                    width: "206px",
                                    height: "0.4px",
                                    background: "#000",
                                }}
                            ></div>
                            <p
                                className="absolute -top-2"
                                style={{
                                    width: "18px",
                                    fontSize: "10px",
                                    padding: "auto",
                                    height: "15px",
                                    color: "#000",
                                    left: "47.5%",
                                    background: "white",
                                }}
                            >
                                OR
                            </p>
                        </div>
                        <div
                            className="mx-auto flex flex-row justify-center items-center my-5 gap-5"
                            style={{ width: "100%", maxWidth: "405px" }}
                        >
                            <button onClick={formSubmitHandler.bind(null, "google")}>
                                <Image src={gmail} alt="tiktok logo" width={40} height={30} />
                            </button>
                            <button onClick={formSubmitHandler.bind(null, "facebook")}>
                                <Image src={tiktok} alt="tiktok logo" width={66} height={42} />
                            </button>
                        </div>
                        <div
                            className="flex flex-row justify-center gap-3 mx-auto mt-10"
                            style={{ width: "100%", maxWidth: "405px" }}
                        >
                            <a href="/">Terms & Conditions</a>
                            <a href="/">Legal</a>
                            <a href="/">Privacy</a>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default SignIn;
