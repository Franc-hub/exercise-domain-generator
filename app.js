let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let dots = [".com", ".us", ".net", ".io"]

//First solution

for (let i = 0; i < adjs.length; i++) {

    for (let j = 0; j < pronouns.length; j++) {

        for (let k = 0; k < nouns.length; k++) {

            for (let l = 0; l < dots.length; l++) {
                console.log(pronouns[i] + adjs[j] + nouns[k] + dots[l]);

            }
        }
    }
}

//Second Solution

pronouns.forEach(pronoun => {
    adjs.forEach(adj => {
        nouns.forEach(noun => {
            dots.forEach(dot => {
                console.log(pronoun + adj + noun + dot);
            });
        });
    });

});

