import Image from "next/image";

import tiktok from "../../public/images/tiktok-logo.png";
import gmail from "../../public/images/gmail-logo.png";
import authImage from "../../public/images/auth-image.png";

const SignIn = () => {
    return <div className="flex flex-row justify-center md:h-screen items-center mx-auto" style={{maxWidth: "1140px"}}>
        <div className="relative hidden md:block md:w-1/2">
            <p className="font-bold text-light-pink absolute top-10 left-10">Adcraft</p>
            <Image src={authImage} alt="adscraft image" width={570} height={300} style={{height: "100vh", objectFit: "cover", maxHeight: "580px"}} />
            <p className="text-white absolute bottom-5 left-10">Copyright 2023</p>
        </div>
        
        <div className="py-5 md:h-screen md:w-1/2" style={{maxWidth: "720px", maxHeight: "580px"}}>
            <div className="flex flex-row gap-3 items-center justify-between md:justify-end mb-5 md:me-8">
                <p className="text-sm">New to Adcraft?</p>
                <button className="border-light-pink border-1 rounded py-1 px-2 text-light-pink transition-all duration-500 ease-in-out hover:bg-light-pink hover:text-white">Create Account</button>
            </div>
            <div className="mb-4 w-10/12 mx-auto" style={{width: "100%", maxWidth: "405px"}}>
                <h1 className="text-3xl mb-2">Sign In</h1>
                <p className="">Welcome back to Adcraft</p>
            </div>
            <form className="">
                <div className="w-10/12 mx-auto mt-5" style={{width: "100%", maxWidth: "405px"}}>
                    <label htmlFor="email">Email Address</label> <br />
                    <input type="email" id="email" placeholder="example@mail.com" className="border-none outline-none mt-3 ps-2 bg-light-brown rounded-md" style={{width: "100%", maxWidth: "405px", height: "50px"}} />
                </div>
                <div className="w-10/12 mx-auto mt-5" style={{width: "100%", maxWidth: "405px"}}>
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" id="password" placeholder="*****************" className="border-none outline-none mt-3 ps-2 bg-light-brown rounded-md" style={{width: "100%", maxWidth: "405px", height: "50px"}} />
                </div>
                <div className="mx-auto mt-10 flex flex-row justify-center" style={{width: "100%", maxWidth: "405px"}}>
                    <button className="border-light-pink border-2 rounded py-1 px-2 bg-light-pink text-white mx-auto transition-all duration-500 ease-in-out hover:bg-pink-400" style={{width: "100%", maxWidth: "405px", height: "50px"}}>Login</button>
                </div>
                <div className="mx-auto flex flex-row justify-center items-center my-5 gap-5" style={{width: "100%", maxWidth: "405px"}}>
                    <button>
                        <Image src={gmail} alt="tiktok logo" width={40} height={30} />
                    </button>
                    <button>
                        <Image src={tiktok} alt="tiktok logo" width={66} height={42} />
                    </button>
                </div>
                <div className="flex flex-row justify-center gap-3 mx-auto" style={{width: "100%", maxWidth: "405px"}}>
                    <a href="/">Terms & Conditions</a>
                    <a href="/">Legal</a>
                    <a href="/">Privacy</a>
                </div>
            </form>
        </div>
    </div>
};

export default SignIn;
