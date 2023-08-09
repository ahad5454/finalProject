

import React, { useEffect } from "react";
import Iteams from "./Iteams";
import { useState } from "react";


function Home() {

  const [articles, setarticles] = useState(
    [
      {
        "source": { "id": "usa-today", "name": "USA Today" },
        "author": "Ken Tran, Josh Meyer",
        "title": "Donald Trump calls for judge's recusal, venue change in his 2020 election case - USA TODAY",
        "description": "Donald Trump said he will request the judge presiding over the Jan. 6 case to recuse herself, saying there is \"no way I can get a fair trial.\"",
        "url": "https://www.usatoday.com/story/news/politics/2023/08/06/donald-trump-indictment-jan-6-recusal/70539591007/",
        "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/08/06/USAT/70539599007-gty-1579471628.jpg?crop=5407,3055,x0,y272&width=3200&height=1809&format=pjpg&auto=webp",
        "publishedAt": "2023-08-06T21:10:08Z",
        "content": "WASHINGTON Former President Donald Trump will ask for the federal judge presiding in his criminal case over his attempts to overturn the 2020 election to recuse herself, along with a change of venue … [+3885 chars]"
      },
      {
        "source": { "id": "reuters", "name": "Reuters" },
        "author": "Pavel Polityuk",
        "title": "Ukraine says U.S and German air defence systems 'highly effective' - Reuters",
        "description": "Ukraine is seeing \"significant results\" from U.S. and German air defence systems, President Volodymyr Zelenskiy said on Sunday, despite waves of Russian air strikes that Kyiv says targeted civilians and residential buildings.",
        "url": "https://www.reuters.com/world/europe/russia-launches-new-burst-missile-drone-attacks-ukrainian-air-force-says-2023-08-06/",
        "urlToImage": "https://www.reuters.com/resizer/ALu0FVovmIrUhrbLUzseNEvb1S0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CCBFTO6TINIELNYMFDORU4BSWU.jpg",
        "publishedAt": "2023-08-06T21:07:00Z",
        "content": "KYIV, Aug 6 (Reuters) - Ukraine is seeing \"significant results\" from U.S. and German air defence systems, President Volodymyr Zelenskiy said on Sunday, despite waves of Russian air strikes that Kyiv … [+4066 chars]"
      },
      {
        "source": { "id": null, "name": "pgatour.com" },
        "author": "Staff",
        "title": "Final round of Wyndham Championship scheduled to resume - PGA TOUR - PGA TOUR",
        "description": "Update: Forecast as of 6:55 p.m. ET",
        "url": "https://www.pgatour.com/article/news/latest/2023/08/06/wyndham-championship-delayed-thunderstorm-rain-weather-sedgefield-country-club",
        "urlToImage": "https://res.cloudinary.com/pgatour-prod/w_1200,h_628,c_fill,f_auto/pgatour/news/editorial/2023/08/06/wyndham-weather.jpg",
        "publishedAt": "2023-08-06T21:02:39Z",
        "content": "Written by Staff \r\n@PGATOUR\r\nUpdate: Forecast as of 6:55 p.m. ET\r\nPlay has resumed at the Wyndham Championship.\r\nUpdate: Forecast as of 6:17 p.m. ET\r\nPractice facilities are open at Sedgefield Countr… [+613 chars]"
      },
      {
        "source": { "id": null, "name": "Yahoo Entertainment" },
        "author": "NICOLE WINFIELD",
        "title": "Pope discusses health, his ditched peace prayer in Fatima and LGBTQ+ Catholics in airborne briefing - Yahoo News",
        "description": "Pope Francis said Sunday his recovery from his latest abdominal surgery is going well and stressed that he ditched speeches during his five-day trip to...",
        "url": "https://news.yahoo.com/pope-discusses-health-ditched-peace-205133734.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/kvvpA7S4he_FLyCGZFUgzw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/a5dae46ad64103bd8621f3b825898f86",
        "publishedAt": "2023-08-06T20:51:33Z",
        "content": "ABOARD THE PAPAL PLANE (AP) Pope Francis said Sunday his recovery from his latest abdominal surgery is going well and stressed that he ditched speeches during his five-day trip to Portugal and spoke … [+3600 chars]"
      },
      {
        "source": { "id": "reuters", "name": "Reuters" },
        "author": "Reuters",
        "title": "Ukraine calls Jeddah talks productive, Russia calls them doomed - Reuters UK",
        "description": "A senior Ukrainian official said on Sunday that talks in Saudi Arabia to make headway towards a peaceful settlement of the war with Russia had been productive, but Moscow called the meeting a doomed attempt to swing the Global South behind Kyiv.",
        "url": "https://www.reuters.com/world/ukraine-calls-jeddah-talks-productive-russia-calls-them-doomed-2023-08-06/",
        "urlToImage": "https://www.reuters.com/resizer/P7USKM_o0xL4RtNLtWZasMn6020=/1024x536/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SIFBSFSEJVNY5BWMJYEPGYRKXA.jpg",
        "publishedAt": "2023-08-06T19:56:00Z",
        "content": "Aug 6 (Reuters) - A senior Ukrainian official said on Sunday that talks in Saudi Arabia to make headway towards a peaceful settlement of the war with Russia had been productive, but Moscow called the… [+2585 chars]"
      },
      {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "Veronica Stracqualursi",
        "title": "Pence says he’ll ‘comply with the law’ if called to testify in Trump 2020 election trial - CNN",
        "description": "Former Vice President Mike Pence said he would comply with the law if he were compelled to testify in former President Donald Trump’s trial in the 2020 election case.",
        "url": "https://www.cnn.com/2023/08/06/politics/pence-trump-january-6-trial-cnntv/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230714163116-01-mike-pence-0714.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-08-06T19:35:00Z",
        "content": "Former Vice President Mike Pence said he would comply with the law if he were compelled to testify in former President Donald Trumps trial in the 2020 election case. \r\nI have no plans to testify, but… [+1992 chars]"
      },
      {
        "source": { "id": "the-washington-post", "name": "The Washington Post" },
        "author": "Jacob Bogage, Joanna Slater",
        "title": "Trump's moves to overturn 2020 election were 'aspirational,' not criminal, his lawyer argues - The Washington Post",
        "description": "John Lauro, who is defending Trump against four felony charges brought by the government, said the ex-president's campaign was speech protected by the First Amendment.",
        "url": "https://www.washingtonpost.com/politics/2023/08/06/trump-jan6-lawyer/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/08-06-2023/t_0f04ab811eed4a6980d71157c08d4f36_name_Screenshot_2023_08_06_at_2_52_52_PM.png&w=1440",
        "publishedAt": "2023-08-06T19:31:33Z",
        "content": "Comment on this story\r\nComment\r\nAn attorney for former president Donald Trump said on Sunday that he will argue that Trumps failed attempt to cling to power after the 2020 election was aspirational a… [+6053 chars]"
      },
      {
        "source": { "id": null, "name": "CBS Sports" },
        "author": "",
        "title": "USWNT coaching candidates: Who should replace Vlatko Andonovski if USA move on after World Cup debacle - CBS Sports",
        "description": "USWNT are out and Andonovski's contract was always set to expire at the end of the year",
        "url": "https://www.cbssports.com/soccer/news/uswnt-coaching-candidates-who-should-replace-vlatko-andonovski-if-usa-move-on-after-world-cup-debacle/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/08/06/4ce3243c-dacb-42b9-b0f8-8222414a1813/thumbnail/1200x675/73465b7679f86db658d2c15f1f9c40aa/uswnt-12.jpg",
        "publishedAt": "2023-08-06T19:22:00Z",
        "content": "The United States women's national team were eliminated by Sweden in the 2023 FIFA Women's World Cup in cruel fashion on Sunday, falling in penalty kicks. The squad suffered their worst-ever finish i… [+6067 chars]"
      },
      {
        "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
        "author": "SB Lawal",
        "title": "Niger coup: Divisions as ECOWAS military threat fails to play out - Al Jazeera English",
        "description": "As a deadline to restore Niger’s democratic government passes, strong ECOWAS reaction to Niger coup now appears divided.",
        "url": "https://www.aljazeera.com/news/2023/8/6/niger-coup-divisions-as-ecowas-military-threat-fails-to-play-out",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/08/Niger-1691334192.jpg?resize=1920%2C1440",
        "publishedAt": "2023-08-06T19:19:14Z",
        "content": "All eyes are on the next move by West African leaders who vowed to attack coup leaders in Niger if they failed to free the detained president and revert back to a democratically elected government.\r\n… [+7284 chars]"
      },
      {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "Kostan Nechyporenko, Denis Lapin, Tim Lister",
        "title": "Explosions hit road bridges between Crimea and occupied Ukraine - CNN",
        "description": "Explosions hit critical road bridges linking occupied Crimea with parts of Kherson region under Russian control, Russian authorities say, as Ukraine escalates its targeting of Russian infrastructure and territory.",
        "url": "https://www.cnn.com/2023/08/06/europe/crimea-road-bridge-explosions-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230806120543-02-crimea-bridge-explosion-080623.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-08-06T18:31:00Z",
        "content": "Explosions hit critical road bridges linking occupied Crimea with parts of Kherson region under Russian control, Russian authorities say, as Ukraine escalates its targeting of Russian infrastructure … [+2356 chars]"
      },
      {
        "source": { "id": "reuters", "name": "Reuters" },
        "author": "Reuters",
        "title": "Daimler Truck CFO Jochen Goetz dies in 'tragic accident' - Reuters",
        "description": "Daimler Truck's <a href=\"https://www.reuters.com/markets/companies/DTGGe.DE\" target=\"_blank\">(DTGGe.DE)</a> Chief Financial Officer Jochen Goetz has died in a \"tragic accident,\" the company said on Sunday.",
        "url": "https://www.reuters.com/business/autos-transportation/daimler-truck-cfo-jochen-goetz-dead-company-2023-08-06/",
        "urlToImage": "https://www.reuters.com/resizer/QmMu_FH0hnkVb0Ofbvt-eS8JYRk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5OKWXP3Y2NIALCLLCVJ62QTTSU.jpg",
        "publishedAt": "2023-08-06T18:12:00Z",
        "content": "FRANKFURT, Aug 6 (Reuters) - Daimler Truck's (DTGGe.DE) Chief Financial Officer Jochen Goetz has died in a \"tragic accident,\" the company said on Sunday.\r\nGoetz, 52, died on Saturday, a statement sai… [+1288 chars]"
      },
      {
        "source": { "id": null, "name": "MMA Fighting" },
        "author": "MMA Fighting Newswire",
        "title": "Nick Diaz calls to fight Jake Paul or Logan Paul after Nate Diaz’s loss: ‘I’m a lot better than both of these… - MMA Fighting",
        "description": "Nick Diaz wants revenge against the Paul brothers.",
        "url": "https://www.mmafighting.com/2023/8/6/23822038/nick-diaz-calls-to-fight-jake-paul-or-logan-paul-after-nate-diazs-loss-im-a-lot-better-than-both-of",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/rM7QyKhSEYo4MoehJnhGG_URm7Y=/0x0:4330x2267/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24833714/1471339696.jpg",
        "publishedAt": "2023-08-06T18:00:00Z",
        "content": "Nick Diaz wants revenge for the Diaz army.\r\nDiaz, 40, was in attendance Saturday at the American Airlines Center in Dallas to support his younger brother Nate Diaz, who made his professional boxing d… [+2073 chars]"
      },
      {
        "source": { "id": "fox-sports", "name": "Fox Sports" },
        "author": null,
        "title": "FireKeepers Casino 400 live updates: Race delayed; Tyler Reddick leads - FOX Sports",
        "description": "The NASCAR Cup Series continues with the FireKeepers Casino 400 at Michigan International Speedway. Here are the top moments!",
        "url": "https://www.foxsports.com/stories/nascar/firekeepers-casino-400-live-updates-top-moments-from-michigan-intl-speedway",
        "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/08/1408/814/08.02.23_NASCAR-Top-Moments_FireKeepers-Casino-400_Horizontal.jpg?ve=1&tl=1",
        "publishedAt": "2023-08-06T17:56:50Z",
        "content": "The NASCAR Cup Series\r\n' August schedule begins Sunday with the FireKeepers Casino 400 at Michigan International Speedway, and we've got you covered with all the action from start to finish as driver… [+2633 chars]"
      },
      {
        "source": { "id": null, "name": "YouTube" },
        "author": null,
        "title": "Full SummerSlam Results and Highlights: WWE Now, August 6, 2023 - WWE",
        "description": "Roman Reigns bested Jey Uso in Tribal Combat as Jimmy Uso betrayed his brother, IYO SKY cashed in her Money in the Bank contract to become WWE Women’s Champi...",
        "url": "https://www.youtube.com/watch?v=J2ca3ya2PeU",
        "urlToImage": "https://i.ytimg.com/vi/J2ca3ya2PeU/maxresdefault.jpg",
        "publishedAt": "2023-08-06T17:38:01Z",
        "content": null
      },
      {
        "source": { "id": null, "name": "Gizmodo.com" },
        "author": "Linda Codega",
        "title": "D&D Artist Confirms They Used AI Art in New Sourcebook - Gizmodo",
        "description": "An artist for Bigby Presents: Glory of the Giants! has admitted to using AI to generate \"certain details\" of new art for the sourcebook.",
        "url": "https://gizmodo.com/dnd-ai-art-bigbys-giants-book-artist-generators-wotc-1850710496",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/47da4864e6415fe4507d68a96a206d04.png",
        "publishedAt": "2023-08-06T17:30:00Z",
        "content": "One of the artists working on Dungeons &amp; Dragons newest bookBigby Presents: Glory of the Giants!, has stated that they used AI to help generate certain details or polish and editing in a recent p… [+3009 chars]"
      },
      {
        "source": { "id": null, "name": "SFGate" },
        "author": "Katie Dowd",
        "title": "After 2 die of Legionnaires, Bay Area officials search for source - SFGATE",
        "description": "Bay Area health officials believe both victims visited the same spa in the days leading up to their deaths.",
        "url": "https://www.sfgate.com/bayarea/article/legionnaires-disease-deaths-bay-area-18281563.php",
        "urlToImage": "https://s.hdnux.com/photos/01/33/77/10/24113681/3/rawImage.jpg",
        "publishedAt": "2023-08-06T17:28:46Z",
        "content": "Zen Day Spa on San Pablo in Richmond, Calif., is believed to be the common location in three cases of Legionnaires' disease, county health officials said in Aug. 2023.\r\nGoogle Street View\r\nAn investi… [+1848 chars]"
      },
      {
        "source": { "id": null, "name": "The Tribune India" },
        "author": "The Tribune India",
        "title": "Watch: First look of moon as captured by Chandrayaan-3 - The Tribune India",
        "description": null,
        "url": "https://www.tribuneindia.com/news/science-technology/watch-first-look-of-moon-as-captured-by-chandrayaan-3-532724",
        "urlToImage": null,
        "publishedAt": "2023-08-06T17:15:00Z",
        "content": null
      },
      {
        "source": { "id": "associated-press", "name": "Associated Press" },
        "author": null,
        "title": "Musk says his cage fight with Zuckerberg will be streamed on X - The Associated Press",
        "description": "Elon Musk says his potential in-person fight with Mark Zuckerberg would be streamed live on his social media site X, formerly known as Twitter. The two tech billionaires seemingly agreed to a “cage match” face-off in late June. Must wrote in a post Sunday tha…",
        "url": "https://apnews.com/article/elon-musk-mark-zuckerberg-cage-fight-28598abc5be6959f01c1b0079211a360",
        "urlToImage": "https://dims.apnews.com/dims4/default/d18cdb6/2147483647/strip/true/crop/2000x1125+0+139/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7f%2F3f%2F517f7f0a63223c0094be3fd2ca3d%2F5ce98d3d44ce4a09a66c4deb59784eb0",
        "publishedAt": "2023-08-06T16:42:00Z",
        "content": "NEW YORK (AP) Elon Musk says his potential in-person fight with Mark Zuckerberg would be streamed on his social media site X, formerly known as Twitter.\r\nThe two tech billionaires seemingly agreed to… [+1887 chars]"
      },
      {
        "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
        "author": "Al Jazeera",
        "title": "At least 30 killed after train derails in southern Pakistan - Al Jazeera English",
        "description": "Dozens injured after several carriages of Hazara Express train derailed in Nawabshah, Sindh province.",
        "url": "https://www.aljazeera.com/news/2023/8/6/more-than-dozen-killed-after-train-derails-in-southern-pakistan",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/08/33QP8FW-highres-1691335538.jpg?resize=1920%2C1440",
        "publishedAt": "2023-08-06T16:18:45Z",
        "content": "At least 30 people have been killed and dozens of others injured after a train derailed in southern Pakistan.\r\nSeveral carriages of a Hazara Express train derailed on Sunday near Sahara railway stati… [+2478 chars]"
      },
      {
        "source": { "id": "fox-news", "name": "Fox News" },
        "author": "Danielle Wallace",
        "title": "Adams suggests 'outside agitators' involved in NYC influencer Kai Cenat riot - Fox News",
        "description": "New York City Mayor Eric Adams issued a stark warning to parents regarding social media after Twitch influencer Kai Cenat's giveaway devolved into a riot.",
        "url": "https://www.foxnews.com/politics/adams-suggests-outside-agitators-involved-nyc-influencer-kai-cenat-riot-kids-cannot-raised-social-media",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/08/AP23216787770777.jpg",
        "publishedAt": "2023-08-06T16:08:00Z",
        "content": "New York City Mayor Eric Adams on Saturday suggested that the riot involving thousands of young people that unfolded in Manhattan's Union Square could have been driven by \"outside agitators.\" \r\nAsked… [+4682 chars]"
      }
    ]
  );


  useEffect(() => {

    const getdata= async()=>{

      let url= "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c8bb5dfa968248a29af6263abb8e28ec";

      let data= await fetch(url);
      let parseddata= await data.json();
      setarticles(parseddata.articles);

    }
   getdata();
  },)
  

  



  
  return (
    <div className="container my-3">
      <h2>Top headlines</h2>

      <div className="row">

        <div className="col-md-4">
          <Iteams title="Fashion" description="place description here" url="https://www.sanasafinaz.com/media/wysiwyg/couture/B-391.jpg" />
        </div>

        {articles.map((article) => (
          <div className="col-md-4" key={article.url}>
            <Iteams title={article.title} description={article.description} url={article.urlToImage} newsUrl={article.url} />

          </div>

        ))}

      </div>
    </div>

  );
}

export default Home;
