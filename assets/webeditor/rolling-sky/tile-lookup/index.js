function program() {
  function a() {
    (b.value = parseInt(b.value)),
      b.value > RollingSky.maxtile && (b.value = RollingSky.maxtile),
      0 > b.value && (b.value = 0),
      "" == b.value && (b.value = 0),
      (c.className = b.value ? parseInt(b.value) : "0");
    var a = obstacledat.obstacles[parseInt(c.className)],
      f = "No GeoBuffers / Types (Yet)";
    0 == !a.geobuffers.all.length && (f = a.geotype);
    var g = "No Geobuffers",
      h = "";
    if (
      ((h = a.geotype + " (" + PrefabType[a.geotype] + ")"),
      0 < a.geobuffers.all.length)
    ) {
      g = "";
      for (var j = 0; j < a.geobuffers.all.length; j++)
        g += a.geobuffers.all[j] + "," + a.geotype + ",#<br>";
    }
    (d.innerHTML =
      "<c-lb>Name</c-lb>: " +
      a.name +
      "<br><c-lb>GeoBuffers</c-lb>: " +
      a.geobuffers.all.join(", ") +
      "<br><c-lb>GeoType</c-lb>: " +
      h),
      (e.innerHTML = g);
  }
  const b = document.getElementById("lookup"),
    c = document.getElementById("previewicon"),
    d = document.getElementById("innerdata"),
    e = document.getElementById("geoexp"),
    f = window.location.search,
    g = new URLSearchParams(f),
    h = g.get("t");
  null != h && (b.value = h),
    setInterval(function () {
      a();
    });
}
document.getElementById("version").innerHTML = obstacledat.version;
for (
  var changelogarray = obstacledat.changelog.split(";"),
    finalchangelogarray = [],
    i = 0;
  i < changelogarray.length;
  i++
)
  finalchangelogarray.push("<li>" + changelogarray[i] + "</li>");
(document.getElementById("changelog").innerHTML = finalchangelogarray.join("")),
  program();
