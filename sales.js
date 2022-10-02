"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

/*calculate sum of total sales by quarter*/
const quarterTotals = [0, 0, 0, 0];

quarterTotals[0] = region1[0] + region2[0] + region3[0] + region4[0] + region5[0]
quarterTotals[1] = region1[1] + region2[1] + region3[1] + region4[1] + region5[1]
quarterTotals[2] = region1[2] + region2[2] + region3[2] + region4[2] + region5[2]
quarterTotals[3] = region1[3] + region2[3] + region3[3] + region4[3] + region5[3]

/*display total sales by quarter*/
document.write("<h2>Sales by Quarter</h2>");
let displayQuarterTotals = "";
let count = 1;
for (let i = 0; i < 4; i++) {
	document.write("Q" + count + ": $" + quarterTotals[i] + "\n");
	count++;
}

/*calculate sum of total sales by region*/
const regionTotals = [0, 0, 0, 0, 0];

regionTotals[0] = region1[0] + region1[1] + region1[2] + region1[3];
regionTotals[1] = region2[0] + region2[1] + region2[2] + region2[3];
regionTotals[2] = region3[0] + region3[1] + region3[2] + region3[3];
regionTotals[3] = region4[0] + region4[1] + region4[2] + region4[3];
regionTotals[4] = region5[0] + region5[1] + region5[2] + region5[3];

/*display total sales by region*/
document.write("<h2>Sales by Region</h2>");
let displayRegionTotals = "";
let countTwo = 1;
for (let j = 0; j < 5; j++) {
	document.write("Region " + countTwo + ": $" + regionTotals[j] + "\n");
	countTwo++;
}

/*calculate total sales of all regions*/
let totalSales = 0;
for (let k = 0; k < 5; k++) {
	totalSales += regionTotals[k];
}

document.write("<h2>Total Sales</h2>"); 
document.write(`$${totalSales}`);