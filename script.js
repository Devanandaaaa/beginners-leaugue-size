const sizeCharts = {
    men: {
        hm: [
            { chest: [34, 36], waist: [28, 30], size: "S" },
            { chest: [38, 40], waist: [32, 34], size: "M" },
            { chest: [42, 44], waist: [36, 38], size: "L" },
            { chest: [46, 48], waist: [40, 42], size: "XL" }
        ],
        zara: [
            { chest: [35, 37], waist: [29, 31], size: "S" },
            { chest: [38, 40], waist: [32, 34], size: "M" },
            { chest: [41, 43], waist: [35, 37], size: "L" },
            { chest: [44, 46], waist: [38, 40], size: "XL" }
        ]
    },
    women: {
        hm: [
            { chest: [32, 34], waist: [24, 26], hips: [34, 36], size: "S" },
            { chest: [35, 37], waist: [27, 29], hips: [37, 39], size: "M" },
            { chest: [38, 40], waist: [30, 32], hips: [40, 42], size: "L" },
            { chest: [41, 43], waist: [33, 35], hips: [43, 45], size: "XL" }
        ],
        zara: [
            { chest: [33, 35], waist: [25, 27], hips: [35, 37], size: "S" },
            { chest: [36, 38], waist: [28, 30], hips: [38, 40], size: "M" },
            { chest: [39, 41], waist: [31, 33], hips: [41, 43], size: "L" },
            { chest: [42, 44], waist: [34, 36], hips: [44, 46], size: "XL" }
        ]
    }
};

function convertSize() {
    let gender = document.getElementById("gender").value;
    let unit = document.getElementById("unit").value;
    let chest = parseFloat(document.getElementById("chest").value);
    let waist = parseFloat(document.getElementById("waist").value);
    let hips = parseFloat(document.getElementById("hips").value);
    let result = document.getElementById("result");

    if (unit === "cm") {
        chest = chest / 2.54;
        waist = waist / 2.54;
        hips = hips / 2.54;
    }

    let brands = sizeCharts[gender];
    let output = "";

    for (let brand in brands) {
        let found = brands[brand].find(item => {
            let chestOK = chest >= item.chest[0] && chest <= item.chest[1];
            let waistOK = waist >= item.waist[0] && waist <= item.waist[1];
            let hipsOK = gender === "women" ? (hips >= item.hips[0] && hips <= item.hips[1]) : true;
            return chestOK && waistOK && hipsOK;
        });

        output += `<strong>${brand.toUpperCase()}</strong>: ${found ? found.size : "No match"}<br>`;
    }

    result.innerHTML = output;
}
