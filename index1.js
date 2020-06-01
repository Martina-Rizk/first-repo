var images = new Array("photos/image1.jpg", "photos/image2.jpg", "photos/image3.jpg",
                       "photos/image4.jpg", "photos/image5.jpg", "photos/image6.jpg",
                       "photos/image7.jpg", "photos/image8.jpg", "photos/image9.jpg",
                       "photos/image10.jpg");

var links = new Array("https://charlieswanderings.com/middleeast/egypt/beauty-of-egypt/", "https://gatheringdreams.com/cheapest-countries-to-visit/", "https://www.harpersbazaar.com/culture/travel-dining/g7171/most-beautiful-places-in-the-world/", "https://www.venuereport.com/blog/girls-getaway-of-the-week-magical-rock-formations-in-the-serene-canyons-of-utah/", "https://www.society19.com/uk/long-haul-flight-essentials-that-you-need/", "", "", "http://letsbookatravel.blogspot.com/2018/06/ola-la-la.html", "", "https://gretastravels.com/most-instagrammable-places-in-rome/");

  for(var i=0; i<images.length; i++){
    document.write(
      '<a href="'+links[i]+'"><img src="'+images[i]+'"style="border-radius: 8px; margin: 5px;"></a>');
  }
