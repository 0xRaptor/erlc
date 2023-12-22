const { BASEURL } = require("../../constants.js");

module.exports = (serverToken, command) => {
    return new Promise(async (resolve, reject) => {
      try {
        const fetch = await import("node-fetch");
        const { config } = await import("../../erlc.js");
        const params = JSON.stringify({command: `${command}`})
        console.log(params)
        const res = await fetch.default(`${BASEURL}/server/command`, {
          headers: {
            "Authorization": config?.globalToken,
            "Server-Key": serverToken,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: params
        });
        if (!res.ok) {
          return reject(data);
        }
  
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };