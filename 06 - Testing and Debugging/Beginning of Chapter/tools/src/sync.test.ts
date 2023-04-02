import axios from "axios";
import { getUser } from "./sync";


test("check response values", async () => {
    debugger;
    var MockAdapter = require("axios-mock-adapter");
    var mock = new MockAdapter(axios);

    debugger;

    mock.onGet('/user?ID=12345').reply(200, {
        users: [{ id: 1, name: "John Smith" }],
    });

    let response = await getUser();
    debugger;
});