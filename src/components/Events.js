import React from 'react';
import '../css/team.css';
import '../css/events.css';
import Footer from './Footer';
import BGMI from '../images/events/bgmi.png';
import valo from '../images/events/valo.jpeg';

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
                On July 28th, a thrilling Valorant event took place at 9 PM, featuring three competitive teams and 15 skilled players. Centered around Team Deathmatch, the event intensified the competition. Following a Best of 3 format, "Bot Frag," "DEATH Squad," and "LND Clan" entered the fray. LND Clan swiftly triumphed over DEATH Squad in two consecutive matches. Then, Bot Frag's dominant performance against DEATH Squad secured their spot in the finals. The ultimate showdown saw LND Clan facing Bot Frag. With a narrow 100-99 victory, LND Clan claimed the first match. Bot Frag rebounded in the second match with a 100-88 win. In the final clash, LND Clan's resilience prevailed, securing a 100-95 victory. The tournament's victors, Team LND Clan, showcased exceptional prowess, emerging triumphant after an intense Valorant spectacle.
                <a class="event-link" href="https://drive.google.com/file/d/1inJzSPbjteGyhO7Zr1CcxMjdvmslB1Rd/view?usp=sharing" target="_blank">
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
                <a class="event-link" href=" https://drive.google.com/drive/folders/1ck2anXDSTCNDpYw3Lvnxy3fq7psMHiRE" target="_blank">
                  Rulebook
                </a>
              </p>
            </div>
          </div>
          <div class="event-card">
            <div class="event-card-inside">
              <img class="event-image" src={BGMI} alt="VR Gaming Zone" />
              <span class="event-heading">
                VR Zone
              </span>
              <p class="event-description">
                Raw talent meets grace and what follows is a showdown of multitudes of cultural competitions, dance face-offs. Fluxus has a plethora of events from all genres sporting talent from all across central India which are eye-candy for appreciators of culture.
                <a class="event-link" href="/">
                  View More
                </a>
              </p>
            </div>
          </div>
          <div class="event-card">
            <div class="event-card-inside">
              <img class="event-image" src={BGMI} alt="Valorant Fest" />
              <span class="event-heading">
                Valo Rumble
              </span>
              <p class="event-description">
                Raw talent meets grace and what follows is a showdown of multitudes of cultural competitions, dance face-offs. Fluxus has a plethora of events from all genres sporting talent from all across central India which are eye-candy for appreciators of culture.
                <a class="event-link" href="/">
                  View More
                </a>
              </p>
            </div>
          </div>
          <div class="event-card">
            <div class="event-card-inside">
              <img class="event-image" src={BGMI} alt="CODM Fest" />
              <span class="event-heading">
                CODM
              </span>
              <p class="event-description">
                Raw talent meets grace and what follows is a showdown of multitudes of cultural competitions, dance face-offs. Fluxus has a plethora of events from all genres sporting talent from all across central India which are eye-candy for appreciators of culture.
                <a class="event-link" href="/">
                  View More
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
