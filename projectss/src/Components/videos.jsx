import '../style/videos.css'
import { useState } from "react";
const Videos=()=>{
    let [video,setVideo]=useState([
        {
            id:1,
            thumbnail:"	https://i.ytimg.com/vi/0n7AWxYCj9I/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDUChiH24-GK6MgafIoIeMz8AMZ1A ",
            title:"Na Roja Nuvve | Kushi | Vijay Deverakonda | Samantha Ruth Prabhu | Hesham Abdul Wahab | Lyrical",
            channel:" Saregama Telug",
            views:"27,804,126 views" 
     
        },
        {
            id:2,
            thumbnail:"https://i.ytimg.com/vi/8sLS2knUa6Y/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAO0veWM9zL6aBUgSTcgeY365fApA",
            title:"Phir Aur Kya Chahiye| Zara Hatke Zara Bachke| Vicky K, Sara Ali K, Arijit Singh,Sachin-Jigar,Amitabh",
            channel:"Saregama Music ",
            views:"59,611,913 views "
        },
        {
            id:3,
            thumbnail:"	https://i.ytimg.com/vi/zAh0s2RvIQs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA7Cdh1FkDlV0sWu4efDVyd-lyq1Q",
            title:"Ram Sita Ram (Telugu) Adipurush | Prabhas,Kriti |Sachet-Parampara,Manoj Muntashir,Ramajogayya | Om R",
            channel:"T-Series Telugu",
            views:"11,163,669 views"
        },
        {
            id:4,
            thumbnail:"	https://i.ytimg.com/vi/11OWuPcElJw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAJfCxtjhUE_jxGLBzpJfEJIZviOQ ",
            title:"Zihaal e Miskin (Video) Javed-Mohsin | Vishal Mishra, Shreya Ghoshal | Rohit Z, Nimrit A | Kunaal V",
            channel:" VYRLOriginals",
            views:"37,253,844 views "
        },
        {
            id:5,
            thumbnail:"https://i.ytimg.com/vi/wejaREXePtg/hq720.jpg?sqp=-…RhyIFYoMjAP&rs=AOn4CLAaOX-8UQB5fY0YM0psqVY91-OqTA",
            title:"Zara Zara Bahekta hai - jalraj [ Slowed + Reverb ] | NIRAJ |",
            channel:"NIRAJ",
            views:"818,362 views"
        },
        {
            id:6,
            thumbnail:"https://i.ytimg.com/vi/ElZfdU54Cp8/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDv98hkYErxwV5vbznDZ86ZvkEl7g ",
            title:"Apna Bana Le - Bhediya | Varun Dhawan, Kriti Sanon| Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya",
            channel:"Zee Music Company",
            views:"200,749,723 views "
        },
        {
            id:7,
            thumbnail:"https://i.ytimg.com/vi/rFPl2XY0uv4/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCr4NC1MSyhMasUQlFfbjPXQXVc3g",

            title:"Vellake Music Video - Alekhya Harika | Vinay Shanmukh, Bharatt-Saurabh, Anirudh Ravichander, S Vijay",

            channel:"Sony Music South",
            views:"2,401,617 views  "
        },
        {
            id:8,
            thumbnail:"https://i.ytimg.com/vi/eBMxIV-0rvE/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCEBCwxyFXMKF_ZfP5TlrVH6fxlXA",
            title:"Non Stop Love Mashup 2023 || Best Of Arijit Singh Jubin Nautiyal |Night Drive Mashup |",
            channel:"Vinyl Lofi",
            views:"5,656,249 views "
        },
        {
            id:9,
            thumbnail:"https://i.ytimg.com/vi/YR12Z8f1Dh8/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD4DZ0C47Xz6bdfG0DeC6kJWAEgWA",
            title:"3 - Why This Kolaveri Di Official Video | Dhanush, Anirudh",
            channel:"Sony Music India",
            views:"399,431,163 views "
        },
        {
            id:10,
            thumbnail:"https://i.ytimg.com/vi/2CXSw1oPj3I/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLC_2Y36GBQm6kGjfTRDeJxNlyppGg",
            title:"Tere Hawaale: Laal Singh Chaddha | Aamir, Kareena | Arijit, Shilpa | Pritam, Amitabh, Advait",
            channel:"T-Series ",
            views:"13,551,479 views "
        },
        {
            id:11,
            thumbnail:"https://i.ytimg.com/vi/7bDGCTnWt2Q/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBA5bW6UtpAqmfWUKjoq4qi37h_zw",
            title:"Kahani Suno 2.0 - Kaifi Khalil (Official Video) | Hai Tamanna Humen Tumhen Dulhan Banaye",
            channel:" VM Music Series",
            views:"1,880,177 views "
        },
        {
            id:12,
            thumbnail:"https://i.ytimg.com/vi/6ZwwapPikyQ/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAsnF1c5uXGIJg8Q6VKrbWW10kxAA",
            title:"Samay Samjhayega Full Song | Tum Prem Ho Sad | Radha Krishn | LOFI | MOhit lalwani | Surya Raj Kamal",
            channel:"ML Records",
            views:"18,880,098 views  "
        }
    ])
    let[shorts,shortvideo]=useState([
{
    thumbnail:"https://i.ytimg.com/vi/c1W4J9j2dXk/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLB9lxRHd6srslh2UWwCBf7_UYhLfA",
    title:"Planning A Performance For",
    views:"21M views"
},
{
    thumbnail:"https://i.ytimg.com/vi/lSl60rR_958/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLDsddtwz0QMzk4djHYb-FwzSmXYPw",
    title:"loveonshorts",
    views:"2M views"
},
{
    thumbnail:"https://i.ytimg.com/vi/ffw2SLS2twc/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLA9rSHf_iqIz2TyyBOQUr30EtxiFg",
    title:"Avaramma nuvu madhyalo ",
    views:"2.8M views"
},
{
    thumbnail:"https://i.ytimg.com/vi/rKIcEJdLDh8/hq720.jpg?sqp=-…AHAAQbQAQE=&rs=AOn4CLB39vLZVWEl_2egxTEf76xn8CWx8g",
    title:"Ljazta  lofi",
    views:"2.2M views"
},
{
    thumbnail:"	https://i.ytimg.com/vi/14BdVj9L05o/oar2.jpg ",
    title:"crazy dance trend",
    views:"4.1M views"
},
{
    thumbnail:"https://i.ytimg.com/vi/PsDfS88SHfQ/hq720.jpg?sqp=-…AHAAQbQAQE=&rs=AOn4CLA1lITd0yOEL9Q_EVxwHmBhZF08UA",
    title:"Malinga sanja",
    views:"632k views"
}
    ])
    let Delete=(id,channel)=>{
        let res=video.filter((x)=> x.id !==id)
        setVideo(res)
        alert(`video of ${channel} got deleted`)
    }
    return(
        <div className="videos">
            <h1>Featured video</h1>
            <div className="videoData">
                {video.map((data)=>{
                    return(
                        <div className="video">
                            <img src={data.thumbnail} alt="" />
                            <div className="videoDetails">
                                <h3>{data.title}</h3>
                                <p>{data.channel}</p>
                                <p>{data.views}</p>
                                <a onClick={()=>Delete(data.id,data.channel)}>Remove</a>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h1>shorts</h1>
        <div className="shorts">
            {
            shorts.map((data)=>{
                return(
            <div className="shortdata">
                <img src={data.thumbnail} alt=""/>
                <div className="shortdetails">
                    <h3>{data.title}</h3>
                    <p>{data.views}</p>

                </div>
            </div>
                )}
                )}
        </div>


   </div>
    );
}
export default Videos;