function mapInit() {
  const mymap = L.map("mapid").setView([38.9897, -76.9378], 11);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoicmhhYmliNjI0IiwiYSI6ImNrbTUxc2l5MjBhNWIycHJiZW5sbHpkNHEifQ.KmycIpSIxSwzLJBv00pVSw",
    }
  ).addTo(mymap);
  return mymap;
}

async function dataHandler(mapObjectFromFunction) {
  console.log("Window loaded");
  const form = document.querySelector(".userform");
  const search = document.querySelector("#zip");
  const targetList = document.querySelector(".target-list");

  const request = await fetch("/api");
  const data = await request.json();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("submit fired");
    const d = data.filter(
      (record) => record.zip.includes(search.value) && record.geocoded_column_1
    );

    const display = d.reduce((unique, o) => {
      if (
        !unique.some(
          (obj) =>
            obj.address_line_1 === o.address_line_1 &&
            obj.city === o.city &&
            obj.state === o.state
        )
      ) {
        unique.push(o);
      }
      return unique;
    }, []);
    while (targetList.firstChild) {
      targetList.removeChild(targetList.firstChild);
    }
    const target = display.slice(0, 5);
    target.forEach((item) => {
      const coord = item.geocoded_column_1.coordinates;
      const marker = L.marker([coord[1], coord[0]]).addTo(
        mapObjectFromFunction
      );
      const appendItem = document.createElement("li");
      const html = target.map(
        (place) => `
              <li>
                <span class='name'>${place.name}</span> 
                <span class='address'>${place.address_line_1}</span>
              </li>
            `
      );
      if (search.value.length === 0) {
        html.length = 0;
      } else html.length = 5;
      targetList.innerHTML = html.join('');
    });
    console.log(target);
    console.table(target);

    target.forEach((item) => {
      const coordinate = item.geocoded_column_1;
      mapObjectFromFunction.panTo([coordinate.coordinates[1], coordinate.coordinates[0]]);
    });
  });

  search.addEventListener('input', (event) => {
    console.log('input', event.target.value);
  });
}

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;
