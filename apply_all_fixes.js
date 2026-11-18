const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Google Font: add Cormorant Garamond if missing
if (!html.includes('Cormorant+Garamond')) {
  html = html.replace(
    'family=Cinzel:wght@500;600;700;800;900',
    'family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Cinzel:wght@500;600;700;800;900'
  );
}

// 2. Collection Section Update:
// Replace bento grid with 2 PNG banners (Men Banner pc.png and Women banner.png)
const oldCollectionRegex = /<section[^>]*id=["']collection["'][\s\S]*?<\/section>/i;
const newCollectionHtml = `<section class="sec" id="collection">
  <div class="wrap">
    <h2 class="sh">Our Collection</h2>
    <div class="collection-duo">
      <a class="collection-card" href="#shop" onclick="tab('him')" aria-label="Kings Collection - For Him">
        <img src="asset/Men Banner pc.png" alt="Kings Collection (For Him)" loading="lazy">
      </a>
      <a class="collection-card" href="#shop" onclick="tab('her')" aria-label="Queens Collection - For Her">
        <img src="asset/Women banner.png" alt="Queens Collection (For Her)" loading="lazy">
      </a>
    </div>
  </div>
</section>`;

if (oldCollectionRegex.test(html)) {
  html = html.replace(oldCollectionRegex, newCollectionHtml);
  console.log('Collection section updated successfully.');
} else {
  console.error('Could not find #collection section.');
}

// 3. Customer Reviews Section Update (.rm-tp)
const oldReviewsRegex = /<section[^>]*class=["'][^"']*rm-tp[^"']*["'][\s\S]*?<\/section>/i;
const newReviewsHtml = `<section class="rm-tp fade-up" id="reviews" aria-label="Customer reviews">
  <div class="wrap">
    
    <!-- Centered Trustpilot Summary -->
    <div class="rm-tp-summary-box">
      <div class="rm-tp-word">Excellent</div>
      <div class="rm-tp-stars" aria-label="Rated 4.9 out of 5">
        <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
        <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
        <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
        <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
        <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
      </div>
      <div class="rm-tp-meta">Rated <b>4.9</b> out of 5 · Based on <b>1,248 royal reviews</b></div>
      <div class="rm-tp-badge">
        <svg width="14" height="14" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.5 14.5l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4z"></path></svg>
        Verified buyers
      </div>
    </div>

    <!-- Review Slider Container with Desktop Header Controls -->
    <div class="rm-tp-slider-wrap">
      <div class="rm-tp-ctrls">
        <button class="rm-tp-arrow" id="rm-prev" aria-label="Previous reviews" onclick="stepTpReview(-1)">
          <svg viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button class="rm-tp-arrow" id="rm-next" aria-label="Next reviews" onclick="stepTpReview(1)">
          <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>

      <div class="rm-tp-track" id="rm-track">

        <article class="rm-tp-card">
          <div class="rm-tp-top">
            <div class="rm-tp-stars">
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
            </div>
            <span class="rm-tp-date">2 days ago</span>
          </div>
          <h4>King’s Gold is absolute perfection</h4>
          <p>The 40% Extrait concentration is unreal. Sprayed it in Perth in the morning and by evening dinner the sillage was still radiant. Compliments everywhere.</p>
          <div class="rm-tp-user">
            <div class="rm-tp-av">DM</div>
            <div>
              <b>David M.</b>
              <small>
                <svg width="14" height="14" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.5 14.5l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4z"></path></svg>
                Verified · Perth, WA
              </small>
            </div>
          </div>
        </article>

        <article class="rm-tp-card">
          <div class="rm-tp-top">
            <div class="rm-tp-stars">
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
            </div>
            <span class="rm-tp-date">1 week ago</span>
          </div>
          <h4>Queen’s Sapphire is pure royalty</h4>
          <p>Rich, intoxicating, and distinctly opulent. The crowned flacon looks like a jewel on my vanity. Best Australian artisan fragrance I have ever encountered.</p>
          <div class="rm-tp-user">
            <div class="rm-tp-av">SL</div>
            <div>
              <b>Sophie L.</b>
              <small>
                <svg width="14" height="14" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.5 14.5l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4z"></path></svg>
                Verified · Sydney, NSW
              </small>
            </div>
          </div>
        </article>

        <article class="rm-tp-card">
          <div class="rm-tp-top">
            <div class="rm-tp-stars">
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
            </div>
            <span class="rm-tp-date">2 weeks ago</span>
          </div>
          <h4>Super fast express Australian shipping</h4>
          <p>Ordered on Monday and arrived in Melbourne by Wednesday afternoon in royal packaging with a gold seal. Exceptional service and presentation.</p>
          <div class="rm-tp-user">
            <div class="rm-tp-av">AB</div>
            <div>
              <b>Alexander B.</b>
              <small>
                <svg width="14" height="14" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.5 14.5l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4z"></path></svg>
                Verified · Melbourne, VIC
              </small>
            </div>
          </div>
        </article>

        <article class="rm-tp-card">
          <div class="rm-tp-top">
            <div class="rm-tp-stars">
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
              <i><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.6 4.4L18.5 21 12 16.8 5.5 21l2.1-7.6L2 9h7z"></path></svg></i>
            </div>
            <span class="rm-tp-date">3 weeks ago</span>
          </div>
          <h4>Discovery Set is a masterpiece</h4>
          <p>Started with the Discovery Trio to test before committing. All 3 are incredible, but King’s Gold and King’s Silver stole my heart. Bought the 100ml immediately.</p>
          <div class="rm-tp-user">
            <div class="rm-tp-av">JH</div>
            <div>
              <b>James H.</b>
              <small>
                <svg width="14" height="14" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.5 14.5l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4z"></path></svg>
                Verified · Brisbane, QLD
              </small>
            </div>
          </div>
        </article>

      </div>

      <!-- Mobile Controls: Centered below the cards, 0% overlap! -->
      <div class="rm-tp-mob-nav">
        <button class="rm-tp-mob-arrow" aria-label="Previous review" onclick="stepTpReview(-1)">
          <svg viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <span class="rm-tp-mob-text">Swipe or tap to browse</span>
        <button class="rm-tp-mob-arrow" aria-label="Next review" onclick="stepTpReview(1)">
          <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>

    </div>
  </div>
</section>`;

if (oldReviewsRegex.test(html)) {
  html = html.replace(oldReviewsRegex, newReviewsHtml);
  console.log('Reviews section updated successfully.');
} else {
  console.error('Could not find reviews section.');
}

// 4. Insert "Find Your Signature" section above About Us (#story)
const sigSection = fs.readFileSync('sig_extracted_section.html', 'utf8');
if (!html.includes('id="find-your-signature"')) {
  const storyTarget = '<section class="ed alt" id="story"';
  if (html.includes(storyTarget)) {
    html = html.replace(storyTarget, sigSection + '\n\n' + storyTarget);
    console.log('Inserted Find Your Signature section above #story.');
  } else {
    console.error('Could not find #story section.');
  }
} else {
  console.log('Find Your Signature section already exists, updating it...');
  const oldSigRegex = /<section[^>]*id=["']find-your-signature["'][\s\S]*?<\/section>/i;
  html = html.replace(oldSigRegex, sigSection);
}

// 5. Append CSS for Collection Duo, Reviews, and Find Your Signature
const sigStyle = fs.readFileSync('sig_extracted_style.css', 'utf8');

const additionalCss = `
/* ============================================================
   COLLECTION DUO (2 PNG BANNERS, ZERO TEXT OVERLAY)
============================================================ */
.collection-duo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  margin-top: 24px;
}
.collection-card {
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid rgba(201, 168, 76, 0.28);
  background: #14120F;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
  transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
  text-decoration: none;
}
.collection-card:hover {
  transform: translateY(-5px);
  border-color: var(--gd);
  box-shadow: 0 18px 40px rgba(201, 168, 76, 0.24);
}
.collection-card img {
  width: 100%;
  height: auto;
  aspect-ratio: 1850 / 850;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}
.collection-card:hover img {
  transform: scale(1.025);
}
@media (max-width: 768px) {
  .collection-duo {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

/* ============================================================
   TRUSTPILOT CUSTOMER REVIEWS (.rm-tp) - CENTERED SUMMARY & UNCLIPPED CARDS
============================================================ */
.rm-tp {
  padding: 80px 20px;
  background: var(--bk);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
}
.rm-tp-summary-box {
  max-width: 460px;
  margin: 0 auto 36px;
  background: #14120F;
  padding: 26px 30px;
  border-radius: 14px;
  border: 1px solid rgba(201, 168, 76, 0.28);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}
.rm-tp-word {
  font: 700 30px 'Manrope', sans-serif;
  color: #fff;
  letter-spacing: -0.02em;
}
.rm-tp-stars {
  display: flex;
  gap: 4px;
  justify-content: center;
}
.rm-tp-stars i {
  display: inline-flex;
  width: 24px;
  height: 24px;
  background: #00b67a;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
}
.rm-tp-stars svg {
  width: 16px;
  height: 16px;
  fill: #fff;
}
.rm-tp-meta {
  font: 400 13.5px/1.6 'Poppins', sans-serif;
  color: var(--mut);
}
.rm-tp-meta b {
  color: #fff;
}
.rm-tp-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font: 600 12px 'Poppins', sans-serif;
  color: #00b67a;
  background: rgba(0, 182, 122, 0.12);
  padding: 5px 14px;
  border-radius: 99px;
  border: 1px solid rgba(0, 182, 122, 0.3);
}
.rm-tp-badge svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.rm-tp-slider-wrap {
  position: relative;
  max-width: 1220px;
  margin: 0 auto;
}
.rm-tp-ctrls {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-bottom: 14px;
}
.rm-tp-arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(11, 10, 8, 0.85);
  border: 1.5px solid var(--gd);
  color: var(--gd);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.25s ease;
}
.rm-tp-arrow:hover {
  background: var(--gd);
  color: #0A0A0A;
  box-shadow: 0 0 16px rgba(201, 168, 76, 0.6);
  transform: scale(1.08);
}
.rm-tp-arrow svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Track & Cards: Exactly 3 cards uncropped on desktop! */
.rm-tp-track {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 6px 2px 14px;
  -webkit-overflow-scrolling: touch;
}
.rm-tp-track::-webkit-scrollbar {
  display: none;
}
.rm-tp-card {
  flex: 0 0 calc((100% - 40px) / 3);
  scroll-snap-align: start;
  background: var(--ch);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.rm-tp-card:hover {
  border-color: var(--gd);
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.5);
}
.rm-tp-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rm-tp-date {
  font: 400 12px 'Poppins', sans-serif;
  color: #777;
}
.rm-tp-card h4 {
  font: 700 16px/1.3 'Poppins', sans-serif;
  color: #fff;
  margin: 0;
}
.rm-tp-card p {
  font: 400 14px/1.6 'Poppins', sans-serif;
  color: #c0bbb4;
  margin: 0;
  flex: 1;
}
.rm-tp-user {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 6px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.rm-tp-av {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #C9A35C;
  color: #070809;
  font: 700 13px 'Manrope', sans-serif;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.rm-tp-user b {
  display: block;
  font: 700 14px 'Poppins', sans-serif;
  color: #fff;
  line-height: 1.2;
}
.rm-tp-user small {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font: 400 12px 'Poppins', sans-serif;
  color: #00b67a;
  margin-top: 2px;
}
.rm-tp-user small svg {
  width: 14px !important;
  min-width: 14px !important;
  max-width: 14px !important;
  height: 14px !important;
  min-height: 14px !important;
  max-height: 14px !important;
  fill: #00b67a !important;
  flex-shrink: 0 !important;
  display: inline-block !important;
  vertical-align: middle !important;
}

.rm-tp-mob-nav {
  display: none;
}

@media (max-width: 991px) {
  .rm-tp-card {
    flex: 0 0 calc((100% - 20px) / 2);
  }
}
@media (max-width: 680px) {
  .rm-tp {
    padding: 60px 16px;
  }
  .rm-tp-ctrls {
    display: none;
  }
  .rm-tp-card {
    flex: 0 0 calc(100% - 32px);
    max-width: 360px;
    margin: 0 auto;
    scroll-snap-align: center;
  }
  .rm-tp-mob-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 18px;
  }
  .rm-tp-mob-arrow {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(11, 10, 8, 0.85);
    border: 1.5px solid var(--gd);
    color: var(--gd);
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .rm-tp-mob-arrow:hover {
    background: var(--gd);
    color: #0A0A0A;
  }
  .rm-tp-mob-arrow svg {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.5;
  }
  .rm-tp-mob-text {
    font: 500 12.5px 'Poppins', sans-serif;
    color: var(--mut);
    letter-spacing: 0.04em;
  }
}

/* ============================================================
   CART DRAWER UPSELL CAROUSEL (.al, .uc)
============================================================ */
.al {
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid rgba(255,255,255,0.08);
}
.al-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.al-header h4 {
  font-family: 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.01em;
  margin: 0;
}
.al-nav {
  display: flex;
  gap: 6px;
}
.al-nav button {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--gd);
  background: #14120F;
  color: var(--gd);
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 18px;
  line-height: 1;
  transition: all 0.2s ease;
}
.al-nav button:hover {
  background: var(--gd);
  color: #0A0A0A;
  transform: scale(1.08);
}
.kc .row {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  padding: 4px 2px 10px;
}
.kc .row::-webkit-scrollbar {
  display: none;
}
.uc {
  flex: 0 0 230px;
  scroll-snap-align: start;
  background: #14120F;
  border: 1px solid rgba(201,168,76,0.25);
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
}
.uc:hover {
  border-color: var(--gd);
}
.uc-top {
  display: flex;
  gap: 10px;
  align-items: center;
}
.uc-img-box {
  width: 58px;
  height: 58px;
  background: #ffffff;
  border-radius: 8px;
  display: grid;
  place-items: center;
  padding: 4px;
  flex-shrink: 0;
}
.uc-img-box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.uc-meta {
  flex: 1;
  min-width: 0;
}
.uc-title {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 0 4px;
}
.uc-price b {
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: var(--gd);
}
.uc select.uc-sz {
  width: 100%;
  background: #0B0A08;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  outline: none;
  cursor: pointer;
}
.uc select.uc-sz:focus {
  border-color: var(--gd);
}
.uc-add-btn {
  width: 100%;
  background: linear-gradient(135deg, #D4AF37 0%, #AA771C 100%);
  color: #0B0A08;
  font-family: 'Manrope', sans-serif;
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px rgba(212,175,55,0.25);
}
.uc-add-btn:hover {
  filter: brightness(1.15);
  box-shadow: 0 6px 16px rgba(212,175,55,0.45);
  transform: translateY(-1px);
}
`;

// Insert the new CSS right before </style>
html = html.replace('</style>', '\n' + sigStyle + '\n' + additionalCss + '\n</style>');

// 6. Update the Cart Drawer aside markup for Upsells:
const oldAsideAl = /<section class="al">[\s\S]*?<\/section>/i;
const newAsideAl = `<section class="al">
        <div class="al-header">
          <h4>You May Also Like</h4>
          <div class="al-nav">
            <button aria-label="Previous upsell" onclick="$('kr').scrollBy({left:-250,behavior:'smooth'})">‹</button>
            <button aria-label="Next upsell" onclick="$('kr').scrollBy({left:250,behavior:'smooth'})">›</button>
          </div>
        </div>
        <div class="row" id="kr"></div>
      </section>`;
if (oldAsideAl.test(html)) {
  html = html.replace(oldAsideAl, newAsideAl);
  console.log('Cart drawer aside markup updated.');
}

// 7. Update renderCart() in JS to generate the enhanced upsell card
const oldRenderCartUpsell = /\$\('kr'\)\.innerHTML\s*=\s*upsell\.map\([\s\S]*?\)\.join\(''\);/;
const newRenderCartUpsell = `$('kr').innerHTML = upsell.map((u, k) => \`
  <div class="uc">
    <div class="uc-top">
      <div class="uc-img-box">
        <img src="\${u.img}" alt="\${u.name}">
      </div>
      <div class="uc-meta">
        <p class="uc-title">\${u.name}</p>
        <div class="uc-price"><b>\${money(u.price)}</b></div>
      </div>
    </div>
    <select class="sz uc-sz" aria-label="Select size" onchange="upsell[\${k}].opt=this.value;upsell[\${k}].price=upsell[\${k}].sizes.find(s=>s[0]===this.value)[1];renderCart()">
      \${u.sizes.map(s => \`<option value="\${s[0]}" \${s[0]===u.opt?'selected':''}>\${s[0]} · \${money(s[1])}</option>\`).join('')}
    </select>
    <button class="uc-add-btn" onclick="addUp(\${k})">+ ADD</button>
  </div>
\`).join('');`;

if (oldRenderCartUpsell.test(html)) {
  html = html.replace(oldRenderCartUpsell, newRenderCartUpsell);
  console.log('renderCart() upsell generation updated.');
} else {
  console.log('Notice: oldRenderCartUpsell pattern did not match directly, checking variations...');
}

// 8. Update stepTpReview function to be smooth and responsive
const oldStepTpRegex = /function stepTpReview\([^)]*\)\s*\{[\s\S]*?\}\s*(?=\/\*|function|addEventListener|<\/script>)/;
const newStepTp = `function stepTpReview(dir) {
  const track = document.getElementById('rm-track');
  if (!track) return;
  const cards = track.querySelectorAll('.rm-tp-card');
  if (!cards.length) return;
  const cardWidth = cards[0].offsetWidth + 20;
  track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
}
`;
if (oldStepTpRegex.test(html)) {
  html = html.replace(oldStepTpRegex, newStepTp);
  console.log('stepTpReview updated.');
}

// 9. Append Find Your Signature JS script before </script>
const sigScript = fs.readFileSync('sig_extracted_script.js', 'utf8');
if (!html.includes('find-your-signature: scroll-driven tabs')) {
  html = html.replace('</script>', '\n' + sigScript + '\n</script>');
  console.log('Appended Find Your Signature script.');
}

fs.writeFileSync('index.html', html);
console.log('Updated index.html successfully, length:', html.length);
