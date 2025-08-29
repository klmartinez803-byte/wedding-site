
# Wedding Website (GitHub Pages Ready)

This is a minimal, elegant wedding website centered around your three photos.

## Quick Start
1. **Create a new GitHub repo** (e.g., `wedding-site`) and upload all files from this folder.
2. Go to **Settings → Pages**. Under *Build and deployment*, choose:
   - Source: **Deploy from a branch**
   - Branch: **main** (or `master`) / **root**
3. Visit the URL GitHub provides for your site (e.g., https://<your-username>.github.io/wedding-site).

## Customizing
- Edit `index.html` directly in your browser or a code editor:
  - Replace the hero text (**Your Names Here**, date, location).
  - Update **Ceremony**, **Reception**, **Dress Code**, and **Registry**.
  - Update the RSVP link (change the `mailto:` to your email or a Google Form URL).
- Replace the three images in `assets/images` if you want different photos. Keep the same filenames (`photo1.jpg`, `photo2.jpg`, `photo3.jpg`) or update the paths in the HTML.
- The hero uses `assets/images/collage.jpg`. You can swap this for any large image.

## Notes
- All fonts are loaded from Google Fonts.
- A simple CSS-only lightbox is included. Click a photo to open it; click anywhere to close.
