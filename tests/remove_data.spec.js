/**
 * Created by jgpro_000 on 26/08/14.
 */
describe("A suite for testing the removal of data by the user", function() {
    it("should check the variable is equal to the object in the array", function() {
        var data = [{
            "country": "USA",
            "visits": 2025
        }, {
            "country": "China",
            "visits": 1882
        }, {
            "country": "Japan",
            "visits": 1809
        }];
        var dataToRemove = data[0];
        expect(dataToRemove).toEqual({"country":"USA","visits":2025});
    });
    it("should remove the first object of array", function() {
        var originalData = [{
            "country": "USA",
            "visits": 2025
        }, {
            "country": "China",
            "visits": 1882
        }, {
            "country": "Japan",
            "visits": 1809
        }];
        var data = [{
            "country": "USA",
            "visits": 2025
        }, {
            "country": "China",
            "visits": 1882
        }, {
            "country": "Japan",
            "visits": 1809
        }];
        var dataToRemove = 0;
        if (dataToRemove == 0){
            data.splice(dataToRemove,dataToRemove + 1 );
            expect(data).not.toEqual(originalData);
            expect(data).not.toContain(originalData[0]);
        }
    });
    it("should remove the object of array if it is not the first object in the array", function() {
        var originalData = [{
            "country": "USA",
            "visits": 2025
        }, {
            "country": "China",
            "visits": 1882
        }, {
            "country": "Japan",
            "visits": 1809
        }];
        var data = [{
            "country": "USA",
            "visits": 2025
        }, {
            "country": "China",
            "visits": 1882
        }, {
            "country": "Japan",
            "visits": 1809
        }];
        var dataToRemove = 2;
        if (dataToRemove != 0){
            data.splice(dataToRemove,dataToRemove );
            expect(data).not.toEqual(originalData);
            expect(data).not.toContain(originalData[2]);
        }
    });
});