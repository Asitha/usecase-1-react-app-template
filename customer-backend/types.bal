type ProductEntry record {
    string id;
    string title;
    string description;
    string includes;
    string intendedFor;
    string color;
    string material;
    float price;
};

public distinct isolated service class ProductData {
    private final readonly & ProductEntry entryRecord;

    function init(ProductEntry entryRecord) {
        self.entryRecord = entryRecord.cloneReadOnly();
    }

    resource isolated function get id() returns string {
        return self.entryRecord.id;
    }

    resource isolated function get title() returns string {
        return self.entryRecord.title;
    }

    resource isolated function get description() returns string {
        return self.entryRecord.description;
    }

    resource isolated function get includes() returns string {
        return self.entryRecord.includes;
    }

    resource isolated function get intendedFor() returns string {
        return self.entryRecord.intendedFor;
    }

    resource isolated function get color() returns string {
        return self.entryRecord.color;
    }

    resource isolated function get material() returns string {
        return self.entryRecord.material;
    }

    resource isolated function get price() returns float {
        return self.entryRecord.price;
    }
}
