type Product record {|
    string id;
    string title;
    string description;
    string includes;
    string intendedFor;
    string color;
    string material;
    float price;
|};

type CartItem record {
    string customerId;
    string productId;
    int quantity;
};
