import React from 'react';
import Lightbox from 'react-images';


class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.goToPrevious = this.goToPrevious.bind(this);
    this.goToNext = this.goToNext.bind(this);
  }

  goToPrevious() {
    this.setState((prevState) => ({ currentImage: prevState.currentImage - 1 }));
  }

  goToNext() {
    this.setState((prevState) => ({ currentImage: prevState.currentImage + 1 }));
  }

  render() {
    const images = [
      { src: 'project-pictures/pinglintereso.png' },
      { src: 'project-pictures/book-trading-club.png' },
      { src: 'project-pictures/voting-app.png' },
      { src: 'project-pictures/stock-market-chart.png' },
      { src: 'project-pictures/dungeon-crawler.png' },
      { src: 'project-pictures/land-heat-map.png' }
    ];

    return (
      <Lightbox
        images={[images[this.props.nbImageClicked]]}
        isOpen={this.props.isGalleryOpen}
        currentImage={this.props.currentImage}
        onClickPrev={this.goToPrevious}
        onClickNext={this.goToNext}
        onClose={this.props.handleCloseGallery}
      />
    );
  }
}

export default Gallery;