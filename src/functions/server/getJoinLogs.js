const { BASEURL } = require("../../constants.js");

module.exports = (serverToken) => {
    return new Promise(async (resolve, reject) => {
      try {
        const fetch = await import("node-fetch");
        const { config } = await import("../../erlc.js");
  
        const res = await fetch.default(`${BASEURL}/server/joinlogs`, {
          headers: {
            "Authorization": config?.globalToken,
            "Server-Key": serverToken,
          },
        });
        const data = await res.json().catch((err) => {
          return reject(err);
        });
  
        if (!res.ok) {
          return reject(data);
        }
  
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };