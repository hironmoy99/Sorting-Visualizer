// let array = [];
// let speed = 1000;
// let isPaused = false;

// const swapSound = new Audio("https://www.fesliyanstudios.com/play-mp3/438");
// const completeSound = new Audio("https://www.fesliyanstudios.com/play-mp3/439");

// document.addEventListener("DOMContentLoaded", () => {
//     generateArray();
// });

// function generateArray() {
//     const size = document.getElementById("array-size").value || 10;
//     const values = document.getElementById("array-values").value;
//     array = values ? values.split(",").map(Number) : Array.from({ length: size }, () => Math.floor(Math.random() * 100));
//     displayArray();
// }

// function displayArray() {
//     const container = document.getElementById("array-container");
//     container.innerHTML = "";
//     array.forEach((value) => {
//         const bar = document.createElement("div");
//         bar.style.height = `${value * 3}px`;
//         bar.classList.add("bar");
//         bar.innerText = value;
//         container.appendChild(bar);
//     });
// }

// function updateSpeed(newSpeed) {
//     speed = 1510 - newSpeed;
// }

// function togglePause() {
//     isPaused = !isPaused;
// }

// async function startSorting() {
//     const algorithm = document.getElementById("algorithm").value;
//     if (algorithm === "bubble") await bubbleSort();
//     else if (algorithm === "selection") await selectionSort();
//     else if (algorithm === "insertion") await insertionSort();
//     else if (algorithm === "merge") await mergeSort(0, array.length - 1);
//     else if (algorithm === "quick") await quickSort(0, array.length - 1);
//     else if (algorithm === "heap") await heapSort();
//     completeSound.play();
//     displayArray();
// }

// async function swapBars(i, j) {
//     [array[i], array[j]] = [array[j], array[i]];
//     displayArray();
//     swapSound.play();
//     await sleep(speed);
// }

// async function bubbleSort() {
//     let n = array.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 await swapBars(j, j + 1);
//             }
//         }
//     }
// }

// async function selectionSort() {
//     for (let i = 0; i < array.length; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[j] < array[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         if (minIndex !== i) {
//             await swapBars(i, minIndex);
//         }
//     }
// }

// async function insertionSort() {
//     for (let i = 1; i < array.length; i++) {
//         let key = array[i];
//         let j = i - 1;
//         while (j >= 0 && array[j] > key) {
//             array[j + 1] = array[j];
//             j--;
//             displayArray();
//             await sleep(speed);
//         }
//         array[j + 1] = key;
//         displayArray();
//         await sleep(speed);
//     }
// }

// async function mergeSort(start, end) {
//     if (start >= end) return;
//     let mid = Math.floor((start + end) / 2);
//     await mergeSort(start, mid);
//     await mergeSort(mid + 1, end);
//     await merge(start, mid, end);
// }

// async function merge(start, mid, end) {
//     let left = array.slice(start, mid + 1);
//     let right = array.slice(mid + 1, end + 1);
//     let i = 0, j = 0, k = start;
//     while (i < left.length && j < right.length) {
//         if (left[i] <= right[j]) {
//             array[k++] = left[i++];
//         } else {
//             array[k++] = right[j++];
//         }
//         displayArray();
//         await sleep(speed);
//     }
//     while (i < left.length) {
//         array[k++] = left[i++];
//         displayArray();
//         await sleep(speed);
//     }
//     while (j < right.length) {
//         array[k++] = right[j++];
//         displayArray();
//         await sleep(speed);
//     }
// }

// async function quickSort(start, end) {
//     if (start >= end) return;
//     let pivotIndex = await partition(start, end);
//     await quickSort(start, pivotIndex - 1);
//     await quickSort(pivotIndex + 1, end);
// }

// async function partition(start, end) {
//     let pivot = array[end];
//     let i = start - 1;
//     for (let j = start; j < end; j++) {
//         if (array[j] < pivot) {
//             i++;
//             await swapBars(i, j);
//         }
//     }
//     await swapBars(i + 1, end);
//     return i + 1;
// }

// async function heapSort() {
//     for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
//         await heapify(array.length, i);
//     }
//     for (let i = array.length - 1; i > 0; i--) {
//         await swapBars(0, i);
//         await heapify(i, 0);
//     }
// }

