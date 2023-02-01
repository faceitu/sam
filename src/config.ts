const environments: any = {
    "sam.lepis.ar": {
        baseURL: "https://sam-api.lepis.ar/"
    },
    "localhost": {
        baseURL: "https://sam-api.lepis.ar/"
    }
}

const getConfig = () => {
    const hostname = window && window.location && window.location.hostname;
    console.log(hostname);
    return environments[hostname];
}

export default getConfig;