chrome.runtime.onMessage.addListener(gotMessage);
var stuArray = [153, 154, 155, 156, 157, 158, 159, 160, 162, 164, 165, 166, 167, 168, 169, 170, 172, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 186, 189, 191, 192, 194, 195, 196, 197, 198, 200, 202, 203, 205, 206, 207, 208, 209, 210,213, 216, 217, 218, 220,221, 222, 223, 224, 225, 226, 227, 228, 234, 282]
var student = [
    
        {
            "N": "1",
            "Roll": "1901920100153",
            "Name": "MADHAV MISHRA",
            "P": "0"
        },
        {
            "N": "2",
            "Roll": "1901920100154",
            "Name": "MADHU ",
            "P": "0"
        },
        {
            "N": "3",
            "Roll": "1901920100155",
            "Name": "MADHU RAI",
            "P": "0"
        },
        {
            "N": "4",
            "Roll": "1901920100156",
            "Name": "MAHESH CHAND",
            "P": "0"
        },
        {
            "N": "5",
            "Roll": "1901920100157",
            "Name": "MANAN BHATEJA",
            "P": "0"
        },
        {
            "N": "6",
            "Roll": "1901920100158",
            "Name": "MANASVI  NEGI",
            "P": "0"
        },
        {
            "N": "7",
            "Roll": "1901920100159",
            "Name": "MANISH  KUMAR",
            "P": "0"
        },
        {
            "N": "8",
            "Roll": "1901920100160",
            "Name": "MANSHI GUPTA",
            "P": "0"
        },
        {
            "N": "9",
            "Roll": "1901920100162",
            "Name": "MAYANK  CHOUDHARY",
            "P": "0"
        },
        {
            "N": "10",
            "Roll": "1901920100164",
            "Name": "MEGH  ",
            "P": "0"
        },
        {
            "N": "11",
            "Roll": "1901920100165",
            "Name": "MEHAK VIJ",
            "P": "0"
        },
        {
            "N": "12",
            "Roll": "1901920100166",
            "Name": "MITRANJAY  KRISHNA",
            "P": "0"
        },
        {
            "N": "13",
            "Roll": "1901920100167",
            "Name": "MOHD  IKRAM",
            "P": "0"
        },
        {
            "N": "14",
            "Roll": "1901920100168",
            "Name": "MOHIT",
            "P": "0"
        },
        {
            "N": "15",
            "Roll": "1901920100169",
            "Name": "MOHIT  SAINI",
            "P": "0"
        },
        {
            "N": "16",
            "Roll": "1901920100170",
            "Name": "MOHIT SINGH",
            "P": "0"
        },
        {
            "N": "17",
            "Roll": "1901920100172",
            "Name": "MUDASSIR  HUSSAIN",
            "P": "0"
        },
        {
            "N": "18",
            "Roll": "1901920100174",
            "Name": "MUKUND  SHARMA",
            "P": "0"
        },
        {
            "N": "19",
            "Roll": "1901920100175",
            "Name": "NAMAN  MISHRA",
            "P": "0"
        },
        {
            "N": "20",
            "Roll": "1901920100176",
            "Name": "NAMAN  ",
            "P": "0"
        },
        {
            "N": "21",
            "Roll": "1901920100177",
            "Name": "NANDAN  GOEL",
            "P": "0"
        },
        {
            "N": "22",
            "Roll": "1901920100178",
            "Name": "NARENDRA PRATAP ",
            "P": "0"
        },
        {
            "N": "23",
            "Roll": "1901920100179",
            "Name": "NIKHIL  PARMAR",
            "P": "0"
        },
        {
            "N": "24",
            "Roll": "1901920100180",
            "Name": "NIKHIL  YADAV",
            "P": "0"
        },
        {
            "N": "25",
            "Roll": "1901920100181",
            "Name": "NIKITA KUMARI",
            "P": "0"
        },
        {
            "N": "26",
            "Roll": "1901920100182",
            "Name": "NISHA  SHISHODIA",
            "P": "0"
        },
        {
            "N": "27",
            "Roll": "1901920100183",
            "Name": "NOMAAN  ARSHAD",
            "P": "0"
        },
        {
            "N": "28",
            "Roll": "1901920100184",
            "Name": "OJAS  SAHU",
            "P": "0"
        },
        {
            "N": "29",
            "Roll": "1901920100186",
            "Name": "PANKAJ CHAUDHARY",
            "P": "0"
        },
        {
            "N": "30",
            "Roll": "1901920100189",
            "Name": "PRAGATI  SAHU",
            "P": "0"
        },
        {
            "N": "31",
            "Roll": "1901920100191",
            "Name": "PRAJJWAL  ",
            "P": "0"
        },
        {
            "N": "32",
            "Roll": "1901920100192",
            "Name": "PRAKHAR SHUKLA",
            "P": "0"
        },
        {
            "N": "33",
            "Roll": "1901920100194",
            "Name": "PRATEEK  CHAUDHARY",
            "P": "0"
        },
        {
            "N": "34",
            "Roll": "1901920100195",
            "Name": "PRATEEK  PRASEE",
            "P": "0"
        },
        {
            "N": "35",
            "Roll": "1901920100196",
            "Name": "PRATHAM  CHAUDHARY",
            "P": "0"
        },
        {
            "N": "36",
            "Roll": "1901920100197",
            "Name": "PRATIBHA GUPTA",
            "P": "0"
        },
        {
            "N": "37",
            "Roll": "1901920100198",
            "Name": "PRATYUSH RANJAN TRIPATHI",
            "P": "0"
        },
        {
            "N": "38",
            "Roll": "1901920100200",
            "Name": "PRIYA  ANAND",
            "P": "0"
        },
        {
            "N": "39",
            "Roll": "1901920100202",
            "Name": "PRIYANKA  ",
            "P": "0"
        },
        {
            "N": "40",
            "Roll": "1901920100203",
            "Name": "PRIYANSHU SRIVASTAVA",
            "P": "0"
        },
        {
            "N": "41",
            "Roll": "1901920100205",
            "Name": "PURU RAWAL",
            "P": "0"
        },
        {
            "N": "42",
            "Roll": "1901920100206",
            "Name": "PURVANSH  GARG",
            "P": "0"
        },
        {
            "N": "43",
            "Roll": "1901920100207",
            "Name": "QALBE  MEHDI",
            "P": "0"
        },
        {
            "N": "44",
            "Roll": "1901920100208",
            "Name": "RABINSH  KUMAR",
            "P": "0"
        },
        {
            "N": "45",
            "Roll": "1901920100209",
            "Name": "RADHA  VERMA",
            "P": "0"
        },
        {
            "N": "46",
            "Roll": "1901920100210",
            "Name": "RAGHAV AGGARWAL",
            "P": "0"
        },
        {
            "N": "47",
            "Roll": "1901920100213",
            "Name": "RAHUL  DANGRA",
            "P": "0"
        },
        {
            "N": "48",
            "Roll": "1901920100216",
            "Name": "RAHUL  ",
            "P": "0"
        },
        {
            "N": "49",
            "Roll": "1901920100217",
            "Name": "RAHUL  TIWARI",
            "P": "0"
        },
        {
            "N": "50",
            "Roll": "1901920100218",
            "Name": "RAJAT  DIXIT",
            "P": "0"
        },
        {
            "N": "51",
            "Roll": "1901920100220",
            "Name": "RAJAT  KUMAR",
            "P": "0"
        },
        {
            "N": "52",
            "Roll": "1901920100221",
            "Name": "RAJAT KUMAR UPADHYAY",
            "P": "0"
        },
        {
            "N": "53",
            "Roll": "1901920100222",
            "Name": "RAJAT  TOMAR",
            "P": "0"
        },
        {
            "N": "54",
            "Roll": "1901920100223",
            "Name": "RAJESH",
            "P": "0"
        },
        {
            "N": "55",
            "Roll": "1901920100224",
            "Name": "RAJNISH KUMAR ",
            "P": "0"
        },
        {
            "N": "56",
            "Roll": "1901920100225",
            "Name": "RAKESH  VERMA",
            "P": "0"
        },
        {
            "N": "57",
            "Roll": "1901920100226",
            "Name": "RATNESH  CHANDRA",
            "P": "0"
        },
        {
            "N": "58",
            "Roll": "1901920100227",
            "Name": "RHYTHM  SRIVASTAVA",
            "P": "0"
        },
        {
            "N": "59",
            "Roll": "1901920100228",
            "Name": "RISHAB  GUPTA",
            "P": "0"
        },
        {
            "N": "60",
            "Roll": "1901920100234",
            "Name": "RISHABH  ",
            "P": "0"
        },
        {
            "N": "61",
            "Roll": "1901920100282",
            "Name": "SOMYA AGGARWAL",
            "P": "0"
        }
    
]
let binarySearch = function (x) {
   
    let start=0, end=stuArray.length-1;
          
    // Iterate while start not meets end
    while (start<=end){
  
        // Find the mid index
        let mid=Math.floor((start + end)/2);
   
        // If element is present at mid, return True
        if (stuArray[mid]===x) return mid;
  
        // Else look in left or right half accordingly
        else if (stuArray[mid] < x) 
             start = mid + 1;
        else
             end = mid - 1;
    }
   
    return -1;
}
function getFormattedTime() {
	var today = new Date();
	var y = today.getFullYear();
	// JavaScript months are 0-based.
	var m = today.getMonth() + 1;
	var d = today.getDate();
	var h = today.getHours();
	var mi = today.getMinutes();

	return d + '/' + m + '/' + y + ' #time ' + h + ':' + mi;
}