// async function heapify(n, i) {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;
//     if (left < n && array[left] > array[largest]) largest = left;
//     if (right < n && array[right] > array[largest]) largest = right;
//     if (largest !== i) {
//         await swapBars(i, largest);
//         await heapify(n, largest);
//     }
// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }



let array = [];
let speed = 1000;
let isPaused = false;

const swapSound = new Audio("https://www.fesliyanstudios.com/play-mp3/438");
const completeSound = new Audio("https://www.fesliyanstudios.com/play-mp3/439");

document.addEventListener("DOMContentLoaded", () => {
    generateArray();
});

function generateArray() {
    const size = document.getElementById("array-size").value || 10;
    const values = document.getElementById("array-values").value;
    array = values ? values.split(",").map(Number) : Array.from({ length: size }, () => Math.floor(Math.random() * 100));
    displayArray();
}

function displayArray() {
    const container = document.getElementById("array-container");
    container.innerHTML = "";
    array.forEach((value) => {
        const bar = document.createElement("div");
        bar.style.height = `${value * 3}px`;
        bar.classList.add("bar");
        bar.innerText = value;
        container.appendChild(bar);
    });
}

function updateSpeed(newSpeed) {
    speed = 1510 - newSpeed;
}

function togglePause() {
    isPaused = !isPaused;
}

async function startSorting() {
    const algorithm = document.getElementById("algorithm").value;
    if (algorithm === "bubble") await bubbleSort();
    else if (algorithm === "selection") await selectionSort();
    else if (algorithm === "insertion") await insertionSort();
    else if (algorithm === "merge") await mergeSort(0, array.length - 1);
    else if (algorithm === "quick") await quickSort(0, array.length - 1);
    else if (algorithm === "heap") await heapSort();
    completeSound.play();
    displayArray();
}

async function swapBars(i, j) {
    let bars = document.getElementsByClassName("bar");
    bars[i].style.backgroundColor = "yellow";
    bars[j].style.backgroundColor = "yellow";
    await sleep(speed / 2);

    [array[i], array[j]] = [array[j], array[i]];
    displayArray();
    swapSound.play();

    await sleep(speed / 2);
    bars = document.getElementsByClassName("bar");
    bars[i].style.backgroundColor = "rgb(246, 65, 108)";
    bars[j].style.backgroundColor = "rgb(246, 65, 108)";
}

async function bubbleSort() {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                await swapBars(j, j + 1);
            }
        }
    }
}

async function selectionSort() {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            await swapBars(i, minIndex);
        }
    }
}

async function insertionSort() {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
            displayArray();
            await sleep(speed);
        }
        array[j + 1] = key;
        displayArray();
        await sleep(speed);
    }
}

async function mergeSort(start, end) {
    if (start >= end) return;
    let mid = Math.floor((start + end) / 2);
    await mergeSort(start, mid);
    await mergeSort(mid + 1, end);
    await merge(start, mid, end);
}

async function merge(start, mid, end) {
    let left = array.slice(start, mid + 1);
    let right = array.slice(mid + 1, end + 1);
    let i = 0, j = 0, k = start;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            array[k++] = left[i++];
        } else {
            array[k++] = right[j++];
        }
        displayArray();
        await sleep(speed);
    }
    while (i < left.length) {
        array[k++] = left[i++];
        displayArray();
        await sleep(speed);
    }
    while (j < right.length) {
        array[k++] = right[j++];
        displayArray();
        await sleep(speed);
    }
}

async function quickSort(start, end) {
    if (start >= end) return;
    let pivotIndex = await partition(start, end);
    await quickSort(start, pivotIndex - 1);
    await quickSort(pivotIndex + 1, end);
}

async function partition(start, end) {
    let pivot = array[end];
    let i = start - 1;
    for (let j = start; j < end; j++) {
        if (array[j] < pivot) {
            i++;
            await swapBars(i, j);
        }
    }
    await swapBars(i + 1, end);
    return i + 1;
}

async function heapSort() {
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
        await heapify(array.length, i);
    }
    for (let i = array.length - 1; i > 0; i--) {
        await swapBars(0, i);
        await heapify(i, 0);
    }
}

async function heapify(n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && array[left] > array[largest]) largest = left;
    if (right < n && array[right] > array[largest]) largest = right;
    if (largest !== i) {
        await swapBars(i, largest);
        await heapify(n, largest);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
