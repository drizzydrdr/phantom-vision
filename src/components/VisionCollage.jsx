import cyberpunkWindow from '../assets/spark/cyberpunk-window.jpg';
import airportSunset from '../assets/spark/airport-sunset.jpg';
import sunsetStreet from '../assets/spark/sunset-street.jpg';
import sunsetDinner from '../assets/spark/sunset-dinner.jpg';
import pinkSkyline from '../assets/spark/pink-skyline.jpg';
import guitarRack from '../assets/spark/guitar-rack.jpg';
import vinylWall from '../assets/spark/vinyl-wall.jpg';
import vinylRoom from '../assets/spark/vinyl-room.jpg';
import guitarJournal from '../assets/spark/guitar-journal.jpg';
import beachGuitar from '../assets/spark/beach-guitar.jpg';
import darkLoft from '../assets/spark/dark-loft.jpg';
import vinylWine from '../assets/spark/vinyl-wine.jpg';
import nightTram from '../assets/spark/night-tram.jpg';

// Each tile: image, grid placement (col/row span), rotation, optional tape
// corner, and a caption-ish label in the same voice as the rest of the app.
const TILES = [
  { src: beachGuitar, label: 'PROFICIENCY', span: 'row-span-2', rotate: '-rotate-2', tape: 'tl' },
  { src: pinkSkyline, label: null, span: '', rotate: 'rotate-1', tape: null },
  { src: guitarRack, label: 'PROFICIENCY', span: '', rotate: '-rotate-1', tape: 'tr' },
  { src: darkLoft, label: null, span: 'row-span-2', rotate: 'rotate-2', tape: null },
  { src: cyberpunkWindow, label: null, span: '', rotate: '-rotate-1', tape: 'tl' },
  { src: vinylWall, label: 'TASTE', span: '', rotate: 'rotate-1', tape: null },
  { src: sunsetDinner, label: null, span: 'row-span-2', rotate: '-rotate-2', tape: 'tr' },
  { src: airportSunset, label: 'GO', span: '', rotate: 'rotate-2', tape: null },
  { src: vinylRoom, label: null, span: '', rotate: '-rotate-1', tape: 'br' },
  { src: nightTram, label: null, span: '', rotate: 'rotate-1', tape: null },
  { src: guitarJournal, label: 'PROFICIENCY', span: '', rotate: '-rotate-2', tape: 'tl' },
  { src: sunsetStreet, label: null, span: '', rotate: 'rotate-1', tape: null },
  { src: vinylWine, label: 'TASTE', span: '', rotate: '-rotate-1', tape: 'tr' },
];

export default function VisionCollage() {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-3 auto-rows-[90px] gap-2">
        {TILES.map((tile, i) => (
          <div
            key={i}
            className={`relative overflow-hidden border-2 border-on-background hard-shadow ${tile.span} ${tile.rotate}`}
          >
            <img
              src={tile.src}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {tile.tape === 'tl' && (
              <div className="absolute -top-2 -left-2 w-10 h-3.5 bg-on-background/90 -rotate-45 z-10" />
            )}
            {tile.tape === 'tr' && (
              <div className="absolute -top-2 -right-2 w-10 h-3.5 bg-on-background/90 rotate-45 z-10" />
            )}
            {tile.tape === 'br' && (
              <div className="absolute -bottom-2 -right-2 w-10 h-3.5 bg-on-background/90 rotate-[135deg] z-10" />
            )}
            {tile.label && (
              <span
                className="absolute bottom-1.5 left-1.5 font-mono bg-background/85 text-primary px-1.5 py-0.5 uppercase z-10"
                style={{ fontSize: 8.5, letterSpacing: '0.05em' }}
              >
                {tile.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