console.save = function(data, filename) {
	// console.log(data[0]);
	if (data.length == 0) {
		alert('Open message/chatBox first or the messages are empty, then proceed. Thanks!');
		return;
	}

	if (!filename) filename = getFormattedTime() + '.txt';
	let extractData = [];
    // let s = '1901920100';
    let j = 1;
	for (let i = 0; i < data.length; i++) {
		// if (data[i].includes(s)) {
        var stringArray = data[i].match(/1901920100\d{3}/);
        
        console.log("up->",stringArray);
        if (stringArray != null) {
            console.log("low->>",stringArray);
            var key = parseInt(stringArray[0].slice(10, 14));
            var pos = binarySearch(key);
            if (pos != -1 && student[pos]["P"] != "1") {
                student[pos]["P"] = "1";
                present += 1
            }
            
        }
        
		// }
    }
    var present = 0;
    var absent = 0;
    for (let j = 0; j < student.length; j++){
        var stu = "";
        if (student[j]["P"] == "1") {
            stu += `${student[j]["N"]}->${student[j]["Roll"]} ${student[j]["Name"]} (Present)`;
            present += 1;
        } else {
            stu += `${student[j]["N"]}->${ student[j]["Roll"]} ${student[j]["Name"]} (Absent)`
            absent += 1;
        }
        if(stu.length != 0)
        extractData.push(stu);
    }
    extractData.splice(0, 0, `Total absent - ${absent}, Total Present - ${present}`);

	let textFile = new Blob([ extractData.join(',\n') ], { type: 'text/plain', endings: 'native' }),
		e = document.createEvent('MouseEvents'),
		a = document.createElement('a');

	a.download = filename;
	a.href = window.URL.createObjectURL(textFile);
	a.dataset.downloadurl = [ 'text/plain', a.download, a.href ].join(':');
	e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	a.dispatchEvent(e);
};

function gotMessage(message, sender, response) {
	let ms = [];
	if (message.text === 'hello') {
		let name = document.getElementsByClassName('oIy2qc');
		console.log(name);
		for (let i = 0; i < name.length; i++) {
			let j = i;
			ms.push(name[i].outerText);
		}
		console.save(ms);
	}
}
