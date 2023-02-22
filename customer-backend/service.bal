import ballerina/http;
import ballerina/graphql;

configurable string restApiUrl = "http://localhost:9090/";
http:Client clientEp = check new (restApiUrl);
# A service representing a network-accessible API
# bound to port `9090`.
service /graphql on new graphql:Listener(9091) {

    resource function get productList() returns Product[]|error {
        http:Response|error response = check clientEp->get("/products");
        if (response is http:Response) {
            json|http:ClientError payload = response.getJsonPayload();
            if (payload is json[]) {
                Product[] products = [];
                foreach json product in payload {
                    Product|error productEntry = product.cloneWithType(Product);
                    if (productEntry is error) {
                        return error("Error while parsing response", productEntry);
                    }
                    products.push(productEntry);
                }
            } else {
                return error("Error while parsing response", payload.cloneReadOnly());
            }
        }
        return error("Error while parsing response", response);
    }

    resource function get product(string id) returns Product|error {
        http:Response|error response = clientEp->get("/products/" + id);
        if (response is http:Response) {
            json|http:ClientError payload = response.getJsonPayload();
            if (payload is json) {
                Product|error productEntry = payload.cloneWithType(Product);
                if (productEntry is error) {
                    return error("Error while parsing response", productEntry);
                }
                return productEntry;
            } else {
                return error("Error while parsing response", payload.cloneReadOnly());
            }
        }
        return error(string `Error while parsing response ${response.message()}`, response);
    }
}
