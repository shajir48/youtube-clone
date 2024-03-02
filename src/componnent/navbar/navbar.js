import React, { useState,} from 'react';
import { IoMenuOutline } from "react-icons/io5";
import "./navbar.css"
import "./nav.css"
import { FaYoutube } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import { IoMdMic } from "react-icons/io";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import shajirImage from '../../img/shajir.jpg';
import "./slidebar.css"
import { MdSubscriptions } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { LiaFileVideoSolid } from "react-icons/lia";
import { GoClock } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { LuListVideo } from "react-icons/lu";
import { BsFire } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { BiMovie } from "react-icons/bi";
import { VscRadioTower } from "react-icons/vsc";
import { SiYoutubegaming } from "react-icons/si";
import { RiNewspaperLine } from "react-icons/ri";
import { BsTrophy } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { SiStylelint } from "react-icons/si";
import { MdOutlinePodcasts } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { LiaYoutubeSquare } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinedFlag } from "react-icons/md";
import { MdOutlineHelpOutline } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";
import { BiSolidVideos } from "react-icons/bi";



function Navbar({ slide, clickSlide }) {
    const [down, setDown] = useState(false);
    const [showLess, setShowLess] = useState(true);
    const [arrow, setArrow] = useState(true);
    const [down1, setDown1] = useState(false);
    const [showLess1, setShowLess1] = useState(true);
    const [arrow1, setArrow1] = useState(true);


    const downButtonClick = () => {
        setDown(!down);
        setShowLess(!showLess);
        setArrow(!arrow);
    }

    const downButtonClick1 = () => {
        setDown1(!down1);
        setShowLess1(!showLess1);
        setArrow1(!arrow1);
    }
    return(
        <div className="navbar">
            <header className="header">
                <ul>
                    <IoMenuOutline className="icon" onClick={clickSlide}/>{console.log(slide)}
                    <FaYoutube className="brand"/>
                    <h3 className="brand-text">You Tube <span>IN</span></h3>
                    <div className="serch-div">
                        <input  type="text" className="serch" placeholder="Serch"/> 
                        <SlMagnifier className="icon-1"/>
                    </div>
                    <div className="voice">
                    <IoMdMic />
                    </div>
                    <AiOutlineVideoCameraAdd className="create"/>
                    <GoBell className="bell"/>
                    <div className="noti"><h4>99+</h4></div>
                    <img src={shajirImage} alt="Shajir" className="image"/> 
                </ul>
            </header>
            <div className={slide===false ? 'slidebar' : 'slidebar1'}>
                    <div className="box-1">
                        <button className="home-c">
                            <h2><span><MdHomeFilled /></span>Home</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><SiYoutubeshorts /></span>Shorts</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><MdSubscriptions /></span>Subscriptions</h2>
                        </button>
                    </div>
                    <div className={down===false ? 'box-2' : 'box-2-1'}>
                        <button className="home-c">
                            <h2><span><IoIosArrowForward /></span>You</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><ImProfile /></span>Your Channel</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><FaHistory /></span>History</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><LiaFileVideoSolid /></span>Your Videos</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><GoClock /></span>Watch Later</h2>
                        </button>
                        <button className="home-c" onClick={downButtonClick}>
                            <h2><span>{arrow ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>{showLess ? 'Show More' : 'Show Less'}</h2>{console.log(showLess)}
                        </button>
                        <button className="home-c">
                            <h2><span><BiLike /></span>Like Videos</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><LuListVideo /></span>Sound From Shorts</h2>
                        </button>
                    </div>
                    <div className={down1===false ? 'box-3' : 'box-3-1'}>
                        <h2>Subscriptions</h2>
                        <button className="home-c" onClick={downButtonClick1}>
                            <h2><span>{arrow1 ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>{showLess1 ? 'Show More' : 'Show Less'}</h2>
                        </button>
                    </div>
                    <div className="box-4">
                    <h2>Explore</h2>
                        <button className="home-c">
                            <h2><span><BsFire /></span>Trendin</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><AiOutlineShopping /></span>Shoping</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><IoMusicalNoteOutline /></span>Music</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><BiMovie /></span>movies</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><VscRadioTower /></span>Live</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><SiYoutubegaming /></span>Game</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><RiNewspaperLine /></span>News</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><BsTrophy /></span>Sports</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><GoLightBulb /></span>Learning</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><SiStylelint /></span>Fasion & beauty</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><MdOutlinePodcasts /></span>Podcast</h2>
                        </button>
                    </div>
                    <div className="box-5">
                    <h2>More From You Tube</h2>
                        <button className="home-c">
                            <h2><span><FaYoutube /></span>YouTube Premium</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><LiaYoutubeSquare /></span>YouTube Studio</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><SiYoutubemusic /></span>YouTube Music</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><TbBrandYoutubeKids /></span>YouTube Kids</h2>
                        </button>
                    </div>
                    <div className="box-6">
                        <button className="home-c">
                            <h2><span><IoSettingsOutline /></span>Settings</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><MdOutlinedFlag /></span>Report history</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><MdOutlineHelpOutline /></span>help</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><RiFeedbackLine /></span>Send feedback</h2>
                        </button>
                    </div>
                    <div className="box-7">
                        <p>AboutPressCopyrightContact usCreatorsAdvertiseDevelopers
                    TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
                        </p>
                    </div>
                    <div className="box-8">
                        <button className="home-c">
                            <h2><span><MdHomeFilled /></span>Home</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><SiYoutubeshorts /></span>Shorts</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><MdSubscriptions /></span>Subscriptions</h2>
                        </button>
                        <button className="home-c">
                            <h2><span><BiSolidVideos /></span>You</h2>
                        </button>
                    </div>
            </div>
    <div className={slide===false ? 'container' : 'container1'}>
    <div className="nav">
        <div className='con-nav'>
                    <div className='connav'>
                        <button className='but-1'>All</button>
                        <button className='but'>Live</button>
                        <button className='but'>Mixes</button>
                        <button className='but'>Thalapathy Vijay</button>
                        <button className='but'>Super hero movies</button>
                        <button className='but'>Music</button>
                        <button className='but'>Games</button>
                        <button className='but'>Tamil Cinima</button>
                        <button className='but'>Science Fiction</button>
                        <button className='but'>News</button>
                        <button className='but'>Filmi</button>
                        <button className='but'>Gadgets</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;