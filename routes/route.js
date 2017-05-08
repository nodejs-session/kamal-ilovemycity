exports.home=function(req,res){
  res.render('index',{
    sitename:'I Love My City - Kamal',
    title:'I Love My City - Kamal',
    headline:'module 2 assignment using ejs',
  });
}

exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading,sitename;
    var imageCount=4;
    

    if(cityName === 'chennai'){
       title="Chennai";
       heading ="Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost, when it was called Madras. Religious sites include Kapaleeshwarar Temple, adorned with carved and painted gods, and St. Mary’s, a 17th-century Anglican church.";
    }
    else if(cityName === 'mysore'){
       title ="Mysuru";
       heading="Mysore (or Mysuru), a city in India's southwestern Karnataka state, was the capital of the Kingdom of Mysore from 1399 to 1947. In its center is opulent Mysore Palace, seat of the former ruling Wodeyar dynasty. The palace blends Hindu, Islamic, Gothic and Rajput styles. Mysore is also home to the centuries-old Devaraja Market, filled with spices, silk and sandalwood. ";
    }
    else if(cityName === 'bengaluru'){
       title="Bengaluru";
       heading ="Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building. Former royal residences include 19th-century Bangalore Palace, modeled after England’s Windsor Castle, and Tipu Sultan’s Summer Palace, an 18th-century teak structure.";
    }   
    else if(cityName === 'ooty'){
       title="Ooty";
       heading="Ooty, also known as Udhagamandalam, is a hill station in the state of Tamil Nadu, in southern India. Surrounded by trees, central Ooty Lake is a huge artificial expanse of water with pleasure boats. On the slopes of nearby Elk Hill, the Rose Garden is home to over 2,000 varieties of roses. The Government Botanical Garden, created in the 19th century, features ferns, orchids and a prehistoric, fossilized tree.";
    }
    
    sitename = title +' | I Love My City - Kamal';
    res.render('city',{
        sitename:sitename,
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }