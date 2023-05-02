import React from "react";
import { Link } from "react-router-dom";
import pepper from "../Images/Leonardo_Diffusion_a_single_red_ultra_realistic_chilli_pepper_0-removebg-preview.png";
import { facebook, linkedin, instagram, twitter } from "../icons";

const Footer = () => {
    return (
        <footer className=" bg-black mt-6 relative">
            <div className=" absolute h-28 w-24 right-10 top-[-60px] -rotate-[35deg] ">
                <img
                    className="bg-transparent block w-full h-full "
                    src={pepper}
                />
            </div>
            <div className="py-3 flex w-[90%] flex-col text-white justify-center content-center mr-auto ml-auto gap-5">
                <div className="self-center">
                    <h1>Recipe Kings</h1>
                </div>
                <div className="text-center">
                    <p>
                        Lorem ipsum dolor sit amet dispicing,<br></br>{" "}
                        consectetur adipisicing elit.
                    </p>
                </div>
                <div className="flex flex-col gap-5 self-center ">
                    <div className="self-center flex gap-5 text-white">
                        <Link to='#' className="grid place-content-center bg-orange-500 h-[32px] w-[32px] rounded-[50%]">
                            <img src={facebook} />
                        </Link>
                        <Link to='#' className="grid place-content-center bg-orange-500 h-[32px] w-[32px] rounded-[50%]">
                            <img src={linkedin} />
                        </Link>
                        <Link to='#' className="grid place-content-center bg-orange-500 h-[32px] w-[32px] rounded-[50%]">
                            <img src={twitter} />
                        </Link>
                        <Link to='#' className="grid place-content-center bg-orange-500 h-[32px] w-[32px] rounded-[50%]">
                            <img
                                src={instagram}
                            />
                        </Link>
                    </div>
                    <p>
                        <a
                            href="https://iconscout.com/icons/facebook"
                            target="_blank"
                            className=" text-orange-500 hover:underline">
                            Free Facebook Icon
                        </a>{" "}
                        by{" "}
                        <a
                            href="https://iconscout.com/contributors/unicons"
                            target="_blank"
                            className="text-orange-500 hover:underline">
                            Unicons Font
                        </a>
                    </p>
                </div>
                <div className=" relative self-center flex gap-5 before:h-[1px]">
                    <Link to={"#"}>Recipes</Link>
                    <Link to={"#"}>Sensations</Link>
                    <Link to={"#"}>Sign in</Link>
                </div>
                <div className="flex justify-between ">
                    <h3>@Copyright 2023</h3>
                    <div className="flex gap-5">
                        <Link to={"#"}>Terms and Condition</Link>
                        <Link to={"#"}>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;