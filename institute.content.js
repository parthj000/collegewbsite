import makeSections, { createImage, happen, profileCards } from "./scr.js";
var arr = [
  {
    heading: "Institute Genesis",
    headingText: "Institute Genesis",
    content:
      "<span class='clr b'>Retrospect</span><br><br><p>With the aim to cater the need of skilled man power in the textile industry of Bhilwara, Manikya Lal Verma Textile Institute was established in 1984 as a polytechnic college under the control of Technical Eductaion Department, Govt. of Rajasthan. In the year 1988; it was upgraded to a degree level engineering college and rechristened Manikya Lal Verma Textile Institute. It started with the Textile Technology branch with an intake of 30 students per year through RPET. It is affiliated to the University of Rajasthan and is approved by A.I.C.T.E.</p><br><br><span class='clr b'>Growth</span><br><br><p>By the year 1990, the diploma course withered away and the B. E. course in Textile Technology became full fledged with an intake of 30 students per batch, later on the intake in the branch was increased to 120 students per batch through REAP and JEE-Mains and this B.Tech Course is affiliated to the Rajasthan Technical University,Kota and is approved by A.I.C.T.E.</p><br><br><p>B.Tech in Textile Chemistry was introduced in the year 1993-94, with an intake of 20 students per batch, to meet the requirement of process houses. In the year 2006, another course B.Tech. (Textile Engineering) was introduced with an intake of 40 students per batch and simultaneously the annual intake in B.Tech. (Textile Chemistry) was raise to 40 students per batch..</p><br><br>B.Tech. in Information Technology was introduced in the year 2001-02 with an intake of 40 students per batch which is currently 60 students per batch. In the year 2003, another branch Electronics & Communication Engineering was introduced with an intake of 60 students per batch. Consequently college was renamed as MLV Textile & Engineering College, Bhilwara in 2006.<br><br><br>B.Tech in Mechnical Engineering was introduced in the year 2007 with an intake of 60 students per batch.In the year 2011, M.Tech in branch Textile Technology was introduced with an intake of 18 students per batch.In the year 2015,Ph.D in Textiles was introduced.",
    id: "one",
  },

  {
    heading: "Bhilwara",
    headingText: "Bhilwara",
    id: "two",
    content:
      "Nestled in the heart of south-central Rajasthan, Bhilwara emerges as a city steeped in history and brimming with vitality. Situated approximately 30 miles north of Chittaurgarh, this vibrant urban center embodies the rich cultural tapestry of northwestern India.<br><br><div style='height:20rem;'><img class='img img-sp' src= './bhilwara.jpg'></img></div><br>Once a pivotal part of the Udaipur princely state, Bhilwara seamlessly transitioned into the fabric of Rajasthan in 1948. Since then, it has blossomed into a dynamic hub of commerce, culture, and community.<br>Bhilwara's allure lies not only in its strategic location as a pivotal rail and road communications nexus but also in its vibrant markets pulsating with energy. It serves as a bustling marketplace where traders, artisans, and enthusiasts converge, creating a vibrant atmosphere teeming with life.<br><br>The city's industrial landscape paints a picture of resilience and innovation. From cotton milling to hand-loom weaving, Bhilwara's industries form the backbone of its economic vitality. The rhythmic clatter of looms and the hum of machinery resonate through its streets, embodying the spirit of industriousness that defines the city.<br><br><div style='height:20rem;  '><img class='img img-sp'src= './bhilwara-industry.jpg'></img></div><br><br>Among its bustling industries, the art of hand-loom weaving holds a special place in Bhilwara's cultural heritage. Generations of artisans have honed their craft, weaving intricate patterns and vibrant colors into the fabric of everyday life. Each thread tells a story, weaving together the past and the present in a timeless tapestry of tradition.<br><br>Beyond its industrial prowess, Bhilwara boasts a thriving healthcare and educational ecosystem. With a well-equipped hospital and a network of colleges affiliated with the esteemed University of Rajasthan in Jaipur, the city nurtures the minds and bodies of its inhabitants, laying the foundation for a prosperous future.<br><br>But Bhilwara's true essence lies in the warmth and hospitality of its people. Amidst the bustling streets and bustling markets, one finds a community bound together by shared traditions and aspirations. From the jovial banter of street vendors to the laughter echoing through its alleys, Bhilwara exudes a sense of camaraderie that transcends boundaries.<br><br>As the sun sets over the horizon, casting a golden glow upon its bustling streets, Bhilwara stands as a testament to the spirit of resilience and progress. It is a city where tradition meets modernity, where the echoes of the past harmonize with the rhythms of the present. In Bhilwara, every street corner tells a story, and every encounter is an invitation to explore the rich tapestry of life.",
  },
  {
    heading: "Mission <span class = 'clr'>2028</span>",
    headingText: "Mission 2028",
    content:
      "<div style='display:flex; justify-content:center;  gap:1rem; height:20rem; ' ><div><img class='img img-sp'src= './mission_2028.jpeg'></img></div><div><img class='img img-sp'src= './mission_2028.jpeg'></img></div></div><br><br>",
    id: "three",
  },
];

console.log("hello content");
happen("no");
makeSections(arr);
