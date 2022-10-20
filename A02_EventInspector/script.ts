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
    }

    function SetInfoBox (_event: MouseEvent): void {

        let span: HTMLSpanElement = document.querySelector("span");
        let x: Number = _event.screenX;
        let y: Number = _event.screenY;
        
        document.querySelector("#mouseText").textContent = "x-Achse:" + x.toString() + " y-Achse:" + y.toString() + " EventTarget:" + _event.target;

        document.querySelector("span").setAttribute("style", "left: " + x.toString() + "px; top: " + y.toString() + "px; display: " + "block");
    }

    function LogInfo (_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }

// Im Nachgang erfahren, das ein console.log für LogInfo ausgereicht hätte.
    
}