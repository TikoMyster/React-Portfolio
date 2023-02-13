import React from 'react'
import Twitch from '../assets/twitch.png'
import YouTube from "../assets/YouTube.png"
import Twitter from "../assets/Twitter.png"
import Discord from "../assets/Discord.png"

const Socialmedia = () => {
    return (<section className="bg-primary text-white py-32" id="SocialMedia">
    <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
    
    <div className="social-media mb-5">
        <h2 className="text-[30px] font-bold mb-5 divide- border-b-[5px] w-[90px] border-indigo-600 pb-2">
            Social Media                
        </h2>
        <p className="pb-5">
            Here are links to my social media platforms, feel free to reach out to me anytime.
        </p>                               
    </div>

    <div className="Socialmedia"></div>
</div>

<div className="social media container grid grid-cols-5 pl-20 space-x-9">
                <div>
                        <a href="https://www.twitch.tv/tikomyster">
                                <img src={Twitch} alt="Twitch" />
                        </a>
                </div>  
                <div>
                        <a href="https://www.youtube.com/channel/UCFsPEecFLW6kuYj086x6mNQ">
                                <img src={YouTube} alt="youtube" />
                        </a>
                </div>  
                <div>
                        <a href="https://twitter.com/TikoMyster">
                                <img src={Twitter} alt="twitter" />
                        </a>
                </div>  
                <div>
                        <a href="https://discordapp.com/users/Tiko#6284">
                                <img src={Discord} alt="discord" />
                        </a>
                </div>  
        <h3 className="py-5 text - 2x1">
                    
                </h3>
</div>
</section>
    );
};

export default Socialmedia