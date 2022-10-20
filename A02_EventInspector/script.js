var A02_EventInspector;
(function (A02_EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        console.log("Spast");
        document.addEventListener("mousemove", SetInfoBox);
        document.addEventListener("keyup", LogInfo);
        document.addEventListener("click", LogInfo);
        document.querySelector("body").addEventListener("keyup", LogInfo);
        document.querySelector("body").addEventListener("click", LogInfo);
        document.querySelector("div").addEventListener("keyup", LogInfo);
        document.querySelector("div").addEventListener("click", LogInfo);
    }
    function SetInfoBox(_event) {
        let x = _event.screenX;
        let y = _event.screenY;
        document.querySelector("#mouseText").textContent = "x-Achse:" + x.toString() + " y-Achse:" + y.toString() + " EventTarget:" + _event.target;
        document.querySelector("span");
        x.toString() + "px";
    }
    function LogInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    // Im Nachgang erfahren, das ein console.log für LogInfo ausgereicht hätte.
})(A02_EventInspector || (A02_EventInspector = {}));
//# sourceMappingURL=script.js.map