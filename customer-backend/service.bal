import ballerina/http;
import ballerina/graphql;

configurable string restApiUrl = ?;
http:Client clientEp = check new (restApiUrl);
# A service representing a network-accessible API
# bound to port `9090`.
service /graphql on new graphql:Listener(9090) {

    resource function get all() returns ProductData[]|error {
        http:Response|error response = clientEp->get("/products");
        if (response is http:Response) {
            json|http:ClientError payload = response.getJsonPayload();
            if (payload is json[]) {
                ProductData[] products = [];
                foreach json product in payload {
                    ProductEntry|error productEntry = product.cloneWithType();
                    if (productEntry is error) {
                        return error("Error while parsing response", productEntry);
                    }
                    ProductData productData = new (productEntry);
                    products.push(productData);
                }
            } else {
                return error("Error while parsing response", payload.cloneReadOnly());
            }
        }
        return error("Error while parsing response", response);
    }

    resource function get filter(string id) returns ProductData|error {
        http:Response|error response = clientEp->get("/products/" + id);
        if (response is http:Response) {
            json|http:ClientError payload = response.getJsonPayload();
            if (payload is json) {
                ProductEntry|error productEntry = payload.cloneWithType();
                if (productEntry is error) {
                    return error("Error while parsing response", productEntry);
                }
                ProductData productData = new (productEntry);
                return productData;
            } else {
                return error("Error while parsing response", payload.cloneReadOnly());
            }
        }
        return error("Error while parsing response", response);
    }
}
