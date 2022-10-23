import React from 'react';
import GameCard from './GameCard';
import './RecommendedGames.css';

function RecommendedGames() {
  return (
    <div className="recommendedGames">
        <GameCard
          image={ require("./images/gran-turismo-7.jpg")}
          title="Gran Turismo 7"
          description="Whether you’re a competitive or casual racer, collector, tuner, livery designer or photographer – find your line with a staggering collection of game modes including fan-favourites like GT Campaign, Arcade and Driving School. With the reintroduction of the legendary GT Simulation Mode, buy, tune and race your way through a rewarding solo campaign as you unlock new cars and challenges. And if you love going head-to-head with others, hone your skills and compete in the GT Sport Mode. With over 420 cars available at Brand Central and the Used Car Dealership from day one, Gran Turismo 7 recreates the look and feel of classic motors and bleeding-edge supercars alike in unparalleled detail. Each car handles differently and feels unique as you navigate over 90 track routes in dynamic weather conditions, including classic courses from GT history."
          released="04.03.2022"
          price="44.99€"
          discount="64.99€"
          console={ require("./images/ps5-logo.png")}
        />
        <GameCard 
          image={ require("./images/stray.jpg")}
          title="Stray"
          description="Stray is a third-person cat adventure game set amidst the detailed neon-lit alleys of a decaying cybercity and the murky environments of its seedy underbelly. See the world through the eyes of a stray and interact with the environment in playful ways. Stray is developed by BlueTwelve Studio, a small team from south of France mostly made of cats and a handful of humans."
          released="19.07.2022"
          price="24.99€"
          discount="39.99€"
          console={ require("./images/ps4-logo.png")}
        />
        <GameCard 
          image={ require("./images/fifa-2023.jpg")}
          title="FIFA 2023"
          description="EA SPORTS™ FIFA 23 brings The World’s Game to the pitch, with both men’s and women’s FIFA World Cup™ tournaments, the addition of women’s club teams and new ways to play your favourite modes. Advances in HyperMotion2 Technology bring even more of the action and realism of football to the pitch on PS5. Driven by twice as much real-world motion capture, there is now more true football animation than ever before in every match."
          released="26.09.2022"
          price="59.99€"
          discount="79.99€"
          console={ require("./images/xbox-logo.png")}
        />
        <GameCard 
          image={ require("./images/tiny-tinas-wonderlands.jpg")}
          title="Tiny Tina's Wonderlands"
          description="Bullets, magic and broadswords collide across this chaotic fantasy world brought to life by the unpredictable Tiny Tina. Roll your own multiclass hero and loot, shoot, slash and cast your way through outlandish monsters and loot-filled dungeons on a quest to stop the tyrannical Dragon Lord. Tiny Tina is your disorderly guide through an extraordinary tabletop realm where rules rarely apply. Explore a vast overworld spanning majestic cities, dank mushroom forests, foreboding fortresses and more! Joining you at the table are headstrong captain Valentine and rule-obsessed robot Frette. During your quest to defeat the Dragon Lord, you'll meet a cast of lovable misfits like a lute-wielding Bardbarian and your very own Fairy Punchfather. Everyone's welcome, so join the party, throw on your adventuring boots and be Chaotic Great!"
          released="24.03.2022"
          price="49.99€"
          discount="79.99€"
          console={ require("./images/ps4-logo.png")}
        />
        <GameCard 
          image={ require("./images/elden-ring.jpg")}
          title="Elden Ring"
          description="The Golden Order has been broken. In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered. Marika's offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Will. And now the guidance of grace will be brought to the Tarnished who were spurned by the grace of gold and exiled from the Lands Between. Ye dead who yet live, your grace long lost, follow the path to the Lands Between beyond the foggy sea to stand before the Elden Ring. And become the Elden Lord."
          released="25.02.2022"
          price="54.99€"
          discount="69.99€"
          console={ require("./images/ps5-logo.png")}
        />
        <GameCard 
          image={ require("./images/final-fantasy-7-remake.jpg")}
          title="Final Fantasy 7 Remake"
          description="The world is under the control of Shinra, a corporation controlling the planet's life force as mako energy. In the city of Midgar, Cloud Strife, former member of Shinra's elite SOLDIER unit now turned mercenary lends his aid to the Avalanche resistance group, unaware of the epic consequences that await him. FINAL FANTASY VII REMAKE is a reimagining of the iconic original with unforgettable characters, a mind-blowing story, and epic battles. The story of this first, standalone game in the FINAL FANTASY VII REMAKE project covers up to the party’s escape from Midgar, and goes deeper into the events occurring in Midgar than the original FINAL FANTASY VII."
          released="10.04.2020"
          price="34.99€"
          discount="49.99€"
          console={ require("./images/ps4-logo.png")}
        />
        <GameCard 
          image={ require("./images/skull-and-bones.jpg")}
          title="Skull And Bones"
          description="Enter the perilous paradise of Skull and Bones, inspired by the Indian Ocean during the Golden Age of Piracy. Craft a variety of unique ships to survive, thrive and rule in an immersive world that introduces new challenges and features every season. Be wary in this untamed open world - there are predators lurking around every corner. Long live piracy!"
          released="09.03.2023"
          price="79.99€"
          discount=""
          console={ require("./images/xbox-logo.png")}
        />
        <GameCard 
          image={ require("./images/ghost-of-tsushima.jpg")}
          title="Ghost Of Tsushima - Director's Cut"
          description="Uncover the hidden wonders of Tsushima in this open-world action adventure from Sucker Punch Productions and PlayStation Studios, available for PS5 and PS4. Forge a new path and wage an unconventional war for the freedom of Tsushima. Challenge opponents with your katana, master the bow to eliminate distant threats, develop stealth tactics to ambush enemies and explore a new story on Iki Island. Director's Cut Edition features all additional content released to date, as well as brand new content"
          released="17.07.2020"
          price="34.99€"
          discount="49.99€"
          console={ require("./images/ps5-logo.png")}
        />
    </div>
  )
}

export default RecommendedGames