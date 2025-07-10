export function filterByKey(data , key , value){
    return data.filter((item) => {
        return item[key].toLowerCase() === value.toLowerCase();
    });
}