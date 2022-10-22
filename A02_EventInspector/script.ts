/*
A02 EventInspector
Robert Schindler MKB
Matrikel: 271342
Datum: 22.10.2022
Quellen: Gemeinsam mit Jonas Atzenhofer erarbeitet
*/

namespace A02_EventInspector {
    window.addEventListener("load", handleLoad);
    
    function handleLoad(): void {
        
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

    function SetInfoBox (_event: MouseEvent): void {

        let span: HTMLSpanElement = document.querySelector("span");
        let x: Number = _event.screenX;
        let y: Number = _event.screenY;
        
        document.querySelector("#mouseText").textContent = "x:" + x.toString() + " y:" + y.toString() + " EventTarget:" + _event.target;

        document.querySelector("span").setAttribute("style", "left: " + x.toString() + "px; top: " + y.toString() + "px; display: " + "block");
    }

    function LogInfo (_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
        // Im Nachgang erfahren, das ein console.log für LogInfo ausgereicht hätte.
    }
 
    function customEvent(_event: MouseEvent): void {
        let event: CustomEvent = new CustomEvent("customEvent", {bubbles: true});
        let button: HTMLElement = <HTMLElement>document.querySelector("button");

    }

    function logCustomEvent(_event: Event): void {
        console.log(_event);
        
    }
}