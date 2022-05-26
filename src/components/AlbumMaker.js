import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from './data/photo-entries';

class AlbumMaker extends React.Component {

  render() {


    console.log(entries);;

    return (
      <div className="flex-container">
        {
          entries.itemlist.map((photo) =>{
            return <PhotoEntry key={photo.src} src={photo.src} location={photo.location} caption={photo.caption}/>
          })
        }



      { /* <PhotoEntry src="berlin.jpg" location="Berlin, Germany" caption="Heart of Europe" />
        <PhotoEntry src="beverly-hills.jpg" location="Beverly Hills, USA" caption="Southern California" />
        <PhotoEntry src="maple-leaf.jpg" location="Toronto, Canada" caption="Autumn" />
        <PhotoEntry src="wings.jpg" location="San Francisco, USA" caption="Wanderlust" />
        <PhotoEntry src="hawaii.jpg" location="Kona, Hawaii, USA" caption="Deep Thought" />
    <PhotoEntry src="london.jpg" location="London, UK" caption="Trafalgar Square" /> */  }
      </div>
    )

  }

}

export default AlbumMaker;
