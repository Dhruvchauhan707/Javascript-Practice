let bal = 1000;
var time = 0;
while (1) {
    let option = prompt("type 1 for cheak balance type 2 for widrow money");

    if (option == 1) {
        console.log(bal);
    }
    else if (option == 2) {

        if (time < 3) {

            let wid = prompt("enter how many you can widrow");
            if (wid > bal) {
                console.log("not enoguth money");
                alert("not enoguth money");
            }
            else {
                bal = bal - wid;
                console.log(`now yore balance is${bal} `);
                alert(`yore ${time+1} widro complate now you can ${3-(time+1)} time widro money`);
                time++;
            }
        }
        else {
            console.log("sorry you can widrow must be 3 times only");
            break;
        }
    }
    else {
        console.log("invalid input");
    }
}