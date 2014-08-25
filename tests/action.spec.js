/**
 * Created by jgpro_000 on 25/08/14.
 */
describe("Add data entered by user to the data object", function() {
    it("should return empty values", function() {
        var newCountry = "",
            newVisit = "";
        expect(newCountry).toBe("");
        expect(newVisit).toBe("");
    });
    it("should return newCountry as defined and newVisit as empty", function() {
        var newCountry = "UK",
            newVisit = "";
        expect(newCountry).toBeDefined();
        expect(newVisit).toBe("");
    });
    it("should return newCountry as empty and newVisit as defined", function() {
        var newCountry = "",
            newVisit = 1234;
        expect(newCountry).toBe("");
        expect(newVisit).toBeDefined();
    });
    it("should expect the new data object to contain the two data entered by the user", function() {
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
        var newCountry = "UK",
            newVisit = 2000;
            data.push({"country": newCountry, "visits": newVisit},function(){
                expect(data).toContain("UK");
                expect(data).toContain(2000);
            });

    });
});