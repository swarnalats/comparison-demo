$(document).ready(initializePage);

function initializePage()
{
    console.log("Inside ready() ")
    console.log("Init Page!!",vehicles);
    buildMenu();
}

var comparisonCarsArray = [];

function buildMenu()
{
    console.log("Inside bukdMenu()");
    var target = $("#vehicle-list");

    target.empty();

    for(var x=0 ; x < vehicles.length ; x++) {
        var vehicle = vehicles[x];

    var li = $("<li></li>");   

    var caption = $("<figcaption></figcaption>")
                .text(vehicle.year + ' ' + vehicle.make + ' ' + vehicle.model);

    var img = $("<img/>")
            .attr("src",vehicle.image);
            
    var createdFigure = makeDatFig( vehicle);
    createdFigure.append(img);
    createdFigure.append(caption);

    li.append(createdFigure);
    target.append(li);

    }
}    
    
    function makeDatFig(carData){
        var fig = $("<figure>")
                  .click(function() {
                   addCars(carData);     
                  });
         return fig;         
    }

    function addCars(car){                     
        comparisonCarsArray.push(car);        
        if(comparisonCarsArray.length == 2) 
            compareCars();           
    }

    function compareCars()
    {
        $(".col-md-6").empty();
        for(var x = 0; x <= comparisonCarsArray.length; x++ )
        {
            var currentVehicle = comparisonCarsArray.pop();            
            var cloneVehicle = $("#compareColumn").clone();
            cloneVehicle.prop("id",'');
            cloneVehicle.find('.year').text(currentVehicle.year);
            cloneVehicle.find('.make').text(currentVehicle.make);           
            cloneVehicle.find('.model').text(currentVehicle.model);
            $('.compareColumn').eq(comparisonCarsArray.length).append(cloneVehicle);
            
        }   
            
    }    
