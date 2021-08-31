console.log("hello beautiful");
import { loadLegos, useLegos } from './legos/LegoData.js';
import { makeLegoList } from './legos/LegoList.js';
import { BuildersBio } from './bio/BuildersBio.js';
import { useMaterials } from './legos/LegoData.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos());
	}
})
navElement.addEventListener("click", (event) => {
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos());
	}
})
navElement.addEventListener("click", (event) => {
	if (event.target.id === "0") {
		makeLegoList(useLegos())
	} else if (event.target.value === "1") {
		filterMaterials("Solid")
	} else if (event.target.value === "2") {
	filterMaterials("Transparent")
	} else if (event.target.value === "3") {
		filterMaterials("Pearl")
	} else if (event.target.value === "4") {
		filterMaterials("Chrome")
	} else if (event.target.value === "5") {
		filterMaterials("Metallic")
	} else if (event.target.value === "6") {
		filterMaterials("Milky")
	} else if (event.target.value === "7") {
		filterMaterials("Glitter")
	} else if (event.target.value === "8") {
		filterMaterials("Speckle")
	} else if (event.target.value === "9") {
		filterMaterials("Ink")
	} else if (event.target.value === "10") {
		filterMaterials("Process")
	} else if (event.target.value === "11") {
		filterMaterials("Modulex")
	}
})


const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}
const filterMaterials = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.Material.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

//EIA - Everything Is Awesome
const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	});
	const asideElement = document.querySelector("aside");
	asideElement.innerHTML += BuildersBio();
}

startEIA();
BuildersBio ();
useMaterials ();
