let view = {
    render: function() {
        let app = document.createElement("div");
        app.setAttribute("class","app");
        app.innerHTML = `
            <input type="number" id="value1"></input>
            <input type="number" id="value2"></input>
            <span id="output"></span>
            <div class="operations">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
            </div>
        `;
        document.getElementsByTagName("body")[0].appendChild(app);
    }
}
export default view;