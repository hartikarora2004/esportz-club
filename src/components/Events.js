import React from 'react';
import '../css/team.css';
import '../css/events.css';
import Footer from './Footer';
import BGMI from '../images/events/bgmi.jpeg';
import valo from '../images/events/valo.jpeg';
import VR from '../images/events/VR.jpeg';
import CODM from '../images/events/CODM.jpeg';
import Valentine from '../images/events/valentine.jpg';
import Tekken from '../images/events/tekken.jpg';

const Events = () => {
  return (
    <div className="allEvents">
      {
        <div className="events">
          <div class="event-card">
            <div class="event-card-inside">
              <img class="event-image" src={valo} alt="Valorant July 2023" />
              <span class="event-heading">
                Valorant
              </span>
              <p class="event-description">
                On July 28th, an exhilarating Valorant event unfolded at 9 PM, showcasing three competitive teams and 15 skilled players. Focused on Team Deathmatch, the competition surged with intensity. "Bot Frag," "DEATH Squad," and "LND Clan" engaged in a riveting Best of 3 format. LND Clan swiftly conquered DEATH Squad in two matches, while Bot Frag secured their finals slot by outshining DEATH Squad. The grand face-off featured LND Clan against Bot Frag. In a close 100-99 victory, LND Clan seized the initial match. Bot Frag made a strong comeback, winning the second 100-88. However, LND Clan's resilience secured a final 100-95 triumph, emerging as victorious champions of the Valorant tournament.
                <a class="event-link" href="https://drive.google.com/file/d/1inJzSPbjteGyhO7Zr1CcxMjdvmslB1Rd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Rulebook
                </a>
              </p>
            </div>
          </div>
          <div class="event-card">
            <div class="event-card-inside">
              <img class="event-image" src={BGMI} alt="BGMI July 2023" />
              <span class="event-heading">
                BGMI
              </span>
              <p class="event-description">
                The BGMI online event on July 15, 2023, united 24 teams and 92 players, hosted by IIT Ropar's EsportZ Club and sponsored by Razespace India. It showcased skillful gameplay, team synergy, and strategy in Battlegrounds Mobile India. Participants competed in three matches on iconic maps: Erangel, Vikendi, and Sanhok, testing their adaptability and tactics. The event fostered character customization and celebrated gaming culture, offering enticing rewards for standout players. Beyond intense competition, it emphasized community building, creating a memorable experience that combined competitive spirit with camaraderie.
                <a class="event-link" href=" https://drive.google.com/drive/folders/1ck2anXDSTCNDpYw3Lvnxy3fq7psMHiRE" target="_blank" rel="noopener noreferrer">
                  Rulebook
                </a>
              </p>
            </div>
          </div>
          <div class="event-card">
            <div class="event-card-inside">
              <img class="event-image" src={VR} alt="VR Gaming Zone" />
              <span class="event-heading">
                VR Zone
              </span>
              <p class="event-description">
                In the gaming-focused workshop held at Zeitgeist, participants had the exciting opportunity to delve into the captivating realm of Augmented Reality (AR) and Virtual Reality (VR) gaming. The workshop took place at IIT Ropar from 23rd to 26th March and was sponsored by "HIGH CLASS VR" and hosted by the ESportZ club of IIT Ropar. The workshop aimed to introduce attendees to the immersive and interactive experiences that AR and VR technologies can offer in the world of gaming.
                <a class="event-link" href="https://www.instagram.com/reel/CqKd64wgaYB/?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                  View More
                </a>
              </p>
            </div>
          </div>
          <div class="event-card">
            <div class="event-card-inside">
              <img class="event-image" src={valo} alt="Valorant Fest" />
              <span class="event-heading">
                Valo Rumble
              </span>
              <p class="event-description">
                Amid the vibrant Zeitgeist festivities, ESportZ Club orchestrated an intense Valorant tournament featuring 15 fiercely competitive teams. The event ignited strategic battles, leading Team SixT9 to clinch the coveted first place. Team BerserK impressed with a strong 2nd position, while Team Volkeno fought valiantly for third. ESportZ Club applauds all teams for their dedication and virtual battlefield skills. The Valorant tournament injected added excitement into Zeitgeist, showcasing the gaming community's fervor for esports. Anticipate more exhilarating events and gaming spectacles from ESportZ Club, where competition and camaraderie prevail.
                <a class="event-link" href="https://drive.google.com/file/d/13jcme4HTQXgKADZP8AGQVaYb_1BeXsNj/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Rulebook
                </a>
              </p>
            </div>
          </div>
          <div class="event-card">
            <div class="event-card-inside">
              <img class="event-image" src={CODM} alt="CODM Fest" />
              <span class="event-heading">
                CODM
              </span>
              <p class="event-description">
                ESportZ Club buzzed with excitement as it hosted the captivating CODM tournament during Zeitgeist 2023. Over two intense days, more than 30 teams from diverse colleges nationwide fiercely competed for supremacy. Among the formidable 8 teams—THE GODLEVEL, Reapers, Men From Hell, MAVIS 350, OGS, The_Frozen_Ones, HELLSGATE, and Imagine Losing—four advanced to the semi-finals. In a thrilling final clash, The_Frozen_Ones secured the championship in a tight team death match against Imagine Losing, who clinched a well-deserved 2nd place. MAVIS 350 demonstrated their prowess, seizing 3rd by triumphing over Reapers. ESportZ Club commends participants for their sportsmanship and passion, promising more electrifying events that fuel the spirit of esports.
                <a class="event-link" href="https://drive.google.com/file/d/1uJO1I5BsHzPmsNIFSKiZI-iFgAN8dIF-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Rulebook
                </a>
              </p>
            </div>
          </div>
          <div class="event-card">
            <div class="event-card-inside">
              <img class="event-image" src={Tekken} alt="CODM Fest" />
              <span class="event-heading">
                Tekken 7
              </span>
              <p class="event-description">
                ESportZ Club presented the captivating Tekken 7 Showdown on Feb 17, 2023, as part of the Among Us series. Diverse skilled fighters clashed virtually, displaying combat techniques and strategic prowess. Amid intense competition, Sidhant emerged as champion, showcasing remarkable determination. Sidharth secured 2nd, Anshul took 3rd, highlighting gaming prowess. The event witnessed exceptional talent, promising more from ESportZ Club. Cheers to victors and participants for their dedication. Anticipate more thrilling gaming events, embracing competition and camaraderie!
                <a class="event-link" href="/events">
                  View More
                </a>
              </p>
            </div>
          </div>
          <div class="event-card">
            <div class="event-card-inside">
              <img class="event-image" src={Valentine} alt="CODM Fest" />
              <span class="event-heading">
                Valentine's Duo
              </span>
              <p class="event-description">
                ESportZ Club's Valentine's Duo Event, part of Among Us 2023 series, infused virtual air with love. The event showcased Valorant and BGMI Duo competitions, uniting gaming pairs for thrilling adventures. In Valorant, IRON BUDDYS clinched champion title with remarkable teamwork. BREAKFAST SKIPPERS secured 2nd, THE DYNAMIC DUO 3rd. BGMI saw RYTNIX in 1st, JOKER 2nd, and COMMUNIST ARMY 3rd. ESportZ Club congratulates winners and participants for their dedication. The heartwarming celebration spread joy in the gaming community. Await more excitement from ESportZ Club's future events, where competition and camaraderie flourish!
                <a class="event-link" href="https://drive.google.com/drive/folders/1aPTzmplP2w7Z59g4OFhO3is8wIkLsUmQ?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Rulebooks
                </a>
              </p>
            </div>
          </div>
        </div>
      }
      {
        <div className="div1 d-none d-md-block">
          <div className="divrect">
          </div>
          <div className="recttext">
            Events
          </div>
        </div>
      }
      <Footer />
    </div>
  );
};

export default Events;
