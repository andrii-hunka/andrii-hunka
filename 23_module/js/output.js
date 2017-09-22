import operations from './operations';
export default function() {
    document.getElementsByClassName("operations")[0].addEventListener("click", function(event) {
        let target = event.target;
        let operation = target.innerText;
        let output = document.getElementById("output");
        let value1 = parseInt(document.getElementById("value1").value);
        let value2 = parseInt(document.getElementById("value2").value);
        switch(operation) {
            case "+" :
                output.innerText = `= ${operations.add(value1, value2)}`;
                break;
            case "-" :
                output.innerText = `= ${operations.sub(value1, value2)}`;
                break;
            case "*" :
                output.innerText = `= ${operations.mul(value1, value2)}`;
                break;
            case "/" :
                output.innerText = `= ${operations.div(value1, value2)}`;
                break;
        }
    });
    // document.getElementById("output").innerText = result;
}