"use strict";
function review(stars) {
    if (typeof stars === "number") {
        console.log(`A nota atribuída foi ${stars}`);
    }
    else {
        console.log(`O usuário não atribuiu nota`);
    }
}
review(3);
// review("calça")
review(true);
