# Mind, Body & God - Landing Page

Landing page for Marilyn Burrell's transformation courses.

**Live URL:** yourmindbodyandgod.com

---

## Quick Start

Open `index.html` in a browser to preview locally.

For deployment, push to Vercel, Netlify, or upload to Hostinger.

---

## File Structure

```
/yourmindbodyandgod/
├── index.html          # Main landing page
├── styles.css          # All styling
├── script.js           # Mobile nav, form handling
├── assets/
│   ├── logo.svg        # Primary logo (with tagline)
│   └── logo-alt.svg    # Alternate logo
└── README.md           # This file
```

---

## Before Going Live

### 1. Add Marilyn's Photo
Replace the placeholder in the About section:
```html
<div class="about-photo-placeholder">
    <span>Photo</span>
</div>
```
With:
```html
<img src="assets/marilyn.jpg" alt="Marilyn Burrell" class="about-photo">
```

### 2. Connect Email Provider
Options (in order of recommendation for creators):
- **ConvertKit** - Best for course creators, good automation
- **Beehiiv** - Modern, growing fast
- **Mailchimp** - Free tier available

Replace the form in `index.html` with your provider's embed code.

### 3. Connect Stripe
For course purchases:

**Option A: Payment Link (easiest)**
1. Go to Stripe Dashboard → Payment Links
2. Create a link for "Get to Zero" - $397
3. Replace the `#` in the buy button:
```html
<a href="https://buy.stripe.com/YOUR_LINK" class="btn btn-primary btn-large">Enroll Now</a>
```

**Option B: Stripe Checkout**
Add Stripe.js and create checkout sessions via backend.

### 4. Update Contact Email
Change `hello@yourmindbodyandgod.com` to the real email in the footer.

---

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Deep Ocean | #0d3b4c | Headers, dark backgrounds |
| Ocean Blue | #1a5f7a | Secondary dark |
| Teal | #2d8a9e | Primary accent, buttons |
| Sky Water | #57a0b8 | Highlights |
| Seafoam | #8ed3e8 | Light accents |
| Mist | #c9e8f0 | Backgrounds, borders |

---

## Fonts

- **Headings:** Cormorant Garamond (Google Fonts)
- **Body:** Open Sans (Google Fonts)

---

## Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
Drag the folder to netlify.com/drop

### Hostinger (existing host)
Upload files via File Manager or FTP.

---

## Future Pages

- `/course/get-to-zero` - Full sales page
- `/course/curse-breaker` - Phase 2 course
- `/about` - Full bio page
- `/contact` - Contact form
- `/blog` - Content/SEO

---

## Contact

Ed Kalpas (tech) - ekalpas@gmail.com
Marilyn Burrell (content) - mindbodyandgod@gmail.com
