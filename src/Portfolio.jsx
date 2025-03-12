import React from "react";
import { useState } from "react";
import { RowsPhotoAlbum, ColumnsPhotoAlbum } from "react-photo-album";
import { useTranslation } from 'react-i18next';
import "react-photo-album/rows.css";
import "react-photo-album/columns.css";
import './Portfolio.css'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Define the breakpoints for responsive images
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

// Function to generate the asset URL with proper width
function assetLink(asset, width) {
  return `https://res.cloudinary.com/dzxblhnbo/image/upload/w_${width}/${asset}`;;
}

// Format your photos to match the expected structure
const photos = [
  {
    asset: "ux-design-2_c7cz6u",
    width: 3000,
    height: 5400,
    alt: "UX Design 2",
  },
  {
    asset: "ux-design-1_eicyzz",
    width: 1280,
    height: 3200,
    alt: "UX Design 1",
  },
  {
    asset: "zubar1_i3mcij",
    width: 1920,
    height: 874,
    alt: "Dentist page 1"
  },
  {
    asset: "zubar2_pbf4lr",
    width: 1920,
    height: 919,
    alt: "Dentist page 2"
  },
  {
    asset: "zubar3_dfdkfb",
    width: 1920,
    height: 916,
    alt: "Dentist page 3"
  },
  {
    asset: "zubar4_ocifib",
    width: 1920,
    height: 916,
    alt: "Dentist page 4"
  },
  {
    asset: "zubar5_bumbci",
    width: 1920,
    height: 916,
    alt: "Dentist page 5"
  },
  {
    asset: "zubar6_vanuzf",
    width: 1920,
    height: 916,
    alt: "Dentist page 6"
  },
  {
    asset: "flora1_qjc0k8",
    width: 1920,
    height: 916,
    alt: "Florist page 1"
  },
  {
    asset: "flora2_eejqbz",
    width: 1920,
    height: 916,
    alt: "Florist page 2"
  },
  {
    asset: "flora3_s3ujbe",
    width: 1920,
    height: 916,
    alt: "Florist page 3"
  },
  {
    asset: "flora4_ompttp",
    width: 1920,
    height: 916,
    alt: "Florist page 4"
  },
  {
    asset: "flora5_orsofb",
    width: 1920,
    height: 916,
    alt: "Florist page 5"
  },
  {
    asset: "flora6_dacic4",
    width: 1920,
    height: 916,
    alt: "Florist page 6"
  },
  {
    asset: "graphic-2_xcygxq",
    width: 2400,
    height: 1600,
    alt: "Graphic 2"
  },
  {
    asset: "graphic-1_x8just",
    width: 2000,
    height: 1000,
    alt: "Graphic 1",
  },
  {
    asset: "ux-design-3_limzsa",
    width: 3600,
    height: 2000,
    alt: "Design 3"
  },
  {
    asset: "graphic-4_mmw4ba",
    width: 768,
    height: 1024,
    alt: "Graphic 4"
  },
  {
    asset: "moodboard1_vgibds",
    width: 1600,
    height: 1060,
    alt: "Moodboard 1"
  },
  {
    asset: "moodboard2_whaleu",
    width: 1600,
    height: 1060,
    alt: "Moodboard 2"
  },
  {
    asset: "graphic-3_frjkqm",
    width: 800,
    height: 800,
    alt: "Graphic 3"
  }
].map(({ asset, alt, width, height }) => ({
  src: assetLink(asset, width),
  alt,
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: assetLink(asset, breakpoint),
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  })),
}));

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(-1);

  return (
    <div className="portfolio-scroll-container">
      <div className="home-content">
        <h4>{t('Portfolio-Top-Text')}</h4>
        <ColumnsPhotoAlbum photos={photos} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />

        <div className="youtube-container">
          <iframe 
            src="https://www.youtube.com/embed/LUVhXeuuiWA" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
          <iframe 
            src="https://www.youtube.com/embed/0bgeqDsk_so" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;