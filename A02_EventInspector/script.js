/*
A02 EventInspector
Robert Schindler MKB
Matrikel: 271342
Datum: 22.10.2022
Quellen: Gemeinsam mit Jonas Atzenhofer erarbeitet
*/
var A02_EventInspector;
(function (A02_EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", SetInfoBox);
        document.addEventListener("keyup", LogInfo);
        document.addEventListener("click", LogInfo);
        document.querySelector("body").addEventListener("keyup", LogInfo);
        document.querySelector("body").addEventListener("click", LogInfo);
        document.querySelector("div").addEventListener("keyup", LogInfo);
        document.querySelector("div").addEventListener("click", LogInfo);
        document.querySelector("button").addEventListener("click", customEvent);
        document.addEventListener("customEvent", logCustomEvent);
    }
    function SetInfoBox(_event) {
        let span = document.querySelector("span");
        let x = _event.screenX;
        let y = _event.screenY;
        document.querySelector("#mouseText").textContent = "x:" + x.toString() + " y:" + y.toString() + " EventTarget:" + _event.target;
        document.querySelector("span").setAttribute("style", "left: " + x.toString() + "px; top: " + y.toString() + "px; display: " + "block");
    }
    function LogInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
        // Im Nachgang erfahren, das ein console.log für LogInfo ausgereicht hätte.
    }
    function customEvent(_event) {
        let event = new CustomEvent("customEvent", { bubbles: true });
        let button = document.querySelector("button");
    }
    function logCustomEvent(_event) {
        console.log(_event);
    }
})(A02_EventInspector || (A02_EventInspector = {}));
//# sourceMappingURL=script.js.map