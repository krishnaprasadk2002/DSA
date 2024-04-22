function findDupplicates(Array){
    let hashMap = {};
    let duplicates = [];

    Array.forEach(element => {
        if(hashMap[element]){
            if(!duplicates.includes(element)){
                duplicates.push(element);
            }
        }else{
            hashMap[element] = true;
        }
    });
    return duplicates;
}

const array = [1,2,3,4,5,2,6,7,3,4,9,1];
const duplicates = findDupplicates(array);
console.log("Duplicates", duplicates);
