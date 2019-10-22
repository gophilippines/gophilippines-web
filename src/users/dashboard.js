import React, { Component } from "react";

import axios from "axios";
const instance = axios.create({
    //baseURL: "https://asia-east2-dev-gophil-1009.cloudfunctions.net/api",
    headers: { "X-Custom-Header": "foobar" }
});

const token =
    "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZhMWQ3NzBlZWY5ZWFhNjU0MzY1ZGE5MDhjNDIzY2NkNzY4ODkxMDUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGV2LWdvcGhpbC0xMDA5IiwiYXVkIjoiZGV2LWdvcGhpbC0xMDA5IiwiYXV0aF90aW1lIjoxNTcxMzAyMzkyLCJ1c2VyX2lkIjoiajZGN05Ha1FlNmJKRW1xQ1hoMW5Vem9pY0xXMiIsInN1YiI6Imo2RjdOR2tRZTZiSkVtcUNYaDFuVXpvaWNMVzIiLCJpYXQiOjE1NzEzMDIzOTIsImV4cCI6MTU3MTMwNTk5MiwiZW1haWwiOiJ0cnlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRyeUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ZvDKrTzntqZlbIifrAD0eSZQyZhw2yAFcjDGa7IsManJCGM5BL8mKmITwIa8bAB4GCgYWow3_EFjCAUTraNlkB3A-TfSS4_7dPXATr_XOV5bvLoF_qz9C-GE3kUMqpOYgjj321_6Ztzuk4NFMqea-oHFkASBREMv4-qFJhE5a8bCIhFFJwaZnOB6-_tPhnGyLnGhXflOwZD3nyp2dKNur7UJHknCQUPF8jNoN0mS0SLJegI5QqBFkJWeeH3QupjF4z5qy3t6_HLSNOp9s90Suh7GBAndLkoHZ0EFBveBvSgOguKqUkWk93VMLHubD1aUwaCmnSon0NG5p_-8ia5vtA";
instance.defaults.headers.common["Authorization"] = token;
instance.defaults.headers.post["Content-Type"] = "application/json";

class dashboard extends Component {
    componentDidMount() {
        axios
            .get(
                "https://asia-east2-dev-gophil-1009.cloudfunctions.net/api/activity1"
            )
            .then(function(response) {
                // handle success
                console.log(response);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .finally(function() {
                // always executed
            });
    }
    render() {
        return <div>dashboard</div>;
    }
}

export default dashboard;
