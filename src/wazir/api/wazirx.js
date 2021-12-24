export class Crypto {
    constructor() {
        this.data = [];
        this.baseApiUrl = "https://wazirx-crypto.herokuapp.com";
        this.apis = {
            tradeProfits: this.baseApiUrl + "/orders/statistics",
        };

        this.response = new Response();
    }

    async getProfitStats() {
        try {
            let res = await fetch(this.apis.tradeProfits, { method: "get" });
            if (res.ok) {
                return await res.json();
            }
        } catch (e) {
            return {
                error: true,
                msg: e.message,
            };
        }
    }
}
