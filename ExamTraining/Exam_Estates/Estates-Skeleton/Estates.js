function processEstatesAgencyCommands(commands) {

    'use strict';

    Object.prototype.extends = function (parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    }
    
       
    var Estate = (function () {
        
      function Estate(name, area, location, isFurnitured){
            this.setName(name);
            this.setArea(area);
            this.setLocation(location);
            this.setIsFurnitured(isFurnitured);
        }
        
        Estate.prototype.getName = function getName() {
            return this._name;
        }
        
        Estate.prototype.setName = function (name) {
            if (name == null || name == "") { 
                throw ("Estate name cannnot be empty!");
            }
            this._name = name;
        }
        
        Estate.prototype.getArea = function () {
            return this._area;
        }
        
        Estate.prototype.setArea = function (area) {
            if (parseInt(area)< 1 ||
                parseInt(area) > 10000) { 
                throw new Error("Estate area should be an integer in range [1…10000]");
            }
            this._area = area;
        }
        
        Estate.prototype.getLocation = function () {
            return this._location;
        }
        
        Estate.prototype.setLocation = function (location) {
            if (location == null || location == "") {
                throw ("Estate location cannnot be empty!");
            }
            this._location = location;
        }
        
        Estate.prototype.getIsFurnitured = function () {
            return this._isFurnitured;
        }
        
        Estate.prototype.setIsFurnitured = function (isFurnitured) {
            if (typeof(isFurnitured) != "boolean" ) { 
                throw new Error("Estate isFurnitured should be accept boolean values (true or false)")
            }
            this._isFurnitured = isFurnitured;
        }
        
                
        Estate.prototype.toString = function (){
            var furniture = this._isFurnitured? "Yes"  : "No";
            //Apartment: Name = aptLozenec24, Area = 150, Location = Sofia, Furnitured = Yes
            return this.constructor.name + ": Name = " + this.getName() + 
                ", Area = " + this.getArea() + 
                ", Location = " + this.getLocation()+ 
                ", Furnitured = " + furniture;
        }
        
       
        return Estate;
    }());


    var BuildingEstate = (function () {
       
        function BuildingEstate(name, area, location, isFurnitured, rooms, hasElevator) {
            Estate.call(this, name, area, location, isFurnitured);
            this.setRooms(rooms);
            this.setHasElevator(hasElevator);
        }

        BuildingEstate.extends(Estate);

        BuildingEstate.prototype.setRooms = function (rooms) {
            if (parseInt(rooms) < 0 ||
                parseInt(rooms) > 100) {
                throw new Error("Estate rooms should be an integer in range [0…100]");
            }
            this._rooms = rooms;
        }
        
        BuildingEstate.prototype.getRooms = function () {
           return this._rooms;
        }
        
        BuildingEstate.prototype.setHasElevator = function (hasElevator) {
            if (typeof (hasElevator) != "boolean") {
                throw new Error("Estate hasElevator should be accept boolean values (true or false)")
            }
            this._hasElevator = hasElevator;
        }
        
        BuildingEstate.prototype.getHasElevator = function () {
            return this._hasElevator;
        }
        
        BuildingEstate.prototype.toString = function () {
            var elevator = this.getHasElevator()? "Yes" : "No";
            //, Rooms: 4, Elevator: Yes
            return Estate.prototype.toString.call(this) + 
                ", Rooms: " + this.getRooms() + 
                ", Elevator: " + elevator;
        }

        return BuildingEstate;
    }());


    var Apartment =( function() {
        function Apartment(name, area, location, isFurnitured, rooms, hasElevator) {
            BuildingEstate.call(this,name, area, location, isFurnitured, rooms, hasElevator);
        }

        Apartment.extends(BuildingEstate);
        return Apartment;
    }());


    var Office =( function() {
        function Office(name, area, location, isFurnitured, rooms, hasElevator) { 
            BuildingEstate.call(this, name, area, location, isFurnitured, rooms, hasElevator)
        }
        
        Office.extends(BuildingEstate);
        
        Office.prototype.toString = function () {
            return BuildingEstate.prototype.toString.call(this);
        }
        return Office;
    }());


    var House = (function () {

        function House(name, area, location, isFurnitured, floors){
             Estate.call(this,name, area, location, isFurnitured)
             this.setFloors(floors);
        }
        
        House.extends(Estate);
        House.prototype.getFloors = function () {
            return this._floors;
        }

        House.prototype.setFloors = function (floors) {
            if (parseInt(floors) < 1 ||
                parseInt(floors) > 10) {
                throw new Error("House floors should be an integer in range [1…10]");
            }
            this._floors = floors;
        }
        
        
        House.prototype.toString = function toString(){

            return Estate.prototype.toString.call(this) +
            "floors: " + this.getFloors();
         }
        return House;
    } ());


    var Garage = (function () {
        
        function Garage(name, area, location, isFurnitured, width, height) {
            Estate.call(this, name, area, location, isFurnitured);
            this.setWidth(width);
            this.setHeight(height);
        }
        Garage.extends(Estate);
        
        Garage.prototype.getWidth = function () {
            return this._width;
        }

        Garage.prototype.setWidth = function (width) {
            if (parseInt(width) < 1 ||
                parseInt(width) > 500) {
                throw new Error("Garage width should be an integer in range [1…500]");
            }
            this._width = width;
        }
        
        Garage.prototype.getHeight = function () {
            return this._height;
        }
        Garage.prototype.setHeight = function (height) {
            if (parseInt(height) < 1 ||
                parseInt(height) > 500) {
                throw new Error("Garage height should be an integer in range [1…500]");
            }
            this._height = height;
        }
        
        Garage.prototype.toString = function toString() {
            //Width: 3, Height: 6
            return Estate.prototype.toString.call(this) + 
                ", Width: " + this.getWidth() +
                ", Height: " + this.getHeight();
        }

        return Garage;
    }());


    var Offer = (function () {

        function Offer(estate ,price) {
            this.setEstate(estate);
            this.setPrice(price);

        }
        
        Offer.prototype.getEstate = function () {
            return this._estate;
        }

        Offer.prototype.setEstate = function (estate) {
            this._estate = estate;
        }

        Offer.prototype.getPrice = function () {
            return this._price;
        }

        Offer.prototype.setPrice = function (price) {
            if (parseInt(price) < 0 || isNaN(parseInt(price))){
                throw new Error("Offer price should be a positive integer");
            }
            this._price = price;
        }
        Offer.prototype.toString = function () { 
            var estateStr = this.getEstate();
            //Rent: Estate = aptLozenec24, Location = Sofia, Price = 750
            return this.constructor.name.replace("Offer","") + ":" +
                " Estate = " + estateStr.getName() + 
                ", Location = " + estateStr.getLocation() + 
                ", Price = " + this.getPrice();
        }

        return Offer;
    }());


    var RentOffer = (function () {

        function RentOffer(estate,price) { 
            Offer.call(this, estate, price);
        }
        RentOffer.extends(Offer);
        
        RentOffer.prototype.toString = function () { 
            return Offer.prototype.toString.call(this);
        }
        return RentOffer;
    }());


    var SaleOffer = (function () {
        
        function SaleOffer(estate, price) {
            Offer.call(this, estate, price);
        }
        SaleOffer.extends(Offer);
        
        SaleOffer.prototype.toString = function () {
            return Offer.prototype.toString.call(this);
        }
        return SaleOffer;
    }());


    var EstatesEngine = (function() {
        var _estates;
        var _uniqueEstateNames;
        var _offers;

        function initialize() {
            _estates = [];
            _uniqueEstateNames = {};
            _offers = [];
        }

        function executeCommand(command) {
            var cmdParts = command.split(' ');
            var cmdName = cmdParts[0];
            var cmdArgs = cmdParts.splice(1);
            switch (cmdName) {
            case 'create':
                return executeCreateCommand(cmdArgs);
            case 'status':
                return executeStatusCommand();
            case 'find-sales-by-location':
                return executeFindSalesByLocationCommand(cmdArgs[0]);
            case 'find-rents-by-location':
                return executeFindRentsByLocationCommand(cmdArgs[0]);
            case 'find-rents-by-price':
                return executeFindRentsByPriceCommand(cmdArgs[0], cmdArgs[1]);
            default:
                throw new Error('Unknown command: ' + cmdName);
            }
        }

        function executeCreateCommand(cmdArgs) {
            var objType = cmdArgs[0];
            switch (objType) {
            case 'Apartment':
                var apartment = new Apartment(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), parseBoolean(cmdArgs[6]));
                addEstate(apartment);
                break;
            case 'Office':
                var office = new Office(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), parseBoolean(cmdArgs[6]));
                addEstate(office);
                break;
            case 'House':
                var house = new House(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]));
                addEstate(house);
                break;
            case 'Garage':
                var garage = new Garage(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), Number(cmdArgs[6]));
                addEstate(garage);
                break;
            case 'RentOffer':
                var estate = findEstateByName(cmdArgs[1]);
                var rentOffer = new RentOffer(estate, Number(cmdArgs[2]));
                addOffer(rentOffer);
                break;
            case 'SaleOffer':
                estate = findEstateByName(cmdArgs[1]);
                var saleOffer = new SaleOffer(estate, Number(cmdArgs[2]));
                addOffer(saleOffer);
                break;
            default:
                throw new Error('Unknown object to create: ' + objType);
            }
            return objType + ' created.';
        }

        function parseBoolean(value) {
            switch (value) {
            case "true":
                return true;
            case "false":
                return false;
            default:
                throw new Error("Invalid boolean value: " + value);
            }
        }

        function findEstateByName(estateName) {
            for (var i = 0; i < _estates.length; i++) {
                if (_estates[i].getName() == estateName) {
                    return _estates[i];
                }
            }
            return undefined;
        }

        function addEstate(estate) {
            if (_uniqueEstateNames[estate.getName()]) {
                throw new Error('Duplicated estate name: ' + estate.getName());
            }
            _uniqueEstateNames[estate.getName()] = true;
            _estates.push(estate);
        }

        function addOffer(offer) {
            _offers.push(offer);
        }

        function executeStatusCommand() {
            var result = '', i;
            if (_estates.length > 0) {
                result += 'Estates:\n';
                for (i = 0; i < _estates.length; i++) {
                    result += "  " + _estates[i].toString() + '\n';
                }
            } else {
                result += 'No estates\n';
            }

            if (_offers.length > 0) {
                result += 'Offers:\n';
                for (i = 0; i < _offers.length; i++) {
                    result += "  " + _offers[i].toString() + '\n';
                }
            } else {
                result += 'No offers\n';
            }

            return result.trim();
        }

        function executeFindSalesByLocationCommand(location) {
            if (!location) {
                throw new Error("Location cannot be empty.");
            }
            var selectedOffers = _offers.filter(function(offer) {
                return offer.getEstate().getLocation() === location &&
                    offer instanceof SaleOffer;
            });
            selectedOffers.sort(function(a, b) {
                return a.getEstate().getName().localeCompare(b.getEstate().getName());
            });
            return formatQueryResults(selectedOffers);
        }
        
        function executeFindRentsByLocationCommand(location) {
            if (!location) {
                throw new Error("Location cannot be empty.");
            }
            var selectedOffers = _offers.filter(function (offer) {
                return offer.getEstate().getLocation() === location &&
                    offer instanceof RentOffer;
            });
            selectedOffers.sort(function (a, b) {
                return a.getEstate().getName().localeCompare(b.getEstate().getName());
            });
            return formatQueryResults(selectedOffers);
        }
        
        function executeFindRentsByPriceCommand(minPrice, maxPrice ) {
            if (parseInt(minPrice) < 0 || 
                parseInt(maxPrice) < 0) {
                throw new Error("Price m");
            }
            var selectedOffers = _offers.filter(function (offer) {
                return offer.getPrice() >= minPrice && 
                    offer.getPrice() <= maxPrice &&
                    offer instanceof RentOffer;
            });
            selectedOffers.sort(function (a, b) {
                return a.getEstate().getName().localeCompare(b.getEstate().getName());
            });
            return formatQueryResults(selectedOffers);
        }

        function formatQueryResults(offers) {
            var result = '';
            if (offers.length == 0) {
                result += 'No Results\n';
            } else {
                result += 'Query Results:\n';
                for (var i = 0; i < offers.length; i++) {
                    var offer = offers[i];
                    result += '  [Estate: ' + offer.getEstate().getName() +
                        ', Location: ' + offer.getEstate().getLocation() +
                        ', Price: ' + offer.getPrice() + ']\n';
                }
            }
            return result.trim();
        }

        return {
            initialize: initialize,
            executeCommand: executeCommand
        };
    }());


    // Process the input commands and return the results
    var results = '';
    EstatesEngine.initialize();
    commands.forEach(function(cmd) {
        if (cmd != '') {
            try {
                var cmdResult = EstatesEngine.executeCommand(cmd);
                results += cmdResult + '\n';
            } catch (err) {
                //console.log(err);
                results += 'Invalid command.\n';
            }
        }
    });
    return results.trim();

}

// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

(function() {
    var arr = [];
    if (typeof (require) == 'function') {
        // We are in node.js --> read the console input and process it
        require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        }).on('line', function(line) {
            arr.push(line);
        }).on('close', function() {
            console.log(processEstatesAgencyCommands(arr));
        });
    }
})();
