import ballerina/http;
import ballerina/log;
import ballerina/graphql;

configurable string restApiUrl = "http://localhost:9090";
http:Client clientEp = check new (restApiUrl);
# A service representing a network-accessible API
# bound to port `9090`.
service /graphql on new graphql:Listener(9091) {

    resource function get productList() returns Product[]|error {
        Product[]|error response = clientEp->get("/petstore/products");
        if (response is error) {
            log:printError("Error while fetching products ", response);
            return error("Error while fetching products");
        }
        return response;
    }

    resource function get product(string id) returns Product|error {
        Product|error response = check clientEp->get("/petstore/products/" + id);
        if (response is error) {
            log:printError("Error while fetching product", response);
            return error("Error while fetching product");
        }
        return response;
    }

    resource function get cart(string customerId) returns CartItem[]|error {
        CartItem[]|error response = check clientEp->get("/petstore/cart/" + customerId);
        if (response is error) {
            log:printError("Error while fetching cart", response);
            return error("Error while fetching cart");
        }
        return response;
    }

}
