/* HAGGERTY SOQ packet builder. Used by bid.html ("Build SOQ Packet").
   Fixed pages: About, Contents, Profile of Firm (2), Why HAGGERTY, Leadership grid + leader bios, Team divider, back page.
   Team bio pages come from the people picked in the Bid Team Builder. Headshots come from n8n as short-lived signed links.
   Edit fixed copy in STATIC below or in build tooling; edit the leadership grid and leader bios in SOQ_CONFIG. */
(function () {
const SOQ_CONFIG = {
  // Leadership grid, in order. Shown on every packet.
  grid: [
    ["Ryan Haggerty", "President & CEO"], ["Hugo Mendoza", "VP of Operations"], ["Don Yount", "Senior Construction Advisor"],
    ["David Cuppet", "Advise Manager"], ["Patrick Dobson", "Construction Advisory Services"], ["David Booth", "General Superintendent"],
    ["Scott Penfield", "Senior Project Manager"], ["William Jarvis", "Safety Manager"]
  ],
  bandCount: 9
};
const STATIC = {
"about": "<section class=\"page\">\n  <div class=\"hero\" style=\"background-image:url('@@B@@hero-about.jpg')\">\n    <img class=\"toplogo\" src=\"@@B@@logo.png\">\n    <div class=\"herotext\"><div class=\"kicker\">Statement of Qualifications</div>\n      <div class=\"big\">Our <em>Team</em></div>\n      <div class=\"sub\">One contact. One team. From planning to final walkthrough.</div>@@PREP@@</div>\n  </div>\n  <div class=\"body\">\n    <div class=\"label\">Overview</div>\n    <h1>About <em>HAGGERTY</em></h1>\n    <div class=\"cols2\">\n      <p>HAGGERTY is a full-service general contractor serving Northern California, the Central Valley and the Bay Area for 15 years and nearly 500 projects. The company has grown the same way our best clients have: steady and with purpose.</p>\n      <p>Recent acquisitions of TMW and Miller Pacific have increased the area HAGGERTY serves and the projects we can take on, while we still operate as one team with one point of contact from early planning through final completion. That consistency is why our employees have named us The Best Place to Work five times.</p>\n    </div>\n    <div class=\"label mt\">By the Numbers</div>\n    <div class=\"stats\">\n      <div><b>25,000</b><span>SF headquarters</span></div>\n      <div><b>800+</b><span>Recorded days without a time-loss injury</span></div>\n      <div><b>100</b><span>Employees</span></div>\n      <div><b>76%</b><span>Clients requesting additional projects</span></div>\n      <div><b>60+</b><span>Fleet vehicles</span></div>\n      <div><b>0.81</b><span>Experience modification rate</span></div>\n    </div>\n  </div>\n  <div class=\"foot\"><span class=\"pn\">1</span><span class=\"fl\">Overview</span><span class=\"rule\"></span><img class=\"flogo\" src=\"@@B@@logo.png\"></div>\n</section>",
"firm1": "<section class=\"page\">\n  <div class=\"body\">\n    <div class=\"label\">Profile of Firm</div>\n    <h1>About <em>HAGGERTY</em></h1>\n    <div class=\"fphero\" style=\"background-image:url('@@B@@fp-hardhat.jpg')\"></div>\n    <div class=\"cols2 fp\">\n      <div><h3>Our Mission</h3>\n        <p>HAGGERTY was founded on the belief that every project and every client has a story. We began with a lifetime vision of developing a relationship-based organization that would build, restore, maintain and advise on all things related to the industry. From start to finish, the end result is so much more than just a structure. With a focus on quality, relationships and innovation, we strive to tell a story with every project.</p>\n        <div class=\"mission\"><span>Mission Statement</span>BUILD excellent people and quality projects through a culture of safety &amp; innovation.</div>\n      </div>\n      <div><h3>Core Values</h3>\n        <p>The lens through which we make all of our decisions is founded in our core values, <b>B.U.I.L.D.S.</b></p>\n        <ul class=\"builds\">\n          <li><b>B</b>uild lasting relationships</li>\n          <li><b>U</b>nwavering commitment to safe working environments</li>\n          <li><b>I</b>nvesting in our teams &amp; communities</li>\n          <li><b>L</b>eading in industry creativity &amp; innovation</li>\n          <li><b>D</b>oing the right thing</li>\n          <li><b>S</b>ense of urgency</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"foot\"><span class=\"pn\">3</span><span class=\"fl\">Profile of Firm</span><span class=\"rule\"></span><img class=\"flogo\" src=\"@@B@@logo.png\"></div>\n</section>",
"firm2": "<section class=\"page\">\n  <div class=\"body\">\n    <div class=\"label\">Profile of Firm</div>\n    <h1>History &amp; <em>Community</em></h1>\n    <div class=\"fp2\">\n      <div class=\"ph2\" style=\"background-image:url('@@B@@fp-office.jpg')\"></div>\n      <div class=\"ph2\" style=\"background-image:url('@@B@@fp-fleet-team.jpg')\"></div>\n    </div>\n    <div class=\"cols2 fp\">\n      <div><h3>History</h3>\n        <p>Founded in 2010, HAGGERTY came to life after President &amp; CEO Ryan Haggerty found himself working in the Bay Area for one of the state's top general contractors, commuting daily and building someone else's community. Troubled by this, Ryan and his wife Andrea stepped out on faith and found a strong demand for a design-build general contractor in their own community. Since then, HAGGERTY has grown into the most capable and most advanced general contractor in our market, growing year over year across four service sectors: <b>ADVISE, BUILD, RESTORE, MAINTAIN.</b></p>\n        <p>HAGGERTY operates out of a 25,000 SF office with 60+ trucks, vans and cars in the fleet, 45+ tradesmen in the field and 100 dedicated team members, along with all the necessary equipment. That lets us self-perform work where it makes sense, controlling job costs and schedules. We invite you to stop by our facility and meet our team. The space and the people speak to our abilities, culture and professionalism.</p>\n      </div>\n      <div><h3>Community</h3>\n        <p>We believe in the future of our community and encourage the economic and professional growth of the next generation any way we can. Our staff regularly takes part in local community activities and strongly supports the education of our youth and those in need. We show that support through volunteer work, time, monetary donations and coaching.</p>\n        <p>HAGGERTY is committed to serving San Joaquin County through our relationships with local nonprofits and programs aimed at giving back. There are many opportunities to serve, and we are honored to be part of our community's growth.</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"foot\"><span class=\"pn\">4</span><span class=\"fl\">Profile of Firm</span><span class=\"rule\"></span><img class=\"flogo\" src=\"@@B@@logo.png\"></div>\n</section>",
"why": "<section class=\"page\">\n  <div class=\"body\">\n    <div class=\"label\">The Company</div>\n    <h1>Why <em>HAGGERTY</em></h1>\n    <p class=\"lede\">Every general contractor promises to deliver on time and on budget. What decides whether that promise holds is who runs the job, and how many people stand between that person and the client.</p>\n    <div class=\"photo2\">\n      <div class=\"ph\" style=\"background-image:url('@@B@@why-client.jpg');background-position:center 28%\"></div>\n      <div class=\"ph\" style=\"background-image:url('@@B@@why-phone.jpg');background-position:44% center\"></div>\n    </div>\n    <div class=\"cols3\">\n      <div><h3>One Point of Contact</h3><p>HAGGERTY keeps a single point of contact from planning through completion. The person a client walks the site with is the same person managing the schedule, the budget and the subcontractors.</p></div>\n      <div><h3>Big Enough, Accountable Enough</h3><p>Our team manages complex, multi-trade projects without losing the personal accountability clients expect. Project managers, superintendents and leadership stay connected throughout the job, so decisions move faster.</p></div>\n      <div><h3>Safety Built Into the Job</h3><p>Safety protects people, schedules and operations. With more than 800 recorded days without a lost-time injury and a 0.81 experience modification rate, safety is part of how we plan and run every project.</p></div>\n    </div>\n  </div>\n  <div class=\"foot\"><span class=\"pn\">5</span><span class=\"fl\">The Company</span><span class=\"rule\"></span><img class=\"flogo\" src=\"@@B@@logo.png\"></div>\n</section>",
"divider": "<section class=\"page divider\">\n  <div class=\"hero\" style=\"background-image:url('@@B@@hero-team.jpg')\"></div>\n  <div class=\"body\">\n    <div class=\"label\">Statement of Qualifications</div>\n    <h1>Team Resumes &amp; <em>Relevant Experience</em></h1>\n    <p class=\"lede\" style=\"max-width:5in\">Every HAGGERTY project is led by people who have built this kind of work before. The pages that follow cover our leadership and the project managers, engineers, estimators and superintendents who run our jobs.</p>\n  </div>\n  <div class=\"foot\"><span class=\"pn\">7</span><span class=\"fl\">Project Team</span><span class=\"rule\"></span><img class=\"flogo\" src=\"@@B@@logo.png\"></div>\n</section>",
"back": "<section class=\"page back\">\n  <div class=\"backphoto\" style=\"background-image:url('@@B@@back.jpg')\"></div>\n  <div class=\"backbody\">\n    <img class=\"biglogo\" src=\"@@B@@logo.png\">\n    <div class=\"tag\">Your Vision.<br><em>Our Discipline.</em></div>\n    <div class=\"regions\">Northern California · Central Valley · Bay Area</div>\n    <div class=\"contact\">\n      <div>Haggerty Builds<br>2474 Wigwam Dr<br>Stockton, CA 95205<br>(209) 475-9898</div>\n      <div>haggertybuilds.com<br>info@haggertybuilds.com<br>Emergency Services: (209) 323-6200<br>LIC# 944274</div>\n    </div>\n  </div>\n</section>"
};
const CSS = "\n@page{size:8.5in 11in;margin:0}\n*{box-sizing:border-box;margin:0;padding:0}\nhtml,body{background:#0D1117}\nbody{font-family:Inter,Arial,sans-serif;color:#C9CED4;-webkit-print-color-adjust:exact;print-color-adjust:exact}\n.page{width:8.5in;height:11in;position:relative;overflow:hidden;background:#0D1117;page-break-after:always}\n.page::after{content:'';position:absolute;right:-1.2in;top:-0.6in;width:3.4in;height:3.4in;border-left:1.2px solid #8D531D;transform:rotate(38deg);pointer-events:none}\n.page::before{content:'';position:absolute;right:-1.6in;top:-0.2in;width:3.4in;height:3.4in;border-left:1.2px solid #53351A;transform:rotate(38deg);pointer-events:none}\n.body{padding:.62in .6in 0 .6in}\nem{font-style:normal;color:#F68922}\n.label{font-family:Montserrat;font-weight:800;font-size:8.5pt;letter-spacing:.22em;text-transform:uppercase;color:#E8EAED;margin-bottom:6pt}\n.label.mt{margin-top:20pt}\nh1{font-family:Montserrat;font-weight:900;font-size:27pt;line-height:1.05;color:#fff;margin-bottom:14pt}\nh3{font-family:Montserrat;font-weight:800;font-size:10.5pt;color:#F68922;margin-bottom:5pt}\np{font-size:9.6pt;line-height:1.55}\n.lede{font-size:11pt;line-height:1.55;color:#E2E5E9;max-width:6.6in;margin-bottom:16pt}\n.hero{height:5.1in;background-size:cover;background-position:center 60%;position:relative}\n.heroshade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(13,17,23,.55) 0%,rgba(13,17,23,.05) 35%,rgba(13,17,23,.25) 60%,#0D1117 100%)}\n.toplogo{position:absolute;left:.6in;top:.5in;width:1.55in}\n.herotext{position:absolute;left:.6in;bottom:.35in}\n.kicker{font-family:Montserrat;font-weight:800;font-size:9pt;letter-spacing:.25em;text-transform:uppercase;color:#F68922;margin-bottom:6pt}\n.big{font-family:Montserrat;font-weight:900;font-size:46pt;line-height:1;color:#fff}\n.sub{font-size:11.5pt;color:#E2E5E9;margin-top:8pt}\n.cols2{display:grid;grid-template-columns:1fr 1fr;gap:.35in}\n.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:14pt .3in;margin-top:6pt}\n.stats div{border-left:2px solid #F68922;padding-left:10pt}\n.stats b{display:block;font-family:Montserrat;font-weight:900;font-size:22pt;color:#F68922;line-height:1.1}\n.stats span{display:block;font-size:8pt;text-transform:uppercase;letter-spacing:.06em;color:#A9B0B8;margin-top:3pt}\n.photo2{display:grid;grid-template-columns:1.25fr 1fr;gap:10pt;margin-bottom:22pt}\n.ph{height:3.1in;background-size:cover;background-position:center}\n.cols3{display:grid;grid-template-columns:repeat(3,1fr);gap:.3in}\n.cols3 > div{border-top:2px solid #F68922;padding-top:10pt}\n.lgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:26pt .22in;margin-top:14pt}\n.lcard .lhs{height:2.75in;background-size:cover;background-position:center 25%;background-color:#1B2128}\n.ln{font-family:Inter;font-weight:700;font-size:10.5pt;color:#fff;margin-top:8pt}\n.lt{font-size:8.8pt;color:#A9B0B8;margin-top:2pt}\n.lcard i{display:block;width:16pt;height:2px;background:#F68922;margin-top:6pt}\n.band{position:relative;height:2.35in;background-size:cover;background-position:center}\n.bandshade{position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(13,17,23,.85))}\n.bandtext{position:absolute;left:10pt;bottom:8pt;font-size:8pt;color:#E2E5E9;letter-spacing:.04em}\n.tlist{display:flex;flex-direction:column;gap:9pt}\n.tcard{display:grid;grid-template-columns:1.35in 1fr;gap:.22in;padding-bottom:9pt;border-bottom:1px solid #222A33}\n.tcard:last-child{border-bottom:none}\n.hs{height:1.65in;background-size:cover;background-position:center 25%;background-color:#1B2128}\n.ini,.lhs.ini{display:flex;align-items:center;justify-content:center;background:#1B2128;border:1px solid #2A333D}\n.ini span{font-family:Montserrat;font-weight:900;font-size:26pt;color:#F68922;letter-spacing:.04em}\n.tn{font-family:Montserrat;font-weight:900;font-size:14pt;color:#fff}\n.tt{font-size:9pt;font-weight:600;color:#F68922;text-transform:uppercase;letter-spacing:.08em;margin:1pt 0 5pt}\n.tinfo p{font-size:8.6pt;line-height:1.42}\n.sp{font-family:Montserrat;font-weight:800;font-size:7.5pt;letter-spacing:.18em;text-transform:uppercase;color:#E8EAED;margin:6pt 0 2pt}\n.tinfo ul{list-style:none}\n.tinfo li{font-size:8.4pt;line-height:1.35;padding:1.5pt 0 1.5pt 10pt;position:relative}\n.tinfo li::before{content:'';position:absolute;left:0;top:7pt;width:5pt;height:2px;background:#F68922}\n.tinfo li b{color:#fff;font-weight:600}\n.tinfo li span{color:#A9B0B8;margin-left:6pt}\n.divlogo{height:.9in}\n.bio{color:#C9CED4}\n.bars{position:absolute;inset:0;z-index:0}\n.bars i{position:absolute;background:#FDE6D3;bottom:.55in}\n.bars .b1{left:7.2in;width:.95in;top:5.9in}\n.bars .b2{left:5.95in;width:.95in;top:7.7in}\n.bars .b3{left:4.7in;width:.95in;top:9.0in}\n.bhead{position:absolute;left:0;right:0;top:0;height:1.25in;z-index:2}\n.bband{position:absolute;left:3.6in;right:0;top:.28in;height:.95in;background:#F68922}\n.bdark{position:absolute;left:0;top:.22in;width:4.75in;height:.95in;background:#4A4B4D;clip-path:polygon(0 0,100% 0,93% 100%,0 100%);display:flex;align-items:center;padding-left:.45in;box-shadow:0 .08in 0 #E07A1A}\n.bdark img{height:.6in}\n\n.bslash{position:absolute;left:5.95in;top:.02in;width:.16in;height:1.0in;background:#3A3B3D;transform:rotate(-32deg);transform-origin:top}\n.bleft{position:absolute;left:.6in;top:1.75in;width:2.7in;z-index:2}\n.bhs{position:relative;z-index:2;margin:0 .14in;height:3.0in;background-size:cover;background-position:center 22%;background-color:#E9ECEF}\n.bhs.ini{background:#1B2128;border:1px solid #2A333D}\n.bhs.ini span{font-family:Montserrat;font-weight:900;font-size:44pt;color:#F68922}\n.bblock{background:#F68922;margin-top:-1.0in;padding:1.14in .18in .22in .18in;color:#0D1117}\n.bn{font-family:Inter;font-weight:700;font-size:15pt;text-align:center}\n.bt{font-family:Montserrat;font-weight:900;font-size:11pt;text-transform:uppercase;letter-spacing:.04em;text-align:center}\n.byl{font-family:Montserrat;font-weight:800;font-size:7.5pt;letter-spacing:.16em;text-transform:uppercase;margin-top:10pt;text-align:center}\n.byv{font-family:Montserrat;font-weight:900;font-size:20pt;text-align:center;line-height:1.1}\n.bright{position:absolute;left:3.6in;right:.6in;top:1.7in;z-index:2}\n.bbio{font-size:11pt;line-height:1.72;color:#D5D9DE}\n.bbio.small{font-size:10pt;line-height:1.62}\n.bxh{font-family:Inter;font-weight:700;font-size:15pt;color:#F68922;margin-top:22pt;padding-bottom:8pt;border-bottom:1px solid #F68922;font-family:Montserrat;font-weight:900;font-size:12pt;text-transform:uppercase;letter-spacing:.06em}\n.bx{list-style:none;margin-top:12pt}\n.bx li{font-size:9.6pt;line-height:1.42;color:#E8EAED;padding:0 0 9pt 10pt;position:relative}\n.bx li::before{content:'';position:absolute;left:0;top:6.5pt;width:5pt;height:1.5px;background:#F68922}\n.bx li span{color:#A9B0B8;white-space:nowrap}\n.bfoot{position:absolute;left:.35in;right:.35in;bottom:.3in;display:flex;align-items:center;gap:10pt;font-size:7.5pt;color:#69727C;z-index:2;border-top:1px solid #D6DBDF;padding-top:7pt}\n.bpn{background:#F68922;color:#fff;font-family:Montserrat;font-weight:900;font-size:8pt;width:15pt;height:15pt;display:flex;align-items:center;justify-content:center}\n.bband2{position:absolute;left:0;right:0;top:7.85in;bottom:.85in;background-size:cover;background-position:center 40%;z-index:1}\n.bb2shade{position:absolute;inset:0;background:linear-gradient(180deg,#0D1117 0%,rgba(13,17,23,.15) 35%,rgba(13,17,23,.1) 75%,#0D1117 100%)}\n.fphero{height:3.35in;background-size:cover;background-position:center 55%;margin:4pt 0 20pt}\n.fp h3{font-family:Montserrat;font-weight:900;font-size:12pt;color:#F68922;text-transform:uppercase;letter-spacing:.06em;border-top:2px solid #F68922;padding-top:9pt;margin-bottom:8pt}\n.fp p{font-size:9.6pt;line-height:1.62;margin-bottom:9pt}\n.fp p b{color:#fff}\n.mission{margin-top:12pt;background:#F68922;color:#0D1117;padding:12pt 14pt;font-family:Montserrat;font-weight:800;font-size:11pt;line-height:1.35}\n.mission span{display:block;font-size:7.5pt;letter-spacing:.18em;text-transform:uppercase;margin-bottom:4pt}\n.builds{list-style:none;margin-top:6pt}\n.builds li{font-size:10.5pt;color:#E8EAED;padding:7pt 0;border-bottom:1px solid #222A33}\n.builds li i{font-style:normal;color:#F68922;font-weight:700}\n.builds li b{display:inline;font-family:Montserrat;font-weight:900;font-size:17pt;color:#F68922;vertical-align:-2pt}\n.fp2{display:grid;grid-template-columns:1fr 1fr;gap:10pt;margin:4pt 0 20pt}\n.ph2{height:2.2in;background-size:cover;background-position:center}\n.tocgrid{display:grid;grid-template-columns:1fr 2.1in;gap:.35in;margin-top:6pt}\n.tsec{font-family:Montserrat;font-weight:900;font-size:9pt;letter-spacing:.14em;text-transform:uppercase;color:#F68922;margin:13pt 0 4pt;padding-top:8pt;border-top:2px solid #F68922}\n.tsec:first-child{margin-top:0}\n.trow{display:flex;align-items:baseline;gap:6pt;font-size:9.4pt;color:#E8EAED;padding:2.6pt 0}\n.tname{font-weight:600;white-space:nowrap}\n.tsub{color:#A9B0B8;font-size:8pt;white-space:nowrap}\n.tdots{flex:1;border-bottom:1px dotted #3A434D;transform:translateY(-3pt)}\n.tpg{font-family:Montserrat;font-weight:800;color:#F68922;font-size:9pt}\n.tocphotos{display:grid;grid-template-rows:1fr 1fr;gap:10pt;height:8.3in}\n.tocphotos div{background-size:cover;background-position:center}\n.foot{position:absolute;left:.6in;right:.6in;bottom:.42in;display:flex;align-items:center;gap:10pt}\n.pn{background:#F68922;color:#0D1117;font-family:Montserrat;font-weight:900;font-size:8pt;width:15pt;height:15pt;display:flex;align-items:center;justify-content:center}\n.fl{font-family:Montserrat;font-weight:800;font-size:7.5pt;letter-spacing:.22em;text-transform:uppercase;color:#E8EAED}\n.rule{flex:1;height:1px;background:#B0651F}\n.flogo{width:.62in}\n.back .backphoto{position:absolute;inset:0;background-size:cover;background-position:center}\n.backshade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(13,17,23,.35),rgba(13,17,23,.92) 55%,#0D1117)}\n.backbody{position:absolute;left:.7in;right:.7in;bottom:.9in}\n.biglogo{width:2.3in}\n.tag{font-family:Montserrat;font-weight:900;font-size:30pt;line-height:1.1;color:#fff;margin:22pt 0 10pt}\n.regions{font-size:10pt;color:#E2E5E9;letter-spacing:.06em;margin-bottom:22pt}\n.contact{display:grid;grid-template-columns:1fr 1fr;gap:.4in;font-size:9.5pt;line-height:1.6;border-top:1px solid #F68922;padding-top:14pt}\n";
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const h1 = (name) => { const p = String(name).trim().split(/\s+/); return `<h1>${esc(p[0])} <em>${esc(p.slice(1).join(" "))}</em></h1>`; };
const foot = (label) => `<div class="foot"><span class="pn">0</span><span class="fl">${esc(label)}</span><span class="rule"></span><img class="flogo" src="@@B@@logo.png"></div>`;
const key = n => String(n || "").toLowerCase().replace(/\s+/g, " ").trim();
function photo(cls, name, photos) {
  const u = photos[key(name)];
  if (u) return `<div class="${cls}" style="background-image:url('${esc(u)}')"></div>`;
  const p = String(name).trim().split(/\s+/); const ini = (p[0] || "")[0] + ((p[p.length - 1] || "")[0] || "");
  return `<div class="${cls} ini"><span>${esc(ini.toUpperCase())}</span></div>`;
}
function bioPage(person, photos, band) {
  const yrs = person.years ? `<div class="byl">Years of Experience</div><div class="byv">${esc(person.years)}</div>` : "";
  const pl = (person.projects || []).map(p => `<li>${esc(p.line)}${p.detail ? ` <span>${esc(p.detail)}</span>` : ""}</li>`).join("");
  const exp = pl ? `<div class="bxh">Relevant Project Experience</div><ul class="bx">${pl}</ul>` : "";
  const small = String(person.bio || "").length > 650 ? " small" : "";
  return `<section class="page bio">
  <div class="body"><div class="label">Team Resumes</div>${h1(person.name)}</div>
  <div class="bleft">${photo("bhs", person.name, photos)}<div class="bblock"><div class="bt">${esc(person.title)}</div>${yrs}</div></div>
  <div class="bright"><p class="bbio${small}">${esc(person.bio)}</p>${exp}</div>
  <div class="bband2" style="background-image:url('@@B@@band-${band}.jpg')"></div>
  ${foot("Team Resumes")}
</section>`;
}
function gridPage(photos) {
  const cards = SOQ_CONFIG.grid.map(([n, t]) => `<div class="lcard">${photo("lhs", n, photos)}<div class="ln">${esc(n)}</div><div class="lt">${esc(t)}</div><i></i></div>`).join("");
  return `<section class="page">
  <div class="body">
    <div class="label">The Company</div>
    <h1>Executive <em>Leadership</em></h1>
    <p class="lede">Haggerty's leadership stays involved on every project, from pursuit through closeout.</p>
    <div class="lgrid">${cards}</div>
  </div>
  ${foot("The Company")}
</section>`;
}
function tocPage(rows) {
  const trow = (name, pg, sub) => `<div class="trow"><span class="tname">${esc(name)}</span>${sub ? `<span class="tsub">${esc(sub)}</span>` : ""}<span class="tdots"></span><span class="tpg">${String(pg).padStart(2, "0")}</span></div>`;
  const body = rows.map(r => r.section ? `<div class="tsec">${esc(r.section)}</div>` : trow(r.name, r.page, r.sub)).join("");
  return `<section class="page">
  <div class="body">
    <div class="label">Statement of Qualifications</div>
    <h1>Table of <em>Contents</em></h1>
    <div class="tocgrid">
      <div class="tocmain">${body}</div>
      <div class="tocphotos"><div style="background-image:url('@@B@@toc-1.jpg');background-position:35% center"></div><div style="background-image:url('@@B@@toc-2.jpg')"></div></div>
    </div>
  </div>
  ${foot("Contents")}
</section>`;
}

/* ---------- Qualification Information (data comes from n8n behind the bid code) ---------- */
function qualPages(C, bank) {
  const head = (a, b) => `<div class="label">Qualification Information</div><h1>${esc(a)} <em>${esc(b)}</em></h1><div class="qaddr">${esc(C.name)} · ${esc(C.address)} · ${esc(C.phone)}</div>`;
  const out = [];
  out.push(`<section class="page qdiv">
  <div class="body">
    <img class="qlogo" src="@@B@@logo.png">
    <div class="label">Statement of Qualifications</div>
    <h1>Qualification <em>Information</em></h1>
    <ul class="qlist"><li>Company Contacts</li><li>Licensing, Bonding &amp; Insurance</li><li>Current City Business Licenses</li></ul>
  </div>
  ${foot("Qualification Information")}
</section>`);
  const rows = (C.contacts || []).map(([n, t, ph, em]) => `<div class="qrow"><div><b>${esc(n)}</b><span>${esc(t)}</span></div><div>${esc(ph)}</div><div>${esc(em)}</div></div>`).join("");
  out.push(`<section class="page">
  <div class="body">
    ${head("Company", "Contacts")}
    <div class="qtable">${rows}</div>
    <div class="qsub">General</div>
    <div class="qemails">${(C.emails || []).map(e => `<span>${esc(e)}</span>`).join("")}</div>
  </div>
  ${foot("Qualification Information")}
</section>`);
  const reg = (C.registrations || []).map(([k, v, i, x]) => `<tr><td>${esc(k)}</td><td><b>${esc(v)}</b></td><td>${esc(i)}</td><td>${esc(x)}</td></tr>`).join("");
  const card = (title, lines) => `<div class="qcard"><h3>${esc(title)}</h3>${(lines || []).map(l => `<div>${esc(l)}</div>`).join("")}</div>`;
  const B = C.bank || {};
  const acct = v => v ? `<b>${esc(v)}</b>` : `<i class="blank"></i>`;
  out.push(`<section class="page">
  <div class="body">
    ${head("Licensing, Bonding", "& Insurance")}
    <div class="qcard qbank"><h3>${esc(B.name || "Bank")}</h3><div class="qbankrow"><div>${esc(B.address || "")}</div><div>Account # ${acct(bank && bank.account)}</div><div>Routing # ${acct(bank && bank.routing)}</div></div></div>
    <div class="qsub">${esc(C.founded || "")}</div>
    <table class="qreg"><thead><tr><th></th><th></th><th>Issue Date</th><th>Exp. Date</th></tr></thead><tbody>${reg}</tbody></table>
    <div class="qcards">${card("Workers Comp. Provider", C.workers_comp)}${card("General Liability & Bonding", C.liability)}</div>
  </div>
  ${foot("Qualification Information")}
</section>`);
  const L = C.city_licenses || [];
  const per = Math.ceil(L.length / 2);
  const col = arr => `<table class="qlic"><thead><tr><th>City</th><th>License #</th></tr></thead><tbody>${arr.map(([c, n]) => `<tr><td>${esc(c)}</td><td><b>${esc(n)}</b></td></tr>`).join("")}</tbody></table>`;
  out.push(`<section class="page">
  <div class="body">
    ${head("Current City", "Business Licenses")}
    <div class="qlics">${col(L.slice(0, per))}${col(L.slice(per))}</div>
  </div>
  ${foot("Qualification Information")}
</section>`);
  return out;
}
/* P = { project, owner, date, leaders:[{name,title,bio,years,projects}], team:[{name,title,bio,projects:[{line,detail}]}], photos:{ "first last": url } } */
function buildSOQ(P, base) {
  const photos = P.photos || {};
  const prep = [P.owner ? "Prepared for " + P.owner : "", P.project, P.date].filter(Boolean).map(esc).join(" · ");
  const pages = [];
  pages.push(STATIC.about.replace("@@PREP@@", prep ? `<div class="prep">${prep}</div>` : ""));
  pages.push("@@TOC@@");
  pages.push(STATIC.firm1, STATIC.firm2, STATIC.why, gridPage(photos), STATIC.divider);
  const bioStart = pages.length;
  const people = [...(P.leaders || []), ...(P.team || [])];
  const seen = new Set();
  const list = people.filter(p => { const k = key(p.name); if (seen.has(k)) return false; seen.add(k); return true; });
  list.forEach((p, i) => pages.push(bioPage(p, photos, (i % SOQ_CONFIG.bandCount) + 1)));
  const qualStart = pages.length;
  const C = P.company;
  if (C && C.contacts) pages.push(...qualPages(C, P.bank));
  pages.push(STATIC.back);
  const rows = [
    { section: "Overview" }, { name: "About HAGGERTY", page: 1 },
    { section: "Profile of Firm" }, { name: "About HAGGERTY: Mission & Core Values", page: 3 }, { name: "History & Community", page: 4 },
    { section: "The Company" }, { name: "Why HAGGERTY", page: 5 }, { name: "Executive Leadership", page: 6 },
    { section: "Team Resumes & Relevant Experience" },
    ...list.map((p, i) => ({ name: p.name, sub: p.title, page: bioStart + i + 1 })),
    ...(C && C.contacts ? [{ section: "Qualification Information" }, { name: "Company Contacts", page: qualStart + 2 },
      { name: "Licensing, Bonding & Insurance", page: qualStart + 3 }, { name: "Current City Business Licenses", page: qualStart + 4 }] : [])
  ];
  pages[1] = tocPage(rows);
  let n = 0;
  const html = pages.join("\n").replace(/<span class="pn">\d+<\/span>/g, () => `<span class="pn">${++n}</span>`).split("@@B@@").join(base);
  const title = "HAGGERTY SOQ - " + (P.project || "Team");
  return `<!doctype html><html><head><meta charset="utf-8"><title>${esc(title)}</title>
<style>@font-face{font-family:Inter;font-weight:400;src:url('${base}fonts/inter-latin-400-normal.woff2') format('woff2')}@font-face{font-family:Inter;font-weight:500;src:url('${base}fonts/inter-latin-500-normal.woff2') format('woff2')}@font-face{font-family:Inter;font-weight:600;src:url('${base}fonts/inter-latin-600-normal.woff2') format('woff2')}@font-face{font-family:Inter;font-weight:700;src:url('${base}fonts/inter-latin-700-normal.woff2') format('woff2')}@font-face{font-family:Montserrat;font-weight:700;src:url('${base}fonts/montserrat-latin-700-normal.woff2') format('woff2')}@font-face{font-family:Montserrat;font-weight:800;src:url('${base}fonts/montserrat-latin-800-normal.woff2') format('woff2')}@font-face{font-family:Montserrat;font-weight:900;src:url('${base}fonts/montserrat-latin-900-normal.woff2') format('woff2')}
${CSS}

.qdiv .body{padding-top:3.2in}.qlogo{height:.9in;margin-bottom:26pt}
.qlist{list-style:none;margin-top:6pt}.qlist li{font-size:12pt;color:#E8EAED;padding:9pt 0;border-bottom:1px solid #222A33}
.qlist li::before{content:'';display:inline-block;width:14pt;height:2px;background:#F68922;vertical-align:middle;margin-right:10pt}
.qaddr{font-size:9.5pt;color:#A9B0B8;margin:-6pt 0 18pt}
.qtable{border-top:2px solid #F68922}
.qrow{display:grid;grid-template-columns:2.9in 1.3in 1fr;gap:10pt;padding:10pt 0;border-bottom:1px solid #222A33;font-size:10pt;color:#E8EAED;align-items:center}
.qrow b{display:block;color:#F68922;font-family:Montserrat;font-weight:800;font-size:10.5pt}.qrow span{display:block;color:#A9B0B8;font-size:9pt;margin-top:2pt}
.qsub{font-family:Montserrat;font-weight:900;font-size:10pt;letter-spacing:.12em;text-transform:uppercase;color:#F68922;margin:20pt 0 8pt}
.qemails{display:grid;grid-template-columns:1fr 1fr;gap:6pt 20pt;font-size:10pt;color:#E8EAED}
.qcard{border-top:2px solid #F68922;padding-top:9pt;font-size:9.8pt;line-height:1.6;color:#E8EAED}
.qcard h3{font-family:Montserrat;font-weight:900;font-size:11pt;color:#F68922;text-transform:uppercase;letter-spacing:.05em;margin-bottom:5pt}
.qbankrow{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:12pt}.qbank b{color:#fff}
.blank{display:inline-block;width:1.15in;border-bottom:1px solid #69727C;height:10pt;vertical-align:-2pt}
.qreg{width:100%;border-collapse:collapse;font-size:9.8pt;color:#E8EAED}
.qreg th{text-align:left;font-size:8pt;letter-spacing:.12em;text-transform:uppercase;color:#A9B0B8;font-weight:600;padding-bottom:5pt}
.qreg td{padding:6pt 0;border-bottom:1px solid #222A33}.qreg td b{color:#fff;font-weight:600}
.qcards{display:grid;grid-template-columns:1fr 1fr;gap:.35in;margin-top:22pt}
.qlics{display:grid;grid-template-columns:1fr 1fr;gap:.4in;border-top:2px solid #F68922;padding-top:6pt}
.qlic{width:100%;border-collapse:collapse;font-size:10pt;color:#E8EAED}
.qlic th{text-align:left;font-size:8pt;letter-spacing:.12em;text-transform:uppercase;color:#F68922;font-weight:700;padding:6pt 0}
.qlic td{padding:6.5pt 0;border-bottom:1px solid #222A33}.qlic td b{color:#fff;font-weight:600}
.prep{margin-top:10pt;font-size:9.5pt;color:#E8EAED;letter-spacing:.02em}
.soqbar{position:fixed;top:0;left:0;right:0;z-index:99;background:#1B2126;color:#fff;font:600 14px Inter,Arial,sans-serif;padding:10px 16px;display:flex;gap:12px;align-items:center;flex-wrap:wrap}
.soqbar button{background:#F68922;color:#0D1117;border:none;font:800 14px Montserrat,Arial,sans-serif;text-transform:uppercase;padding:10px 16px;cursor:pointer}
.soqbar span{color:#A9B0B8;font-weight:500}
body{padding-top:56px} .page{margin:0 auto 16px}
@media print{.soqbar{display:none}body{padding-top:0}.page{margin:0}}
</style></head><body>
<div class="soqbar"><button onclick="window.print()">Save as PDF</button><span>In the print window pick "Save as PDF". If backgrounds look white, turn on "Background graphics" under More settings.</span></div>
${html}
<script>
function fitBands(){document.querySelectorAll('.bio').forEach(function(p){var b=p.querySelector('.bband2');if(!b)return;b.style.display='';var lim=b.getBoundingClientRect().top-12;var bot=Math.max.apply(null,[].map.call(p.querySelectorAll('.bright,.bleft'),function(e){return e.getBoundingClientRect().bottom}));if(bot>lim)b.style.display='none';});}
(document.fonts?document.fonts.ready:Promise.resolve()).then(fitBands);window.addEventListener('beforeprint',fitBands);
</script></body></html>`;
}
window.HaggertySOQ = { buildSOQ, config: SOQ_CONFIG };
})();
