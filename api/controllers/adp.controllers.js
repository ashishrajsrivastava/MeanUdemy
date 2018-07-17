var hotelData = require('../data/hotel-data.json');

module.exports.adpGetAllHotel = function(req,res){
    console.log('get the json');
    res
        .status(200)
        .json(hotelData);
}