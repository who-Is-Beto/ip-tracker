import fetch from "node-fetch";
import Swal from "sweetalert2";

const fetchData = (ip: string) => {
  const regexExp =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  if (regexExp.test(ip) || ip === "") {
    return fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_hDYDIDdHjJm5uy0GepjjjDLmuGkaT&ipAddress=${ip}`
    )
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  } else {
    Swal.fire({
      title: "Error!",
      text: "Please introduce a good IP address format, I'll take you to Google...",
      icon: "error",
      confirmButtonText: "Ok :c",
    });
    return {
      ip: "8.8.8.8",
      location: {
        country: "US",
        region: "California",
        city: "Mountain View",
        lat: 37.38605,
        lng: -122.08385,
        postalCode: "94035",
        timezone: "-07:00",
        geonameId: 5375480,
      },
      domains: [
        "0--9.ru",
        "000.lyxhwy.xyz",
        "000180.top",
        "00049ok.com",
        "000xs.net",
      ],
      as: {
        asn: 15169,
        name: "Google LLC",
        route: "8.8.8.0/24",
        domain: "https://about.google/intl/en/",
        type: "Content",
      },
      isp: "Google LLC",
      proxy: {
        proxy: false,
        vpn: false,
        tor: false,
      },
    };
  }
};

const fetchInitialData = async () => {
  return await fetch(`https://api.ipify.org/?format=json`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => alert(error));
};

export { fetchData, fetchInitialData };
