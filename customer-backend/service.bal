import ballerina/http;
import ballerina/graphql;

configurable string restApiUrl = "http://localhost:9090/";
http:Client clientEp = check new (restApiUrl);
# A service representing a network-accessible API
# bound to port `9090`.
service /graphql on new graphql:Listener(9091) {

    resource function get productList() returns Product[]|error {
        Product[] response = check clientEp->get("/products");
        return response;
    }

    resource function get product(string id) returns Product|error {
        Product response = check clientEp->get("/products/" + id);
        return response;
    }

    resource function get cart(string customerId) returns CartItem[]|error {
        CartItem[] response = check clientEp->get("/cart/" + customerId);
        return response;
    }

}
